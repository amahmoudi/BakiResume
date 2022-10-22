import React from "react";
import Navigation from "./Navigation.js";
import config from "../config";

export default function Header() {
    return (
        <div>
            <header id="headerClass">
                <h6>V{config.VERSION}</h6>
                <img
                    src={"./img/logo.jpg"}
                    alt="Abdel Baki"
                    id="imgLogo"
                    className="float-end ms-3 rounded"
                />
            </header>
            <Navigation />
            <figure id="headerClass" >
            </figure>
        </div>
    );
}