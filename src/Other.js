import React from "react";
import { ReactDOM } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Plus } from "./Action";
import { useNavigate } from "react-router-dom";

function Other() {

  const dispatch=useDispatch()
  const nav=useNavigate()

  const handelChange=()=>{
    dispatch(Plus())
  }

  const data=useSelector((stat)=>{
    return stat.c
  })

  const handleClick=()=>{
    nav("/")
  }

  return (
    <div>
      <h1>Count</h1>
      <button onClick={()=>{handelChange()}} >plus</button>
      <p>{data}</p>
      <button onClick={handleClick} >Go to app using usenavigate hook</button>
    </div>
  );
}

export default Other;
