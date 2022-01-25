import React, { useState, useEffect } from 'react';

import { Form } from "react-bootstrap";

import OrganizationAutocomplete from './components/OrganizationAutocomplete.js'

import './styles/App.css'

function App() {
  const [orgSearchText, setOrgSearchText] = useState('');
  const [orgOptions, setOrgOptions] = useState([]);
  const [selectedOrg, setOrgSelection] = useState([]);
  const [orgToFetch, setOrgToFetch] = useState()

  const [repoFilter, setRepoFilter] = useState('');

  const fetchOrgsFromSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/users?type=org&q=${orgText}`);
      const json = await response.json();

      extractOrgNames(json)
  
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (orgSearchText.length > 2) {
      fetchOrgsFromSearch()
    }
  }, [orgSearchText]);

  useEffect(() => {
    setOrgToFetch(selectedOrg) // add property
  }, [selectedOrg]);

  return (
    <div className="App">
      <Form>
        <Form.Group>
          <OrganizationAutocomplete setInput={setOrgSearchText} selected={selectedOrg} setSelection={setOrgSelection} />
        </Form.Group>
        {orgToFetch.length > 0 &&
          <Form.Group>
            <Form.Label>Filter by repository</Form.Label>
            <Form.Control onChange={(event) => setRepoFilter(event.target.value)} placeholder="Repository Name" />
          </Form.Group>
        }
      </Form>
    </div>
  );
}

export default App;
