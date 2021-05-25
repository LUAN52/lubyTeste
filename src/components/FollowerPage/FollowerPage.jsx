import React, { useState, useEffect } from 'react'
import { useData } from '../../context/context';
import { useHistory} from "react-router-dom";
import api from '../../api';
import './FollowerPage.css'


const FollowerPage = () => {

    const [nameF, setNameF] = useState("");
    const [followerF, setFollowerF] = useState(0);
    const [followingF, setFollingF] = useState(0);
    const [bioF, setBioF] = useState("");
    const [imgFollower, setImgFollower] = useState("");
    const { followerProfile } = useData();
    const [loading, setloading] = useState(false);
    const [emailF, setEmailF]= useState("");
    const [locationP,setlocationP] = useState("");
    const [repos,setRepos] = useState(0);
    const[urlFollowerP,setUrlFollowerP] = useState("");
    const[urlFollowing,setUrlFollowing] = useState("");
    const[urlRepoP,setUrlRepoP] = useState("");
    const[loginP,setLoginP] = useState("");
    const [urlStarredP,SetUrlStarredP] = useState("");

    const history = useHistory()
    
    const {setAvatar_url,setBio,
        setEmail,setLocation,
        setFollowers,setFollowing,
        setPublic_repos,setName,
        setRepos_url,setFollowers_url,
        setFollowing_url,setStarred_url,setLogin} = useData()

    
    useEffect(() => {
            const getFollowerProfile = async () => {
            setloading(true);
            const {data} = await api.getAny(followerProfile);
            console.log(data)
            setloading(false);

            if (data) {

                setNameF(data.name);
                setFollowerF(data.followers);
                setFollingF(data.following);
                setBioF(data.bio);
                setImgFollower(data.avatar_url);
                setEmailF(data.email);
                setlocationP(data.location);
                setRepos(data.public_repos);
                setUrlFollowerP(data.followers_url);
                setUrlFollowing(data.following_url);
                setUrlRepoP(data.repos_url);
                SetUrlStarredP(data.starred_url);
                setLoginP(data.login);
                     
            }

        }

        getFollowerProfile();
    },[followerProfile])

    return (

        <div className="outerContainer">
            
            {loading ? <p>carregando</p> :
                <div className="container ">
                    <div className="title">
                        <div>
                            <p className="color">{nameF}</p>
                        </div>
                        <div className="out">
                            <p >Salvar</p>
                            <img  onClick={()=>{
                                setName(nameF);
                                setAvatar_url(imgFollower);
                                setBio(bioF);
                                setEmail(emailF);
                                setFollowing(followerF);
                                setRepos_url(urlRepoP);
                                setFollowers(followerF);
                                setLocation(locationP);
                                setPublic_repos(repos);
                                setFollowers_url(urlFollowerP);
                                setFollowing_url(urlFollowing);
                                setStarred_url(urlStarredP);
                                setLogin(loginP);

                                history.push("/inicio")
                            }}src={process.env.PUBLIC_URL + '/enter3.png'} width="35" height="35" alt="header" />
                        </div>
                    </div>
                    <div className="avatar">
                        <img className="imgAvatar imgAvatarBio" src={imgFollower} width="120" height="120" alt="avatar" />
                    </div>
                    <div className="body bodyTop color">
                        <div className="bioContainer bioContainerTop">
                            <div className="tag" />
                            <h1>{nameF}</h1>
                        </div>
                        <div className="bioInfo">
                            <p>{emailF}</p>
                            <p>{locationP}</p>
                        </div>
                    </div>
                    <div className="contNumber">
                        <div className="number color">
                            <div className="seg">
                                <h1>{followerF}</h1>
                                <p>seguidores</p>
                            </div>
                            <div className="seg">
                                <h1>{followingF}</h1>
                                <p>seguindo</p>
                            </div>

                            <div className="seg">
                                <h1>{repos}</h1>
                                <p>repositórios</p>
                            </div>
                        </div>
                    </div>
                    <div className="body bodyBottom color">

                        <div className="bioContainer">
                            <div className="tag" />
                            <h1>bio</h1>
                        </div>

                        <div className="bioInfo">
                            <p>{bioF}</p>
                        </div>

                    </div>

                </div>
            }
        </div>
    )
}


export default FollowerPage