import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  max-width: 200px;
  height: 36px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  
  &:focus {
    outline: 2px solid #0078d4;
    border-color: transparent;
  }
`;

export function SelectInput({ 
  id, 
  value, 
  onChange, 
  options, 
  placeholder = "Select an option",
  required = false 
}) {
  return (
    <StyledSelect
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      aria-required={required.toString()}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.abbreviation} value={option.abbreviation}>
          {option.name}
        </option>
      ))}
    </StyledSelect>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      abbreviation: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};