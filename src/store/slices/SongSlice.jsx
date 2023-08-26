import { createSlice } from "@reduxjs/toolkit";
import { hindiSongs } from "../../interface/Songs";






const SongSlice = createSlice({
    name: "song",
    initialState: 0,
    reducers: {




        nextSong(state, action) {
            state = state + 1;
            if (state === 10) {
                state = 0;
            }
            // audio1.pause();
            return state;
        },
        prevSong(state, action) {
            state = state - 1;
            if (state === -1) {
                state = 9;
            }

            return state;
        },

    },


});

export default SongSlice.reducer;

export const { nextSong, prevSong } = SongSlice.actions;
