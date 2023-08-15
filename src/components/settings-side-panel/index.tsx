import React from "react";


export default function SettingsSide() {
    return (
        <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">Settings</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-github fa-lg"></i>
                        <p className="mb-0">Edit Profile</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-twitter fa-lg"></i>
                        <p className="mb-0">Some option</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-instagram fa-lg"></i>
                        <p className="mb-0">anOTHER OPTION</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-facebook-f fa-lg"></i>
                        <p className="mb-0">OPtions hi options</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}