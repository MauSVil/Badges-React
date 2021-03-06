import React from 'react';
import './styles/Navbar.css'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/" className="Navbar__brand">
                        <img src={logo} alt="" className="Navbar__brand-logo"/>
                        <span className='font-weight-light'>Plazi</span>
                        <span className='font-weight-bold'>Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar