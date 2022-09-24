import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const{actions, store} = useContext(Context);
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				{store.auth ? (
					<div className="justify-content-end d-flex">
						<Link to="/">
							<img className="navbar-brand mb-0 h1 imgprin" src="https://w7.pngwing.com/pngs/358/294/png-transparent-computer-icons-key-secure-shell-key-authentication-secure-shell-password.png"/>
						</Link>
						<Link to="/perfil">
							<button type="button" class="btn btn-outline-info">Info Perfil</button>
						</Link>
						<button type="button" class="btn btn-outline-info" onClick={()=>{actions.logout(); navigate("/")}}>Cierre de Sesion</button>
					</div>
				) : (
					<Link to="/">
						<img className="navbar-brand mb-0 h1 imgprin" src="https://w7.pngwing.com/pngs/358/294/png-transparent-computer-icons-key-secure-shell-key-authentication-secure-shell-password.png"/>
					</Link>
				)
				}
			</div>
		</nav>
	);
};