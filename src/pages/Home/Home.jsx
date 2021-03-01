import React from 'react';

import { Intro } from '../../components/index';
import Statics from '../../components/Statics';
import Card from '../../components/Card';
import Nav from '../../Navbar/Nav';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return (
    <div>
      <Intro />
      <Statics />
      {/* <Card /> */}

      <Typography>
        <ul>
          <li>
            Maintained by Carlos Abreu, who can be reached at{' '}
            <Link href='mailto:carlos@abreuh.com'>carlos@abreuh.com</Link>
          </li>
        </ul>
      </Typography>
    </div>
  );
}
