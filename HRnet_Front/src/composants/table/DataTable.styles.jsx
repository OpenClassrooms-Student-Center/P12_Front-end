import { styled } from "styled-components";

// Styled components pour le tableau
export const TableContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 0.9em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: #009879;
  color: white;
  text-align: left;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
  }

  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

export const TableCell = styled.td`
  padding: 12px 15px;
`;

export const TableHeaderCell = styled.th`
  padding: 12px 15px;
  cursor: pointer;

  &:hover {
    background-color: #008068;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const PageInfo = styled.span``;

export const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? "#009879" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  border-radius: 3px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const SearchInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
`;

export const PageSizeSelector = styled.select`
  padding: 5px;
  border-radius: 4px;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  margin: 20px 0;
`;