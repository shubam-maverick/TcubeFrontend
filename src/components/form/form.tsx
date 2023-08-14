import {ReactNode} from "react";

export function Form(props: { onSubmit?: Function, children?: ReactNode }) {

    const onFormSubmit = () => {
        console.log("Form Submit");
        props.onSubmit?.();
    }

    return (
        <form className="mx-1 mx-md-4" onSubmit={onFormSubmit}>
            {props.children}
        </form>
    )
}