import React from "react";

export class GetCurrentTimeComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            name: "Mayank",
            counter: 0,
            currentTime: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
        }

        setInterval(() => {
            debugger;
            this.setState({
                name: "Mayank",
                currentTime: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
                counter: this.state.counter + 1
            })

            console.log(this.state.currentTime);
        }, 1000)
    }

    render() {
        debugger;
        return (
            <div>
                <h1>The User Name is {this.state.name}</h1>
                <h2>The Current Time is: {this.state.currentTime}</h2>
                <h3>The Current Counter is: {this.state.counter}</h3>
            </div>
        )
    }
}