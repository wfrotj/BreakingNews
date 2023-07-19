import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Page</h2>
      <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
