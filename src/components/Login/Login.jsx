import React, { useState } from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";
import api from '../../api'
import {useData} from '../../context/context'


const Login = () => {

    const [input, setInput] = useState("");
    const [error, setError] = useState(false)
    const [messageError,setMessageError] = useState("")

    const {setAvatar_url,setName,
    setFollowing,setFollowers,
    setPublic_repos,setRepos_url,
    setFollowers_url,setBio,
    setLogin,setLocation,
    setEmail,setCompany,
    setPublic_gist,setStarred_url,
    setFollowing_url} = useData();
    
    const history = useHistory();

    const errorM=(msg)=>
    {
        setError(true);
        setMessageError(msg);
    }

    const getData=async(user)=>
    {

        let {data} = await api.getUser(user);

        if(data)
        {
            console.log(data)
            setFollowers(data.followers);
            setFollowing(data.following);
            setAvatar_url(data.avatar_url);
            setPublic_repos(data.public_repos);
            setName(data.name);
            setRepos_url(data.repos_url);
            setFollowers_url(data.followers_url);
            setBio(data.bio);
            setLocation(data.location);
            setLogin(data.login);
            setEmail(data.email);
            setCompany(data.company);
            setStarred_url(data.starred_url);
            setPublic_gist(data.public_gist);
            setFollowing_url(data.following_url);
            
        }

        else{
            setError(true);
            setMessageError("usuario nao encontrado");
        }

    }
    
    return <><div className="outerContainer">

        <div className="cont">

            <img className="img" src={process.env.PUBLIC_URL + '/logoGit.png'} width="95" height="95" alt="logo-git" />

            <form className="form" >
                {error ? <p className="error">{messageError}</p> : null}
                <input placeholder="usuário" onChange={(e) => {
                    if (error) {
                        setError(false);
                    }
                    setInput(e.target.value);
                }} />


            </form>

            <button  type="submit" onClick={(e) => {
                 e.preventDefault();

                if(input==="")
                {
                    errorM("campo em branco");
                }
                else{
                
                getData(input)
                .then(resp=>{
                    history.push('/inicio');
                })
                .catch(err=>{
                    errorM("usuario nao encontrado");
                })
            }
           
                           

            }}
                className="button">Entrar
                 <img className="imgButton" src={process.env.PUBLIC_URL + '/seta.png'} width="20" height="20" alt="seta"
                /></button>

        </div>
   

    </div>


    </>


}


export default Login