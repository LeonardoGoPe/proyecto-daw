import React, { Component } from "react";
import Footer from './componentes/Footer'
import parque from './Recursos/fondoPar.jpg'
import './componentes/Util.css'
import './componentes/Main.css'


const BodyContactenos = () => 
<div>
    <div class="container-contact100">
        <div class="wrap-contact100">
        <form class="contact100-form validate-form">
            <span class="contact100-form-title">
                ¿Quieres contactarnos? Envianos un mensaje
            </span>

            <label class="label-input100" for="first-name">Tu nombre completo *</label>
            <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name" >
                <input id="first-name" class="input100" type="text" name="first-name" placeholder="Nombres" />
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                <input class="input100" type="text" name="last-name" placeholder="Apellidos" />
                <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="email">Tu correo electrónico *</label>
            <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input id="email" class="input100" type="text" name="email" placeholder="Ej. ejemplo@email.com" />
                <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="phone">Fecha de nacimiento</label>
            <div class="wrap-input100">
                <input id="phone" class="input100" type="text" name="phone" placeholder=" DD/MM/AAAA" />
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100">
                <div class="label-input100">Tu ciudad</div>
                <div id="listaVal">
                    <select class="js-select2" name="service">
                        <option>Guayaquil</option>
                        <option>Duran</option>
                        <option>Milagro</option>
                        <option>Yaguachi</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                </div>
                <span class="focus-input100"></span>
            </div>


            <label class="label-input100" for="message">Tu comentario *</label>
            <div class="wrap-input100 validate-input" data-validate = "Message is required">
                <textarea id="message" class="input100" name="message" placeholder="Escribe tu comentario"></textarea>
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

export default BodyContactenos;