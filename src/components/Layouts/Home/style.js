import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background,
        height: "100vh",
        width: "100%",
    },
    header: {
        height: "5rem",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
    },
    logo: {
        width: "6rem",
        height: "2rem",
    },
}));
export default useStyles;
