import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import Layout from '@app1/layout';

const NotFound = React.lazy(() => import('@app1/pages/NotFound'));
const Welcome = React.lazy(() => import('@app1/pages/Welcome'));

const App = () => {
  return (
    <React.Suspense fallback={<Spin />}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/*" exact component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </React.Suspense>
  );
}

export default App;