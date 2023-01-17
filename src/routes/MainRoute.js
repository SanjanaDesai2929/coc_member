import { React, useEffect, useState } from 'react'
import { useRoutes, useNavigate } from "react-router-dom";
import Home from '../pages/member_pages/Home';
import List from '../pages/member_pages/Referral/List';

const MainRoute = ({ socket }) => {
 
 
// Member Routing 
  const routes = useRoutes([
    { path: "/dashboard", element: <Home /> },
    { path: "/trafficflow/referral_list", element: <List /> },
    { path: "/referral", element: <List /> },
    { path: "/trafficflow/referral_form", element: <List /> },
   

    
  ])
  return routes
}

export default MainRoute