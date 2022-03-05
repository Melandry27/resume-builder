import React, { Fragment } from "react"

import Inputs from "./Inputs"
import Label from "./Label"

import PlaceHolder from "../models/PlaceHolder"

const PersonalForm = ({
	styleTitle,
	stateFirstName,
	stateName,
	stateTitle,
	stateAdresse,
	statePhoneNumber,
	stateEmail,
	stateDescription,
}) => {
	return (
		<Fragment>
			<div style={styleTitle}>
				<Label value={"Personnal Information"} />
			</div>
			<Inputs placeHolder={PlaceHolder.firstName} change={stateFirstName} />
			<Inputs placeHolder={PlaceHolder.name} change={stateName} />
			<Inputs placeHolder={PlaceHolder.title} change={stateTitle} />
			<Inputs placeHolder={PlaceHolder.adresse} change={stateAdresse} />
			<Inputs placeHolder={PlaceHolder.phoneNumber} change={statePhoneNumber} />
			<Inputs placeHolder={PlaceHolder.email} change={stateEmail} />
			<Inputs placeHolder={PlaceHolder.description} change={stateDescription} />
		</Fragment>
	)
}

export default PersonalForm
