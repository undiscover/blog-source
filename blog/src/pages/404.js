import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

import "../css/main.css"
import "../css/404.css"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found"/>
		<div className="info-content">
			<p>Sei finito su una pagina che non esiste. Cosa cercavi? Cercavi mica per caso un album che non conosco ma dovrei conoscere??? <Link to={"/"} >Qui la lista dei miei album preferiti.</Link></p>
		</div>
	</Layout>
)

export default NotFoundPage
