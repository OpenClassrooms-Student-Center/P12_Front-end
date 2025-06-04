import styled from "styled-components";
import PropTypes from "prop-types";

const CalendarInput = styled.input`
  max-width: 200px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    outline: 2px solid #0078d4;
  }
`;

export function Calendar({ id, value, onChange, required = true }) {
  return (
    <CalendarInput
      id={id}
      type="date"
      value={value}
      onChange={onChange}
      required={required}
      aria-required="true"
    />
);
}

Calendar.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
