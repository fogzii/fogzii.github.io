import React, {Component} from "react";

class SubHeading extends Component {
    render() {
        return (
            <h2 className="sub-heading"> {this.props.subHeading} </h2>
        )
    }
}

export default SubHeading;