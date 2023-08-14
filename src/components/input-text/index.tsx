import "bootstrap/dist/css/bootstrap.css";
import {useState} from "react";

export function InputText(props: { value: string, onChange?: Function, classes?: string }) {

    const [value, setValue] = useState(props.value);

    let onInputChange = (e: any) => {
        const val: string = e.target.value;
        console.log(val);
        setValue(val);
        props.onChange?.(val);
    }

    return (
        <input type={"text"} className={props.classes || ""} value={value} onChange={onInputChange}/>
    )
}