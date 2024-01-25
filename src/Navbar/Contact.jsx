import React from "react";

function Contact() {
  const handleComment = (e) => {
    e.preventDefault();
    alert("Thank you! This is a sample contact/comment form");
  };

  return (
    <div className="contact bg-gradient-to-t from-yellow-700 via-white-500 to-black-500 h-screen">
      <div className="p-10 flex text-center flex-col gap-8 justify-center text-black">
        <h2>Contact Page</h2>
        <div>
          <form onSubmit={handleComment} className="flex flex-col gap-4">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button
              type="submit"
              className="bg-slate-300 font-semibold text-black"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
