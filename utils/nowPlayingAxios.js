import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/now_playing?api_key=67794447e30bbe1db4cc58b528b5b34a"
});


export default instance;