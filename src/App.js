// import './App.css'
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Mac from "./Components/Pages/Mac/Mac";
import Iphone from "./Components/Pages/Iphone/Iphone";
import Four04 from "./Components/Pages/NotFound/NotFound";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Search from "./Components/Pages/Search/Search"
import './Components/css/bootstrap.css'
import "./Components/css/styles.css"
import Watch from "./Components/Pages/Watch/Watch";
import Tv from "./Components/Pages/Tv/Tv"
import Cart from "./Components/Pages/Cart/Cart"
import Support from "./Components/Pages/Support/Support"
import Youtube from "./Components/Youtube/Youtube";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/watch" exact component={Watch} />
          <Route path="/ipad" exact component={Ipad} />
          <Route path="/search" exact component={Search} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/support" exact component={Support} />
          <Route path="/tv" exact component={Tv} />
          <Route path="/" component={Four04} />
        </Switch>
        <Youtube />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
