import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "auto",
        color: theme.palette.white,
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "27rem",
    },
    title: { fontSize: "4vw", margin: 0, fontWeight: theme.bold4 },
    meta: {
        display: "flex",
        justifyContent: "flex-start",
        color: theme.palette.primary.main,
        "&> div": {
            margin: "1.5vw 0 0 0",
            borderTop: "1px solid #333",
            padding: "1.5vw 0 0 0",
        },
    },
    avatar: {
        width: "8vw",
        maxWidth: "12rem",
        marginRight: "1.5vw",
    },
    details: {
        // width: "23rem",
        flexGrow: 1,
        "&> div": {
            margin: "1.5vw 0 0 0",
            borderTop: "1px solid #333",
            padding: "1.5vw 0 0 0",
        },
    },
    contained: {
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
        marginRight: "2rem",
    },
    outlined: {
        margin: "2rem 0 1rem 0",
        fontSize: "1.2vw",
        textTransform: "uppercase",
        padding: ".5rem 1.5rem",
        letterSpacing: "2px",
        borderRadius: 0,
        "&:hover": {
            color: theme.palette.white,
            borderColor: theme.palette.white,
        },
    },
    name: {
        height: "2rem",
        background: theme.palette.darkGrey,
        border: "1px solid transparent",
        margin: "0 .8rem 0 0",
        color: theme.palette.white,
        fontSize: "1.3vw",
        width: "100%",
    },
    select: {
        color: theme.palette.white,
        width: "8rem",
    },
    sec1: {
        "& h3": {
            marginBottom: "0.2rem",
        },
    },
    // sec2: {
    //     margin: "1.5vw 0 0 0",
    //     borderTop: "1px solid #333",
    //     padding: "1.5vw 0 0 0",
    // },
}));
export default useStyles;
