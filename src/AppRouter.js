import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Design from './Design';
import DoesNotExist from './DoesNotExist';
import Illustration from './Illustration';
import Experiments from './Experiments';
import Teaching from './Teaching';
import ProjectContainer from './components/Project'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

class AppRouter extends Component {
  render() {
    return (
        <Router>
          <ScrollToTop>
            <div className="page-wrapper">
              <Switch>
                <Route path="/:id*" component={Navigation} />
                <Route component={Navigation} />
              </Switch>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about/" component={About} />
                <Route exact path="/design/" component={Design} />
                <Route exact path="/illustration/" component={Illustration} />
                <Route exact path="/experiments/" component={Experiments} />
                <Route exact path="/teaching/" component={Teaching} />
                <Route path="*/project/:id" component={ProjectContainer} />
                <Route path="/404" component={DoesNotExist} />
                <Redirect from='*' to='/404' />
              </Switch>
            </div>
          </ScrollToTop>
        </Router>
    );
  }
}

export default AppRouter;
