import React, {useState} from "react";
import {Form, FormField} from "../../components/form";
import {InputEmail} from "../../components/input-email";
import {InputPassword} from "../../components/input-password";
import "./styles.css";


export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        console.log("Sign Up Form called");
    }

    return (
        <div className={"signup"}>

            <div className={"signup-form"}>
                <Form onSubmit={onSubmit}>
                    <FormField label={"Email"}>
                        <InputEmail value={email} onChange={(val: string) => setEmail(val)} classes={"form-control"}/>
                    </FormField>
                    <FormField label={"Your Name"}>
                        <InputPassword value={password} onChange={(val: string) => setPassword(val)}
                                       classes={"form-control"}/>
                    </FormField>
                </Form>
            </div>


            <div className={"signup-image"}>
                <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"}/>
            </div>

        </div>
    );
}
