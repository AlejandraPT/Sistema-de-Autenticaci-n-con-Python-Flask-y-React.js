import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Perfil = () => {
  const { actions, store } = useContext(Context);
  let navigate = useNavigate();

  return (
    <div className="text-center col-12 mb-3 mt-5 titular">
      <h1>Tus Datos Personales </h1>
      <div className="logueo position-absolute top-50 start-50 translate-middle">
        <div className="col-12 text-center mt-5">
          <div>
            <div className="row">
              <div className="container_form">
                <form className="form" id="registration">
                  <div className="col-12 text-center mt-2 mb-3">
                    <input
                      className="input-reg mt-1 relleno"
                      name="Name"
                      defaultValue={store.user.name}
                      placeholder="Name"
                      autoComplete="off"
                      type="text"
                    />
                  </div>
                  <div className="col-12 text-center mt-2 mb-3">
                    <input
                      className="input-reg mt-1 relleno"
                      name="Lastname"
                      defaultValue={store.user.last_name}
                      placeholder="Lastname"
                      autoComplete="off"
                      type="text"
                    />
                  </div>
                  <div className="col-12 text-center mt-2 mb-3">
                    <input
                      className="input-reg mt-1 relleno"
                      name="email"
                      defaultValue={store.user.email}
                      placeholder="Email"
                      autoComplete="off"
                      type="text"
                    />
                  </div>
                  <div className="col-12 text-center mb-5">
                    <input
                      className="input-reg relleno"
                      name="Password"
                      defaultValue={store.user.password}
                      placeholder="contraseña"
                      autoComplete="off"
                      type="password"
                    />
                  </div>
                  <div className="col-12 text-center mb-3">
                    <Link to="/">
                        <button className="botonI">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span class="button-text">Ir al Inicio</span>
                        </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
