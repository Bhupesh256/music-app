import { createSlice } from "@reduxjs/toolkit";
import { hindiSongs } from "../../interface/Songs";

const FavSongSlice = createSlice({
    name: "favSong",
    initialState: [],
    reducers: {
        addSong(state, action) {

            state.push(hindiSongs[action.payload].name);

        },
        removeSong(state, action) {

            state.splice(action.payload, 1);
            // state.filter(s=>s !=action.payload);

        },

    },



});

export default FavSongSlice.reducer;
export const { addSong, removeSong } = FavSongSlice.actions;