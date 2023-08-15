import React, {useState} from "react";
import {Form, FormField} from "../../components/form";
import {InputEmail} from "../../components/input-email";
import {InputPassword} from "../../components/input-password";
import "./styles.css";
import Card from "../../components/card";
import { Avatar } from "../../components/avatar";
import { Button } from "../../components/button";
import {signUp} from "../../utils/helper";
import Banner from "../../components/banner";



export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisibility] = useState(false);

    const onSubmit = () => {
        setVisibility(false);
        signUp(email,password);
    }

    const onError = () => {
        console.log("error");
        setVisibility(true);
    }

    const validation = (email : string)=>{
        const valid = String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
          if(valid){
            return true;
          }
          else{
            return false;
          }
    }

    return (
      <div className={"signup"}>
        <Card classes={"signup-form col-md-8"}>
          <div className="row">
            <div className="col-md-8">
              <Form onSubmit={onSubmit}>
                <FormField label={"Email"}>
                  <InputEmail
                    value={email}
                    onChange={(val: string) => setEmail(val)}
                    classes={"form-control"}
                  />
                </FormField>
                <FormField label={"Password"}>
                  <InputPassword
                    value={password}
                    onChange={(val: string) => setPassword(val)}
                    classes={"form-control"}
                  />
                </FormField>
              </Form>
             {visible && <Banner/>}
            </div>

            <div className={"col-md-4"}>
              <Avatar
                imageUrl={
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                }
              />
            </div>
          </div>
          <Button
            label={"Sign up"}
            onClick={validation(email) ? onSubmit : onError}
            classes={"col-md-8"}
          />
        </Card>
      </div>
    );
}
