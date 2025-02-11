import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";


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

      <div className="containerContato">
        <span className="backgroundContact"></span>

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