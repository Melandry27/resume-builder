import React from "react"
import Label from "./Label"

const DisplayExperience = ({
	statePosition,
	stateCompany,
	stateCity,
	stateFrom,
	stateTo,
}) => {
	return (
		<div>
			<Label value={statePosition} />
			<Label value={stateCompany} />
			<Label value={stateCity} />
			<Label value={stateFrom} />
			<Label value={stateTo} />
		</div>
	)
}

export default DisplayExperience
