import * as React from 'react';

export default function Avatar(props: { imageUrl: string }) {
    return (
        <img src={props.imageUrl} alt="avatar"
             className="rounded-circle img-fluid"/>
    );
}
