import React, { useState, useEffect } from "react";
import "./form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setError("Email ends with @ez.works is not allowed");
      } else if (response.status === 200) {
        setMessage("Form Submitted");
        setEmail(""); // Reset the email field
      } else {
        setError("Something went wrong");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    if (message !== "") {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000); // 3 seconds timeout

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [message]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            style={message !== "" ? { opacity: 0 } : { opacity: 1 }}
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <span>
          <button type="submit">Contact Me</button>
        </span>
      </form>
    </div>
  );
};

export default Form;
