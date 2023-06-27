import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './navBarElements.js'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <h1>Yufan</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/projects" >
                Projects
            </NavLink>
            <NavLink to="/resume" >
                Resume
            </NavLink>
            <NavLink to="/other" >
                Other
            </NavLink>
        </NavMenu>
        <NavLink to="/">
            <h1>Yufan</h1>
        </NavLink>
      </Nav>
    </>
  )
}

export default NavBar
