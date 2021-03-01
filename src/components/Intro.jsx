import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';

export default function Intro() {
  return (
    <Box p={2}>
      <Typography>
        Zeal is where you can find local charities and food pantries accepting
        donations as well as donating to those in need. There are two ways you
        can use this tool:
      </Typography>
      <ol>
        <li>
          <Typography>
            Click the Resources link to be immediately redirected to the finder.
            There you will enter your Zipcode and find your local resources.
          </Typography>
        </li>
        <br></br>
        <li>
          <Typography>
            Explore the links below for institutions that are offering this
            service at a much larger scale, from govermental institutions like
            HUD, to public-private ones like Feeding America.
          </Typography>
        </li>
      </ol>
    </Box>
  );
}
