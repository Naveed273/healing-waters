import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Stripe from './components/StripeApi'
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/stripeApi/:room/:nights' component={Stripe}/>
        </BrowserRouter>
    );
}

export default App;
