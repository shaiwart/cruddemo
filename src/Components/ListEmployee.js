import React from 'react';
import { useState, useEffect } from "react";
import {Table} from 'reactstrap';


export function ListEmp(props) {
    const [employees, setEmployee] = useState([]); 

    useEffect(() => {
        fetch("https://localhost:7205/api/Employee")
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        <div>

            <h2>Employees Data...</h2>
            <Table bordered borderless hover dark>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Display</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td> <a href={'/emp/' + emp.id}>display</a></td>
                            <td> <a href={'/empedit/' + emp.id}>Edit</a></td>
                            <td> <a href={'/empdel/' + emp.id}>delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    );
}