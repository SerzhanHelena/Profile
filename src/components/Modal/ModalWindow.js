import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Icon,
  Divider,
  Radio,
  Checkbox
} from "semantic-ui-react";
import Education from "../Education/Education";
import "./ModalWindow.scss";

const ModalWindow = props => {
  const students = props.students;
  const {
    profDev: [
      {
        name: profDevName,
        end: profDevEnd,
        specialization: profDevSpecialization
      }
    ]
  } = students;
  const {
    electronicCertificates: [
      {
        name: certificateName,
        end: certificateEnd,
        certificate: certificateTitle,
        file: certificateFile
      }
    ]
  } = students;
  const {
    tests: [{ name: testName, end: testEnd, certificate: testTitle }]
  } = students;

  const {
    portfolio: [{ link: portfolioLink }]
  } = students;

  const {
    experience: [
      {
        name: experName,
        start: experStart,
        end: experEnd,
        position: experPosition,
        responsibilities: experResponsib
      }
    ]
  } = students;
  console.log(props);
  return (
    <Modal open={!props.handlePopUp.showModal}>
      <Modal.Header>
        <div>
          <h1>PROFILE</h1>
          <div>
            <div>
              {students.name}
              {students.surname}
            </div>
            <div>{students.contacts.email}</div>
          </div>
          <div>
            <Icon name="caret down" size="huge" />
          </div>
        </div>
        {/* <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        /> */}
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Personal and contact information</Header>
          <div>
            {students.name}
            {students.surname}
          </div>
          <div>
            <Icon size="big" name="mail" />
            {students.contacts.email}
          </div>
          <div>
            <Icon size="big" name="phone square" />
            {students.contacts.phone}
          </div>
          <div>
            <Icon size="big" name="skype" />
            <Input value={students.contacts.skype} disabled />
          </div>
          <div>
            <Icon size="big" name="linkedin" />
            <Input value={students.contacts.linkedin} disabled />
          </div>
          <Divider />
          <Header>Objective</Header>
          <div>{students.objective}</div>
          <Divider />
          <Header>Summary</Header>
          <Input value={students.summary} disabled />
          <Divider />
          <Header>Skills</Header>
          {students.skills.map(skill => (
            <Button
              content={skill}
              key={skill}
              icon="trash"
              disabled
              labelPosition="right"
            />
          ))}
          <Header>Foreign languages</Header>
          <select value={students.languages.lang} disabled>
            <option>{students.languages.lang}</option>
          </select>
          <select value={students.languages.level} disabled>
            <option>{students.languages.level}</option>
          </select>
          <Divider />
          <Header>Education</Header>
          <Education education={students.education} />
          <Divider />
          <Header>Professional development, courses</Header>
          <div>
            <select disabled>
              <option>{profDevEnd}</option>
            </select>
            <Input value={profDevName} disabled />
          </div>
          <div>
            <span>Specialization</span>
            <Input value={profDevSpecialization} disabled />
          </div>
          <Divider />
          <Header>Electronic certificates</Header>
          <div>
            <select disabled>
              <option>{certificateEnd}</option>
            </select>
            <Input disabled value={certificateName} />
          </div>
          <div>
            <span>Certificate title</span>
            <Input value={certificateTitle} disabled />
            <p>
              google.doc
              <Icon name="remove" size="large" />
            </p>
          </div>
          <Divider />
          <Header>Tests, examinations</Header>
          <div>
            <select disabled>
              <option>{testEnd}</option>
            </select>
            <Input disabled value={testName} />
          </div>
          <div>
            <span>Certificate title</span> <Input disabled value={testTitle} />
          </div>
          <Divider />
          <Header>Work experience</Header>
          <select>
            <option>{experStart.month}</option>
          </select>
          <select>
            <option>{experStart.years}</option>
          </select>
          <select>
            <option>{experEnd.month}</option>
          </select>
          <select>
            <option>{experEnd.years}</option>
          </select>
          <Input disabled value={experName} />
          <div>
            Position <Input value={experPosition} />
          </div>
          <div>
            Responsibilities, tasks, activities
            <Input disabled value={experResponsib} />
          </div>
          <Divider />
          <Header>Portfolio</Header>
          <div>
            {portfolioLink}
            <Icon name="remove" size="big" />
          </div>
          <Divider />
          <Header>Military status</Header>
          <Radio />
          <label>Doesn't apply</label>
          <Radio />
          <label>Exempted</label>
          <Radio defaultChecked />
          <label>Completed</label>
          <Radio />
          <label>Postponed</label>
          <Radio />
          <label>Currently serving</label>

          <Divider />
          <Header>Additional information</Header>
          <Input value={students.additionalInfo.text} disabled />
          <Divider />
          <Header>Recommendations</Header>
          <div>
            {students.recommendations.link}
            <Icon name="remove" size="big" />
          </div>
          <Input value={students.recommendations.text} disabled />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{ textAlign: "center" }}>
        <Button onClick={props.close} content="Back" />
        <Button content="Preview" />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalWindow;
