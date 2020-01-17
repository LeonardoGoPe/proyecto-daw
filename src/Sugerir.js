import React, { Component } from "react";
import Footer from './componentes/Footer'
import sugerenciaimg from './Recursos/sugerencias.png'
import './componentes/Util.css'
import './componentes/Main.css'


const BodySugerir = () => 
<div>
    <div class="container-contact100">
        <div class="wrap-contact100">
        <form class="contact100-form validate-form">
            <span class="contact100-form-title">
                ¿Tienes nuevos lugares? Sugiérelos y los agregaremos
            </span>

            <label class="label-input100" for="place-name">Nombre del Lugar *</label>
            <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type place name" >
                <input id="place-name" class="input100" type="text" name="place-name" placeholder="nombre" />
                <span class="focus-input100"></span>
            </div>
            

            <label class="label-input100" for="email">Tu correo electrónico *</label>
            <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input id="email" class="input100" type="text" name="email" placeholder="Ej. ejemplo@email.com" />
                <span class="focus-input100"></span>
            </div>

            

            <div class="wrap-input100">
                <div class="label-input100">Tipo de lugar</div>
                <div id="listaVal">
                    <select class="js-select2" name="service">
                        <option>Parque</option>
                        <option>Tienda</option>
                        <option>Veterinaria</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                </div>
                <span class="focus-input100"></span>
            </div>


            <label class="label-input100" for="message">Descripcion *</label>
            <div class="wrap-input100 validate-input" data-validate = "Message is required">
                <textarea id="message" class="input100" name="message" placeholder="Apariencia, estado, infraestructura, accesibilidad, reglas para mascotas, etc"></textarea>
                <span class="focus-input100"></span>
            </div>

            <div class="container-contact100-form-btn">
                <button class="contact100-form-btn">
                    Enviar sugerencia
                </button>
            </div>
        </form>

        <div class="contact100-more flex-col-c-m" style={{backgroundImage: "url("+sugerenciaimg+")",}}>
        <div class="flex-w size1 p-b-47">
           
        </div>

        
        
    </div>
 </div>
</div>

    <Footer></Footer>
</div>

export default BodySugerir;