import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import HomePage from './pages/home-page';
import Navigation from './components/navigation.component';
import ReviewsPage from './pages/reviews-page';
import ContactPage from './pages/contact-page';
import FAQPage from './pages/faq-page';
import PortfolioPage from './pages/portfolio-page';
import Footer from './components/footer.component';
import ReactGA from 'react-ga';
import NotFoundPage from './components/not-found';


function App({history}) {
	

  useEffect(() => {
	ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID, {
		debug: true,
		titleCase: false,
		gaOptions: {
			userId: 123
		}
	});
	ReactGA.pageview(window.location.pathname + window.location.search);
 
  })
  return (
    
    <React.Fragment >
		<Navigation/>
		<Switch className = "route-wrapper" >
			<Route path='/' exact component={HomePage} />
			<Route path='/contact' exact component={ContactPage} />
			<Route path ='/faq' exact component ={FAQPage}/>
			<Route path ='/reviews' exact component ={ReviewsPage}/>
			<Route path = '/portfolio/mobile' exact render= {(props) =>(
				<PortfolioPage {...props} title='mobile'/>
			)}/>
			<Route path = '/portfolio/website' exact render= {(props) =>(
				<PortfolioPage {...props} title='website'/>
			)}/>
			<Route path='/404' component={NotFoundPage} />
			<Redirect to='/404'/>

		</Switch>
		<Footer/>
    </React.Fragment>
   
  );
}

export default withRouter(App);
