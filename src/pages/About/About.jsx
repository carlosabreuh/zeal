import React from 'react';
import { Typography } from '@material-ui/core';

export default function About() {
  return (
    <div>
      <Typography>
        This app was built using JavaScript and Material-UI. The backend is
        powered by Java and MySQL, which is only available on my local machine
        at the moment and the reason why you cannot save to "My Charities". As I
        host this app on AWS, I will be working to migrate the backend to the
        cloud using AWS as well.
      </Typography>
      <ul>
        <li>
          <Typography>If you have suggestions on how to make this application better, please do not hesitate to contact me!</Typography>
        </li>
        <br></br>
        <li>
          <Typography>If you have the ability to doante to those in need, DO SO! </Typography>
        </li>
        <br></br>
        <li>
          <Typography>
            Let's be nice humans! 
          </Typography>
        </li>
      </ul>
    </div>
  );
}
