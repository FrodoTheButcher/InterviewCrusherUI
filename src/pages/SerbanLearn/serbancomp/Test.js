import React from 'react'

import MiniBlackComp from './miniBlackComp';
function Test()
{
    return (
        <div style={{background:'red',width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
           <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',border:'5px solid white',height:'100%',width:'50%'}} >
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',background:'blue',height:'50%'}} >
                    <MiniBlackComp />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', background: 'blue', height: '50%' }} >
                    <MiniBlackComp />
                </div>
           </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '5px solid white', height: '100%', width: '50%' }} >
                <MiniBlackComp />
                <MiniBlackComp />
           </div>
        </div>
       
    )
};

export default Test;