import React from 'react'
import MaterialAlert from "@material-ui/lab/Alert";

export default function Alert() {
  return (
    <MaterialAlert severity="info">
      Results are based on your Zipcode and links will lead to the charitie's website.  If there are no results for your zipcode, the application is working, except there may not be organizations within the parameters of the API.  Leave blank and press enter to test.   
    </MaterialAlert>
  );
}
