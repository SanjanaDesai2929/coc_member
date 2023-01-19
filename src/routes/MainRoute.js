import { React, useEffect, useState } from 'react'
import { useRoutes, useNavigate,  useParams,useLocation,Link} from "react-router-dom";

import Home from '../pages/member_pages/Home';
import List from '../pages/member_pages/Referral/List';
import EditProfile from '../pages/member_pages/EditProfile/Editprofile'
import LinkPage from '../pages/member_pages/Referral/LinkPage';
import AddNew from '../pages/member_pages/Referral/AddNew';
import InvestNow from '../pages/member_pages/InvestNow';
import DailyTreasure from '../pages/member_pages/Income/DailyTreasure';
import SuperResources from '../pages/member_pages/Income/SuperResources';
import LeagueReward from '../pages/member_pages/Income/LeagueReward';
import ClansLeagueRewards from '../pages/member_pages/Income/ClansLeagueRewards';
import ReferralRevenue from '../pages/member_pages/Income/ReferralRevenue';
import Statement from '../pages/member_pages/Statement/Statement'
import Withdraw from '../pages/member_pages/Withdraw/Withdraw'
import Promotion from "../pages/member_pages/Promotion/promotion"
import Register from '../pages/member_pages/Register/Register';


// import { useNavigate } from "react-router-dom";
const MainRoute = () => {

  // <ul className="App-header">
  // <li>
  //   <Link to="/ref"></Link>
  // </li>
  // </ul>
  
  // const Navigate =  useNavigate()
  // let  slug  = useParams("/ref");

  // let location = useLocation();
  // React.useEffect(() => {
  //   ga.send(["pageview", location.pathname]);
  // }, [location]);
  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate("/ref");
  // }

  // <div>Now showing post {slug}</div>

// Member Routing 
  const routes = useRoutes([

    { path: "/dashboard", element: <Home /> },
    { path: "/trafficflow/referral_list", element: <List /> },
    { path: "/referral", element: <LinkPage /> },
    { path: "/trafficflow/referral_form", element: <AddNew /> },
    { path: "/add_balance" , element: <InvestNow />},
    { path: "/account/roi_income" , element: <DailyTreasure />},
    { path: "/account/team_revenue" , element: <SuperResources />},
    { path: "/account/referral_revenue" , element: <ReferralRevenue />},
    { path: "/account/league_reward" , element: <LeagueReward />},
    { path: "/account/clan_league_rewards" , element: <ClansLeagueRewards />},

    { path: "/profile" , element: <EditProfile />},
    { path: "/account/statement" , element: <Statement />},
    { path:"/withdrawal",element:<Withdraw /> },
    { path:"/promotion", element:<Promotion/>},
    { path:"/register" , element: <Register  />},
    { path:"/register/ref/:id" , element: <Register  />},
    
    

  ])
  return routes
}

export default MainRoute