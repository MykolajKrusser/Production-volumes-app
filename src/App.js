import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Page404 from './components/UI/Page404/Page404';
import Main from './container/Main/Main';
import Workflow from './container/Workflow/Workflow';
import Chatroom from './container/Chat/Chat';
import Raport from './container/Raport/Raport';


class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path='/raport' component={Raport}/>
            <Route path='/chat' component={Chatroom}/>
            <Route path='/workflow' component={Workflow}/>
            <Route path='/' exact component={Main}/>
            <Route component={Page404}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;
