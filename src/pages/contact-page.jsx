import React, { Component } from 'react'
import MainHeading from '../components/main-heading.component'
import emailjs from 'emailjs-com'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default class ContactPage extends Component {
    state = {
        name:'',
        email: '',
        phone: '',
        dateOfCompletion: '',
        description: ''
    }

    handleSubmit = (event) => {
        const template_params = {
            "userName": this.state.name,
            "userEmail": this.state.email,
            "description": this.state.description,
            "userPhone": this.state.phone,
            "userDateOfComplete": this.state.dateOfCompletion
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
                phone: '',
                dateOfCompletion: '',
                description: ''
              })

            }

        }).catch((err) => {
            toast.warning('Something went wrong. Please try again later', option)
        });
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        this.setState((prevState) =>({
            ...prevState,
            [name]: value
        }))
    }



    render() {
        const {name, description, dateOfCompletion, email, phone} = this.state
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
              <h2 className="header-secondary">Contact Us </h2>
              <h3 className="header-tertiary">Message for Quota</h3>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form__control">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.handleChange}
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
                    name="email"
                  />
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                </div>
                <div className="form__control">
                  <input
                    type="tel"
                    onChange={this.handleChange}
                    value={phone}
                    name="phone"
                    id="phone"
					className="form__input"
					required
                  />
                  <label htmlFor="phone" className="form__label">
                    Phone
                  </label>
                </div>
                <div className="form__control">
                  <input
                    type="date"
                    className="form__input"
                    name="dateOfCompletion"
                    value={dateOfCompletion}
                    onChange={this.handleChange}
					id="dateOfCompletion"
                  />
                  <label htmlFor="dateOfCompletion" className="form__label">
                    Date of Completion
                  </label>
                </div>
                <div className="form__control--text-area">
                  <textarea
                    className="form__text-area"
                    value={description}
                    name="description"
                    id="description"
                    onChange={this.handleChange}
					placeholder="Put as much details as possible to get the correct quote"
					required
                  />
                  <label htmlFor="description" className="form__label">
                    Project Description
                  </label>
                </div>
                <input type="submit" className="button" value="Submit" />
              </form>
            </section>
          </div>
        );
    }
}
