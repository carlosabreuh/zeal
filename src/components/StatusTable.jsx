import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';

const useStyles = makeStyles({
  table: {},
});

export default function StatusTable({ tableRows, myCharities, setMyCharities, page,}) {
  const classes = useStyles(); 
  

  const handleClick = (newCharity) => {
    console.log(newCharity);
    console.log(newCharity);

    buttonFunc(newCharity);
  };

  // name,
  //     websiteURL,
  //     charityNavigatorURL,
  //     mailingAddress,
  //     entityClassification,
  //     ein,
  //     statusUpdatedAt,

  let buttonName, buttonFunc, actionName;

  if (page === 'MyCharities') {
    actionName = 'Remove';
    buttonFunc = (newCharity) => {
      setMyCharities((state) =>
        state.filter((charity) => newCharity.id !== charity.id)
      );
      axios
        .delete(`http://localhost:8080/api/users/${newCharity.id}`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    };

    buttonName = (
      <IconButton aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    );
  } else if (page === 'Resources') {
    actionName = 'Save';
    if (false) {
      alert('Please Login');
      return;
    }

    buttonFunc = (newCharity) => {
      console.log(myCharities);
      console.log(newCharity);
      let alreadyAdded = myCharities.filter((ch) => ch.name === newCharity.name)
        .length;
      console.log(alreadyAdded);
      if (!alreadyAdded) {
        let data = {
          userName: '',
          favoriteCharity: newCharity.name,
          city: newCharity.mailingAddress,
          clasification: newCharity.entityClassification,
          charityUrl: newCharity.websiteURL || newCharity.charityNavigatorURL,
        };
        axios
          .post(`http://localhost:8080/api/users/`, data)
          .then((res) => {
            console.log(res);
            let newNewCharity = {...newCharity};
            newNewCharity.id = res.data.id;
            setMyCharities((state) => [...state, newNewCharity]);
          })
          .catch((error) => console.log(error));
      }
    };

    buttonName = (
      <Fab
        size='small'
        color='secondary'
        aria-label='add'
        className={classes.margin}
      >
        <AddIcon />
      </Fab>
    );
  }
  //myCharities.includes((ch) => ch.ein!==newCharity.ein) && setMyCharities ((state) => [...state, newCharity])
console.log(tableRows);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Classification / Purpose</TableCell>
            <TableCell>Save</TableCell>
          </TableRow>
        </TableHead>
        {/* Table Contents */}
        <TableBody>
          {tableRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                <Link
                  target='_blank'
                  href={row.websiteURL || row.charityNavigatorURL || row.charityUrl}
                >
                  {row.name || row.favoriteCharity}
                </Link>
              </TableCell>
              <TableCell>{row.mailingAddress || row.city}</TableCell>
              <TableCell>{row.entityClassification || row.clasification}</TableCell>
              <TableCell onClick={() => handleClick(row)}>
                {buttonName}

                {/* <TableCell>{row.statusUpdatedAt}</TableCell> */}

                {/* name,
    websiteURL,
    charityNavigatorURL,
    mailingAddress,
    entityClassification,
    ein,
    statusUpdatedAt, */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
