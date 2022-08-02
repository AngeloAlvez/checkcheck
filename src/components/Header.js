
import styled from 'styled-components'

const HeaderDiv = styled.header`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
display: flex;
justify-content: center;
`

const HeaderLogo = styled.h1`
font-size: 35px;
margin:0;
padding: 10px;
font-family: 'Dancing Script', cursive;

`
export const Header = () => {

    return (
        <HeaderDiv>
            <HeaderLogo>Check'Check</HeaderLogo>
        </HeaderDiv>
    )
}