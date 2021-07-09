import React from 'react';
import ReactDOM from 'react-dom';
import "regenerator-runtime/runtime.js";
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import ContactDetails from './components/ContactDetails.jsx';
import List from './components/List.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {



  return (
    <Router>

      <div className="container">
        <Header />


        <div className="container-view">

          <Route path="/" exact component={List} />
        </div>

        <Route path="/:id" exact component={ContactDetails} />

        <Menu />
      </div>

    </Router>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));

export default App;
