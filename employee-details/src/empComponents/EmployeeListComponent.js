import { employeeList } from "../data/employeeList";
import { EmployeeDetailsComponent } from "./EmployeeDetailsComponent";

export function EmployeeListComponent(props) {
    var employeeData = employeeList;

    function deleteEmployee(empId) {
        alert("List will delete Employee: " + empId)
        employeeData = employeeData.filter((emp) => {
            return emp.name + "_" + emp.id !== empId
        });
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