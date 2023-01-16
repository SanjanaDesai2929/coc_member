import { React, useEffect, useState } from 'react'
import { useRoutes, useNavigate } from "react-router-dom";
import Home from '../pages/member_pages/Home';

const MainRoute = ({ socket }) => {
 
 
// Member Routing 
  const routes = useRoutes([
    { path: "/dashboard", element: <Home /> },

    
  ])
  return routes
}

export default MainRoute