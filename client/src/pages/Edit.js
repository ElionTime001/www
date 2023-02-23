import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function Edit() {
    let { id } = useParams();
    const [flower, setFlower] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3210/flowers/${id}`).then((response) => {
            setFlower(response.data);
        });
    }, [id]);

    const onSubmit = (data) => {
        axios.post(`http://localhost:3210/flowers/${id}`, data).then((response) => {
            navigate(`/meanings/${flower.id}`);
        });
    };

    if (!flower.name) {
        return <div>Loading...</div>;
    }

    const initialValues = {
        name: flower.name,
        meaning: flower.meaning,
        description: flower.description,
    };

    return (
        <div className="Edit">
            <div className="maincontainer">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <label>Name:</label>
                    <Field id="inputName" name="name" />
                    <ErrorMessage name="name" />

                    <label>Meaning: </label>
                    <Field id="inputMeaning" name="meaning" />
                    <ErrorMessage name="meaning" />

                    <label>Description: </label>
                    <Field id="inputDescription" name="description" />
                    <ErrorMessage name="description" />

                    <button type="submit">SUBMIT CHANGES</button>
                </Form>
            </Formik>
            </div>
        </div>
    );
}
export default Edit;