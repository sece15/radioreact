import React from 'react'
import { MarqueeW, Marquee, MarqueDos } from "../styles/footerStyles"
const Footer = ({ children }) => {
    return (

        <MarqueeW>
            <Marquee>
                <span>Focking Good Shit Focking Good Shit&nbsp;&nbsp;&nbsp;</span>
            </Marquee>
        </MarqueeW>
    )
}

export default Footer