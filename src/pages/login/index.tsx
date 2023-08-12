import {InputEmail} from "../../components/input-email";
import {InputPassword} from "../../components/input-password";
import {Button} from "../../components/button";

export function Login() {

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