import Wrapper from '../assets/wrappers/Navbar'
import {FaAlignLeft ,FaUserCircle,FaCaretDown} from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './NewLogo'
import NewLogo from './NewLogo'
import { useState } from 'react'
const Navbar = () => {
    const [showLogout ,setShowLogout]=useState(false)
    const {user,toggleSidebar,logout}=useAppContext()
    
  return (
    <Wrapper>
        
        <div className='nav-center'>
            <button className='toggle-btn' onClick={()=>{
                console.log('toggle sidebar')
            }}>
             <FaAlignLeft/>
            </button>
            <div>
                <NewLogo/>
                <h3 className='logo-text'>Dashboard</h3>
            </div>
            <div className='btn-container' onClick={()=>{setShowLogout(!showLogout)}}>
                <button type='button' className='btn' onClick={toggleSidebar}>
                      <FaUserCircle/>
                      {user?.name}
                      <FaCaretDown/>
                </button>
                <div className={showLogout?'dropdown show-dropdown':'dropdown'} 
                >
                   <button type="button" className='dropdown-btn' onClick={logout} >
                       logout
                   </button>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Navbar