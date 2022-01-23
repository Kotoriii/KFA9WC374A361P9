import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const OrganizationAutocomplete = (props) => {
  const [selected, setSelection] = useState('');
  const [text, setText] = useState('');

  return (
    <Form.Group>
      <Typeahead
        // onChange={(selected) => {
        //   setSelection(selected);
        // }}
        onInputChange={(text) => {
          setText(text);
        }}
        id="organization"
        options={["Doge", "Coin"]}
        // selected={selected}
      />
    </Form.Group>
  );
}

export default OrganizationAutocomplete;