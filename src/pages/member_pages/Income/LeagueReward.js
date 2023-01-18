import React, { useEffect, useState } from 'react'
import LeagueRewardTable from '../DataTable/LeagueRewardTable'
import SuperResourcesTable from '../DataTable/SuperResourcesTable'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'
import { Modal, Button } from "react-bootstrap";

const LeagueReward = () => {
  const [state, setState] = useState({})
  const [basic, setbasic] = useState(false);
  const handleModal = () => {
    setbasic(true)
  }
  const handleClose = () => {
    setbasic(false)
  }
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
        
        <Modal show={basic} onHide={handleClose} >
          <Modal.Header>
            <Modal.Title>League Reward Level</Modal.Title>
            <Button variant="" className="btn" onClick={handleClose}>
              x
            </Button>
          </Modal.Header>
          <Modal.Body>
          <div class="table-responsive">
                        <table class="table text-light mb-0">
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>Name</th>
                                    <th>Strong Side</th>
                                    <th>Other Side</th>
                                    <th>Bonus (COC)</th>
                                </tr>
                                </thead>
                                <tbody>
                                                                                    <tr>
                                                    <td>1 </td>
                                                    <td>Bronze </td>
                                                    <td>10000 COC</td>
                                                    <td>10000 COC</td>
                                                    <td>400 COC</td>
                                                </tr>
                                                                                                <tr>
                                                    <td>2 </td>
                                                    <td>Silver </td>
                                                    <td>20000 COC</td>
                                                    <td>20000 COC</td>
                                                    <td>500 COC</td>
                                                </tr>
                                                                                                <tr>
                                                    <td>3 </td>
                                                    <td>Gold </td>
                                                    <td>40000 COC</td>
                                                    <td>40000 COC</td>
                                                    <td>1000 COC</td>
                                                </tr>
                                                                                                <tr>
                                                    <td>4 </td>
                                                    <td>Crystal </td>
                                                    <td>60000 COC</td>
                                                    <td>60000 COC</td>
                                                    <td>1500 COC</td>
                                                </tr>
                                                                                                <tr>
                                                    <td>5 </td>
                                                    <td>Master </td>
                                                    <td>100000 COC</td>
                                                    <td>100000 COC</td>
                                                    <td>5000 COC</td>
                                                </tr>
                                                                                                <tr>
                                                    <td>6 </td>
                                                    <td>Champion </td>
                                                    <td>200000 COC</td>
                                                    <td>200000 COC</td>
                                                    <td>10000 COC</td>
                                                </tr>
                                                                                                <tr>
                                                    <td>7 </td>
                                                    <td>Titan </td>
                                                    <td>400000 COC</td>
                                                    <td>400000 COC</td>
                                                    <td>20000 COC</td>
                                                </tr>
                                                                                                <tr>
                                                    <td>8 </td>
                                                    <td>Legend </td>
                                                    <td>1000000 COC</td>
                                                    <td>1000000 COC</td>
                                                    <td>50000 COC</td>
                                                </tr>
                                                
                                </tbody>

                        </table>
                    </div>
          </Modal.Body>

        </Modal>
        <div class="content-wrap">
          <Breadcrumb value=" League Reward" />
          <div class="row datatable-row">
            <div class="col-lg-12 no-padding ">
              <div class="purple-box table-box py-5 px-4 ">
                <div class="row align-items-center mb-4">
                  <div class="col-lg-5 col-md-4 mb-3 mb-md-0 text-md-start text-center">
                    <h4 class="table-title text-center text-xl-start mb-xl-0"> League Reward [<a href="#" class="theme-text" onClick={handleModal}>Check Level</a>]</h4>
                  </div>
                  <div class="col-lg-7 col-md-8 text-md-end text-center ">
                    <span class="balance-info">Total League Reward: {state.total_league_reward}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mb-3">
                    <LeagueRewardTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MemberTheme>
    </>
  )
}

export default LeagueReward