import React from "react";

import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import "./style.css";

import useStyles from "./style";

const Index = () => {
    const classes = useStyles();
    const selectHandler = () => {
        console.log("chnage");
    };
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Edit Profile</h1>
            <div className={classes.meta}>
                <div className={classes.avatar}>image</div>
                <div className={classes.details}>
                    <div className={classes.sec1}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            className={classes.name}
                            value="aman"
                        />
                        <h3>Language:</h3>
                        <Select
                            id="standard-select-currency"
                            value="English"
                            onChange={selectHandler}
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                },
                                getContentAnchorEl: null,
                            }}
                            className={classes.select}
                        >
                            <MenuItem key="English" value="English">
                                English
                            </MenuItem>
                            <MenuItem key="Hindi" value="Hindi">
                                Hindi
                            </MenuItem>
                        </Select>
                    </div>

                    <div className={classes.sec2}>
                        <LockOutlinedIcon /> Profile Lock is <span>ON</span>
                    </div>
                    <div>
                        <h2>Maturity Settings:</h2>
                        <div>ALL MATURITY RATINGS</div>
                        <div>
                            Show titles of <span>all maturity ratings</span> for
                            this profile
                        </div>
                        <Button variant="outlined">EDIT</Button>
                    </div>
                    <div>
                        <h2>Autoplay controls</h2>
                        <div>
                            <Checkbox
                                checked
                                onChange={() => {
                                    console.log("change");
                                }}
                                inputProps={{
                                    "aria-label": "primary checkbox",
                                }}
                            />
                            Autoplay next episode in a series on all devices.
                        </div>
                        <div>
                            <Checkbox
                                checked
                                onChange={() => {
                                    console.log("change");
                                }}
                                inputProps={{
                                    "aria-label": "primary checkbox",
                                }}
                            />
                            Autoplay previews while browsing on all devices.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Button variant="contained" className={classes.contained}>
                    Save
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.outlined}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default Index;
