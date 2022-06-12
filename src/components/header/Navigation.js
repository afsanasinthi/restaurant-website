import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className='container'>

                    <Nav className="navbar navbar-expand-lg" variant="tabs">
                        <Link to="/" className="navbar-brand">Resturant</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <Nav.Item>
                                <Link to="/" className="nav-link active">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/about" className="nav-link">About</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </Nav.Item>
                        </div>
                    </Nav>
                </div>

            </div>
        );
    }

};

export default Navigation;