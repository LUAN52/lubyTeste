import React from 'react';
import './Bio.css';
import { useData } from '../../context/context';
import { Link } from 'react-router-dom';


const Bio = () => {

    const { avatar_url, name,
        following, followers,
        public_repos,
        login, location,
        email, bio } = useData();

    return (


        <div className="outerContainer">
            <div className="container ">
                <div className="title">
                    <div>
                        <p className="color">{`#${login.toLowerCase()}`}</p>
                    </div>
                    <div className="out">
                        <p>Sair</p>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/out.png'} width="35" height="35" alt="header" />
                        </Link>
                    </div>
                </div>
                <div className="avatar">
                    <img className="imgAvatar imgAvatarBio" src={avatar_url} width="120" height="120" alt="avatar" />
                </div>
                <div className="body bodyTop">
                    <div className="bioContainer bioContainerTop color">
                        <div className="tag" />
                        <h1>{name}</h1>
                    </div>
                    <div className="bioInfo color">
                        <p>{email}</p>
                        <p>{location}</p>
                    </div>
                </div>
                <div className="contNumber">
                    <div className="number color">

                        <div className="seg">
                            <h1>{followers}</h1>
                            <p>seguidores</p>
                        </div>
                        <div className="seg">
                            <h1>{following}</h1>
                            <p>seguindo</p>
                        </div>

                        <div className="seg">
                            <h1>{public_repos}</h1>
                            <p>repos</p>
                        </div>
                    </div>
                </div>
                <div className="body bodyBottom color">
                    <div className="bioContainer">
                        <div className="tag" />
                        <h1>bio</h1>
                    </div>
                    <div className="bioInfo">
                        <p>{bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )




}




export default Bio
