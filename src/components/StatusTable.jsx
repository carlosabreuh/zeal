import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {},
});

function createData(name, url, numSites, status, statusUpdatedAt) {
  return { name, url, numSites, status, statusUpdatedAt };
}

const rows = [
  createData(
    'Meal Connect',
    'https://mealconnect.org/',
    'Web',
    'Donation, Recovery, Pantry ',
    'Active'
  ),
  createData(
    'Food Finder',
    'https://foodfinder.us/',
    'Web',
    'Pantry',
    'Active'
  ),
  createData(
    'HUD',
    'https://www.hud.gov/findshelter',
    'Web',
    'Shelter, Food, Health Clinics, Clothing ',
    'Active'
  ),
  createData(
    'Feeding America',
    'https://www.feedingamerica.org/find-your-local-foodbank',
    'Local',
    'Food',
    'Active'
  ),
  createData(
    'Meals on Wheels',
    'https://www.mealsonwheelsamerica.org/',
    'Local',
    'Meals, Pet Food, Cultural or Ethnic Preferences',
    'Active'
  ),
  createData(
    'The Salvation Army',
    'https://www.salvationarmyusa.org/usn/plugins/gdosCenterSearch?start=1',
    'Local',
    'Disaster Relief, LGBTQ Support, Food Pantries, Help for Domestic Abuse',
    'Active'
  ),
  createData(
    'Red Cross',
    'https://www.redcross.org/get-help/disaster-relief-and-recovery-services/find-an-open-shelter.html',
    'Local',
    'First Aid, Disaster Relief, Donations, Fire Victims',
    'Active'
  ),
];

export default function StatusTable() {
  const classes = useStyles();

  const [tableRows, updateTableRow] = useState(rows);

  useEffect(() => {
    // updateTableRow('Hi Carlos');

    axios
      .get(
        `https://api.data.charitynavigator.org/v2/Organizations?app_id=0616eb7c&app_key=c03c3ff6a5ddde501dfa79d2292b598d&rated=false&causeID=18&state=NJ&zip=`
      )
      .then((res) => {
        const newData = tableRows;

        for (let i = 0; i < res.data.length; i++) {
          newData.push(
            createData(
              'HUD',
              'https://www.hud.gov/findshelter',
              'Web',
              'Shelter, Food, Health Clinics, Clothing ',
              'Active'
            )
          );
        }
        updateTableRow(newData);

        // const jsonList = ;
        console.log(res.data);
        console.log(tableRows);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Portal</TableCell>
            <TableCell>Sites</TableCell>
            <TableCell>Services</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        {/* Table Contents */}
        <TableBody>
          {tableRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                <Link target='_blank' href={row.url}>
                  {row.name}
                </Link>
              </TableCell>
              <TableCell>{row.numSites}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.statusUpdatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
