import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding: 20px 50px;
`;

function Layout() {
  return (
      <LayoutContainer>
      <Navbar />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer/>
      </LayoutContainer>
  );
}

export { Layout };
