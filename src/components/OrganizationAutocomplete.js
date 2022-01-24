import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const OrganizationAutocomplete = ({selected, setInput, setSelection}) => {
  return (
    <Typeahead
      onChange={(selected) => {
        setSelection(selected);
      }}
      onInputChange={(text) => {
        setInput(text);
      }}
      id="organization"
      options={["Doge", "Coin"]}
      selected={selected}
    />
  );
}

export default OrganizationAutocomplete;