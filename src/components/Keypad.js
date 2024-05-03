// Code Keypad Component Here
import React from "react";

function Keypad (){
    const handleSubmit=(event) => {
        event.preventDefault()
        console.log("Entering password...")

    }

    return (
        <div>
            <label>Passcode
                <input onChange={handleSubmit}
                id="passcode"
                type="password"
                placeholder="***"
                />
            </label>
        </div>
    )
}

export default Keypad;