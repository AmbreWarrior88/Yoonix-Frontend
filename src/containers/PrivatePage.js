import React, { useEffect, useState } from "react";

import axios from "axios";

import Cookies from "js-cookie";

import { makeStyles } from "@material-ui/core/styles";

import MemberCard from "../components/MemberCard";

const useStyles = makeStyles({
  title: {
    color: "#FAD493",
    display: "flex",
    justifyContent: "center",
    margin: "40px",
  },
  text: {
    color: "#FAD493",
    display: "flex",
    justifyContent: "center",
    margin: "100px",
  },
});

const PrivatePage = () => {
  // State pour gérer le chargement des données
  const [isLoading, setIsLoading] = useState(true);

  const [results, setResults] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: "https://yoonix.herokuapp.com/private",
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      });
      console.log(response);
      if (response.status !== 401) {
        setResults(response.data);
      } else {
        setResults([]);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={classes.title}>Membres inscrits</h2>
      {isLoading === true ? (
        <p className={classes.text}>Chargement...</p>
      ) : (
        results.map((result) => {
          return <MemberCard {...result} key={result.login.uuid} />;
        })
      )}
    </div>
  );
};

export default PrivatePage;
