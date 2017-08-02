// @flow

import $ from 'jquery'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import Logo from './logo'
import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
} from '../routes'

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const Nav = () =>
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top" style={{ backgroundColor: 'white', borderBottomStyle: 'solid', borderBottomColor: 'rgba(0,0,0,.5)', borderBottomWidth: '2px' }} >
    <button className="navbar-toggler navbar-toggler-right" type="button" role="button" data-toggle="collapse" data-target=".js-navbar-collapse" >
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand d-flex mr-auto " to={HOME_PAGE_ROUTE} style={{ width: '34%', outline: 'none' }} >
      <Logo />
    </Link>
    <div className="js-navbar-collapse collapse navbar-collapse navBarLinks justify-content-center" >
      <div className=" responsiveNavPages mx-auto justify-content-center">
        <ul
          className=" test navbar-nav" style={{ fontSize: '1.25em' }}
        >
          {[
            { route: HOME_PAGE_ROUTE, label: 'Home' },
            { route: ABOUT_PAGE_ROUTE, label: 'About' },
            { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Portfolio' },
          ].map(link => (
            <li className="nav-item" style={{ paddingLeft: '20px', paddingRight: '30px' }} key={link.route} >
              <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'black', borderStyle: 'solid', borderColor: 'black', borderBottomWidth: '2px' }} exact onClick={handleNavLinkClick} >{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className=" responsiveNavLinks ml-auto mr-3 justify-content-end">
        <ul className=" test nav navbar-nav" >
          <li className="nav-item" >
            <a className="nav-link" href="https://www.linkedin.com/in/sam-smith-844755125/" >
              <FontAwesome
                name="linkedin-square"
                size="2x"
              />
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="https://github.com/sbs863" >
              <FontAwesome
                name="github"
                size="2x"
              />
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="https://twitter.com/MithTrey" >
              <FontAwesome
                name="twitter"
                size="2x"
              />
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="https://www.instagram.com/moreished/" >
              <FontAwesome
                name="instagram"
                size="2x"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

export default Nav
