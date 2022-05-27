import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

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

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const valueSetter = (num) => {};

  const { id, title, dates, duties, company } = jobs[value];
  return (
    <div>
      <h1>New Jobs available</h1>
      {jobs.map((job, index) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button key={job.id} onClick={() => setValue(index)}>
              {job.company}
            </button>
          </div>
        );
      })}

      <div>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <h4>{dates}</h4>
        {duties.map((duty) => {
          return (
            <article style={{ display: "flex", alignItems: "center" }}>
              <FaAngleDoubleRight />
              <p>{duty}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default App;
