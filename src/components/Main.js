import React, { useState } from "react";

import Label from "./utils/Label";
import { Button } from "./utils/Button";

import ExperienceForm from "./utils/ExperienceForm";
import DisplayExperience from "./utils/DisplayExperience";
import DisplayInformationTop from "./utils/DisplayInformationTop";

import PersonalForm from "./utils/PersonalForm";

const Main = () => {
  const [firstName, setFirstname] = useState("FirstName");
  const [name, setName] = useState("Name");
  const [title, setTitle] = useState("Title");
  const [adresse, setAdresse] = useState("Adresse");
  const [phoneNumber, setPhoneNumber] = useState("PhoneNumber");
  const [email, setEmail] = useState("Email");
  const [description, setDescription] = useState("Description");
  const [position, setPosition] = useState("Position");
  const [company, setCompany] = useState("Company");
  const [city, setCity] = useState("City");
  const [from, setFrom] = useState("From");
  const [to, setTo] = useState("To");

  let expForm = [
    <ExperienceForm
      statePosition={(e) => setPosition(e.target.value)}
      stateCompany={(e) => setCompany(e.target.value)}
      stateCity={(e) => setCity(e.target.value)}
      stateFrom={(e) => setFrom(e.target.value)}
      stateTo={(e) => setTo(e.target.value)}
    />,
  ];

  let expDisplay = [
    <DisplayExperience
      statePosition={position}
      stateCompany={company}
      stateCity={city}
      stateFrom={from}
      stateTo={to}
    />,
  ];

  const [experienceForm, setExperienceForm] = useState(expForm);
  const [experienceDisplay, setExperienceDisplay] = useState(expDisplay);

  const addComponent = () => {
    setExperienceForm([...experienceForm, expForm]);
    setExperienceDisplay([...experienceDisplay, expDisplay]);
  };

  return (
    <div className="main" style={style.main}>
      <div className="input-form" style={style.inputCard}>
        <PersonalForm
          styleTitle={style.inputCard.title}
          stateFirstName={(e) => setFirstname(e.target.value)}
          stateName={(e) => setName(e.target.value)}
          stateTitle={(e) => setTitle(e.target.value)}
          stateAdresse={(e) => setAdresse(e.target.value)}
          statePhoneNumber={(e) => setPhoneNumber(e.target.value)}
          stateEmail={(e) => setEmail(e.target.value)}
          stateDescription={(e) => setDescription(e.target.value)}
        />
        <ExperienceForm
          statePosition={(e) => setPosition(e.target.value)}
          stateCompany={(e) => setCompany(e.target.value)}
          stateCity={(e) => setCity(e.target.value)}
          stateFrom={(e) => setFrom(e.target.value)}
          stateTo={(e) => setTo(e.target.value)}
        />

        <Button text={"Call Component"} onClick={addComponent} />
      </div>
      <div className="display" style={style.displayCard}>
        <DisplayInformationTop
          styleTopTitle={style.label.container.topTitle}
          styleContainerTop={style.label.container.topInfo}
          styleFirstName={style.label.firstName}
          styleName={style.label.name}
          styleTitle={style.label.title}
          stateFirstName={firstName}
          stateName={name}
          stateTitle={title}
        />
        <div className="centerRightContainer" style={style.displayCard.centerRightContainer}>
          <div className="centerInfo" style={style.displayCard.centerRightContainer.centerInfo}>
            <Label style={style.label.description} value={description} />
            <DisplayExperience
              statePosition={position}
              stateCompany={company}
              stateCity={city}
              stateFrom={from}
              stateTo={to}
            />
          </div>
          <div className="rightInfo" style={style.displayCard.centerRightContainer.rightInfo}>
            <Label style={style.label.adresse} value={adresse} />
            <Label style={style.label.phoneNumber} value={phoneNumber} />
            <Label style={style.label.email} value={email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

const style = {
  main: {
    display: "flex",
    backgroundColor: "#eeeeee",
    marginTop: "5px",
  },
  inputCard: {
    fontFamily: "Consolas",
    minHeight: "800px",
    height: "auto",
    width: "35%",
    minWidth: "35%",
    margin: "50px",
    backgroundColor: "lightgrey",
    borderRadius: "3px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    title: {
      fontSize: "36px",
      fontWeight: "500",
      display: "flex",
      justifyContent: "center",
    },
  },
  displayCard: {
    minHeight: "800px",
    width: "65%",
    margin: "50px",
    marginRight: "100px",
    backgroundColor: "grey",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    centerRightContainer: {
      display: "flex",
      flexDirection: "row",
      height: "800px",
      centerInfo: {
        display: "flex",
        wordBreak: "break-all",
        flexDirection: "column",
        minWidth: "0%",
        width: "70%",
        minHeight: "100%",
        height: "100%",
        backgroundColor: "blue",
      },
      rightInfo: {
        display: "flex",
        alignItems: "stretch",
        wordBreak: "break-all",
        flexDirection: "column",
        minWidth: "0%",
        width: "30%",
        minHeight: "100%",
        height: "100%",
        backgroundColor: "red",
      },
    },
  },
  label: {
    container: {
      topInfo: {
        backgroundColor: "lightyellow",
        height: "100px",
        width: "100%",
      },
      topTitle: {
        display: "flex",
        marginTop: "5px",
      },
    },
    firstName: {
      fontSize: "48px",
      color: "black",
      marginRight: "10px",
      marginLeft: "5px",
    },
    name: {
      fontSize: "48px",
      color: "black",
    },
    title: {
      fontSize: "28px",
      fontWeight: "600",
      color: "black",
      marginLeft: "5px",
    },
    adresse: {
      fontSize: "36px",
      color: "black",
      border: "solid 3px black",
    },
    phoneNumber: {
      fontSize: "36px",
      color: "black",
      border: "solid 3px black",
    },
    email: {
      fontSize: "36px",
      color: "black",
      border: "solid 3px black",
    },
    description: {
      fontSize: "36px",
      color: "black",
      border: "solid 3px black",
    },
  },
};
