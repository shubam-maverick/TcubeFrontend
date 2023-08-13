 import * as React from 'react';
 import "./style.css";
 
 export default function Avatar(props: {imageUrl:string, name : string}) {
   return (
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src={props.imageUrl} alt="avatar"
              className="rounded-circle img-fluid"  />
            <h5 className="my-3">{props.name}</h5>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">Follow</button>
              <button type="button" className="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
    
   );
 }
