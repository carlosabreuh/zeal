import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Typography
      variant="h3"
      component="h1"
      className={`${classes.title} header-text`}
    >
      Zeal
    </Typography>
  );
}
