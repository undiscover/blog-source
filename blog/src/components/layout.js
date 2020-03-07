import React from "react"
import PropTypes from "prop-types"

import Seo from "./seo"
import Nav from "./nav"

const Layout = ({ children }) => {
	return (
		<div>
			<Seo title="Albums"/>
			<Nav />
			<main>{children}</main>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout