import React, { useEffect, useState } from "react";

import axios from "axios";

import MemberCard from "../components/MemberCard";

const PrivetPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://randomuser.me/api/");

      setResults(response.data.results);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{ color: "#FAD493" }}>Membre inscrit</h2>
      {isLoading === true ? (
        <p>Chargement...</p>
      ) : (
        results.map((result) => {
          return <MemberCard {...result} />;
        })
      )}
    </div>
  );
};

export default PrivetPage;
