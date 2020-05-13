import React, { useEffect, useState } from "react";

import axios from "axios";

import Cookies from "js-cookie";

import MemberCard from "../components/MemberCard";

const PrivatePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:4000/private",
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      });
      console.log(response);
      // if (response.status !== 401) {
      //   setResults(response.data);
      // } else {
      //   setResults([]);
      // }

      // setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{ color: "#FAD493" }}>Membre inscrit</h2>
      {isLoading === true ? (
        <p style={{ color: "#FAD493" }}>Chargement...</p>
      ) : (
        results.map((result) => {
          return <MemberCard {...result} key={result.login.uuid} />;
        })
      )}
    </div>
  );
};

export default PrivatePage;
