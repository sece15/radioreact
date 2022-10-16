
import Image from "next/image"
//styled component
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"
import styles from "../styles/AudioPlayer.module.css"
//componentes
import Header from "./Header"
import Footer from "./Footer"
import Cursor from "../components/CustomCursor"
import { AudioPlayer } from '../components/AudioPlayer'
import { useState } from "react"

//context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px; 
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
}
`


const Layout = ({ children }) => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  })

  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()


  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      <main>{children}</main>
      <main className={styles.main}>
        <AudioPlayer onCursor={onCursor} />
      </main>
      <div
        onCursor={onCursor}
        className={styles.img}>
        <Image
          onMouseEnter={() => onCursor('hover')}
          onMouseLeave={onCursor}
          src={"/images/radiodoblec.png"} width={550} height={250} />
      </div>
      <Footer
        onCursor={onCursor}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
    </ThemeProvider >
  )
}

export default Layout