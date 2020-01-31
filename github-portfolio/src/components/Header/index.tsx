import React from 'react'
import styled, { keyframes } from 'styled-components'
// import './index.css'

const HeaderWrapper = styled.header`
  background-color: #282c34;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: 64px;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`

interface Props {
  logo: any
  children?: never
}

const Header: React.FC<Props> = ({ logo }) => (
  <HeaderWrapper>
    <Logo src={logo} alt="logo" />
    <h1>My GitHub Portfolio</h1>
  </HeaderWrapper>
)

export default Header
