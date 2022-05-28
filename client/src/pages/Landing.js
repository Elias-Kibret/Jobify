import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt="jobify-logo" className="logo"/>
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
                 <button className='btn btn-hero'> Login/Register</button>
             </div>
             <img src={main} alt="Job hunt" className="img main-img " />
          </div>

    </main>

  )
}

export default Landing