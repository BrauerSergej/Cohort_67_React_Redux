import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import { LoaderPinwheel } from "lucide-react";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(17, 34, 51);
`;

export const Header = styled.header`
  background: rgba(250, 249, 255, 1);
  height: 120px;
  width: 100%;
  border-bottom: 2px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  gap: 30px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 22px;
  color: rgba(0, 0, 0, 1);
  font-family: "Lato";
  font-weight: 700;
  line-height: 130%;
  text-decoration: none;
  white-space: nowrap;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  padding: 40px 20px;
`;

export const NavigationsContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin: 0;
`;

export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});

export const LogoIcon = styled(LoaderPinwheel)`
  width: 40px;
  height: 40px;
`;

export const Button = styled.button`
  width: 50px;
`