import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const OrganizationAutocomplete = ({options, selected, setInput, setSelection}) => {
  return (
    <Typeahead
      onChange={(selected) => {
        setSelection(selected);
      }}
      onInputChange={(text) => {
        setInput(text);
      }}
      labelKey="login"
      id="organization"
      options={options}
      selected={selected}
    />
  );
}

export default OrganizationAutocomplete;