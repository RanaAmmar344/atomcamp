import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-5 ">
          <img className='nav-img'  src='https://www.atomcamp.com/wp-content/uploads/2022/08/atomcamp-logo.png' height={50} width={170}  href="#"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav  fw-bold fs-6 p-3 ">
              <Link className="nav-link mx-3 " aria-current="page" to="/">Home</Link>
              <Link className="nav-link mx-3 " aria-current="page" to="/about">About Us</Link>
              <Link className="nav-link mx-3" to="/courses">Courses</Link>
              
              <Link className="nav-link mx-3" to="publications">Publications</Link>
              <Link className="nav-link mx-3" to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
