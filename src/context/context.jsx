import React ,{createContext, useState,useContext} from 'react';


 const Context = createContext()


export default function Provider({children})
{
    
    const [login,setLogin] = useState("");
    const[email,setEmail] = useState("")
    const [followers_url,setFollowers_url] = useState("");
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [bio,setBio] = useState("");
    const [avatar_url,setAvatar_url] = useState("");
    const [organizations_url,SetOrganizations_url] = useState("");
    const [public_repos,setPublic_repos] = useState(0);
    const [repos_url,setRepos_url] = useState("");
    const [public_gist,setPublic_gist] = useState("");
    const [followers,setFollowers] = useState(0);
    const [following,setFollowing] = useState(0);
    const [following_url,setFollowing_url] = useState("")
    const [followerProfile,setFollowerProfile] = useState("");
    const [starred_url,setStarred_url] = useState("");
    const [company,setCompany] = useState("");

    return <Context.Provider 
    value={{
    login,setLogin,followers_url,setFollowers_url,
    email,setEmail,
    name,setName,location,setLocation,
    bio,setBio,avatar_url,setAvatar_url,
    starred_url,setStarred_url,
    public_repos,setPublic_repos,
    repos_url,setRepos_url,
    public_gist,setPublic_gist,
    followers,setFollowers,
    following,setFollowing,
    followerProfile,setFollowerProfile,
    organizations_url,SetOrganizations_url,
    company,setCompany,following_url,
    setFollowing_url
    }
    }> {children} </Context.Provider>
          
}

export function useData()
{
    const context = useContext(Context)
    const {followers_url,setFollowers_url,
    avatar_url,setAvatar_url,
    name,setName,email,setEmail,
    following,setFollowing,
    followers,setFollowers,
    public_repos,setPublic_repos,
    repos_url,setRepos_url,
    followerProfile,setFollowerProfile,
    bio,setBio,
    location,setLocation,
    login,setLogin,
    organizations_url,SetOrganizations_url,
    starred_url,setStarred_url,
    company,setCompany,
    public_gist,setPublic_gist,
    following_url,setFollowing_url} = context;


    return {followers_url,
    setFollowers_url,avatar_url,
    setAvatar_url,name,setName,
    following,setFollowing,
    followers,setFollowers,
    public_repos,setPublic_repos,
    repos_url,setRepos_url,
    followerProfile,setFollowerProfile,
    bio,setBio,location,setLocation,
    login,setLogin,email,setEmail,
    organizations_url,
    SetOrganizations_url,starred_url,
    setStarred_url,company,setCompany,
    public_gist,setPublic_gist,following_url,
    setFollowing_url
    };
}