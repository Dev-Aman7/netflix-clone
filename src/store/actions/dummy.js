import * as actionTypes from "./types";

export const dummy = (dispatch) => {
    // DB call
    dispatch({
        type: actionTypes.SOME_VALUE,
        payload: {
            headData: ["Name", "Data1", "Data2", "Data3", "Data4"],
            rowData: [
                { food: "Frozen yoghurt", P: 159, C: 6.0, F: 24, G: 4.0 },
                { food: "Ice cream sandwich", P: 237, C: 9.0, F: 37, G: 4.3 },
                { food: "Eclair", P: 262, C: 16.0, F: 24, G: 6.0 },
            ],
        },
    });
};

const d = "d";
export default d;
