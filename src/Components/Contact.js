import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if(!this.props.toggles.readyToOrder) return null;

    return (
      <section id="contact">
         <center>
            <h2>Ready to order?</h2>
            <br />
            Go to <a href="https://www.unleash-hosted.com/">unleash-hosted.com</a> <br />
            and get your instance of unleash-hosted today.
         </center>
      </section>)
  }
}

export default Contact;
