import React from "react"
export default function UpdateEmployeeHooksComponent() {
    var [userDetails, setUserDetails] = React.useState({
        name: "Mayank",
        age: 10,
        designation: "Developer",
        salary: 1000
    })

    function updateData(event) {
        if(event.target.name === "name") {
            setUserDetails({
                ...userDetails,
                name: "Anshul"
            })
        }

        if(event.target.name === "age") {
            setUserDetails({
                ...userDetails,
                age: userDetails.age + 1
            })
        }

        if(event.target.name === "designation") {
            setUserDetails({
                ...userDetails,
                designation: "Senior Developer"
            })
        }

        if(event.target.name === "salary") {
            setUserDetails({
                ...userDetails,
                salary: 2000
            })
        }
    }

    return (
        <div>
            <h1>Employee Name is {userDetails.name}</h1>
            <h1>Employee age is {userDetails.age}</h1>
            <h1>Employee designation is {userDetails.designation}</h1>
            <h1>Employee salary is {userDetails.salary}</h1><br/>

            <input type="button" name="name" value="Update Name" onClick={updateData} /><br/><br/>
            <input type="button" name="age" value="Update Age" onClick={updateData} /><br/><br/>
            <input type="button" name="designation" value="Update Designation" onClick={updateData} /><br/><br/>
            <input type="button" name="salary" value="Update Salary" onClick={updateData} /><br/><br/>   
        </div>
    )
}