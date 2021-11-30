import { employeeList } from "../data/employeeList";

export function EmployeeListingComponent(props) {
    props.getData()
    return (    
        <div>
            { employeeList.map((employee) => {
                return (
                    <div className="card" style={{"width": "18rem", display: "inline-block", padding: "5px", "margin": "5px"}}>
                        <img src={employee.avatar} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="card-text"><b>{employee.id}</b>: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <input data-userName="Mayank" type="button" className="btn btn-dark" value="Delete" />
                        </div>
                    </div>
                )
            })}
        </div>
    )

}