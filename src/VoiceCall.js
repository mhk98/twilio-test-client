import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import "./VoiceCall.css";

const VoiceCall = () => {
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
    <div className="my-12">
      <div className="form-container">
        <h3 className="text-xl font-bold">Please make a call</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="mobile">Tel:</label>
            <input
              type="tel"
              name="mobile"
              onChange={(e) => setMobile(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Message:</label>
            <textarea
              name="body"
              onChange={(e) => setMessage(e.target.value)}
              className="textarea-field"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VoiceCall;
