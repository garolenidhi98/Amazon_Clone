import React, { useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/Checkout';
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./vendors/firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SideMenu from './components/SideMenu/SideMenu';



const promise = loadStripe("pk_test_51Omqi0SJeiqNnZkOq5N4HRj2xsuHCss85LvoaXkz7MIXYxgRkbbjKCft2JlfkSGMqSuaHCjgX1Oy7sFwjQLL1vDL00TZAfXNPb");

function App() {
  const [{ showMenu }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component is loaded

    // auth.onAuthStateChanged(authUser => {
    //   console.log("THE USER IS >>>", authUser);

    //   if (authUser) {
        //the user just logged in /the user was logged in
      auth.onAuthStateChanged((user) => {
        if (user) {
         dispatch({
          type: "SET_USER",
          // user: authUser,
          payload: user,
        });
      }
      else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          // user: null,
          payload: null,
        });
      }
    });
  }, [dispatch])
  
  return (
    //BEM
    <Router>
      {/* <div className="app"> */}
      <div className={`app ${showMenu && 'overlay'}`}>
        <Switch>
          <Route path="/orders">
            <SideMenu />
            <Header /> 
            <Navbar />
            <Orders />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <SideMenu />
            <Header />
            <Navbar />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/shop">
            <SideMenu />
            <Header />
            <Navbar />
            <Shop />
            <Footer />
          </Route>
          <Route path="/checkout">
            <SideMenu />
            <Header /> 
            <Navbar />
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header /> 
            <Elements stripe={promise}>
               <Payment/>
            </Elements>
            <Footer />
          </Route>
          <Route exact path="/">
            <SideMenu />
            <Header /> 
            <Navbar />
            <Home/>
            <Footer />
         </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
