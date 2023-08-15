import React, {ReactNode} from "react";
import "bootstrap/dist/css/bootstrap.css";

export function FormField(props: { label: string, children: ReactNode }) {
    return (
        <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
                {props.children}
                <label className="form-label" htmlFor="form3Example1c">
                    {props.label}
                </label>
            </div>
        </div>
    )
}