import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Privacypolicy from "../pages/Privacy policy/Privacypolicy";
import Profile from "../pages/Profile/Profile";
import Orders from "../pages/Profile/Orders";
import Address from "../pages/Profile/Address";
import Payment from "../pages/Profile/Payment";
import Search from "../pages/Search/Search";
import '../index.css';

const createRoutes = () => (
    <Router>
        <div className="container-fluid border-padding">
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path={"/checkout"} component={Checkout}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/signUp"} component={SignUp}/>
            <Route exact path={"/privacypolicy"} component={Privacypolicy}/>
            <Route exact path={"/profile"} component={Profile}/>
            <Route exact path={"/orders"} component={Orders}/>
            <Route exact path={"/address"} component={Address}/>
            <Route exact path={"/payment"} component={Payment}/>
            <Route exact path={"/search"} component={Search}/>
        </div>
    </Router>
);

export default createRoutes;