import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Characters from './Characters';
import NotFound from './NotFound';
import Footer from './Footer';

const Routes = () => {
    return (
        <Router>
        <Header />
          <Switch>
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
