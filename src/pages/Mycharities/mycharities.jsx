import React, { useState } from 'react';
import { StatusTable } from '../../components';
import Alert from '../../components/Alert'

export default function MyCharities({ myCharities, tableRows, setMyCharities }) {
  console.log(myCharities);

  return (
      <>
    { myCharities.length ? <StatusTable
      setMyCharities={setMyCharities}
      tableRows={myCharities}
      page={"MyCharities"}
    />: ""}
    </>
  );
}
