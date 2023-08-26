import { configureStore } from "@reduxjs/toolkit";
import SongSlice from "./slices/SongSlice";
import FavSongSlice from "./slices/FavSongSlice";
const store = configureStore({
    reducer: {
        songs: SongSlice,
        favSong: FavSongSlice,
    },

});

export default store;