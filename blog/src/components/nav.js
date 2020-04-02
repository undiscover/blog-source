import React from "react"
import { Link } from "gatsby"

import "../css/nav.css"

const Nav = () => (

	<div className="nav">
		<div className="menu">
			<Link to={"/"} className="menu-item">
				undiscover
			</Link>
			<div className="menu-section last">
				<a href={"https://mirra.live/rzFKFqLGV"} className="menu-item small">
					Mirra
				</a>
				<Link to={"/info"} className="menu-item small last">
					info
				</Link>
			</div>
		</div>
	</div>
)

export default Nav