import React from "react"

import Layout from "../components/layout"
import Albums from "../components/albums"

import "../css/main.css"
import "../css/nav.css"

const IndexPage = () => (
	<Layout>
		<Albums />
	</Layout>
)

export default IndexPage