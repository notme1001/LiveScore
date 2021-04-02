import React from 'react';
import { hot } from 'react-hot-loader/root';
import MainApp from './routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './static/css/style.css';

const ProviderConfig = () => {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={MainApp} /> 
      </Router>
  );
};

function App() {
  return (
    <ProviderConfig />
  );
}

export default hot(App);;