export function EmployeeListComponent() {

    var employeeList = [{
        name: "Mayank",
        age: 10
    }, {
        name: "TechnoFunnel",
        age: 2
    }]

    return (
        <div>
            { employeeList.map((employee) => {
                return (
                    <div>
                        <div>Name: {employee.name}</div>
                        <div>Age: {employee.age}</div><br/><hr/>
                    </div>
                )
            }) }
        </div>
    )
}