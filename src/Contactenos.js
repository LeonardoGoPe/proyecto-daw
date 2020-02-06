import React, { Component } from "react";
import Footer from './componentes/Footer'
import parque from './Recursos/fondoPar.jpg'
import './componentes/Util.css'
import './componentes/Main.css'
import emailjs from 'emailjs-com';
/*
var template_params = {
   "reply_to": "reply_to_value",
   "mail": "mail_value",
   "nombre": "nombre_value",
   "apellido": "apellido_value",
   "comentario": "comentario_value"
}

var service_id = "default_service";
var template_id = "template_6Y0gajzw";
emailjs.send(service_id, template_id, template_params);
*/
class BodyContactenos extends Component{
    constructor(){
        /*
        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.handleClearForm=this.handleClearForm.bind(this);*/
        super();
        this.state ={
            reply_to: "reply_to_value",
            mail:"",
            nombre:"",
            apellido:"",
            comentario:""
        }
    }
    handleChangeNombre = (event)=>{
        this.setState({
            nombre:event.target.value
        })
    }
    handleChangeApellido = (event)=>{
        this.setState({
            apellido:event.target.value
        })        
    }
    handleChangeMail = (event)=>{
        this.setState({
            mail:event.target.value
        })        
    }
    handleChangeComentario = (event)=>{
        this.setState({
            comentario:event.target.value
        })
    }
    handleFormSubmit=(event) =>{
        console.log("hola")
        alert(this.state.nombre,this.state.apellido,this.state.mail,this.state.comentario,)
        //this.props.submitInfo()
        var service_id = "default_service";
        var template_id = "template_6Y0gajzw";
        var user_id = "user_pCgWFgvS1ThyAUIEFfHKH";
        alert("vars")
        emailjs.send(service_id, template_id, this.state, user_id).then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });;
        alert("enviado")
        //emailjs.send("matheusjlv", "template_6Y0gajzw", {"from_name":"de nombre","apellido":"Cordova","message_html":"contenido","to_name":"a nombre","nombre":"phil","reply_to":"responder a","mail":"phil@mail.com","comentario":"hola como estas"})
    }
    render(){
        return(
            <div>
                <div class="container-contact100">
                    <div class="wrap-contact100">
                    <form class="contact100-form validate-form" onSubmit={this.handleFormSubmit} >
                        <span class="contact100-form-title">
                            ¿Quieres contactarnos? Envianos un mensaje
                        </span>

                        <label class="label-input100" for="first-name">Tu nombre completo *</label>
                        <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name" >
                            <input id="first-name" value={this.state.nombre} onChange={this.handleChangeNombre} className="input100" type="text" name="nombre" placeholder="Nombres" />
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                            <input class="input100" value={this.state.apellido} onChange={this.handleChangeApellido} type="text" name="apellido" placeholder="Apellidos" />
                            <span class="focus-input100"></span>
                        </div>

                        <label class="label-input100" for="email">Tu correo electrónico *</label>
                        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input id="email"  value={this.state.mail} onChange={this.handleChangeMail} className="input100" type="text" name="mail" placeholder="Ej. ejemplo@email.com" />
                            <span class="focus-input100"></span>
                        </div>


                        <label class="label-input100" for="message">Tu comentario *</label>
                        <div class="wrap-input100 validate-input" data-validate = "Message is required">
                            <textarea id="comentario"  value={this.state.comentario} onChange={this.handleChangeComentario}  class="input100" name="comentario" placeholder="Escribe tu comentario"></textarea>
                            <span class="focus-input100"></span>
                        </div>

                        <div class="container-contact100-form-btn">
                            <button class="contact100-form-btn">
                                Enviar mensaje
                            </button>
                        </div>
                    </form>

                    <div class="contact100-more flex-col-c-m" style={{backgroundImage: "url("+parque+")",}}>
                    <div class="flex-w size1 p-b-47">
                        <div class="txt1 p-r-25">
                            <span class="lnr lnr-map-marker"></span>
                        </div>

                        <div class="flex-col size2">
                            <span class="txt1 p-b-20">
                                Direccion
                            </span>

                            <span class="txt2">
                                Alborada 4ta Etapa
                            </span>
                        </div>
                    </div>

                    <div class="dis-flex size1 p-b-47">
                        <div class="txt1 p-r-25">
                            <span class="lnr lnr-phone-handset"></span>
                        </div>

                        <div class="flex-col size2">
                            <span class="txt1 p-b-20">
                                Teléfonos
                            </span>

                            <span class="txt3">
                                +593 04287 2210
                            </span>
                        </div>
                    </div>

                    <div class="dis-flex size1 p-b-47">
                        <div class="txt1 p-r-25">
                            <span class="lnr lnr-envelope"></span>
                        </div>

                        <div class="flex-col size2">
                            <span class="txt1 p-b-20">
                                Soporte
                            </span>

                            <span class="txt3">
                                goldenpet@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
             </div>
            </div>

                <Footer></Footer>
            </div>
            )
    }
}


export default BodyContactenos;