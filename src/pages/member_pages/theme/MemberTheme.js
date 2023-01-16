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
        $('#datatable').DataTable({
            dom: 'lBfrtip',
            language: {
                search: "",
                searchPlaceholder: "Type something..."
            },
            oLanguage: {
                oPaginate: {
                    sNext: '<span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-right" ></i></span>',
                    sPrevious: '<span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-left" ></i></span>'
                }
            }
        });
        $('#datatable').on('click', '.actions', function () {
            $(this).next('.actions-toggle').toggle();
        });
    });
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
                                    <li class=" active">
                                        <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/dashboard">
                                            <i class="fa-solid fa-chart-area pe-2"></i>
                                            <span class="label">Dashboard</span>
                                        </NavLink>
                                    </li>
                                    <li class="dropdown ">
                                        <a id="referral" href="#" class="dropdown-toggle" role="button" data-href="https://developerinfotech.com/demo/rtvk/ci_admin_api/trafficflow/referral_list" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-users pe-2"></i>
                                            <span class="label">Referrals</span>
                                        </a>
                                        <ul aria-labelledby="referral" class="dropdown-menu ">
                                            <li class=" ">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/trafficflow/referral_list" class="dropdown-item">
                                                    <span class="label">List</span>
                                                </NavLink>
                                            </li>
                                            <li class=" ">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/referral" class="dropdown-item">
                                                    <span class="label">Link</span>
                                                </NavLink>
                                            </li>
                                            <li class=" ">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/trafficflow/referral_form" class="dropdown-item">
                                                    <span class="label">Add New</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class=" ">
                                        <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/subscriber/add_balance">
                                            <i class="fa-solid fa-download pe-2"></i>
                                            <span class="label">Invest Now</span>
                                        </NavLink>
                                    </li>
                                    <li class="dropdown ">
                                        <a id="incomes" href="#" class="dropdown-toggle" role="button" data-href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/roi_income" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-table-list pe-2"></i>
                                            <span class="label">Incomes</span>
                                        </a>
                                        <ul aria-labelledby="referral" class="dropdown-menu ">
                                            <li class=" ">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/roi_income" class="dropdown-item">
                                                    <span class="label">Daily Treasure</span>
                                                </NavLink>
                                            </li>
                                            <li class=" ">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/team_revenue" class="dropdown-item">
                                                    <span class="label">Super Resources</span>
                                                </NavLink>
                                            </li>
                                            <li class=" ">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/referral_revenue" class="dropdown-item">
                                                    <span class="label">Referral Revenue</span>
                                                </NavLink>
                                            </li>
                                            <li class=" ">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/league_reward" class="dropdown-item">
                                                    <span class="label">League Reward</span>
                                                </NavLink>
                                            </li>
                                            <li class=" ">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/clan_league_rewards" class="dropdown-item">
                                                    <span class="label">Clan League Rewards</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class=" ">
                                        <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/withdrawal">
                                            <i class="fa-solid fa-upload pe-2"></i>
                                            <span class="label">Withdrawal</span>
                                        </NavLink>
                                    </li>
                                    <li class=" ">
                                        <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/statement">
                                            <i class="fa-solid fa-table-list pe-2"></i>
                                            <span class="label">Statement</span>
                                        </NavLink>
                                    </li>
                                    <li class=" ">
                                        <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/profile" style={{ color: "white" }}>
                                            <i class="fa-solid fa-user pe-2"></i>
                                            <span class="label">Edit Profile</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/login/logout" style={{ color: "white" }}>
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
                                                        <li><a class="dropdown-item" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/profile" style={{ color: "white" }}>Edit Profile</a></li>
                                                        <li><a class="dropdown-item" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/login/logout" style={{ color: "white" }}>Logout</a></li>
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
                                                                    <li><a class="dropdown-item" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/profile" style={{ color: "white" }}>Edit Profile</a></li>
                                                                    <li><a class="dropdown-item" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/login/logout" style={{ color: "white" }}>Logout</a></li>
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