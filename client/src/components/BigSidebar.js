import Wrapper from "../assets/wrappers/BigSidebar"
import { useAppContext } from "../context/appContext"
import NewLogo from "./NewLogo"
import NavLinks from "./NavLinks"
const BigSidebar = () => {
  const {showSideBar,toggleSidebar}=useAppContext()
  return (
     <Wrapper>
         <div className={showSideBar?"sidebar-container show-sidebar":"sidebar-container"}>
            <div className="container">
              <header>
                <NewLogo/>
              </header>
              <NavLinks />
            </div>
         </div>
     </Wrapper>
  )
}

export default BigSidebar