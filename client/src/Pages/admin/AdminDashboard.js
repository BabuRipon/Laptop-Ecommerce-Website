import React from 'react';
import AdminNav from '../component/nav/adminav';

const AdminDashboard=()=>{

    return(
      <div className="container-fluid">
      <div className="row">
          <div className="col-md-2 ">
                <AdminNav />
          </div>
          <div className="col">
                Admin page description
          </div>
      </div>
   </div>
    )
}

export default AdminDashboard;