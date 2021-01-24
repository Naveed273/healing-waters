import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import Stripe from './components/StripeApi';

function App() {
	return (
		
		<BrowserRouter>
			
			<Route path='/' component={HomeScreen} exact />
			<Route path='/stripeApi/:room/:nights' component={Stripe}  />
			
		</BrowserRouter>
	);
}

export default App;
