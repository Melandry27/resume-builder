import React, { useState, Fragment } from "react";
import jsPDF from "jspdf";

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

  const [width, setWidth] = useState("800px");

  const [experienceList, setExperienceList] = useState([
    { position: "Position", company: "Company", city: "City", from: "From", to: "To" },
  ]);
  const [educationList, setEducationList] = useState([
    { university: "University", city: "City", degree: "Degree", subject: "Subject", from: "From", to: "To" },
  ]);

  const handleExperienceAdd = () => {
    setExperienceList([
      ...experienceList,
      { position: "Position", company: "Company", city: "City", from: "From", to: "To" },
    ]);
  };
  const handleEducationAdd = () => {
    setEducationList([
      ...educationList,
      { university: "University", city: "City", degree: "Degree", subject: "Subject", from: "From", to: "To" },
    ]);
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

  const generatePdf = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector(".display"), {
      callback: function (pdf) {
        setWidth("595px");
        const pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("MyResume.pdf");
      },
    });
  };

  return (
    <div className="main" style={style.main}>
      <div className="input-form" style={style.inputCard}>
        <PersonalForm
          styleTitle={style.inputCard.title1}
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
              styleTitle={style.inputCard.title2}
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
              <Button text={"Add Experience"} style={style.inputCard.buttonExperience} onClick={handleExperienceAdd} />
            )}
            {experienceList.length > 1 && (
              <Button
                text={`Remove Experience ${index + 1}`}
                style={style.inputCard.buttonRemove}
                onClick={() => handleExperienceRemove(index)}
              />
            )}
          </Fragment>
        ))}

        {educationList.map((singleEducation, index) => (
          <Fragment>
            <EducationForm
              index={index}
              key={index}
              styleTitle={style.inputCard.title3}
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
              <Button text={"Add Education"} style={style.inputCard.buttonEducation} onClick={handleEducationAdd} />
            )}
            {educationList.length > 1 && (
              <Button
                text={`Remove Education ${index + 1}`}
                style={style.inputCard.buttonRemove}
                onClick={() => handleEducationRemove(index)}
              />
            )}
          </Fragment>
        ))}
        <button onClick={() => generatePdf()} style={style.inputCard.buttonPDF} type="primary">
          Generate PDF
        </button>
      </div>
      <div style={style.displayCardContainer}>
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
              <Label style={style.displayCard.centerRightContainer.description} value={"Description"} />
              <hr style={{ margin: "5px 30px 5px 10px" }}></hr>
              <Label style={style.label.description} value={description} />
              <Label value={"Experience"} style={{ fontSize: "24px", color: "#3399ff", margin: "25px 0px 0px 10px" }} />
              <hr style={{ margin: "5px 30px 5px 10px" }}></hr>
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
              <Label value={"Education"} style={{ fontSize: "24px", color: "#3399ff", margin: "25px 0px 0px 10px" }} />
              <hr style={{ margin: "5px 30px 5px 10px" }}></hr>
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
              <Label style={style.label.email} value={"Personal Details"} />
              <hr style={{ margin: "5px 3px 0px 3px", backgroundColor: "#4B4B4B", height: "1px", border: "none" }} />
              <Label style={style.label.adresse} value={"Adresse"} />
              <Label style={style.label.phoneNumber} value={adresse} />
              <Label style={style.label.adresse} value={"Phone Number"} />
              <Label style={style.label.phoneNumber} value={phoneNumber} />
              <Label style={style.label.adresse} value={"Email"} />
              <Label style={style.label.phoneNumber} value={email} />
            </div>
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
    flexWrap: "wrap",
    backgroundColor: "#F0F0F0",
    //minHeight: "1200px",
    height: "auto",
  },
  inputCard: {
    fontFamily: "Consolas",
    minHeight: "1050px",
    height: "auto",
    width: "800px",
    margin: "50px 100px 50px 100px",
    backgroundColor: "#E8E8E8",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    title1: {
      fontSize: "32px",
      fontWeight: "900",
      display: "flex",
      justifyContent: "center",
      color: "#AA96DA",
      textShadow: "1px 1px 2px #000000",
    },
    title2: {
      fontSize: "32px",
      fontWeight: "900",
      display: "flex",
      justifyContent: "center",
      color: "#FCBAD3",
      textShadow: "1px 1px 2px #000000",
    },
    title3: {
      fontSize: "32px",
      fontWeight: "900",
      display: "flex",
      justifyContent: "center",
      color: "#FFFFD2",
      textShadow: "1px 1px 2px #000000",
    },
    buttonRemove: {
      backgroundColor: "#E8E8E8",
      textShadow: "1px 1px 2px #000000",
      color: "#9B4A4A",
      border: "2px solid #6E6E6E",
      borderRadius: "10px",
      display: "block",
      margin: "5px 0",
      padding: "2px",
      width: "100%",
      fontSize: "20px",
      fontWeight: "900",
    },
    buttonExperience: {
      backgroundColor: "#E8E8E8",
      textShadow: "1px 1px 2px #000000",
      color: "#FCBAD3",
      border: "2px solid #6E6E6E",
      borderRadius: "10px",
      display: "block",
      margin: "5px 0",
      padding: "2px",
      width: "100%",
      fontSize: "20px",
      fontWeight: "900",
    },
    buttonEducation: {
      backgroundColor: "#E8E8E8",
      textShadow: "1px 1px 2px #000000",
      color: "#FFFFD2",
      border: "2px solid #6E6E6E",
      borderRadius: "10px",
      display: "block",
      margin: "5px 0",
      padding: "2px",
      width: "100%",
      fontSize: "20px",
      fontWeight: "900",
    },
    buttonPDF: {
      backgroundColor: "#E8E8E8",
      textShadow: "1px 1px 2px #000000",
      color: "#9B4A4A",
      border: "2px solid #6E6E6E",
      borderRadius: "10px",
      display: "block",
      margin: "5px 0",
      padding: "2px",
      width: "100%",
      fontSize: "20px",
      fontWeight: "900",
    },
  },
  displayCardContainer: {
    margin: "50px 100px 50px 100px",
    marginRight: "100px",
    marginBottom: "150px",
    //width: "31%",
    width: "595px",
  },
  displayCard: {
    maxHeight: "800px",
    minHeight: "800px",
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
        width: "65%",
        minHeight: "100%",
        height: "100%",
        backgroundColor: "#EBEBEB",
      },
      rightInfo: {
        display: "flex",
        alignItems: "stretch",
        wordBreak: "break-all",
        flexDirection: "column",
        minWidth: "0%",
        width: "35%",
        minHeight: "100%",
        height: "100%",
        backgroundColor: "#D7D7D7",
      },
      description: {
        fontSize: "24px",
        margin: "10px 0px 0px 10px",
        color: "#3399ff",
      },
    },
  },
  label: {
    container: {
      topInfo: {
        backgroundColor: "#3399ff",
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
      color: "white",

      marginRight: "10px",
      marginLeft: "5px",
    },
    name: {
      fontSize: "48px",
      color: "white",
    },
    title: {
      fontSize: "28px",
      fontWeight: "600",
      color: "white",
      marginLeft: "5px",
    },
    adresse: {
      fontSize: "24px",
      color: "black",
      marginTop: "15px",
    },
    phoneNumber: {
      fontSize: "20px",
      color: "#555555",
    },
    email: {
      fontSize: "24px",
      color: "#3399ff",
      margin: "10px 0px 0px 3px",
    },
    description: {
      fontSize: "24px",
      color: "#4d4d4d",
      marginLeft: "10px",
    },
  },
};
