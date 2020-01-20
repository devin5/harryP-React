import React from 'react';
import {Student} from './Student';

const students = [
  {
    name: 'Harry Potter',
    identity: 'The Chosen One',
    img:
      'https://tk-assets.lambdaschool.com/534cbd01-46c2-4d0e-b617-c89127b736fc_ScreenShot2019-02-11at8.04.05PM.png',
    age: 11,
    bestFriend: 'Ron Weasley and Hermione Granger'
  },
  {
    name: 'Ron Weasley',
    identity: "Youngest Weasley brother, Harry's best friend",
    img:
      'https://tk-assets.lambdaschool.com/e0a070cc-93e3-495b-959c-47dd54244456_ScreenShot2019-02-11at8.04.22PM.png',
    age: 11,
    bestFriend: 'Harry Potter and Hermione Granger'
  },
  {
    name: 'Hermione Granger',
    identity: "Smart McSmart pants, Harry's best friend",
    img:
      'https://tk-assets.lambdaschool.com/0ccfd05b-dd91-4caa-b761-4c16452093c6_ScreenShot2019-02-11at8.04.29PM.png',
    age: 11,
    bestFriend: 'Harry Potter and Ron Weasley'
  },
  {
    name: 'Draco Malfoy',
    identity: 'Jerk face',
    img:
      'https://tk-assets.lambdaschool.com/b331b729-6858-4519-94a1-33056d17a270_ScreenShot2019-02-11at8.04.38PM.png',
    age: 11,
    bestFriend: 'Crabbe and Goyle'
  }
];

function HogwartsStudents(props) {
    console.log(props)
  return (
    <div>
      <h1>Hogwarts Students:</h1>

      <div className="class-list">
        {students.map(student => (
          <Student bool={props.bool} key={student.name} student={student} />
        ))}
      </div>
    </div>
  );
}

export default HogwartsStudents;
