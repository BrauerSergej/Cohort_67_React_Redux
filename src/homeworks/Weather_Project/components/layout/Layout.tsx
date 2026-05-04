import { LayoutProps } from "./types"
import { Background, LayoutWrapper, Main } from "./styles"
import Header from "../header/Header"

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Background/>
      <Header />
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
