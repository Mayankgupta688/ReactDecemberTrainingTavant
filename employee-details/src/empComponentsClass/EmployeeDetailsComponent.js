export function EmployeeDetailsComponent(props) {

    function buttonClicked(event) {
        alert("Employee to be deleted: " + event.target.id)
        props.deleteEmployee(event.target.id)
    }

    return (
        <div className="card" style={{"width": "18rem", display: "inline-block", padding: "5px", "margin": "5px"}}>
            <img src={props.employee.avatar} className="card-img-top" alt={"Image Not Available for " + props.employee.name} />
            <div className="card-body">
                <h5 className="card-title">Name: {props.employee.name}</h5>
                <p className="card-text"><b>{props.employee.id}</b>: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input id={props.employee.name + "_" + props.employee.id} type="button" className="btn btn-dark" value="Delete" onClick={buttonClicked} onClick={buttonClicked} />
            </div>
        </div>
    )
}