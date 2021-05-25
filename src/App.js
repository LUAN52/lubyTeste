import './App.css';
import Header from './components/Header/Header'
import 'bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Provider from "./context/context"
import Login from './components/Login/Login'
import Bio from './components/Bio/Bio'
import Repository from './components/Repository/Repository'
import Follower from './components/Follower/Follower'
import FollowerPage from './components/FollowerPage/FollowerPage'
import Following from './components/Following/Following'
import Footer from './components/Footer/Footer'


const App = () => {


  return (

    <>
      <Router>
        <Provider>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              
            </Route>
            <Route exact path="/">
                <Login ></Login>
            </Route>
            <Route exact path="/inicio">
               <Bio></Bio>
            </Route>
            <Route exact path="/repositorio">
               <Repository/>
            </Route>
            <Route exact path="/seguidores">
               <Follower/>
            </Route>
            <Route exact path="/seguidor">
               <FollowerPage/>
            </Route>
            <Route exact path="/seguindo">
               <Following/>
            </Route>
          </Switch>
          
        </Provider>
        <Footer/>
      </Router>

    </>


  )

}

export default App;
