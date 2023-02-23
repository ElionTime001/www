import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function Flower(){

    let {id} = useParams();
    const [flower, setFlower] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3210/flowers/${id}`).then((response) => {
            setFlower(response.data);
        });
    }, []);

    return (<div className="Flower-container">
        <div className="maincontainer">
        <div className="Flower-image-container">
            <img className="Flower-image" src={flower.image} alt={flower.name} />
        </div>
        <div className="Flower-details-container">
            <h1 className="Flower-name">{flower.name}</h1>
            <hr />
            <p className="Flower-meaning">{flower.meaning}</p>
            <hr />
            <p className="Flower-description">{flower.description}</p>
            <hr/>
            <div>
            <button className="edit-button" onClick={()=>{navigate(`/meanings/${id}/edit`)}} >EDIT</button>
            <button className="edit-button" onClick={()=>{navigate(`/meanings`)}} >BACK TO MEANINGS</button>
            </div>
        </div>
        </div>
    </div>);

}

export default Flower;