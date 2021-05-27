import axios from 'axios';


const getUser=(user)=>
{
    return axios.get(`https://api.github.com/users/${user}`);
}


const getAny = (url)=>
{
    return axios.get(url);
}



let methods =
{
    getUser: getUser,

    getAny:getAny
}


export default methods

 

