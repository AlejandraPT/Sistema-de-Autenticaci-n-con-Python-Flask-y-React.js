import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<img className="navbar-brand mb-0 h1 imgprin" src="https://w7.pngwing.com/pngs/358/294/png-transparent-computer-icons-key-secure-shell-key-authentication-secure-shell-password.png"/>
				</Link>
				<Link to="/perfil">
                	<button type="button" class="btn btn-outline-info">Info Perfil</button>
            	</Link>
			</div>
		</nav>
	);
};