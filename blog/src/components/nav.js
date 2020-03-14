import React from "react"
import { Link } from "gatsby"

import "../css/nav.css"

const Nav = () => (

	<div className="nav">
		<div className="menu">
			<Link to={"/"} className="menu-item">
				undiscover
			</Link>
			<Link to={"/info"} className="menu-item last small">
				info
			</Link>
		</div>
	</div>
)

export default Nav