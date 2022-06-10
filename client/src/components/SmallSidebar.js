import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import NewLogo from './NewLogo'
import { NavLink } from 'react-router-dom'
import { links } from '../utils/links'
// import NavLinks from './NavLinks'

const SmallSidebar = () => {
   const { showSideBar, toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <NewLogo />
          </header>
          {/* <NavLinks toggleSidebar={toggleSidebar} /> */}
          <div className='nav-links'>
            {links.map((link)=>{ 
              const {text,path,id,icons}=link
              return <NavLink to={path} key={id} onClick={toggleSidebar}
              className={({isActive})=>isActive?'nav-link active':'nav-link'}
              >
                <span className='icon'>{icons}</span>
                {text}
              </NavLink>
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
