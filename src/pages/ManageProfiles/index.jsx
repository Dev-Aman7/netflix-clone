import React, { useState } from "react";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import HomeLayout from "../../components/Layouts/Home";

import Profile from "../../atoms/Profile";
import EditProfile from "../../components/EditProfile";

import { ManageProfile } from "../../projectSettings/constants";

import useStyles from "./style";

const Index = () => {
    const [editMode, setEditMode] = useState(true);
    const classes = useStyles();
    const profiles = useSelector((state) => state.profiles);
    const { title, button } = ManageProfile;
    const toggleMode = () => {
        setEditMode((mode) => !mode);
    };
    const updateHandler = (ind) => {
        console.log("i m in index", ind);
        toggleMode();
    };
    return (
        <HomeLayout>
            {editMode ? (
                <EditProfile />
            ) : (
                <div className={classes.container}>
                    <div className={classes.content}>
                        <h1>{title}</h1>
                        <div className={classes.profiles}>
                            {profiles.map((elem, ind) => {
                                return (
                                    <Profile
                                        name={elem.name}
                                        image={elem.image}
                                        locked={elem.locked}
                                        edit
                                        onClick={() => updateHandler(ind)}
                                        key={elem.id}
                                    />
                                );
                            })}
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            {button}
                        </Button>
                    </div>
                </div>
            )}
        </HomeLayout>
    );
};

export default Index;
