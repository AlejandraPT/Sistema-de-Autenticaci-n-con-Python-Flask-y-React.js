import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Registre } from "./registre";
import { Login } from "./login";

export const Validacion = () => {
  const{store, actions} = useContext(Context)

  useEffect(()=> {
    actions.getdatos()
  },[])

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6 text-center">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1>Bienvenido {store.user.name}!</h1>
            <img src="https://i.pinimg.com/originals/94/bc/17/94bc178d20f47b4d8b8443e54523a0a8.gif"/>
          </div>
        </div>
      </div>
    </div>
  );
};