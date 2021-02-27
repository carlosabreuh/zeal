import React from 'react'
import MaterialAlert from "@material-ui/lab/Alert";

export default function Alert() {
  return (
    <MaterialAlert severity="info">
      Results are based on your Zipcode.   Links will lead to the profile of the charity, where you will be able to explore their standing and integrity.  Make sure to vet the charity of your choice before donating.  
    </MaterialAlert>
  );
}
