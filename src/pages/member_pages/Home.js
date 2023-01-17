import React from 'react'
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



const Home = () => {
  return (
    <>
      <MemberTheme>
        <div class="content-wrap">
          {/* <!-- card --> */}
          <div class="row box-row">
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={queen} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Main Wallet</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/account_history" role="button">History</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={warden_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Active Package</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/subscriber/add_balance" role="button">Upgrade</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={flying_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Pending  Withdraw</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary  theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/withdrawal" role="button">Update</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={roayl_champ_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Paid  Withdraw</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/withdrawal" role="button">Update</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={queen_2_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Daily Treasure</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/roi_income" role="button">Check</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={warden_2_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Super Resources</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/team_revenue" role="button">Check</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={ballon_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Referral Revenue</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/referral_revenue" role="button">Check</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={dragon_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">League Reward</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/league_reward" role="button">Check</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col mb-lg-4">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={goblin_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Clan League Reward</h3>
                  <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2" /> 0.00</h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/clan_league_rewards" role="button">Check</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="col-inner balance-card text-end">
                <div class="card-header">
                  <img src={barbarian_min} alt="logo" class="img-fluid queen" />
                  <h3 class="card-title">Clan League Reward Level</h3>
                  <h2 class="coin-balance">Level: 0 </h2>
                  <a class="btn btn-primary theme-btn" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/account/clan_league_rewards" role="button">Check</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="col-inner balance-card text-start p-3">
                <div class="card-header">
                  <h2 class="coin-balance text-start mb-3">Iphone Reward</h2>
                  <div class="row">
                    <div class="col-md-6">
                      <h3 class="card-title ">Strong Side:</h3>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                      </div>
                      <p class="text-end text-light"><img src={coin} alt="$" class="img-fluid pe-2" style={{ height: "20px" }} />6000</p>
                    </div>
                    <div class="col-md-6">
                      <h3 class="card-title ">Other Side:</h3>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                      </div>
                      <p class="text-end text-light"><img src={coin} alt="$" class="img-fluid pe-2" style={{ height: "20px" }} />6000</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


          {/* <!-- End of Card --> */}
          <div class="row mt-5 justify-content-center income-row">
            <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 mb-4">
              <div class="row">
                <div class="col-md-8">
                  <div class="level-info purple-box h-100">
                    <div class="purple-budge-title text-center">
                      <h3>League Rewards</h3>
                    </div>
                    <div class="purple-budge-body p-4 text-center">
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-12 border-end pb-lg-0 pb-4 mb-lg-0 mb-4 border-light">
                          <p class="card-title text-center mb-3">Current Month</p>
                          <img src={unranked_1} alt="" class="img-fluid" width="90px" />
                          <h2>Unranked</h2>
                          <div class="counterup_inner d-flex justify-content-center">
                            <div class="single_counterup one">
                              <div class="counterup_text">
                                <h2 class="counterup color1">0</h2>
                                <span>Strong Side</span>
                              </div>
                            </div>
                            <div class="single_counterup two">
                              <div class="counterup_text">
                                <h2 class="counterup color2">0</h2>
                                <span>Other Side</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-12">
                          <p class="card-title text-center mb-3">Last Month</p>
                          <img src={unranked_1} alt="" class="img-fluid" width="90px" />
                          <h2>Unranked</h2>

                          <div class="counterup_inner d-flex justify-content-center">
                            <div class="single_counterup one">
                              <div class="counterup_text">
                                <h2 class="counterup color1">0</h2>
                                <span>Strong Side</span>
                              </div>
                            </div>
                            <div class="single_counterup two">
                              <div class="counterup_text">
                                <h2 class="counterup color2">0</h2>
                                <span>Other Side</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="level-info purple-box h-100">
                    <div class="purple-budge-title-2 text-center">
                      <h3>Level</h3>
                    </div>
                    <div class="purple-budge-body level-wrap p-4 text-center">
                      <h2 class="level-txt">0</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-8 col-md-6 col-sm-12 mb-4">
              <div class="purple-box h-100">
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