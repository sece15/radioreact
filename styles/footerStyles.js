import styled from 'styled-components'

export const MarqueeW =
    styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 160px;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    
`

export const Marquee =
    styled.div`
    position: absolute;
    display: block;
    margin: auto auto;
    white - space: nowrap;
    overflow: hidden;
    min - width: 100 %;
    height: 100%;
    span{
        color:${props => props.theme.text};
        display: inline-block;
        padding-left: 100%;
        font-family: 'poppinsbold';
        text-align: center;
        -webkit-text-stroke: 1px;
        white-space: nowrap;
        min-width: 100%;
        height: 100%;
        line-height: 140px;
        font-size: 85px;
        animation: marquee 10s linear infinite;
        @keyframes marquee {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
}
    }
    
`

