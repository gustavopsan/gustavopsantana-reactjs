import React, {useState} from "react";
import axios from "axios";

import Container from "../components/Container";
import Aligner from "../components/Aligner";
import WhiteTitle from "../components/WhiteTitle";

import contactBackground from "../assets/img/contact-background.webp";

import "../style/contact.scss";

const Contact = () => {

    const [fields, setFields] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    function handleInputChange(event) {
        fields[event.target.id] = event.target.value;
        setFields(fields);
    }
    
    function handleMailSubmit(event) {
        event.preventDefault();

        let valid = 0; // Quantity of valid fields

        Object.entries(fields).forEach(field => {
            console.log(field);
            if (field[1] === "") {
                let message = `O campo ${field[0]} não pode ficar vazio. Preencha para continuar.`;
                let messageElement = document.getElementById("form-message");

                messageElement.innerHTML = message;
                messageElement.classList.remove("hidden");

                if (messageElement.classList.contains("success")) {
                    messageElement.classList.remove("success");
                }

                messageElement.classList.add("error");
            } else {
                valid++; // Increment valid fields
            }
        });

        if (valid === 3) {
            let mailContent = `<h2>Novo contato através do site</h2>
            <p>Nome: ${fields.name}</p>
            <p>Email: ${fields.email}</p>
            <p>Mensagem: ${fields.message}</p>`;

            axios.post("https://api-gustavopsantana.herokuapp.com/send-message", {
                destination: "gustavopsantana4@gmail.com",
                subject: "Novo contato através do site gustavopsantana.dev.br",
                html: mailContent
            })
            .then(response => {
                console.log(response);
                if (response.data.status === "success") {
                    let message = "Mensagem enviada com sucesso!";
                    let messageElement = document.getElementById("form-message");

                    messageElement.innerHTML = message;
                    messageElement.classList.remove("hidden");

                    if (messageElement.classList.contains("error")) {
                        messageElement.classList.remove("error");
                    }

                    messageElement.classList.add("success");
                }
            })
        }
    }

    return (
        <Container backgroundImage={contactBackground}>
            <Aligner horizontal>
                <Aligner vertical>
                    <WhiteTitle>
                        Apenas uma mensagem e podemos firmar uma parceria que levará sua empresa a ter visibilidade na internet.
                    </WhiteTitle>
                    <WhiteTitle>Entre em contato!</WhiteTitle>
                </Aligner>
                <Aligner vertical center>
                    <form id="form-contact" onSubmit={handleMailSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" className="form-control" id="name" placeholder="Nome" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea className="form-control" id="message" rows="3" onChange={handleInputChange} placeholder="Olá! Estou interessado(a) nos serviços informados pelo seu site! Por favor, entre em contato comigo!"></textarea>
                        </div>

                        <span id="form-message" className="hidden">O campo "nome" não pode estar vazio, preencha todos os campos para continuar</span>

                        <button type="submit" className="btn btn-primary">Deixar Mensagem</button>
                    </form>
                </Aligner>
            </Aligner>
        </Container>
    );
}

export default Contact;