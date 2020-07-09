import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Films from './components/Films'
import Details from './components/Details'
import Search from './components/Search'

const App = () => {

  return (
    <Router>
    <div className="App">
    <Container className='mt-5'>
      <Row>
        <Col>
      <Switch>
        <Route path="/details/:id">
          <Details/>
        </Route>
        <Route path="/">
          <Search/>
          <Films/>
        </Route>
      </Switch>
      </Col>
      </Row>
      </Container>
       </div>
      </Router>
  );
}

export default App;
