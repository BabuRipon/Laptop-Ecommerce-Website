import React from 'react';
import UserNav from '../component/nav/usernav';


const History=()=>{
  
    return(
      <div className="container-fluid">
         <div className="row">
             <div className="col-md-2 ">
                   <UserNav />
             </div>
             <div className="col">
                   history description
             </div>
         </div>
      </div>
    )
}

export default History;