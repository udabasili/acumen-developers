import React, { Component } from 'react'
import MainHeading from '../components/main-heading.component'
import emailjs from 'emailjs-com'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Loader from '../components/loader.component';

export default class ContactPage extends Component {
    state = {
        name:'',
        email: '',
        description: ''
    }

    handleSubmit = (event) => {
        const template_params = {
            "userName": this.state.name,
            "userEmail": this.state.email,
            "description": this.state.description,
        }

        const option = {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        };
        event.preventDefault()
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            template_params,
            process.env.REACT_APP_EMAILJS_UID)
        .then((result) => {
            if(result.status === 200){
              toast.success("Email sent successfully", option)
             this.setState({
                name: '',
                email: '',
                description: ''
              })

            }

        }).catch((err) => {
			console.log(err)
            toast.warning('Something went wrong. Please try again later', option)
        });
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        this.setState((prevState) =>({
            [name]: value
        }))
    }



    render() {
        const {name, description, email} = this.state
        return (
          <div className="contact-page">
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <MainHeading title="Contact" />
            <section className="contact">   
              <ul className='contact__list'>
					<li className='contact__item'>
						<FontAwesomeIcon className='icon' icon={faMailBulk} />
						<div className='contact__detail'>
							<span className='title'>Email</span>
							<span className='desc'>udbasili@acumendevelopers.com</span>
						</div>
				 	 </li>
					<li className='contact__item'>
						<FontAwesomeIcon className='icon' icon={faGithubSquare} />
						<div className='contact__detail'>
							<span className='title'>Github</span>
							<span className='desc'>https://github.com/udabasili</span>
						</div>
					</li>
					<li className='contact__item'>
						<FontAwesomeIcon className='icon' icon={faFacebook} />
						<div className='contact__detail'>
							<span className='title'>Facebook</span>
							<span className='desc'>https://www.facebook.com/acumendev</span>
						</div>
					</li>
              	</ul>   
			  	<div className='container'>
					<form className="form" onSubmit={this.handleSubmit}>
						<h2 className="header-secondary">General Enquiry</h2>
						<div className="form__control">
							<input
								type="text"
								id="name"
								name="name"
								onChange={this.handleChange}
								autoComplete="false"
								value={name}
								className="form__input"
								required
							/>
							<label htmlFor="name" className="form__label">
									Name
                  			</label>
						</div>
						<div className="form__control">
							<input
									type="email"
									className="form__input"
									onChange={this.handleChange}
									value={email}
									id="email"
									autoComplete="false"
									name="email"
								/>
							<label htmlFor="email" className="form__label">
								Email
                  			</label>
						</div>			
							<div className="form__control--text-area">
								<textarea
									className="form__text-area"
									value={description}
									name="description"
									id="description"
									onChange={this.handleChange}
									required
								/>
								<label htmlFor="description" className="form__label">
									What would you like to know?
                  				</label>
							</div>
							<input type="submit" className="button" value="Submit" />
						</form>
						<div>
							<h2 className="header-secondary">Questionnaire for your project</h2>
							<iframe 
								src="https://docs.google.com/forms/d/e/1FAIpQLSfUBiIZ31zj1PK_rCbUouK2IG2yDMp_9fkTFtQbGUF7Lcip5w/viewform?embedded=true" 
								width="90%" 
								height="520" 
								title='questionnaire'
								frameBorder="0" 
								marginHeight="0" 
								marginWidth="0">
									<Loader/>
								</iframe>

						</div>

				</div>        
              

            </section>
          </div>
        );
    }
}
