import InputEmail from "../../components/input-email/index.tsx";
import InputPassword from "../../components/input-password";
import Button from "../../components/button";
import React from "react";

export default function Login() {

    let submit = () => {
        // post call for login
    }

    return (
        <div>
            Login
            <InputEmail/>
            <InputPassword/>
            <Button/>
        </div>
    )
}