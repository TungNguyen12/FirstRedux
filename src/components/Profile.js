import React from "react";
//THE HOOK going to be using to grab the state of our hook
import { useSelector } from "react-redux/es/hooks/useSelector";

function Profile() {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value)

    return (
        <div>
            <h1 style={{color: themeColor}}>Profile page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;
