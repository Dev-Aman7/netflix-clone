/* eslint-disable default-case */
/* eslint-disable no-param-reassign */

import produce from "immer";

import * as actionTypes from "../actions/types";

const initialState = { head: [], row: [] };

const reducer = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SOME_VALUE:
            draft.head = action.payload.headData;
            draft.row = action.payload.rowData;
        // console.log('hari',draft)
    }
}, initialState);

export default reducer;
