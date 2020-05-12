import React, { useState } from "react";
import Button from "../../../components/Button"
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    const logout = () => {
        localStorage.removeItem("cwcToken");
        props.history.push("/login");
    }
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div>
            <Button onClick={create}>Create room</Button>
            <Button onClick={logout}>Logout</Button>
        </div>

    );
};

export default CreateRoom;