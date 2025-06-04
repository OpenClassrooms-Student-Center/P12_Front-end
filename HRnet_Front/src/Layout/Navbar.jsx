import styled from "styled-components";
import HRnet from "../assets/HRnet.png";
import { NavLink, useLocation } from "react-router-dom";

const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
`;

const LogoContainer = styled(NavLink)`
  display: flex;
  padding: 0;
  margin: 0;
`;
const Logo = styled.img`
  width: 150px;
  height: 150px;
  aspect-ratio: 1/1;
`;

const NavContainer = styled.div`
  margin-right: 70px;
`;

const NavStyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: #007bff;
  }
`;

export function Navbar() {
  const location = useLocation();
  const isOnEmployeePage = location.pathname === "/employee-list";

  return (
    <MainNav>
      <LogoContainer to="/">
        <Logo src={HRnet} alt="HRnet" />
      </LogoContainer>
      <NavContainer>
        {isOnEmployeePage ? (
          <NavStyledLink to="/">Create Employee</NavStyledLink>
        ) : (
          <NavStyledLink to="/employee-list">
            View Current Employees
          </NavStyledLink>
        )}
      </NavContainer>
    </MainNav>
  );
}
