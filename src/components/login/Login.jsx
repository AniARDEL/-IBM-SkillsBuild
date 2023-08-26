// Write all the code here
import React, { useState, useRef }  from "react";
import { GoogleLogin } from '@react-oauth/google';

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
function Login() {
  
  const [justifyActive, setJustifyActive] = useState("tab1");
  const tabsRef = useRef(null);
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  const google = () => {

    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
    )
}
  return (
    <div className="full-height">
    <MDBContainer id="login-form" className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-4 d-flex flex-row justify-content-between"
        ref={tabsRef}
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p className="login-p">Sign in with:</p>
            <div
              id= "icon-group"
              className="d-flex justify-content-between mx-auto"
              
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                id="social-icon"
              >
                <MDBIcon fab icon="facebook-f" size="lg" />
              </MDBBtn>
              
             
  
  

    <MDBBtn
      tag="a"
      color="none"
      className="m-1"
      id="social-icon"
      
    >
      <MDBIcon fab icon="google" size="lg" />
    </MDBBtn>

             
            </div>
            <p className="login-p text-center mt-3">or:</p>
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            size="lg"
            
            
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
            size="lg"
          />
          <div id="under-inputs" className="d-flex justify-content-between  mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
              
            />
            <a href="!#" className="underline-link">Forgot password?</a>
          </div>
          <MDBBtn id="login" className="mb-4 w-100 ">Sign in</MDBBtn>
          <p className="login-p text-center">
            Not a member? <a href="#!" className="underline-link" onClick={() => {
      setJustifyActive("tab2");
      tabsRef.current.scrollTo(0, 0); }}
  >
    Register
  </a>
</p>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className="text-center mb-3">
            <p className="login-p">Sign up with:</p>
            <div
              className="d-flex justify-content-between mx-auto"
              id="icon-group"
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                id="social-icon"
              >
                <MDBIcon fab icon="facebook-f" size="lg" />
              </MDBBtn>
             
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                id="social-icon"
              >
                <MDBIcon fab icon="google" size="lg" />
              </MDBBtn>
              
            </div>
            <p className="login-p text-center mt-3">or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" size="lg" />
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
            size="lg"
          />
          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" size="lg" />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
            size="lg"
          />
          <div id="under-inputs"className="d-flex  mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
              wrapperStyle={{color: 'red'}}
            />
          </div>
          <MDBBtn id="login" className="mb-4 w-100 ">Sign up</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
    </div>
  );
}
export default Login;
