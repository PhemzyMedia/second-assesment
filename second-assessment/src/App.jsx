import './App.css'
import React from 'react';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';



function  App(){
    return (
        <div className='App'>
     
         <UserInput/>
         <UserOutput/>
         <UserOutput/>
         <UserOutput/>
         <UserOutput/>
      
        </div>
    )
}
   
    

export default App