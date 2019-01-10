import React, { Component } from "react";

export default class DishDetail extends Component {
    render() {
        const { dish } = this.props;
        if (dish) {
            return (
                <div className="row"></div>
            )
        } else {
            return <div></div>;
        }
    }
}
