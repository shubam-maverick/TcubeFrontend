import {useState} from "react";

export function InputPassword(props: { value: string, onChange?: Function, classes?: string }) {

    const [password, setPassword] = useState(props.value);

    function onPasswordChange(e: any) {
        const val = e.target.value;
        setPassword(password);
        onPasswordChange?.(val);
    }

    return (
        <input type="password" value={password} onChange={onPasswordChange} className={props.classes || ""}/>
    );
}