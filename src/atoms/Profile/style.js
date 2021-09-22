import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        container: {
            maxWidth: "10rem",
            maxHeight: "15rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: theme.palette.primary.main,
        },
        highlight: {
            color: theme.palette.highlight,
            borderColor: theme.palette.highlight,
        },
        image_wrapper: {
            position: "relative",
        },
        image_border: {
            borderColor: `${theme.palette.highlight} !important`,
        },
        image: {
            width: "10vw",
            height: "10vw",
            border: ` .25rem solid transparent `,
            borderRadius: ".25rem",
            backgroundImage: (props) => {
                return `url(${props.image})`;
            },
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            "&:hover": {
                borderColor: theme.palette.highlight,
            },
        },

        name: {
            margin: "1rem auto",
            textAlign: "center",
        },
        edit_profile: {
            opacity: 0.5,
        },
        edit_icon: {
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vw",
            width: "10vw",
            color: theme.palette.white,
            top: 0,
            cursor: "pointer",
        },
    };
});

export default useStyles;
