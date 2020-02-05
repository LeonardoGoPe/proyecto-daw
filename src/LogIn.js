import React, { Component } from "react";
import Footer from './componentes/Footer'
import sugerenciaimg from './Recursos/aboutUs3.jpg'
import './componentes/Util.css'
import './componentes/Main.css'


const LogIn = () => 
<div>
    <div class="container-contact100">
        <div class="wrap-contact100">
        <form class="contact100-form validate-form">


            <label class="label-input100" for="email">Correo electrónico *</label>
            <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input id="email" class="input100" type="text" name="email" placeholder="Ej. ejemplo@email.com" />
                <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="place-name">Contraseña *</label>
            <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type place name" >
                <input id="place-name" class="input100" type="password" name="password" placeholder="******" />
                <span class="focus-input100"></span>
            </div>
            

            <div class="container-contact100-form-btn">
                <button class="contact100-form-btn">
                    Iniciar Sesión
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

export default LogIn;