import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Meanings(){

    const [FlowerList, setFlowerList] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3210/flowers").then((response) => {
            setFlowerList(response.data);
        });
    }, []);

    return(
        <div className="Meanings">
            <div className="maincontainer">
                <div className="meaning-title">FLOWERS:</div>
            <div className="flower-container">
                {FlowerList.map((value, key) => {
                    return (
                        <div className="flower" key={key} onClick={ () => {navigate(`/meanings/${value.id}`)}}>
                            <div className="name">{value.name}</div>
                            <div className="meaning">{value.meaning}</div>
                        </div>
                    );
                })}
            </div>
            </div>
        </div>
    );
}

export default Meanings;