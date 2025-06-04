import { useMemo } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { selectEmployees } from "../store/employeesSlice";
import { DataTable } from "../composants/table/DataTable";
import { Helmet } from "react-helmet-async";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export function EmployeeList() {
  // Récupération des employés depuis le store Redux
  const employees = useSelector(selectEmployees);
  // Définition des colonnes
  const columns = useMemo(
    () => [
      {
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Hire Date",
        accessorKey: "hireDate",
      },
      {
        header: "Department",
        accessorKey: "department",
      },
      {
        header: "Date of Birth",
        accessorKey: "birthDate",
      },
      {
        header: "Address",
        accessorKey: "address",
      },
      {
        header: "City",
        accessorKey: "city",
      },
      {
        header: "State",
        accessorKey: "state",
      },
      {
        header: "Zip Code",
        accessorKey: "zipCode",
      },
    ],
    []
  );

  return (
    <PageContainer>
      <Helmet>
        <title>Current Employees | HRnet</title>
        <meta name="description" content="View and manage current employees in the HRnet system." />
      </Helmet>
      
      <Title>Current Employees</Title>
      
      <DataTable 
        data={employees}
        columns={columns}
        emptyMessage="No employees found. Please add employees from the home page."
        defaultPageSize={10}
        pageSizeOptions={[10, 20, 30, 40, 50]}
        showGlobalFilter={true}
        showPagination={true}
      />
    </PageContainer>
  );
}