import axios from 'axios'
 
export default class Service{

    getVideos(id){
        console.log("Videos");
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
        return axios.get(url).then(response => response.data)
    }

    getCast(id){
        console.log("Videos");
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
        return axios.get(url).then(response => response.data)
    }


    getRecommended(id){
        console.log("Videos");
        const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
        return axios.get(url).then(response => response.data)
    }


    getSimilar(id){
        console.log("Videos");
        const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
        return axios.get(url).then(response => response.data)
    }
}