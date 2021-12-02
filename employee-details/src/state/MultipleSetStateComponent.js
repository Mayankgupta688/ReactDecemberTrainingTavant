import React from "react";

export class MultipleSetStateComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            name: "Mayank",
            count: 0
        }
    }

    updateCount = () => {
        debugger;
        this.setState({
            count: this.state.count + 1
        }, () => {
            this.setState({
                count: this.state.count + 1
            }, () => {
                this.setState({
                    count: this.state.count + 1
                }, () => {
                    this.setState({
                        count: this.state.count + 1
                    })
                })
            })
        })

        
    }

    render() {
        debugger
        console.log("Render Called")
        return (
            <div>
                <h1>The Name is {this.state.name}</h1>
                <h2>Counter: {this.state.count}</h2>
                <input type="button" onClick={this.updateCount} value="Update Count"/>
            </div>
        )
    }

    componentDidMount() {
        debugger;
        this.setState({
            name: "Anshul"
        })
    }
}