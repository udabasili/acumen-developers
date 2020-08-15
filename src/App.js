import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import HomePage from './pages/home-page';
import Navigation from './components/navigation.component';
import ReviewsPage from './pages/reviews-page';
import ContactPage from './pages/contact-page';
import FAQPage from './pages/faq-page';
import PortfolioPage from './pages/portfolio-page';
import Footer from './components/footer.component';
import ReactGA from 'react-ga';



function App({history}) {
	history.listen(location => {
		ReactGA.set({
			page: location.pathname
		})
		ReactGA.pageview(location.pathname)
	})

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
 
  }, [])
  return (
    
    <React.Fragment >
		<Navigation/>
		<Switch className = "route-wrapper" >
			<Route path='/' exact component={HomePage} />
			<Route path='/contact' exact component={ContactPage} />
			<Route path ='/faq' exact component ={FAQPage}/>
			<Route path ='/reviews' exact component ={ReviewsPage}/>
			<Route path = '/portfolio' exact component = {PortfolioPage}/>
		</Switch>
		<Footer/>
    </React.Fragment>
   
  );
}

export default withRouter(App);
