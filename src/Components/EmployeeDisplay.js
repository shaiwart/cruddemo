import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardEmployee from './CardEmployee';

export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch("https://localhost:7205/api/Employee/" + id) 
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            ); 
    }, {});

    return (
        <CardEmployee key={id} employee={employee}/> 
    );
}
export default Employee;