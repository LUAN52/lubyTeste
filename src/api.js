import axios from 'axios';


const getUser=(user)=>
{
    return axios.get(`https://api.github.com/users/${user}`);
}




const getFollowing = (user)=>
{
    return axios.get(`https://api.github.com/users/${user}/following`)
}

const getAny = (url)=>
{
    return axios.get(url);
}



let methods =
{
    getUser: getUser,

    getFollowing: getFollowing,

    getAny:getAny
}


export default methods

 

