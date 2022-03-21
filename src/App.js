import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "routes";
import 'remixicon/fonts/remixicon.css'
const browserHistory = createBrowserHistory();


function App() {

  return (

    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

export default App;
