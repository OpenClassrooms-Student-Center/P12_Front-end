import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  gap: 10px;
  border-top: 1px solid grey;
`;
const StyledText = styled.div`
font-weight: bold;
`;

export function Footer() {
  return (
    <FooterContainer>
      <StyledText>© 2025 Wealth Health. All rights reserved.</StyledText>
      <StyledText>HRnet - Employee Management System</StyledText>
    </FooterContainer>
  );
}
