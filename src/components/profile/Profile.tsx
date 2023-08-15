import React, {useEffect, useState} from "react";
import {ProfileInfo} from "../../utils/data";


const Profile = () => {
    const [data, setData] = useState<ProfileInfo>();

    useEffect(() => {
        fetch("http://192.168.0.115:8080/profile")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                let dateObj = new Date(data?.createdAt * 1000);
                let utcString = dateObj.toUTCString();
                data.createdAt = utcString;
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <div>
            <div>
                <p>{data?.username}</p>
                <p>Joined on : {data?.createdAt}</p>
            </div>
            <img src={data?.profileImage}/>
        </div>
    )

}
export default Profile;