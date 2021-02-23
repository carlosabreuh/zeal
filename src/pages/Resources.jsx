import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Link from "@material-ui/core/Link";
// import Box from "@material-ui/core/Box";
import StatusTable from '../components/StatusTable';

export default function Resources() {
  return (
    <div>
      <Typography>
        Zeal is a site where you can find a number of resources to assist you
        finding food, shelter, health clinics and clothing all in one location.
      </Typography>

      <section class='about-section' id='supported-websites'>
        <h2 class='header-text'>Resources</h2>

        <br></br>
        <StatusTable />
      </section>
      <section class='about-section' id='faq'></section>
    </div>
  );
}
