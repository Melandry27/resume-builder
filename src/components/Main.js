import React, { useState, Fragment } from "react";

import Label from "./utils/Label";
import { Button } from "./utils/Button";

import ExperienceForm from "./utils/ExperienceForm";
import EducationForm from "./utils/EducationForm";
import DisplayExperience from "./utils/DisplayExperience";
import DisplayEducation from "./utils/DisplayEducation";
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

  const [experienceList, setExperienceList] = useState([{ position: "", company: "", city: "", from: "", to: "" }]);
  const [educationList, setEducationList] = useState([
    { university: "", city: "", degree: "", subject: "", from: "", to: "" },
  ]);

  const handleExperienceAdd = () => {
    setExperienceList([...experienceList, { position: "", company: "", city: "", from: "", to: "" }]);
  };
  const handleEducationAdd = () => {
    setEducationList([...educationList, { university: "", city: "", degree: "", subject: "", from: "", to: "" }]);
  };

  const handleExperienceRemove = (index) => {
    const list = [...experienceList];
    list.splice(index, 1);
    setExperienceList(list);
  };
  const handleEducationRemove = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...experienceList];
    list[index][name] = value;
    setExperienceList(list);
  };
  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
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
        {experienceList.map((singleExperience, index) => (
          <Fragment>
            <ExperienceForm
              index={index}
              key={index}
              styleTitle={style.inputCard.title}
              valuePosition={singleExperience.position}
              statePosition={(e) => handleExperienceChange(e, index)}
              valueCompany={singleExperience.company}
              stateCompany={(e) => handleExperienceChange(e, index)}
              valueCity={singleExperience.city}
              stateCity={(e) => handleExperienceChange(e, index)}
              valueFrom={singleExperience.from}
              stateFrom={(e) => handleExperienceChange(e, index)}
              valueTo={singleExperience.to}
              stateTo={(e) => handleExperienceChange(e, index)}
            />

            {experienceList.length - 1 === index && experienceList.length < 4 && (
              <Button text={"Add"} onClick={handleExperienceAdd} />
            )}
            {experienceList.length > 1 && <Button text={"Remove"} onClick={() => handleExperienceRemove(index)} />}
          </Fragment>
        ))}

        {educationList.map((singleEducation, index) => (
          <Fragment>
            <EducationForm
              index={index}
              key={index}
              styleTitle={style.inputCard.title}
              valueUniversity={singleEducation.university}
              stateUniversity={(e) => handleEducationChange(e, index)}
              valueCity={singleEducation.city}
              stateCity={(e) => handleEducationChange(e, index)}
              valueDegree={singleEducation.degree}
              stateDegree={(e) => handleEducationChange(e, index)}
              valueSubject={singleEducation.subject}
              stateSubject={(e) => handleEducationChange(e, index)}
              valueFrom={singleEducation.from}
              stateFrom={(e) => handleEducationChange(e, index)}
              valueTo={singleEducation.to}
              stateTo={(e) => handleEducationChange(e, index)}
            />

            {educationList.length - 1 === index && educationList.length < 4 && (
              <Button text={"Add"} onClick={handleEducationAdd} />
            )}
            {educationList.length > 1 && <Button text={"Remove"} onClick={() => handleEducationRemove(index)} />}
          </Fragment>
        ))}
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
            {experienceList.map((singleExperience, index) => (
              <DisplayExperience
                key={index}
                statePosition={singleExperience.position}
                stateCompany={singleExperience.company}
                stateCity={singleExperience.city}
                stateFrom={singleExperience.from}
                stateTo={singleExperience.to}
              />
            ))}
            {educationList.map((singleEducation, index) => (
              <DisplayEducation
                key={index}
                stateUniversity={singleEducation.university}
                stateCity={singleEducation.city}
                stateDegree={singleEducation.degree}
                stateSubject={singleEducation.subject}
                stateFrom={singleEducation.from}
                stateTo={singleEducation.to}
              />
            ))}
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
