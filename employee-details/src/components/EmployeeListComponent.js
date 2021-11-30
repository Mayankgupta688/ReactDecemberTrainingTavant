export function EmployeeListComponent() {

    var employeeList = [{
        name: "Mayank",
        age: 10,
        department: "Finance"
    }, {
        name: "TechnoFunnel",
        age: 2,
        department: "IT"
    }, {
        name: "Meha",
        age: 21,
        department: "IT"
    }];

    return (
        <div>
            <h1>This is the Employee List For TechnoFunnel</h1>
            { 
                employeeList.map((employee) => {
                    if(employee["department"] === "IT") {
                        return (
                            <div>
                                <h1>Employee Name: {employee.name}</h1>
                            </div>
                        )
                    } else {
                        return (
                            <h1>Employee Not an IT Developer</h1>
                        )
                    }
                })
            }
        </div>
    )
}
 
// To Do:

// 1. Higher Order Functions
// 2. Department Selection