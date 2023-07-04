import React from "react";
import { useLocalState } from '../util/UseLocalStorage';

const Dashboard = () => {
    const[jwt, setJwt] = useLocalState("", "jwt");

    return (
        <div>
            <h1>Hello blastZA</h1>
            <div>JWT value is {jwt}</div>  
        </div>
    );
};

export default Dashboard;