import React from "react";
import PropTypes from "prop-types";

import Logo from "../../../assets/logo.svg";

import useStyles from "./style";

const Index = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <img src={Logo} className={classes.logo} alt="logo" />
            </header>
            {children}
        </div>
    );
};
Index.propTypes = {
    children: PropTypes.element.isRequired,
};
export default Index;
