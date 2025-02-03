import React, { useState, useEffect } from "react";

const Body = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <section className="lower">
      <div className="lower-container">
          {jobs.map(job => (
            <div className="post">
            <div>
            <h2 className="post-title">{job.title}</h2>
            <div className="post-meta"><strong>{job.company}</strong> - {job.date_posted}</div>
            <div className="post-content">{job.description}</div>
            <a href={`/jobs/${job.id}`} className="read-more">Continue reading →</a>
            </div>

            <div>
            <img src={job.image} alt={job.title} className="img-thumbnail w-25"/>
            </div>
          </div>
          ))}
      </div>
    </section>
  );
};

export default Body;
