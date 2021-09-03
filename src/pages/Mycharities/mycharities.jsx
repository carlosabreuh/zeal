import axios from "axios";
import React, { useEffect, useState } from "react";
import { StatusTable } from "../../components";

export default function MyCharities({
  myCharities,
  tableRows,
  setMyCharities,
}) {
  console.log(myCharities);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/`)
      .then((res) => {
        console.log(res);

        setMyCharities(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {myCharities.length ? (
        <StatusTable
          setMyCharities={setMyCharities}
          tableRows={myCharities}
          page={"MyCharities"}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}
