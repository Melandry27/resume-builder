import React from "react"

const Header = () => {
	return (
		<div className="header" style={styleHeader.div}>
			<h1 style={styleHeader.title}>Resume Creator</h1>
		</div>
	)
}

export default Header

const styleHeader = {
	div: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "0",
		padding: "0",
		height: "100px",
		width: "100%",
		fontSize: "32px",
		backgroundColor: "#BFFFF0",
		boxShadow:
			"1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC",
	},
	title: {
		color: "#F0FFC2",
		textShadow:
			"1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC",
	},
}