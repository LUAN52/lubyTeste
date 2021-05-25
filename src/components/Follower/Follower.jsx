import React, { useState, useEffect } from 'react';
import {useData} from '../../context/context';
import {useHistory} from "react-router-dom";
import api from '../../api';
import './Follower.css';


const Follower = () => {
    const { followers_url,setFollowerProfile} = useData();
    const [follower, setFollower] = useState([])
    const [loading, setLoading] = useState(false);

    ;
    const history = useHistory();
  
    useEffect(() => {
        const getFollowers = async () => {
            setLoading(true);
            
           
            
            let {data} = await api.getAny(followers_url)
            setLoading(false);

            if (data) {
                console.log(data);
                setFollower(data);
            }
        }

        getFollowers();

    }, [followers_url])


    return (
        <div className="outContainer">
            <div className="container">
                <div className="titleRepo">
                    <h1>Seguidores </h1>
                </div>

                {loading ? <p>carregando</p> :

                    <div className="listRepo">

                        {follower.map((item, index) => {

                            return (
                                <div key={index} className="containerRepo">

                                    <div className=" followers">
                                        
                                        <div className="contFollower">
                                            <div className="tag tagFollower"></div>
                                            <img className="imgAvatar imgFollower " src={item.avatar_url} width="120" height="120" alt="avatar" />
                                            <h3 className="nameFollower">{item.login}</h3>
                                            </div>
                                        <div className="followerLink">
                                                <img onClick={()=>{
                                                    setFollowerProfile(item.url);
                                                    history.push('/seguidor');

                                                }}src={process.env.PUBLIC_URL + '/setaB.png'} width="55" height="55" alt="header" />
                                            
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                }

            </div>

        </div>
    )

}

export default Follower
