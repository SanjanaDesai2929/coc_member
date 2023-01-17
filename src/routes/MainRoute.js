import { React, useEffect, useState } from 'react'
import { useRoutes, useNavigate } from "react-router-dom";
import Home from '../pages/member_pages/Home';
import List from '../pages/member_pages/Referral/List';
import EditProfile from '../pages/member_pages/EditProfile/Editprofile'
import Statement from '../pages/member_pages/Statement/Statement'
import Withdraw from '../pages/member_pages/Withdraw/Withdraw'
const MainRoute = ({ socket }) => {
 
 
// Member Routing 
  const routes = useRoutes([
    { path: "/dashboard", element: <Home /> },
    { path: "/trafficflow/referral_list", element: <List /> },
    { path: "/referral", element: <List /> },
    { path: "/trafficflow/referral_form", element: <List /> },
    { path: "/profile" , element: <EditProfile />},
    { path: "/account/statement" , element: <Statement />},
    { path:"/withdrawal",element:<Withdraw /> }
    
  ])
  return routes
}

export default MainRoute