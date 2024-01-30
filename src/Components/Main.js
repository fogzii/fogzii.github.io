import React, {Component} from "react";
import Title from "./Title";
import List from "./List";

class Main extends Component {
    render() {
        return (
            <div>
                <Title title = {'Title here'}/>
                <List tasks = {['A', 'B', 'C']}/>
                <List tasks = {['A', 'B', 'C']}/>
            </div>
        )
    }
}

export default Main