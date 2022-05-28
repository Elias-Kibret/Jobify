import logo from '../assets/images/logo.svg'
import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/Testing'
import { NewLogo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <NewLogo/>
        </nav>
          <div className='container page'>
             <div className="info">
                 <h1>
                     Job <span>tracking </span>app 
                 </h1>
                 <p>
                 I'm baby ethical keytar swag chambray literally aesthetic, 
                 you probably haven't heard of them VHS stumptown portland.
                 Farm-to-table tilde narwhal pok pok, pour-over butcher
                 gluten-free vice cray brunch 90's 
                 </p>
                 <Link to='/register' className='btn btn-hero'> Login / Register</Link>
             </div>
             <div className='main-img-div'>
             <img src={main} alt="Job hunt" className="img main-img " />
             </div>
            
          </div>

    </Wrapper>

  )
}

export default Landing