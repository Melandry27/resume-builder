import React, { Fragment } from "react"

const Inputs = ({ value, style }) => {
	return (
		<Fragment>
			<label style={style}>{value}</label>
		</Fragment>
	)
}

export default Inputs
