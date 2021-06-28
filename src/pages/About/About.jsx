import React from "react";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/icons/Favorite";

export default function About() {
  return (
    <div>
      <Typography>
        This app was made with{" "}
        <Icon className="fa fa-plus-circle" color="secondary" /> using
        JavaScript, React.js and Material-UI. The backend is built also with{" "}
        <Icon className="fa fa-plus-circle" color="secondary" /> using Spring
        Boot Java and MySQL Workbench.
      </Typography>
      <ul>
        <li>
          <Typography>
            If you have suggestions on how to make this application better,
            please do not hesitate to contact me!
          </Typography>
        </li>
        <br></br>
      </ul>
    </div>
  );
}
