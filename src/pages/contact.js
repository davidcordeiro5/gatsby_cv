import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import emailjs from 'emailjs-com';

import './contact.scss';

const Contact = () => {

  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gVsAKNXn', e.target, 'user_jaUQGjQQkCU4LshklD1Lg')
      .then((result) => {
        console.log(result.text);
        window.location.reload(false)
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <form className="contact-form" onSubmit={sendEmail}>
      <h2 className="contact-title">Me Contacter</h2>

        <div className="first-inputs">
          <label>
            <input className="inputs" type="text" name="user_name"  placeholder="Votre nom"/>
          </label>
          <label>
            <input className="inputs" type="email" name="user_email" placeholder="Votre email"/>
          </label>
        </div>

          <label style={{padding: "0 15%"}}>
            <textarea className="input-aera" name="message" placeholder="Votre message"/>
          </label>

        <input className="my-button" type="submit" value="Envoyer" />
      </form>
    </Layout>
  )
}

export default Contact