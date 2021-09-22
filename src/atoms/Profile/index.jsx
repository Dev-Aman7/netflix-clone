import React, { useState } from "react";
import PropTypes from "prop-types";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EditIcon from "@material-ui/icons/Edit";

import useStyles from "./style";

const Profile = ({ name, locked, edit, ...restProps }) => {
    const [highlight, setHighlight] = useState(false);
    const classes = useStyles(restProps);
    return (
        <div {...restProps} className={classes.container}>
            <div
                className={[classes.main, highlight && classes.highlight].join(
                    " "
                )}
                onMouseEnter={() => setHighlight(true)}
                onMouseLeave={() => setHighlight(false)}
            >
                <div className={classes.image_wrapper}>
                    <div
                        className={[
                            classes.image,
                            highlight && classes.image_border,
                            edit && classes.edit_profile,
                        ].join(" ")}
                    />
                    {edit && (
                        <div className={classes.edit_icon}>
                            <EditIcon />
                        </div>
                    )}
                </div>

                <div className={classes.name}>{name}</div>
            </div>
            {locked && (
                <div className={classes.lock}>
                    <LockOutlinedIcon />
                </div>
            )}
        </div>
    );
};
Profile.defaultProps = {
    locked: false,
    edit: false,
};
Profile.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    locked: PropTypes.bool,
    edit: PropTypes.bool,
};
export default Profile;
