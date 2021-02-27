import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React from 'react';
export default function Intro() {
  return (
    <Box p={2}>
      <Typography>
        Zeal is where you can find local charities and food pantries accepting donations as well as donating to those in need.  There are two ways you can use this tool:
      </Typography>
      <ol>
        <li>
          <Typography>
            Click the Resources link to be immediately redirected to the finder.  There you will enter your Zipcode and find your local resources.  
          </Typography>
        </li>
        <br></br>
        <li>
          <Typography>
            Click on the resources below, which are static sites that can provide further assistance in finding other resources.  
          </Typography>
        </li>
      </ol>

           


    
    </Box>
);
}

