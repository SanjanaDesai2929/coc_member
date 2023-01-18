import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Withdrawaltable from '../DataTable/Withdrawaltable'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'
import coin from "../../../assets/images/coin.png"
import queen from "../../../assets/images/queen.png"
import warden_min from "../../../assets/images/warden_min.png"
import flying_min from "../../../assets/images/flying_min.png"
import WithdrawAdd from './WithdrawAdd'

const Withdraw = () => {
    const [state, setState] = useState({})
    // const data = sessionStorage.getItem("admin")
    // const admin_data = JSON.parse(data)
    const homeData = async () => {
      const fromdata=new FormData()
      fromdata.append("member_id",3)
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
        <MemberTheme>
            <div class="content-wrap">
               <Breadcrumb value="Withdraw Request"/>
                <div class="mb-5">
                    <div class="row box-row mb-3 mt-5">
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col">
                            <div class="col-inner balance-card text-end">
                                <div class="card-header">
                                    <img src={queen} alt="logo" class="img-fluid queen " style={{top:"-65px"}}/>
                                        <h3 class="card-title">Main Wallet</h3>
                                        <h2 class="coin-balance pt-2"><img src={coin} alt="$" class="img-fluid pe-2 " /> {state.wallet_balance}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col">
                            <div class="col-inner balance-card text-end">
                                <div class="card-header">
                                    <img src={warden_min} alt="logo" class="img-fluid queen" style={{top:"-65px"}} />
                                        <h3 class="card-title">Pending Withdraw</h3>
                                        <h2 class="coin-balance pt-2"><img src={coin} alt="$" class="img-fluid pe-2 "/>{state.total_pending_withdrawl}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col">
                            <div class="col-inner balance-card text-end">
                                <div class="card-header">
                                    <img src={flying_min} alt="logo" class="img-fluid queen" style={{top:"-65px"}}/>
                                        <h3 class="card-title pt-2">Paid Withdraw</h3>
                                        <h2 class="coin-balance"><img src={coin} alt="$" class="img-fluid pe-2 "/> {state.total_paid_withdrawl}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-md-12">
                        <div class="alert alert-warning  fade show">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <strong className='ps-2'>Warning!</strong> Please upgrade your ID. <NavLink to="/add_balance" className="btn btn-sm btn-outline-warning ms-1">Click to Create.</NavLink>
                        </div>
                    </div>            
                </div>      
               {/* <WithdrawAdd/>                 */}
                <div class="row datatable-row">
                    <div class="col-lg-12 no-padding ">
                        <div class="purple-box table-box py-5 px-4 ">
                            <div class="row align-items-center">
                                <div class="col-md-6 mb-3">
                                    <h4 class="table-title">Withdraw Request</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mb-3">
                                

                                <Withdrawaltable/>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>
        </MemberTheme>
    )
}

export default Withdraw