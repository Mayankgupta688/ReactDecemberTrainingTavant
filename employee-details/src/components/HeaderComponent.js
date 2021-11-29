import React from "react";

export function HeaderComponent() {

    function getId() {
        return "my_id_" + 10
    }

    return (
        React.createElement("div", { id: getId() }, 
            React.createElement("div", {}, [
                React.createElement("div", {}, [
                    React.createElement("h1", {}, "This is My Header"),
                    React.createElement("h2", {}, "This is Other Header")
                ]),
                React.createElement("div", {}, React.createElement("div", {}, React.createElement("p", {}, "This is Sample Data")))
            ])  
        )
    )
}



