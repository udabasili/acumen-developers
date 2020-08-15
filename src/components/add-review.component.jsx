import React, { Component } from "react";
import firebase from "../services/Firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class AddReview extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("reviews");
    this.state = {
      name: "",
      websiteName: "",
      websiteUrl: "",
      dateOfCompletion: "",
      review: "",
    };
  }

  handleSubmit = (e) => {
    const option = {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    e.preventDefault();
    this.ref
      .add(this.state)
      .then((docRef) => {
        toast.success("Review Added Successfully", option);
        this.setState({
          name: "",
          websiteName: "",
          websiteUrl: "",
          dateOfCompletion: "",
          review: "",
        });
      })
      .catch((error) => {
        toast.warning('Something went wrong. Please try again later', option)
        console.error("Error adding document: ", error);
      });
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  render() {
    const {
      name,
      review,
      dateOfCompletion,
      websiteUrl,
      websiteName,
    } = this.state;
    return (
      <div className="review-page">
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
        <section className="review">
          <h2 className="header-secondary">Write your Review </h2>
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
                type="name"
                className="form__input"
                onChange={this.handleChange}
                value={websiteName}
                id="websiteName"
                name="websiteName"
              />
              <label htmlFor="websiteName" className="form__label">
                Website built name
              </label>
            </div>
            <div className="form__control">
              <input
                type="text"
                className="form__input"
                onChange={this.handleChange}
                value={websiteUrl}
                id="websiteUrl"
                name="websiteUrl"
              />
              <label htmlFor="websiteUrl" className="form__label">
                Website built Url
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
                Date
              </label>
            </div>
            <div className="form__control--text-area">
              <textarea
                className="form__text-area"
                value={review}
                name="review"
                id="review"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="review" className="form__label">
                Review
              </label>
            </div>
            <input type="submit" className="button" value="Submit" />
          </form>
        </section>
      </div>
    );
  }
}
