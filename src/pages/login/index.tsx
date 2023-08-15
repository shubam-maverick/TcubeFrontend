import {InputEmail} from "../../components/input-email";
import {InputPassword} from "../../components/input-password";
import {Button} from "../../components/button";
import "./style.css";
import React from "react";

export default function Login() {

    let submit = () => {
        // post call for login
    }

    return (
        <section className="vh-100 background-full">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <InputEmail value={""}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <InputPassword value={""}/>
                                </div>


                                <div className="form-check d-flex justify-content-start mb-4">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3"/>
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember
                                        password </label>
                                </div>

                                <Button label={"Login"} onClick={submit}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}