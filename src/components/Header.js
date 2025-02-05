import React from 'react'
import { Link } from 'react-router-dom'
import img from "../Assets/img/carousel-2.jpg"

const Header = () => {
  return (
    <div>
      <div class="container-fluid p-0 mb-5 bg-primary">
    <div class="position-relative">
    <div class="position-relative">
    <img className="image-fluid full-screen-image" src={img} alt="" />
    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(0, 0, 0, .2)'}}>
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                                    <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <Link to="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                                    <Link to="/classes" class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Header
