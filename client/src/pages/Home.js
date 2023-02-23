import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Home(){

    const ran = Math.floor(Math.random()*7) + 1;

    const [flower, setFlower] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3210/flowers/${ran}`).then((response) => {
            setFlower(response.data);
        });
    }, []);

    const navigate = useNavigate();

    return (<div className="Home">
        <div className="maincontainer">
            <div className="meaning-title">FLOWER MEANINGS</div>
        <div className="banner"> <img src="https://i.imgur.com/GtXqsdW.png" alt="Home page" /> </div>

            <div className="container">
                <div className="hometitle">Random flower meaning for the better start of the day:</div>
                <div className="homeflowermeaning">
                    <div className="homename">{flower.name}</div>
                    <div className="homemeaning">{flower.meaning}</div>
                </div>
                <button className="edit-button" onClick={()=>{navigate(`/meanings/${flower.id}`)}}>READ MORE</button>
        </div>
        </div>
    </div>);

}

export default Home;