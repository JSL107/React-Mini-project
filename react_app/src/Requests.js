const API_KEY = `c4a1ba2653e79df9327807afc6a9fdc5`;

// const person_id = 'https://api.themoviedb.org/3/person/popular?api_key=c4a1ba2653e79df9327807afc6a9fdc5&language=ko&page=1';
// const person_id = 66633;
const requests = {
    // https://api. ~~ 이런게 빠져있는 상태
    // person_id : ``,
    // fetchNeflixOriginals: `/discover/tv?api_key=${API_KEY}& with_networks=213`,
    // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko`,
    fetchId : `search/movie?api_key=${API_KEY}&query=Jack+Reacher`,
    fetchPerson : `/person/{person_id}/images=${API_KEY}&&language=ko&page=1`,
}

export default requests;