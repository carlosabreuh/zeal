import React, { useState } from 'react';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import StatusTable from '../../components/StatusTable';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './Resources.css';

function createData(name, charityNavigatorURL, numSites, status, statusUpdatedAt) {
  return { name, charityNavigatorURL, numSites, status, statusUpdatedAt };
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Resources() {
  const [tableRows, updateTableRow] = useState([]);
  const [st, setSt] = useState('');
  const [zip, setZip] = useState('');
  const [search, setSearch] = useState('');
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAPI();
    console.log('Hello');
  };

  const fetchAPI = () => {
    axios
      .get(
        `https://api.data.charitynavigator.org/v2/Organizations?app_id=0616eb7c&app_key=7e0732a8d69ff0d50e69d591a5d7bd51&fundraisingOrgs=true&zip=${zip}`
      )
      .then((res) => {
        const newData = [];

        for (let i = 0; i < res.data.length; i++) {
          newData.push(
            createData(
              res.data[i].charityName,
              res.data[i].charityNavigatorURL,
              res.data[i].mailingAddress.city,
              res.data[i].irsClassification.deductibility,
              'Active'
             
             
            )
            
          );
        }
        updateTableRow([...newData]);
        console.log(res.data);
      });
  };
  return (
    <div>
      <Typography>
        Zeal is a site where you can find a number of resources to assist you
        finding food, shelter, health clinics and clothing all in one location.
      </Typography>

      <section className='about-section' id='supported-websites'>
        <h2 className='header-text'>Resources</h2>

        <br></br>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete='off'
        >
          <TextField
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            id='filled-basic'
            label='Enter Zip'
          />
          {/* <TextField
            value={st}
            onChange={(e) => setSt(e.target.value)}
            id='filled-basic'
            label='Enter State'
            
          />
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id='filled-basic'
            label='Search Other'
            
          /> */}
        </form>
        <StatusTable tableRows={tableRows} />
      </section>
      <section className='about-section' id='faq'></section>
    </div>
  );
}
