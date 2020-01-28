import * as React from 'react'
import * as ReactDOM from 'react-dom'
import List from './containers/List'
import { Container, Navbar } from 'react-bootstrap'

const App = () => (
  <Container fluid>
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand>
        <h1>movieList</h1>
      </Navbar.Brand>
    </Navbar>
    <List />
  </Container>
)

ReactDOM.render(<App />, document.getElementById('root'))
