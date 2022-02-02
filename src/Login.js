import React from "react";
import GoogleLogin from "react-google-login";

function Login({setActiveCard}) {
    const responseGoogleSuccess = response => {
        console.log(response);
        console.log("success");

        setActiveCard('SecondCard');
    };

    const responseGoogleError = response => {
        console.log(response);
        setActiveCard('FirstCard');
    };

    function loginRedirect() {
        //window.location.href = "http://localhost:8080/login";
        setActiveCard("SecondCard");
    }

    return (
        <div>
           <button onClick={loginRedirect}>
               LOGIN
           </button>
        </div>
    );
}

export default Login;