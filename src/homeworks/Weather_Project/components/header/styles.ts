import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { NavLink, NavLinkRenderProps } from "react-router-dom"

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: sticky;
  background:
    linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  padding: 0 85px;
  backdrop-filter: blur(17.8px);
  border-bottom: 1px solid rgba(210, 210, 210, 1);
  top: 0;
  z-index: 100;
`

const baseTitleStyles = css`
  font-family: "Inter", sans-serif;
  line-height: 100%;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  transition: all 0.3s ease;
`

export const HeaderTitle = styled.h1`
  ${baseTitleStyles}
  font-weight: 700;
  font-size: 24px;
`
export const HomeLink = styled(NavLink)`
  ${baseTitleStyles}
  font-size: 20px;
`
export const WeatherLink = styled(NavLink)`
  ${baseTitleStyles}
  font-size: 20px;
`
export const PagesContainer = styled.div`
  display: flex;
  gap: 70px;
`
export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? 700 : 400,
})
