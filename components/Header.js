import React, { useEffect, useRef } from 'react'

//styles components
import { HeaderNav, Logo, Menu } from '../styles/headerStyles'
import { Container, Flex } from '../styles/globalStyles'

import Link from 'next/link'

//context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

import useElementPosition from "../hooks/useElementPosition"

const Header = ({
  onCursor,
  setHamburgerPosition,
  setToggleMenu,
  toggleMenu, }) => {

  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const hamburger = useRef(null)
  const position = useElementPosition(hamburger)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: 'TOGGLE_THEME', theme: "light" })
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: "dark" })
    }
  }

  const menuHover = () => {
    onCursor("locked")
    setHamburgerPosition({ x: position.x, y: position.y + 72 })
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme]);



  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor('hover')}
            onMouseLeave={onCursor}
          >
            <Link href="/"><a>RADI</a></Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
            ></span>
            <Link href="/"><a>Doble C</a></Link>
          </Logo>
          <Menu
            onClick={() => setToggleMenu(!toggleMenu)}
            ref={hamburger}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav >
  )
}
export default Header