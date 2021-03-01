import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources.jsx';
import Typography from '@material-ui/core/Typography';
import Header from './components/Header.jsx';
import About from './pages/About/About.jsx';
import MyCharities from './pages/Mycharities/mycharities';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    maxWidth: '800px',
    padding: '1rem',
    margin: '0 auto',
  },
  nav: {
    textAlign: 'center',
    padding: 0,
  },
  li: {
    display: 'inline-block',
    margin: '1rem',
  },
  a: {
    textDecoration: 'none',
  },
  footer: {
    // padding: '3rem',
  },
  footerText: {
    fontSize: '.75rem',
    textAlign: 'center',
    margin: '3rem',
  },
});

export default function App() {
  const classes = useStyles();
  const [myCharities, setMyCharities] = useState([]);
  const [tableRows, updateTableRow] = useState([]);

  return (
    <div className={classes.container}>
      <Header />
      <Nav
        tableRows={tableRows}
        updateTableRow={updateTableRow}
        myCharities={myCharities}
        setMyCharities={setMyCharities}
      />
      <Footer />
    </div>
  );
}

function Nav({ myCharities, setMyCharities, tableRows, updateTableRow }) {
  const classes = useStyles();
  return (
    <Router>
      <nav>
        <ul className={classes.nav}>
          <li className={classes.li}>
            <Link to='/' className={classes.a}>
              <Typography>Home</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link to='/Resources' className={classes.a}>
              <Typography>Reources</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link to='/About' className={classes.a}>
              <Typography>About</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link to='/My Charities' className={classes.a}>
              <Typography>My Charities</Typography>
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Resources'>
            <Resources
              myCharities={myCharities}
              setMyCharities={setMyCharities}
              tableRows={tableRows} 
              updateTableRow={updateTableRow}
            />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/My Charities'>
            <MyCharities
              myCharities={myCharities}
              setMyCharities={setMyCharities}
            />
          </Route>
        </Switch>
      </nav>
    </Router>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography className={classes.footerText} color='textSecondary'>
        2021 © Zeal ♥︎
      </Typography>
      <Typography className={classes.footerText} color='textSecondary'>
        All information in the Service is provided &quot;as is&quot;, with no
        guarantee of completeness, accuracy, timeliness or of the results
        obtained from the use of this information, and without warranty of any
        kind, express or implied, including, but not limited to warranties of
        performance, merchantability and fitness for a particular purpose.
        <br></br>
        The Company will not be liable to You or anyone else for any decision
        made or action taken in reliance on the information given by the Service
        or for any consequential, special or similar damages, even if advised of
        the possibility of such damages.
      </Typography>
    </footer>
  );
}
