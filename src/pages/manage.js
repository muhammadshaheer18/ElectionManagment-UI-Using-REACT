import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Manage = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch candidate data when the component mounts
    axios.get('/manage')
      .then(response => {
        setCandidates(response.data);
      })
      .catch(error => {
        console.error('Error fetching candidates:', error);
      });
  }, []);

  return (
    <div>
      <h1>Election Candidate List</h1>
      <div className="candidates-list">
        {candidates.map(candidate => (
          <div key={candidate._id} className="candidate-card">
            <h2>Name: {candidate.name}</h2>
            <p>CNIC: {candidate.cnic}</p>
            <p>City: {candidate.city}</p>
            <p>National Assembly: {candidate.nationalAssembly}</p>
            <p>Party Name: {candidate.partyName}</p>
            <p>Party Leader: {candidate.partyLeader}</p>
            <p>Status: {candidate.status ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manage;
