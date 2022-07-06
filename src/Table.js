import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Age</th>
          <th>Industry</th>
          <th>Job Title</th>
          <th>Annual Salary</th>
          <th>Currency</th>
          <th>Location</th>
          <th>Work Experience</th>
          <th>Job Title Context</th>
          <th>Other Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => {
          return (
            <tr>
              <td>{d.timestamp}</td>
              <td>{d.age}</td>
              <td>{d.industry}</td>
              <td>{d.jobTitle}</td>
              <td>{d.annualSalary}</td>
              <td>{d.currency}</td>
              <td>{d.workExperience}</td>
              <td>{d.jobTitleContext}</td>
              <td>{d.otherCurrency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
