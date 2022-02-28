import React from 'react';

const Title = ({data,title}) => {
    return (
           <div className='container titleContainer'>
                    <p className='titleText'>{title}</p>
                    <div className='titles'>
                        {data.map((title) => {
                            return( <img  className='titlesItem cursor' style={{width:"100%"}} src={title} alt={title} /> ) 
                              
                           
                       })}
                    </div>
                </div>
    );
};

export default Title;