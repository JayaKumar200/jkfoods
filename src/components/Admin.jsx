import { useState } from "react";
import { motion } from "framer-motion";
import "./Admin.css";
import admin from '../assets/jk.jpg';

const Admin = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      alert("Please enter a message before sending.");
      return;
    }

    alert("Message sent successfully!");
    setMessage(""); 
  };

  return (
    <motion.div
      className="admin-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="profile-section"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={admin} alt="Jayakumar" className="profile-pic" />
        <h1 className="admin-title">Hi, I'm <span>Jayakumar</span> 👋</h1>
        <p className="admin-intro">Web Developer | Frontend Enthusiast | Tech Explorer</p>
      </motion.div>

      <motion.div
        className="admin-info"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p><strong>📞 Contact:</strong> 7358906752</p>
        <p><strong>📧 Email:</strong> <a href="vjayakumar850@gmail.com">vjayakumar850@gmail.com</a></p>
        <p><strong>📸 Instagram:</strong> <a href="https://www.instagram.com/kumar_.117" target="_blank">@kumar_.117</a></p>
      </motion.div>

      <motion.div
        className="message-box"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <textarea
          className="admin-message-input"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <motion.button
          className="admin-send-btn"
          onClick={handleSendMessage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message 🚀
        </motion.button>
      </motion.div>

       <div className="map-section">
        <h3>📍 Our Location: Madurai, Alanganallur</h3>
        <iframe
          title="Madurai Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8017765272643!2d78.02072637408998!3d9.997801790114306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cde9029e86e7%3A0xb63b8c8d286d7309!2sAlanganallur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711891387364!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>

  );
};

export default Admin;
