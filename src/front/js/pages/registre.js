import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Registre = () => {
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  console.log(errors);

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  //form submit
  const onSubmit = (data) => {
    // e.preventDefault();
    addInfo(data);
    if (data) {
      navigate("/userLogin");
    }
  };

  //llamada fetch api
  const addInfo = (info) => {
    fetch(process.env.BACKEND_URL + "/api/user", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
  };

  return (
    <div className="text-center col-12 mb-3 mt-5 titular">
      <h1>¿Eres Nuevo?</h1>
      <div className="registro position-absolute top-50 start-50 translate-middle">
        <div className="registration col-12 mb-3 mt-5 text-center"></div>
        <div className="row">
          <div className="container_form">
            <form
              className="form"
              onSubmit={handleSubmit(onSubmit)}
              id="registration"
            >
              <div className="col-12 mb-3 mt-1 text-center">
                <input
                  className="input-reg mt-1 relleno"
                  name="name"
                  placeholder="Nombre"
                  autoComplete="off"
                  type="text"
                  {...register("name", {
                    required: "Campo obligatorio",
                    minLength: {
                      value: 3,
                      message: "Campo obligatorio",
                    },
                  })}
                  onChange={handleInputChange}
                />
                <p>{errors.name?.message}</p>
              </div>

              <div className="col-12  mb-3 text-center">
                <input
                  className="input-reg relleno"
                  name="lastName"
                  placeholder="Apellidos"
                  autoComplete="off"
                  type="text"
                  {...register("lastName", {
                    required: "Campo obligatorio",
                    minLength: {
                      value: 3,
                      message: "Campo obligatorio",
                    },
                  })}
                  onChange={handleInputChange}
                />
                <p>{errors.name?.message}</p>
              </div>

              <div className="col-12 mb-3 text-center">
                <input
                  className="input-reg relleno"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Introduce email válido",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Introduce email válido",
                    },
                  })}
                  onChange={handleInputChange}
                />
                <p>{errors.email?.message}</p>
              </div>

              <div className="col-12  mb-5 text-center">
                <input
                  className="input-reg relleno"
                  name="password"
                  placeholder="Contraseña"
                  autoComplete="off"
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Introduce contraseña válida",
                    },
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                  onChange={handleInputChange}
                />
                <p>{errors.password?.message}</p>
              </div>

              <div className="col-12  mb-3 text-center">
                <Link to="/validacion">
                    <button className="botonI">
                      <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                      </span>
                      <span class="button-text">Registrate</span>
                    </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};