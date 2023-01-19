import React, { useEffect, useState } from 'react'
import MemberTheme from './theme/MemberTheme'
import queen from "../../assets/images/queen.png"
import coin from "../../assets/images/coin.png"
import warden_min from "../../assets/images/warden_min.png"
import flying_min from "../../assets/images/flying_min.png"
import roayl_champ_min from "../../assets/images/roayl_champ_min.png"
import queen_2_min from "../../assets/images/queen_2_min.png"
import warden_2_min from "../../assets/images/warden_2_min.png"
import ballon_min from "../../assets/images/ballon_min.png"
import dragon_min from "../../assets/images/dragon_min.png"
import goblin_min from "../../assets/images/goblin_min.png"
import barbarian_min from "../../assets/images/barbarian_min.png"
import unranked_1 from "../../assets/images/unranked_1.png"
import { NavLink } from 'react-router-dom'
// import Chart from 'chart.js/auto';
import $ from "jquery"

const Home = () => {
  // $(document).ready(function () {
  //   var ctx = document.getElementById("incomeChart").getContext('2d');
  //   var myChart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: ['Daily Treasure', 'Super Resources', 'Referral Revenue', 'Clan League Reward', 'League Reward'],
  //       datasets: [{
  //         label: '# of Votes',
  //         // data: "",
  //         data: [ 0,0,1,0,0],

  //         backgroundColor: [
  //           '#b154f070',
  //           'rgba(54, 162, 235, 0.7)',
  //           'rgba(255, 206, 86, 0.7)',
  //           'rgba(75, 192, 192, 0.7)',
  //           '#df4c2170'
  //         ],
  //         borderColor: [
  //           '#b154f080',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           '#df4c21'
  //         ],
  //         borderWidth: 2,
  //         scaleFontColor: "#FFFFFF"
  //       }]
  //     },
  //     options: {
  //       scales: {
  //           y: {
  //               beginAtZero: true
  //           }
  //       },
      
  //   }
  //   });
  // })
  const [state, setState] = useState({})
  // const data = sessionStorage.getItem("admin")
  // const admin_data = JSON.parse(data)
  const homeData = async () => {
    const fromdata = new FormData()
    fromdata.append("member_id", 3)
    var response = await fetch(`/demo/rtvk/ci_admin_api/coc22game/api/Commondata`, {
      method: "POST",
      headers: {
        // "Content-type": "application/json",
        Authorization: "d200d1f41c0f1b45087d6e8a2158c382bce469daf7dc51dc28237a0822a08d86b7df15b7272aeee7a09191e0511ca96f8cdabb11b1bbae92ed0df86ef18d554altcbvyVgoGH+89DP5k7os7Q2VCfHDSCUl4gaAWeQzWM="

        // Authorization: admin_data.reset_api
      },
      body: fromdata
    })
    var res_data = await response.json();
    setState(res_data.message[0])

  }
  useEffect(() => {
    homeData()
  }, [])
  return (
    <>
      <MemberTheme>
        <div className="content-wrap">
          {/* <!-- card --> */}
          <div className="row box-row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={queen} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Main Wallet</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" />{state.wallet_balance}</h2>
                  <NavLink className="btn btn-primary theme-btn" to="/account/account_history" role="button">History</NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={warden_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Active Package</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" /> {state.total_upgraded_amount}</h2>
                  <NavLink className="btn btn-primary theme-btn" href="/add_balance" role="button">Upgrade</NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={flying_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Pending  Withdraw</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" /> {state.total_pending_withdrawl}</h2>
                  <NavLink className="btn btn-primary  theme-btn" href="/withdrawal" role="button">Update</NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={roayl_champ_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Paid  Withdraw</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" /> {state.total_paid_withdrawl}</h2>
                  <NavLink className="btn btn-primary theme-btn" href="/withdrawal" role="button">Update</NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={queen_2_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Daily Treasure</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" />{state.total_daily_treasure}</h2>
                  <NavLink className="btn btn-primary theme-btn" href="/account/roi_income" role="button">Check</NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={warden_2_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Super Resources</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" />{state.total_super_resources}</h2>
                  <NavLink className="btn btn-primary theme-btn" href="/account/team_revenue" role="button">Check</NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={ballon_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Referral Revenue</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" />{state.total_referral_revenue}</h2>
                  <NavLink className="btn btn-primary theme-btn" href="/account/referral_revenue" role="button">Check</NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={dragon_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">League Reward</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" />{state.total_league_reward}</h2>
                  <NavLink className="btn btn-primary theme-btn" href="/account/league_reward" role="button">Check</NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={goblin_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Clan League Reward</h3>
                  <h2 className="coin-balance mt-2"><img src={coin} alt="$" className="img-fluid pe-2" /> {state.total_clan_league_reward}</h2>
                  <NavLink className="btn btn-primary theme-btn" href="/account/clan_league_rewards" role="button">Check</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="col-inner balance-card text-end">
                <div className="card-header">
                  <img src={barbarian_min} alt="logo" className="img-fluid queen" />
                  <h3 className="card-title">Clan League Reward Level</h3>
                  <h2 className="coin-balance mt-2">Level: 0 </h2>
                  <NavLink className="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/clan_league_rewards" role="button">Check</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="col-inner balance-card text-start p-3">
                <div className="card-header">
                  <h2 className="coin-balance text-start mb-3">Iphone Reward</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="card-title ">Strong Side:</h3>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                      </div>
                      <p className="text-end text-light"><img src={coin} alt="$" className="img-fluid pe-2" style={{ height: "20px" }} />6000</p>
                    </div>
                    <div className="col-md-6">
                      <h3 className="card-title ">Other Side:</h3>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                      </div>
                      <p className="text-end text-light"><img src={coin} alt="$" className="img-fluid pe-2" style={{ height: "20px" }} />6000</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


          {/* <!-- End of Card --> */}
          <div className="row mt-5 justify-content-center income-row">
            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 mb-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="level-info purple-box h-100">
                    <div className="purple-budge-title text-center">
                      <h3>League Rewards</h3>
                    </div>
                    <div className="purple-budge-body p-4 text-center">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-12 border-end pb-lg-0 pb-4 mb-lg-0 mb-4 border-light">
                          <p className="card-title text-center mb-3">Current Month</p>
                          <img src={unranked_1} alt="" className="img-fluid" width="90px" />
                          <h2>Unranked</h2>
                          <div className="counterup_inner d-flex justify-content-center">
                            <div className="single_counterup one">
                              <div className="counterup_text">
                                <h2 className="counterup color1">0</h2>
                                <span>Strong Side</span>
                              </div>
                            </div>
                            <div className="single_counterup two">
                              <div className="counterup_text">
                                <h2 className="counterup color2">0</h2>
                                <span>Other Side</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <p className="card-title text-center mb-3">Last Month</p>
                          <img src={unranked_1} alt="" className="img-fluid" width="90px" />
                          <h2>Unranked</h2>

                          <div className="counterup_inner d-flex justify-content-center">
                            <div className="single_counterup one">
                              <div className="counterup_text">
                                <h2 className="counterup color1">0</h2>
                                <span>Strong Side</span>
                              </div>
                            </div>
                            <div className="single_counterup two">
                              <div className="counterup_text">
                                <h2 className="counterup color2">0</h2>
                                <span>Other Side</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="level-info purple-box h-100">
                    <div className="purple-budge-title-2 text-center">
                      <h3>Level</h3>
                    </div>
                    <div className="purple-budge-body level-wrap p-4 text-center">
                      <h2 className="level-txt">0</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-8 col-md-6 col-sm-12 mb-4">
              <div className="purple-box h-100">
                <canvas id="incomeChart" width="709" height="708" style={{ display: "block", boxSizing: " border-box", height: "354px", width: "354.5px" }}></canvas>
              </div>
            </div>
          </div>
        </div>

      </MemberTheme>
    </>
  )
}

export default Home