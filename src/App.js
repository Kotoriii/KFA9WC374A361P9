import React, { useState } from 'react';

import { Form } from "react-bootstrap";

import OrganizationAutocomplete from './components/OrganizationAutocomplete.js'

import './styles/App.css'

function App() {
  const [selectedOrg, setOrgSelection] = useState([]);
  const [orgText, setOrgText] = useState('');

  const [repoFilter, setRepoFilter] = useState('');

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
