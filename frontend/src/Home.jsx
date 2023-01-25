import React from "react";
import './styles.css'

export default function Home() {
    return (

        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="styles.css" />
          <title>COCO</title>
          <span className="imgalign">
            <img src={require("./cocologorefined.png")} alt="coco_logo" />
          </span>
          <div className="motoalign">Your Favourite</div>
          <div className="motoalign1">Personal Assistant</div>
          <button id="myButtonlog" className="button-63">
            Login
          </button>
          <button id="myButtonreg" className="button-631">
            Register
          </button>
        </>
  
      );
}
