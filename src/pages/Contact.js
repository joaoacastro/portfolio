import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Navbar from "./Navbar";

import icoLinkedin from '../img/ico/ico_linkedin.png';
import icoInstagram from '../img/ico/ico_instagram.png';
import icoGithub from '../img/ico/ico_github.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tgkrugl", // Service ID
        "template_rh5tvjd", // Template ID
        formData, // Dados enviados
        "leo-MZW1rwOlTLoV6" // Public Key
      )
      .then(
        (response) => {
          console.log(
            "Mensagem enviada com sucesso!",
            response.status,
            response.text
          );
          alert("Mensagem enviada com sucesso!");
          setFormData({
            from_name: "",
            email: "",
            subject: "",
            message: "",
          }); // Limpa o formulário
        },
        (error) => {
          console.error("Erro ao enviar mensagem:", error);
          alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <h1>Contact</h1>
      <div className="containerContato">
        <span className="backgroundContact"></span>
        <div className="socialMedia">
          <ul>
            <div className="linkedin-container">
              <a
                href="https://www.linkedin.com/in/joao-ac-castro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icoLinkedin} alt="icone linkedin" />
                <div className="linkedin">
                  <li>LinkedIn</li>
                  {/* <span>@joao-ac-castro</span> */}
                </div>
              </a>
            </div>
            <div className="github-container">
              <a
                href="https://github.com/joaoacastro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icoGithub} alt="icone github" />
                <div className="github">
                  <li>GitHub</li>
                  {/* <span>@joaoacastro</span> */}
                </div>
              </a>
            </div>
            <div className="instagram-container">
              <a
                href="https://www.instagram.com/jonnycastro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icoInstagram} alt="icone instagram" />
                <div className="instagram">
                  <li>Instagram</li>
                  {/* <span>@jonnycastro</span> */}
                </div>
              </a>
            </div>
          </ul>
        </div>
        <div className="formContainer">
          <div className="contactForm">
            <div className="nameForm">
              <label>Nome:</label>
              <input
                type="text"
                name="from_name" // Corrigido
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="emailForm">
              <label>Email:</label>
              <input
                type="email"
                name="email" // Certo
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="assuntoForm">
              <label>Assunto:</label>
              <input
                type="text"
                name="subject" // Corrigido
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mensagemForm">
              <label>Mensagem:</label>
              <textarea
                name="message" // Corrigido
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact