const  API_KEY = process.env.API_KEY

export default{
    fetachTrending:{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en_us`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/fetachTopRated?api_key=${API_KEY}&language=en_us`
    }
}