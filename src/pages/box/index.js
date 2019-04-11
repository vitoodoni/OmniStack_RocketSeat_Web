import React, { Component } from "react";
import { MdInsertDriveFile } from 'react-icons/md'
import api from "../../services/api"
import logo from "../../assets/logo.svg";
import "./styles.css";

export default class Box extends Component {
    state = { box: {} }
    async componentDidMount(){
        const box = this.props.match.params.id;
        const response = await api.get(`boxes/${box}`);

        this.setState({box: response.data});
    }
    render(){
        return <div id="box-container" >
            <header>
                <img src={logo} alt=""/>
                <h1>{this.state.box.title}</h1>
            </header>

            <ul>
                <li>
                    <a className="fileInfo" href="">
                        <MdInsertDriveFile size={24} color="#A5Cfff" />
                        <strong>Desafiol.pdf</strong>
                    </a>
                    <span>Há 3 minutos atras</span>
                </li>
            </ul>
        </div>

    }
}