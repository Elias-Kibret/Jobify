import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import NewLogo from './NewLogo'

 import NavLinks from './NavLinks'

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
          <NavLinks toggleSidebar={toggleSidebar} />

        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
