import { EmployeeDetailsComponent } from "./EmployeeDetailsComponent";
import React from "react";

import Axios from "axios";

export class EmployeeListComponent extends React.Component {  

    constructor() {
        debugger;
        super();

        this.state= {
            employeeData: []
        }

        var dataPromise = Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login")
        
        dataPromise.then((responseData) => {
            this.setState({
                employeeData: responseData.data
            })
        })  
    }

    deleteEmployee = (empId) => {
        debugger;
        alert("List will delete Employee: " + empId)
        var newEmployeeList = this.state.employeeData.filter((emp) => {
            return emp.name + "_" + emp.id !== empId
        });

        this.setState({
            employeeData: newEmployeeList
        })
    }


    render() {
        debugger;
        return (    
            <div>
                { this.state.employeeData.map((employee) => {
                    return (
                        <EmployeeDetailsComponent deleteEmployee={this.deleteEmployee} employee={employee}></EmployeeDetailsComponent>
                    )
                })}
            </div>
        )
    }
}