import { states } from "../../data/statesData";
import { departments } from "../../data/departmentsData";
import {
  GlobalStyle,
  PageContainer,
  Title,
  Form,
  InputWrapper,
  Label,
  Input,
  Fieldset,
  Legend,
  Button,
} from "./CreateEmployee.styles";
import { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeesSlice";
import { Helmet } from "react-helmet-async";
import Modal from "kurts350-modal-component";
import { Calendar } from "../../composants/calendar/Calendar";
import { SelectInput } from "../../composants/selectInput/SelectInput";

function CreateEmployee() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Conservation de votre structure employee exacte
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    hireDate: "",
    department: "",
    birthDate: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setEmployee({ ...employee, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addEmployee({
        ...employee,
        id: Date.now().toString(), // Ajout d'un ID unique
      })
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmployee({
      firstName: "",
      lastName: "",
      hireDate: "",
      department: "",
      birthDate: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  const fullName = `${employee.firstName} ${employee.lastName}`.trim();
  const successMessage = fullName
    ? `${fullName} has been added successfully to the employees.`
    : `Employee has been created successfully.`;

  return (
    <PageContainer>
      {/* SEO improvements */}
      <GlobalStyle />
      <Helmet>
        <title>Create Employee | HRnet</title>
        <meta
          name="description"
          content="Create a new employee record in the HRnet employee management system."
        />
      </Helmet>

      <Title>Create Employee</Title>
      <Form onSubmit={handleSubmit} aria-labelledby="form-heading">
        <h2 id="form-heading" className="sr-only">
          Employee Information Form
        </h2>

        <InputWrapper>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            value={employee.firstName}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            value={employee.lastName}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="birthDate">Date of Birth</Label>
          <Calendar
            id="birthDate"
            value={employee.birthDate}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="hireDate">Start Date</Label>
          <Calendar
            id="hireDate"
            value={employee.hireDate}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </InputWrapper>

        <Fieldset>
          <Legend>Address</Legend>

          <InputWrapper>
            <Label htmlFor="address">Street</Label>
            <Input
              id="address"
              type="text"
              value={employee.address}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              value={employee.city}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </InputWrapper>

          <InputWrapper>
            <InputWrapper>
              <Label htmlFor="state">State</Label>
              <SelectInput
                id="state"
                value={employee.state}
                onChange={handleChange}
                options={states}
                placeholder="Select State"
                required
              />
            </InputWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              id="zipCode"
              type="number"
              value={employee.zipCode}
              onChange={handleChange}
              required
              aria-required="true"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </InputWrapper>
        </Fieldset>

        <InputWrapper>
          <Label htmlFor="department">Department</Label>
          <SelectInput
            id="department"
            value={employee.department}
            onChange={handleChange}
            options={departments}
            placeholder="Select Department"
            required
          />
        </InputWrapper>

        <Button type="submit" aria-label="Save employee information">
          Save
        </Button>
      </Form>

      {/* Utilisation du nouveau Modal avec la même interface */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Success!" closeText="Close">
        <p>{successMessage}</p>
      </Modal>
    </PageContainer>
  );
}

// Optimisation des performances avec memo
export default memo(CreateEmployee);
