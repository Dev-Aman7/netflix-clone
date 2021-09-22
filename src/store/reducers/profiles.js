/* eslint-disable default-case */
/* eslint-disable no-param-reassign */

import produce from "immer";
import user1Image from "../../assets/user1.jpg";

import * as actionTypes from "../actions/types";

const initialState = [
    {
        id: 0,
        name: "Aman",
        image: user1Image,
        language: "English",
        autplayEpisode: true,
        autoplayPreviews: false,
        locked: true,
    },
    {
        id: 1,
        name: "Aman",
        image: user1Image,
        language: "English",
        autplayEpisode: true,
        autoplayPreviews: false,
        locked: false,
    },
    {
        id: 2,
        name: "Aman",
        image: user1Image,
        language: "English",
        autplayEpisode: true,
        autoplayPreviews: false,
        locked: false,
    },
    {
        id: 3,
        name: "Aman",
        image: user1Image,
        language: "English",
        autplayEpisode: true,
        autoplayPreviews: false,
        locked: false,
    },
    {
        id: 4,
        name: "Aman",
        image: user1Image,
        language: "English",
        autplayEpisode: true,
        autoplayPreviews: false,
        locked: true,
    },
];

const reducer = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PROFILE:
            draft.head = action.payload.headData;
            draft.row = action.payload.rowData;
        // console.log('hari',draft)
    }
}, initialState);

export default reducer;
