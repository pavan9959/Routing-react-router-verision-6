import React from "react";
import { ReactDOM } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Plus } from "./Action";

function Other() {

  const dispatch=useDispatch()

  const handelChange=()=>{
    dispatch(Plus())
  }

  const data=useSelector((stat)=>{
    return stat.c
  })

  return (
    <div>
      <h1>Count</h1>
      <button onClick={()=>{handelChange()}} >plus</button>
      <p>{data}</p>
    </div>
  );
}

export default Other;
