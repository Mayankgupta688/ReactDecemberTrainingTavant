import React, { useState } from "react";
import { employeeList } from "../data/employeeList";
import { EmployeeDetailsComponent } from "./EmployeeDetailsComponent";


export default function EmployeeListComponent(props) {
    var [employeeData, setEmployeeData] = useState(employeeList);

    function deleteEmployee(empId) {
        alert("List will delete Employee: " + empId)
        var deletedEmployeeList = employeeData.filter((emp) => {
            return emp.name + "_" + emp.id !== empId
        });

        setEmployeeData(deletedEmployeeList);
    }

    return (    
        <div>
            { employeeData.map((employee) => {
                return (
                    <EmployeeDetailsComponent deleteEmployee={deleteEmployee} employee={employee}></EmployeeDetailsComponent>
                )
            })}
        </div>
    )
}