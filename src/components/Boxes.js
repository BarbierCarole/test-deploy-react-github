import React, { useState } from 'react';

import Boxe from './Boxe'; 
import boxesList from './../data/data.json';

const Boxes = ({option, setOption}) => {

    const [data, setData] = useState({boxesList});

    return (
        <div className="boxes">
            
            {data.boxesList.map((boxe,i) =>
                <div key={i}>
                <Boxe data={boxe} option={option} setOption={setOption} />
                </div>
            )}  
        </div>
    );
};

export default Boxes;