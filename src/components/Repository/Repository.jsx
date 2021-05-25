import React, { useState, useEffect } from 'react';
import api from '../../api';
import './Repository.css';
import { useData } from '../../context/context';

const Repository = () => {


    const { repos_url,public_repos} = useData();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
   


    useEffect(() => {
        const getRepos = async () => {
            setLoading(true);
            let { data } = await api.getAny(repos_url)
            setLoading(false);

            if (data) {
                console.log(data);
                setRepos(data);
            }
        }
        getRepos();
    }, [repos_url])

    return (
        <div className="outContainer">
            <div className="container">
                <div className="titleRepo">
                    <h1> {public_repos} Repositórios </h1>
                </div>

                {loading ? <p>carregando</p> :

                    <div className="listRepo">
                        {repos.map((item, index) => {
                            return (
                                <div key={index} className="containerRepo">
                                    <div className="tag tagRepo"></div>
                                    <div className="infoPerson infoPersonRepo">
                                        <h5>{item.name}</h5>
                                        <p>{item.description}</p>
                                        <div className="iconContainer">
                                            <div className="icons">
                                                <div className="iconStar">
                                                    <img src={process.env.PUBLIC_URL + '/estrelaNova.png'} width="35" height="35" alt="header" />
                                                    <p>{item.stargazers_count}</p>
                                                </div>
                                                <img src={process.env.PUBLIC_URL + '/cadeadoInvert.png'} width="35" height="35" alt="header" />
                                            </div>
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


export default Repository