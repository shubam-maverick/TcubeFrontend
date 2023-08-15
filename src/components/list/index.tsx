import React from "react";

export function List() {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Contacts
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Groups
                    </a>
                </li>
            </ul>
        </div>
    );
}