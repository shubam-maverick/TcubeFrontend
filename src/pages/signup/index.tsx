import {Form, FormField} from "../../components/form/index.tsx";
import {InputEmail} from "../../components/input-email/index.tsx";
import {InputPassword} from "../../components/input-password/index.tsx";
import {useState} from "react";

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Form onSubmit={() => {
            console.log("Sign Up Form called")
        }}>
            <FormField label={"Email"} classes={"form-control"}>
                <InputEmail value={email} onChange={(val) => setEmail(val)} classes={"form-control"}/>
            </FormField>
            <FormField label={"Your Name"}>
                <InputPassword value={password} onChange={(val) => setPassword(val)} classes={"form-control"}/>
            </FormField>
        </Form>
    );
}
