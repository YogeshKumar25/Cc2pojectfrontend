import {Container, Button,} from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export const Home=()=>
{
    return (
        <div className="Home">
            <h1>welcome to petshop</h1>
            <h2>click here to add your pet</h2>
            <Button><Link to={"pet"}>click here</Link></Button>
           
        </div>
      );
}
export default Home