import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import "./SMSForm.css";

const SMSForm = () => {
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        to: mobile,
        body: message,
      };

      console.log(data);
      const res = await axios.post(
        "https://twilio-test-server.onrender.com/api/v1/message/create-message",
        data
      );
      if (res) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="to">Tel:</label>

      <input
        type="tel"
        name="mobile"
        onChange={(e) => setMobile(e.target.value)}
      />
      <br />
      <label htmlFor="body">message:</label>

      <textarea
        name="body"
        onChange={(e) => setMessage(e.target.value)}
        className="textarea textarea-bordered textarea-sm w-full max-w-xs"
      ></textarea>
      <br />

      <button type="submit">Send message</button>
    </form>
  );
};

export default SMSForm;
