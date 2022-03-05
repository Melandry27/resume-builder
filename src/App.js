import React, { Fragment, Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import "./App.css"

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Main />
			</Fragment>
		)
	}
}

export default App
