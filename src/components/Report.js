import React from 'react';
import { useState } from 'react';
import jeremy from '../images/image-jeremy.png';
import boxesList from './../data/data.json';

const Report = ({option, setOption}) => {
  
  const [data, setData] = useState({boxesList});

  const myChoiseOption = (e) => {
    const elems = document.getElementsByTagName('li');
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    setOption(e.target.className);
    e.target.className += " active";
  }


  return (
      <div className="report">
        <div className="header">
          <img src={jeremy} className ="profil-img" alt="Jérémy" />
          <div className="profil-name">
            <h2>Report for</h2>
            <h1>Jeremy Robson</h1>
          </div>            
        </div>
        <div className="content">
          <ul>
            <li className="daily" onClick= {(e) => myChoiseOption(e)}>
              Daily
            </li>
            <li className="weekly active" onClick= {(e) => myChoiseOption(e)}>
              Weekly
            </li>
            <li className="monthly" onClick= {(e) => myChoiseOption(e)}>
              Monthly
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Report;