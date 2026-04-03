// import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routesthighttech";
import {
  LayoutWrapper,
  Header,
  LogoContainer,
  Main,
  NavigationsContainer,
  Title,
  HeaderLink,
  getActiveStyles,
  LogoIcon,
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <LogoContainer>
          <LogoIcon />
          <Title>HiTech</Title>
        </LogoContainer>
        <NavigationsContainer>
          <HeaderLink style={getActiveStyles} to={ROUTES.CREATE_EMPLOYEE}>
            Create Employee
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.EMPLOYEES}>
            Employees
          </HeaderLink>
        </NavigationsContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default Layout;
