import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Avatar} from "../../components/avatar";
import About from "../../components/about";
import {DEFAULT_IMAGE} from "../../utils/CONSTANTS";
import SettingsSide from "../../components/settings-side-panel";
import {ProfileInfo} from "../../utils/data";
import {getProfileData} from "../../utils/helper";

export default function Profile() {
    const [data, setData] = useState<ProfileInfo>();
    const [joinedAtDate, setJoinedAtDate] = useState<string>();

    useEffect(() => {
        getProfileData().then((data) => {
            setData(data);
            let dateObj = new Date(data.createdAt! * 1000);
            let utcString = dateObj.toUTCString();
            setJoinedAtDate(utcString);
        });
    }, []);

    return (
        <div>
            <div className="alert alert-secondary" role="alert">
                <div className="row">
                    <div className="col-4">
                        <Avatar
                            imageUrl={data?.profileImage || DEFAULT_IMAGE}
                        />
                    </div>
                    <div className="col-8">
                        <div>{data?.username}</div>
                        <div>{data?.status}</div>
                        <div>{joinedAtDate}</div>
                        <About name={data?.username || ""} mobile={0} email={""} status={""}/>
                    </div>
                </div>

                <div className="col-md-4">
                    <SettingsSide/>
                </div>
            </div>
        </div>
    );
}
