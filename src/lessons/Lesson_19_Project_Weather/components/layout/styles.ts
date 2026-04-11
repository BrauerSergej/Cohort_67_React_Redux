import styled from "@emotion/styled"
import image from "../../assets/image.png"

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Background = styled.div`
  position: fixed;
  inset: 0;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;
`