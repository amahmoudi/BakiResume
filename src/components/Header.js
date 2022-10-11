import React from "react";
import Navigation from "./Navigation.js";
import config from "../config";

export default function Header() {
    return (
        <div>
            <header id="headerClass">
                <img
                    src={"./img/logo.jpg"}
                    alt="Abdel Baki"
                    id="imgLogo"
                    className="float-end ms-3 rounded"
                />
            </header>
            <Navigation />
            <figure id="headerClass" >
                <h4> Version {config.VERSION}</h4>
            </figure>
        </div>
    );
}