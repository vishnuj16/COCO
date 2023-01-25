import React from "react";
import './stylelog.css'

class Login extends React.Component {
    render() {
        return (
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Add icon library */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <link rel="stylesheet" href="stylelog.css" />
            <style dangerouslySetInnerHTML={{ __html: "\n\n" }} />
            <form action="/action_page.php" style={{ maxWidth: 500, margin: "auto" }}>
                <h1>Login Form</h1>
                <span className="imgalign">
                <img src={require("./cocologorefined.png")} alt="coco_logo" />
                </span>
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
                <i className="fa fa-key icon" />
                <input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    name="psw"
                />
                </div>
                <button type="submit" className="btn">
                Login
                </button>
                <br />
                <label>
                <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
                Remember me
                </label>
                <span className="psw">
                Forgot <a href="#">password?</a>
                </span>
            </form>
            </>

        );
    }
}

export default Login;