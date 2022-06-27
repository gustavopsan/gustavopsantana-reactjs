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
        console.log(fields);
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
                            <textarea className="form-control" id="message" rows="3" onChange={handleInputChange} defaultValue="Olá! Estou interessado(a) nos serviços informados pelo seu site! Por favor, entre em contato comigo!"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Deixar Mensagem</button>
                    </form>
                </Aligner>
            </Aligner>
        </Container>
    );
}

export default Contact;