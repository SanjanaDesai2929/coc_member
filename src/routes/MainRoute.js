import { React, useEffect, useState } from 'react'
import { useRoutes, useNavigate } from "react-router-dom";

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
import Register from '../pages/member_pages/Register/register';


const MainRoute = () => {
  const Navigate =  useNavigate()
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
    // { path:"/register" , element: <Register  />? <Navigate replace to={"/ref"} />:""}

    
  ])
  return routes
}

export default MainRoute