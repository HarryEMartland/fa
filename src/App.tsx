import React from 'react'
import './App.css'
import { Box, Button, Container } from '@material-ui/core'
import { Definitions } from './Definitions'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { RandomTest } from './RandomTest'

function App (): JSX.Element {
  return (
      <Router>
        <div className="App">
            <Container maxWidth="lg">
                <Box marginTop={4}>
                    <Switch>
                        <Route path="/test">
                            <RandomTest/>
                        </Route>
                        <Route path="/">
                            <Definitions/>
                            <Box mt={2}>
                            <Link to={'/test'}><Button variant="contained" >Test yourself</Button></Link>
                            </Box>
                        </Route>
                    </Switch>
                </Box>
            </Container>

        </div>
      </Router>
  )
}

export default App
