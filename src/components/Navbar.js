import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <Link to="/" class="navbar-brand">
                <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"></i>Kider</h1>
            </Link>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                    <Link to="/about" class="nav-item nav-link">About Us</Link>
                    <Link to="/classes" class="nav-item nav-link">Classes</Link>
                    <div class="nav-item dropdown">
                        <Link to="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <Link to="/facilities" class="dropdown-item">School Facilities</Link>
                            <Link to="/teachers" class="dropdown-item">Teachers</Link>
                            <Link to="/appointment" class="dropdown-item">Make Appointment</Link>
                        </div>
                    </div>
                    <Link to="/contactus" class="nav-item nav-link">Contact Us</Link>
                </div>
                <Link to="" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i class="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
