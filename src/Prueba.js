import React, { Component } from "react";
import Footer from './componentes/Footer'
import './componentes/Util.css'
import './componentes/Main.css'


class BodyPRUEBA extends Component{
    constructor(){
        super();
        this.state ={
            logs:[]
        }
    }
    componentDidMount(){
        fetch("/logs")
        .then(res => res.json())
        .then(logs=>this.setState({logs},()=>{console.log("logs fetched...",logs)}));
    }

    render(){
        return(

            <div>
                PRUEBA 
                <ul>
                	{}
			        {this.state.logs.map(log => 
			          <li key={log.id}>{log.user} {log.accion} {log.detalle} {log.fecha}</li>
			        )}
			    </ul>
                <Footer></Footer>
            </div>
        )
    }
}


export default BodyPRUEBA;