import Fotter from "../components/Fotter"
import Header from "../components/Header"
import Hero from "../components/Hero"

interface Props {
    children: React.ReactNode;
}
const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
      
      </Header>
      <Hero></Hero>
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Fotter></Fotter>
    </div>
  )
}

export default Layout
