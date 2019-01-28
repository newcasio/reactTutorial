import React from "react";

function Contact(props) {
  return (
    <div className="contact-item">
      <img src={props.img} alt="piture" />
      <p>{props.name}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default Contact;
