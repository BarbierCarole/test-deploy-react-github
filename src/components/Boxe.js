import React, {useState} from 'react';

const Boxe = ({data, option, setOption}) => {
  
    console.log("data :",data);
    const [box, setBox] = useState(data);
    let frequence;

    switch(option) {
        case 'daily':
            frequence = "day";
            break;
        case 'weekly':
            frequence = "week";
            break;
        case 'monthly':
            frequence = "month";
            break;
        default:
            frequence = "week";
    }
    
    return (
        <div className={box.title.toLowerCase().replace(/ /g, "")}>
        {/* replace(/ /g, "") sert à effacer les espaces */}
        
            <div className="header">
                {/* <img src={work} className="icon" alt="icone" />  */}
                <span className="icon"></span>
            </div>
            <div className="content">
                <div className="content-title">
                    <span>{box.title}</span>
                    <span>
                        {/* <img src={suspendingPoints} alt="..."/>  */}
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
                        </svg>
                    </span>
                </div>
                <div className="content-detail">
                    {/* <div className={option}> */}
                        <h3>{box.timeframes[option].current}hrs</h3> {/* <!-- daily--> */}
                        <h2> Last {frequence}  - {box.timeframes[option].previous}hrs </h2>{/* <!-- daily--> */}
                    {/* </div> */}
                </div>
            </div>            
        </div>
    );
};

export default Boxe;