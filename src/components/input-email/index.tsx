import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";

export function InputEmail(props: { value: string, onChange?: Function, classes?: string }) {

    const [email, setEmail] = useState(props.value);

    function onEmailChange(e: any) {
        const val = e.target.value;
        console.log("Email val ", val);
        setEmail(val);
        props.onChange?.(val);
    }

    return (
        <input type="email" className={props.classes || ""} value={email} onChange={onEmailChange}  />
    );
}