import React from "react";
import { Component } from "react";
import { Menu } from "./components/Menu"
import Routes from "./routes";

export default class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Routes/>
            </div>
        );
    }

}
