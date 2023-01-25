import React from "react";
import './style.css'

export default function Main() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <title>COCO</title>
            <div className="center">
                <input
                type="button"
                className="button"
                onclick="return change(this)"
                defaultValue="Let's talk"
                />
            </div>
            <div className="wrapper">
                <div className="box1" id="qna">
                User Question
                </div>
                <div className="box2" id="qna">
                Coco's Reply{" "}
                </div>
            </div>
            </>

    );
}