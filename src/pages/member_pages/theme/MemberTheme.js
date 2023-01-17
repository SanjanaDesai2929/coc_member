import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../../assets/images/logo.png"
import $ from "jquery"
import unranked_1 from "../../../assets/images/unranked_1.png"
const MemberTheme = (props) => {
    //  Sidebar
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('.nav-close').toggleClass('open');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
        $('.nav-close').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('.nav-close').toggleClass('open');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
        
    });
    console.log(window.location.pathname);
    return (
        <>
            <div class="main-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-2">
                            <nav id="sidebar">
                                <div class="sidebar-header">
                                    <NavLink to="/">
                                        <img src={logo} alt="logo" class="img-fluid" width="213" height="113" /></NavLink>
                                    <button type="button" class="btn btn-info nav-close"><i class="fa fa-close"></i>
                                    </button>
                                </div>
                                <ul class="list-unstyled components">
                                    <li class={`${window.location.pathname=="/dashboard" ? "active":""}`}>
                                        <NavLink to="/dashboard">
                                            <i class="fa-solid fa-chart-area pe-2"></i>
                                            <span class="label">Dashboard</span>
                                        </NavLink>
                                    </li>
                                    <li class={`dropdown ${window.location.pathname=="/trafficflow/referral_list" || window.location.pathname=="/referral" || window.location.pathname=="/trafficflow/referral_form" ? "active":""}`}>
                                        <a id="referral" href="#" class= {` dropdown-toggle ${window.location.pathname=="/trafficflow/referral_list" || window.location.pathname=="/referral" || window.location.pathname=="/trafficflow/referral_form" ? "show":""} `} role="button" data-href="/trafficflow/referral_list" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-users pe-2"></i>
                                            <span class="label">Referrals</span>
                                        </a>
                                        <ul aria-labelledby="referral" class={`dropdown-menu ${window.location.pathname=="/trafficflow/referral_list" || window.location.pathname=="/referral" || window.location.pathname=="/trafficflow/referral_form" ? "show":""}  `}>
                                            <li class={`${window.location.pathname=="/trafficflow/referral_list" ? "active":""}`}>
                                                <NavLink to="/trafficflow/referral_list" class="dropdown-item">
                                                    <span class="label1">List</span>
                                                </NavLink>
                                            </li>
                                            <li class={`${window.location.pathname=="/referral" ? "active":""}`}>

                                                <NavLink to="/referral" class="dropdown-item">
                                                    <span class="label1">Link</span>
                                                </NavLink>
                                            </li>
                                            <li class={`${window.location.pathname=="/trafficflow/referral_form" ? "active":""}`}>

                                                <NavLink to="/trafficflow/referral_form" class="dropdown-item">
                                                    <span class="label1">Add New</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class={`${window.location.pathname=="/add_balance" ? "active":""}`}>
                                        <NavLink to="/add_balance">
                                            <i class="fa-solid fa-download pe-2"></i>
                                            <span class="label">Invest Now</span>
                                        </NavLink>
                                    </li>
                                    <li class={`dropdown ${window.location.pathname=="/account/roi_income" || window.location.pathname=="/account/team_revenue" || window.location.pathname=="/account/referral_revenue" || window.location.pathname=="/account/league_reward"||window.location.pathname=="/account/clan_league_rewards" ? "active":""}`}>

                                        <a id="incomes" href="#" class="dropdown-toggle" role="button" data-href="/account/roi_income" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-table-list pe-2"></i>
                                            <span class="label">Incomes</span>
                                        </a>
                                        <ul aria-labelledby="referral" class={`dropdown-menu ${window.location.pathname=="/account/roi_income" || window.location.pathname=="/account/team_revenue" || window.location.pathname=="/account/referral_revenue" || window.location.pathname=="/account/league_reward"||window.location.pathname=="/account/clan_league_rewards" ? "show":""}`}>
                                        <li class={`${window.location.pathname=="/account/roi_income" ? "active":""}`}>
                                                <NavLink to="/account/roi_income" class="dropdown-item">
                                                    <span class="label">Daily Treasure</span>
                                                </NavLink>
                                            </li>
                                            <li class={`${window.location.pathname=="/account/team_revenue" ? "active":""}`}>

                                                <NavLink to="/account/team_revenue" class="dropdown-item">
                                                    <span class="label">Super Resources</span>
                                                </NavLink>
                                            </li>
                                            <li class={`${window.location.pathname=="/account/referral_revenue" ? "active":""}`}>

                                                <NavLink to="/account/referral_revenue" class="dropdown-item">
                                                    <span class="label">Referral Revenue</span>
                                                </NavLink>
                                            </li>
                                            <li class={`${window.location.pathname=="/account/league_reward" ? "active":""}`}>

                                                <NavLink to="/account/league_reward" class="dropdown-item">
                                                    <span class="label">League Reward</span>
                                                </NavLink>
                                            </li>
                                            <li class={`${window.location.pathname=="/account/clan_league_rewards" ? "active":""}`}>

                                                <NavLink to="/account/clan_league_rewards" class="dropdown-item">
                                                    <span class="label">Clan League Rewards</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class={`${window.location.pathname=="/withdrawal" ? "active":""}`}>
                                        <NavLink to="/withdrawal">
                                            <i class="fa-solid fa-upload pe-2"></i>
                                            <span class="label">Withdrawal</span>
                                        </NavLink>
                                    </li>
                                    <li class={`${window.location.pathname=="/account/statement" ? "active":""}`}>
                                        <NavLink to="/account/statement">
                                            <i class="fa-solid fa-table-list pe-2"></i>
                                            <span class="label">Statement</span>
                                        </NavLink>
                                    </li>
                                    <li class={`${window.location.pathname=="/profile" ? "active":""}`}>
                                        <NavLink to="/profile" style={{ color: "white" }}>
                                            <i class="fa-solid fa-user pe-2"></i>
                                            <span class="label">Edit Profile</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login/logout" style={{ color: "white" }}>
                                            <i class="fa-solid fa-sign-out pe-2"></i>
                                            <span class="label">Logout</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-10">
                            <div class="content-wrapper">
                                <div class="mobile-nav p-3">
                                    <div class="row align-items-center">
                                        <div class="col-6">
                                            <img src={logo} alt="logo" class="img-fluid" width="213" height="113" />
                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <div class="profile-details me-3">
                                                <div class="dropdown ">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <div class="member-image">
                                                            <img src={unranked_1} alt="logo" class="img-fluid " width="54" height="82" />
                                                        </div>
                                                        <div class="mobile-member-username">
                                                            <span class="admin-name">COC428789</span>
                                                        </div>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                        <li><a class="dropdown-item" href="/profile" style={{ color: "white" }}>Edit Profile</a></li>
                                                        <li><a class="dropdown-item" href="/login/logout" style={{ color: "white" }}>Logout</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <button type="button" id="sidebarCollapse" class="btn btn-info btn-to navbar-btn"><i class="fa fa-bars"></i>
                                                <span>Toggle Sidebar</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mobile-username">
                                    <h3 class="text-center text-white mb-3">User ID :- COC428789</h3>
                                </div>

                                <div class="top-nav">
                                    <div class="row">
                                        <div class="col-12">

                                            <nav class="navbar-default purple-box ">
                                                <div class="row m-0 p-0 navbar-content ">
                                                    <div class="col-md-6">
                                                        <h2 class="member-name">Hello, coc2ffdhjjerwfe</h2>
                                                        <h3 class="welcome-txt">Welcome Back to Your Village </h3>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="profile-details float-end">
                                                            <div class="dropdown">
                                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <div class="member-image">

                                                                        <img src={unranked_1} alt="logo" class="img-fluid " width="54" height="82" />
                                                                    </div>
                                                                    <div>
                                                                        <span class="admin-name">COC428789</span>
                                                                    </div>
                                                                </button>
                                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                                    <li><a class="dropdown-item" href="/profile" style={{ color: "white" }}>Edit Profile</a></li>
                                                                    <li><a class="dropdown-item" href="/login/logout" style={{ color: "white" }}>Logout</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                {props.children}


                            </div>
                            {/* <!-- ==== dashboard section start ==== --> */}

                            <div class="footer">
                                <div class="row m-0">
                                    <div class="col-12">
                                        <p>Copyright © 2022 Clash of Clans. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MemberTheme