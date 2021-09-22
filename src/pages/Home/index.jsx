import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import HomeLayout from "../../components/Layouts/Home";

import Profile from "../../atoms/Profile";

import { Home } from "../../projectSettings/constants";

import useStyles from "./style";

const Index = () => {
    const classes = useStyles();
    const profiles = useSelector((state) => state.profiles);
    const { title, button } = Home;

    return (
        <HomeLayout>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h1>{title}</h1>
                    <div className={classes.profiles}>
                        {profiles.map((elem) => {
                            return (
                                <Profile
                                    name={elem.name}
                                    image={elem.image}
                                    locked={elem.locked}
                                    key={elem.id}
                                />
                            );
                        })}
                    </div>
                    <Link to="/ManageProfiles">
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                        >
                            {button}
                        </Button>
                    </Link>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Index;
