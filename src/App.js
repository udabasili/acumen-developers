import React, {useEffect} from 'react';
import './App.css';
import { Redirect, Route, Switch, withRouter} from 'react-router-dom';
import HomePage from './pages/home-page';
import Navigation from './components/navigation.component';
import ReviewsPage from './pages/reviews-page';
import ContactPage from './pages/contact-page';
import FAQPage from './pages/faq-page';
import PortfolioPage from './pages/portfolio-page';
import Footer from './components/footer.component';
import ReactGA from 'react-ga';
import NotFoundPage from './components/not-found';
import ServicePage from './pages/services-page';
import About from './pages/about-page';
import DetailsPage from './pages/details-page';


const images = [
	"https://user-images.githubusercontent.com/33573587/104382903-5be71380-5505-11eb-99fe-17696b197499.png",
	'https://user-images.githubusercontent.com/33573587/107160335-fce1b680-696b-11eb-9114-744c6cca6f0f.png',
	'https://user-images.githubusercontent.com/33573587/110267663-aaa9aa80-7f96-11eb-888f-eacbd0be524f.png',
	'https://user-images.githubusercontent.com/33573587/106401457-93f1c000-63fa-11eb-940c-ec5d316d8348.png',
	"https://user-images.githubusercontent.com/33573587/113302681-b4dd7100-92d6-11eb-8eef-d611b994cbd6.png",
]

function App({history}) {
	const preloader = async (imageArray) => {
        const promises = await imageArray.map((src) =>{
            return new Promise(function(res, rej){
                const img = new Image();
                img.src = src;
                img.onload = res();
                img.onerror = rej()
            })
        })

        await Promise.all(promises)
       



} 
	
	

  useEffect(() => {
	preloader(images)

	ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID, {
		debug: false,
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
			<Route path ='/services' exact component ={ServicePage}/>
			<Route path ='/about' exact component ={About}/>
			<Route path ='/portfolio' exact component ={PortfolioPage}/>
			<Route path ='/portfolio/:name' component ={DetailsPage}/>
			<Route path='/404' component={NotFoundPage} />
			<Redirect to='/404'/>
		</Switch>
		<Footer/>
    </React.Fragment>
   
  );
}

export default withRouter(App);
