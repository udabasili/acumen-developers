import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home-page';
import Navigation from './components/navigation.component';
import ReviewsPage from './pages/reviews-page';
import ContactPage from './pages/contact-page';
import FAQPage from './pages/faq-page';
import PortfolioPage from './pages/portfolio-page';
import Footer from './components/footer.component';




function App() {
  return (
    <Router>
      <Navigation/>
	  <Switch className = "route-wrapper" >
        <Route path='/' exact component={HomePage} />
        <Route path='/contact' exact component={ContactPage} />
		<Route path ='/faq' exact component ={FAQPage}/>
        <Route path ='/reviews' exact component ={ReviewsPage}/>
		<Route path = '/portfolio' exact component = {PortfolioPage}/>
	   </Switch>
	   <Footer/>
    </Router>
   
  );
}

export default App;
