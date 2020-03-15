import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/main.css"
import "../css/info.css"

const IndexPage = () => (
	<Layout>
		<SEO title="Info"/>
		<div className="info-content">
			<p>Undiscover è un cassetto dove metto i miei album preferiti. Nel senso che ogni volta che "wow questo è il mio nuovo album preferito" allora finisce in questo cassetto. Ho iniziato nel 2020 a fare questa cosa, quindi tutto quello che è accaduto prima rimane nella mia testa. Mi trovi <a href="https://www.facebook.com/chielorenz">qui</a>.</p>
			<p>Nulla di ciò che è contenuto in queste pagine è di mia proprietà, i diritti appartengono ai rispetti autori, se vuoi mostrare supporto o fare domande rivolgiti a loro, puoi trovare riferimenti utili nelle pagine degli album.</p>
		</div>
	</Layout>
)

export default IndexPage