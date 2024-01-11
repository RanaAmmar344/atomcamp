import React from 'react'
import { AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';

const Footer = () => {
  return (
    <>
    <footer className="py-5 custom-footer px-4  mt-5 text-white mx-5">
    <div className="row  ">

    <div className="col-md-4 offset-md-1  mx-3">
      <img src='https://www.atomcamp.com/wp-content/uploads/2022/08/atomcamp-logo.png' alt="Bootstrap "  className="change-color mb-2"  width="200" height="40"/>
      <p className='footer-text mt-3'> Suspendisse quis sodales nunc. Sed ligula enim, mattis ut sem id, mollis sagittis sapien.</p>
        <form className='mt-3'>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="cvjiek"/>
            <button className="btn btn-primary" type="button" fdprocessedid="7fj1yf">Subscribe</button>
          </div>
        </form>
      </div>
      <div className="col-6 col-md-2 mb-3 mx-4 ">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

     
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved by Rana Ammar.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiFillFacebook className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiOutlineTwitter className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiOutlineInstagram className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><BiLogoGmail className='footer-icon'/></svg></a></li>
      </ul>
    </div>
  </footer>
      
    </>
  )
}

export default Footer
