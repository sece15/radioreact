import styled from 'styled-components'

export const AudioPlay =
    styled.div`
    --primary: ${props => props.theme.text};
    --secondary: ${props => props.theme.red};
    align-items: center;
    display: flex;
    width: 500px;
    height:0;
    button{
        
    }

`
export const CurrentTime =
    styled.div`
    margin-left: 30px;
    color:${props => props.theme.text};
    margin-right: 1rem;
`

export const Duration =
    styled.div`
    font-family: monospace;
    font-size: 16px;
    color:${props => props.theme.text};
    
`
export const ForwardBackward =
    styled.div`
    button{
        background: none;
        border: none;
        display: flex;
        align-items: center;
        font-family: monospace;
        font-size: 16px;
        cursor: pointer;
        &:hover{
            color: ${props => props.theme.text};
        }
    }
    
`