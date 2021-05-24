import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Characters from './Characters';
import CharacterDetail from './CharacterDetail';
import NotFound from './NotFound';
import Footer from './Footer';

const Routes = () => {
    return (
        <Router>
        <Header />
          <Switch>
            <Route path='/character/:char_id'>
                <CharacterDetail />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route exact path='/'>
                  <Characters />
            </Route>
            <Route path=''>
                <NotFound />
            </Route> 
          </Switch>
       <Footer />
      </Router>
    )
}

export default Routes
