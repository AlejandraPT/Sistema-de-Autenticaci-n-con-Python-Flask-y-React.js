import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Sistema de Autentificación</h1>
			<img src="https://www.welivesecurity.com/wp-content/uploads/2019/03/Aprueban-WebAuthn-nuevo-est%C3%A1ndar-oficial-autenticaci%C3%B3n-sustituci%C3%B3n-contrase%C3%B1a.jpg"/> 
			<div className="text-center mt-5 container">
				<div className="ml-auto row">
					<Link to="/login" className="col-7">
						<button className="botonInicio">Inicio Sesion</button>
					</Link>
					<Link to="/registro" className="col-3">
						<button className="botonInicio">Crear Cuenta</button>
					</Link>
				</div> 
			</div>
		</div>
	);
};
