import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setLoading(false);
    setJobs(newJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  console.log(jobs);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
