import { useState } from "react";

export default function IncrementCounterComponent() {
    debugger
    var [counter, setCounter] = useState(0);

    setTimeout(() => {
        setCounter(counter +  1)
    }, 1000)

    return (
        <h1>The counter value is {counter}</h1>
    )
}