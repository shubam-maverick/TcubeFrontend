import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";

export function InputPassword(props: { value: string, onChange?: Function, classes?: string }) {

    const [password, setPassword] = useState(props.value);

    function onPasswordChange(e: any) {
        const val = e.target.value;
        console.log("password val ", val);
        setPassword(val);
        props.onChange?.(val);
    }

    return (
        <input type="password" value={password} onChange={onPasswordChange} className={props.classes || ""}/>
    );
}