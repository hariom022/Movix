import axios from "axios";
// const url = 'https://api.themoviedb.org/3/account/20170010/favorite/tv';

export default axios.create({
     baseURL : 'https://api.themoviedb.org/3/',
     headers : {
      method: 'GET',
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTlkMzg4ODI3MjgyOTViNmZlZmUzNWNlODE3NjQyZSIsInN1YiI6IjY0Yjc5NWFjNWFhZGM0MDBlMjk3ODE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz7XSn3sLOzboYue1aw7W2yw-MmEhrpVGCXIWjG_nCM'
   
    },

})





