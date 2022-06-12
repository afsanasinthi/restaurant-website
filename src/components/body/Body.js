import React from 'react';
import { Route, Routes } from 'react-router';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />

            </Routes>
        </div>
    );
};

export default Body;