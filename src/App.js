import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Page404 from './component/UI/Page404/Page404';
import Main from './container/Main/Main';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route to='/' exact component={Main}/>
            <Route component={Page404}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;
