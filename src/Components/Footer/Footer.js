import React from 'react';
import './Footer.css';

const Footer=() => {
   return(
        <footer>
           Copyright &copy; {new Date().getFullYear()} React Bootstrap
        </footer>
    )
};

export default Footer;