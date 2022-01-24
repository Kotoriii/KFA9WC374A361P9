import React, { useState, useEffect } from 'react';

import { Form } from "react-bootstrap";

import OrganizationAutocomplete from './components/OrganizationAutocomplete.js'

import './styles/App.css'

const githubURL = 'https://api.github.com'

function App() {
  const [selectedOrg, setOrgSelection] = useState([]);
  const [orgText, setOrgText] = useState('');

  const [repoFilter, setRepoFilter] = useState('');

  const fetchOrgs = async () => {
    // get the data from the api
    const response = await fetch(`${githubUrl}/orgs/${orgText}`);
    // convert the data to json
    const json = await response.json();

    // set state with the result
    setData(json);
  }

  useEffect(() => {
    if (orgText.length > 2) {

    }
  }, [orgText]);

  return (
    <div className="App">
      <Form>
        <Form.Group>
          <OrganizationAutocomplete setInput={setOrgText} selected={selectedOrg} setSelection={setOrgSelection} />
        </Form.Group>
        {selectedOrg.length > 0 &&
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
