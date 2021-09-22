import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        top: "50%",
        transform: "translateY(-65%)",
        position: "relative",
    },

    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "80%",
        margin: "auto",
        "& h1": {
            color: theme.palette.white,
            fontSize: "3.5vw",
            fontWeight: "unset",
            margin: "0.67rem 0",
        },
    },
    profiles: {
        display: "flex",
        justifyContent: "center",
        margin: "2rem 0",
        width: "100%",
        "&> div:not(:last-child)": {
            margin: "0 2vw 0 0",
        },
    },
    button: {
        margin: "2rem 0 1rem 0",
        fontSize: "1.2vw",
        textTransform: "uppercase",
        padding: ".5rem 1.5rem",
        letterSpacing: "2px",
        borderRadius: 0,
        background: theme.palette.white,
        color: theme.palette.black,
        "&:hover": {
            color: theme.palette.white,
            background: theme.palette.red,
        },
    },
}));
export default useStyles;
