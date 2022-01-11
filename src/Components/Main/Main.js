import React from 'react';
import './Main.css';
import BackgroundVideo from "../res/video/bgv.mp4";
import { Container, Form, Button } from 'react-bootstrap';

const Main=() => {
  return (
    <div> 
      {/*automaticallyStartVideo   infiniteLoop  turnsOffSound */}
      <video id="background-video" autoPlay   loop   muted >
        <source src={BackgroundVideo} alt="background video" type="video/mp4"/>
      </video>

      <Container id= "main-container"
                 className= "d-grid h-100" >
       <Form id= "sign-in-from"
             className= "text-center w-100" >
         <img className="mb-4 Logo"
             alt="React Bootstrap logo"
             src="LogoR.B.png" 
         />  
         <h1 className= "mb-3 fs-3 fw-normal" style={{fontWeight: "530"}} > Sign in to be with us</h1>
        
         <Form.Group controlId="sign-in-email-address">
           <Form.Control type="email" 
                         placeholder="Email address"
                         size="lg"  //there is only small or large size
                         autoComplete="username"
                         className="position-relative" 
           />
           
         </Form.Group>
         <Form.Group controlId="sign-in-password" className="mb-3">
           <Form.Control type="password" 
                         placeholder="Password"
                         size="lg"  //there is only small or large size
                         autoComplete="current-passoword"
                         className="position-relative" 
           />
         </Form.Group>
         <Form.Group controlId="forgot-password-or-email-?"  className= "forgot-password" style={{fontWeight: "500", fontSize: "13px" }}>
           Forgot Password or Email ?
         </Form.Group>
         <Form.Group controlId="remember-me" className="d-flex  mb-3" style={{fontWeight: "500", fontSize: "13px" }}>
           <Form.Check label="Remember me" />
         </Form.Group>

         <div className= "d-grid " >
           <Button variant="info" size="lg" className= "mb-2"> Sign in </Button>
         </div>

          <div className="divider">-------------- or sign in with --------------</div>
          <div className="icon-party d-flex " style={{fontWeight: "600", fontSize: "13px" }} >
            <div className='space'>
             <a variant="light" size="lg" className= "mb-4 mt-3" > 
               <img className="facebook-icon" src="./res/img/icon-facebook-48.png"/>
             </a>
           </div>
           <div>
             <a variant="light" size="lg" className= "mb-3"> 
              <img className="google-icon" src="./res/img/icon-google-48.png"/>
             </a>
           </div>
          </div>
          <div className="divider d-flex " style={{fontWeight: "500", fontSize: "13px" }} >
            Don't have an account? <strong>Sign Up</strong>
          </div>
        </Form> 
      </Container>
   </div>
  );
};
export default Main;