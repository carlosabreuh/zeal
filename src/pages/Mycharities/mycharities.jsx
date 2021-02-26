import React, { useState } from 'react';
import { StatusTable } from '../../components';

export default function MyCharities({ myCharities, tableRows, setMyCharities }) {
  console.log(myCharities);

  return (
    <StatusTable
      setMyCharities={setMyCharities}
      tableRows={myCharities}
      page={"MyCharities"}
    />
  );
}
