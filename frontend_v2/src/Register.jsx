import React from "react";
import './stylereg.css'

export default function Register() {
    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add icon library */}
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="stylereg.css" />
        <style dangerouslySetInnerHTML={{ __html: "\n\n" }} />
        <form action="/action_page.php" style={{ maxWidth: 500, margin: "auto" }}>
            <h1>Register to Speak to our friendly Bot!</h1>
            <span className="img_align">
            <img src={require("./cocologorefined.png")} alt="coco_logo" />
            </span>
            <div className="input-container">
            <i className="fa fa-user icon" />
            <input
                className="input-field"
                type="text"
                placeholder="Name"
                name="name"
            />
            </div>
            <div className="input-container">
            <i className="fa fa-user icon" />
            <input
                className="input-field"
                type="text"
                placeholder="Username"
                name="usrnm"
            />
            </div>
            <div className="input-container">
            <i className="fa fa-envelope icon" />
            <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="email"
            />
            </div>
            <div className="input-container">
            <i className="fa fa-key icon" />
            <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="psw"
            />
            </div>

            <div className="input-container">
            <i className="fa fa-key icon" />
            <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                name="psw"
            />
            </div>
            <button type="submit" className="btn">
            Register
            </button>
        </form>
        </>

    );
}