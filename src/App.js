import React, { useState, useEffect, useCallback } from 'react';
import { Form } from "react-bootstrap";
import debounce from 'lodash/debounce';

import OrganizationAutocomplete from './components/OrganizationAutocomplete.js'
import RepositoryTable from './components/RepositoryTable.js'

import './styles/App.css'

function App() {
  const [orgSearchText, setOrgSearchText] = useState('');
  const [orgOptions, setOrgOptions] = useState([]);
  const [selectedOrg, setOrgSelection] = useState([]);
  const [orgToFetchRepos, setOrgToFetchRepos] = useState('')

  const [repositories, setRepositories] = useState([])
  const [repoFilter, setRepoFilter] = useState('');

  // use debounce to only fetch orgs after 1000ms of not more typing
  const fetchOrgsFromSearch = useCallback(debounce(async function () {
    try {
      const response = await fetch(`https://api.github.com/search/users?type=org&q=${orgSearchText}`);
      const json = await response.json();
  
      setOrgOptions(json.items);
    } catch (error) {
      // add to error state for form validation
      console.log(error);
    }
  }, 1000))

  const fetchReposFromSelectedOrg = async () => {
    try {
      const response = await fetch(orgToFetchRepos);
      const json = await response.json();
  
      setRepositories(json);
    } catch (error) {
      // add to error state for form validation
      console.log(error);
    }
  }

  useEffect(() => {
    // only start autocomplete if more than two letters in input
    if (orgSearchText.length > 2) {
      fetchOrgsFromSearch()
    }
  }, [orgSearchText]);

  useEffect(() => {
    if (selectedOrg.length) {
      setOrgToFetchRepos(selectedOrg[0].repos_url)
    }
  }, [selectedOrg]);

  useEffect(() => {
    if (orgToFetchRepos) {
      fetchReposFromSelectedOrg()
    }
  }, [orgToFetchRepos]);

  return (
    <div className="App">
      <Form>
        <Form.Group>
          <Form.Label>Organization</Form.Label>
          <OrganizationAutocomplete setInput={setOrgSearchText} options={orgOptions} selected={selectedOrg} setSelection={setOrgSelection} />
        </Form.Group>
        {orgToFetchRepos.length > 0 &&
          <Form.Group>
            <Form.Label>Filter by repository</Form.Label>
            <Form.Control onChange={(event) => setRepoFilter(event.target.value)} placeholder="Repository Name" />
          </Form.Group>
        }
        {orgToFetchRepos.length > 0 &&
          <Form.Group>
            <Form.Label>Repositories</Form.Label>
            <RepositoryTable repositories={repositories} />
          </Form.Group>
        }
      </Form>
    </div>
  );
}

export default App;
