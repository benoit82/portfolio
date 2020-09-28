import React, { Component } from "react";
import * as yup from "yup";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
      sumAdd: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.contactSchema = yup.object().shape({
      contactName: yup.string().required("Champ obligatoire"),
      contactEmail: yup
        .string()
        .email("Format email non reconnu")
        .required("Champ obligatoire"),
      contactSubject: yup.string(),
      contactMessage: yup.string().required("Champ obligatoire"),
      sumAdd: yup
        .number()
        .oneOf([this.state.num1 + this.state.num2])
        .required(),
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.contactSchema
      .validate(this.state)
      .then(
        (onFulfilled) => {
          if (onFulfilled.contactSubject.length === 0) {
            onFulfilled.contactSubject = "Un message venant du site Porfolio";
          }
          console.log(onFulfilled);
        },
        (onRejected) => {
          alert(
            `Le message n'a pas pu être envoyé :
${onRejected.path} => ${onRejected.errors}`
          );
          console.log(onRejected);
        }
      )
      .catch((error) => {
        console.error(error.message);
      });
  };
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var email = this.props.data.email;
      var city = this.props.data.address.city;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              action=""
              method="post"
              id="contactForm"
              name="contactForm"
              onSubmit={this.handleSubmit}
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Nom <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                    value={this.state.contactName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                    value={this.state.contactEmail}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Sujet</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                    value={this.state.contactSubject}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={this.handleChange}
                    value={this.state.contactMessage}
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="sumAdd">
                    {this.state.num1} + {this.state.num2} ?
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="2"
                    id="sumAdd"
                    name="sumAdd"
                    onChange={this.handleChange}
                    value={this.state.sumAdd}
                  />
                </div>

                <div>
                  <button className="submit">Envoyer</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Erreur d'envoi</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Votre message a été envoyé, merci !
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Pour me joindre</h4>
              <p className="address">
                {name}
                <br />
                {zip} {city}
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
