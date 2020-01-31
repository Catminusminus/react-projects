import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import logo from '../logo.svg'
import Header from '../components/Header'
import Profile from './Profile'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const AppWrapper = styled.div`
  text-align: center;
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header logo={logo} />
        <Profile />
      </AppWrapper>
    </>
  )
}

export default App
