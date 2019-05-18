import React from "react";
import {Input} from "semantic-ui-react";

const Education = props => {
    const education = props.education;
    const {level, institution} = education;
    const [{start, end, department, specialization, name}] = institution;
  return (
    <div>
      <span>Level</span>
      <select disabled>
        <option>{level}</option>
      </select>
      <div>
        <select>
          <option>{start}</option>
        </select>
        -
        <select>
          <option>{end}</option>
        </select>
        <Input
          value={name}
          disabled
        />
      </div>
      <div><span>Department</span>
      <Input disabled value={department} />
      </div>
      <div><span>Specialization</span>
      <Input disabled value={specialization} />
      </div>
    </div>
  );
};

export default Education;
