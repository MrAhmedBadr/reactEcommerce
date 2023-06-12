import React from 'react'
import './Nav.css'






const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navo" style={{width : '100%'}}>
      <div className="container-fluid  " >
        <div className='left-nav'>
          <a href="/" className="navbar-brand ">Login</a>
          <a href="/" className="navbar-brand ">Register</a>
          <div className='icon'>
          <i className="fas fa-4"></i>
          <a className='cart' href='#'><i class="fab fa-opencart "></i></a>
          </div>
        </div>
        <div className='center-nav'>Pullet Market</div>
        

    
        <div className="collapse navbar-collapse nav-search" id="navbarSupportedContent"  >
          <form className="d-flex" role="search" >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav