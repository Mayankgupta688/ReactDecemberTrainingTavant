export function RenderEmployeeComponent() {
    var employeeDetails = {
        id: 1,
        name: "Mayank1",
        createdAt: "Today",
        avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    }

    function getTemplate() {

        if(employeeDetails.id % 2 === 0) {
            return (
                <div>
                    <img src={employeeDetails.avatar} alt={employeeDetails.name} />
                    <h1>Employee Id is: {employeeDetails.id}</h1>
                    <h1>Employee Name is: {employeeDetails.name}</h1>
                    <h1>Employee Created On: {employeeDetails.createdAt}</h1>
                </div>
            )
        } else {
            return <h1>No Data Available...</h1>
        }
    }

    return (
        <div>
            { ((employeeDetails.id % 2 === 0 && employeeDetails.name === "TechnoFunnel" ) || employeeDetails.name === "Mayank") && (
                <div>
                    <img src={employeeDetails.avatar} alt={employeeDetails.name} />
                    <h1>Employee Id is: {employeeDetails.id}</h1>
                    <h1>Employee Name is: {employeeDetails.name}</h1>
                    <h1>Employee Created On: {employeeDetails.createdAt}</h1>
                </div>
            )}

            { employeeDetails.id % 2 === 1 && (
                <h1>No Data Available...</h1>
            )}
        </div>
    )
}