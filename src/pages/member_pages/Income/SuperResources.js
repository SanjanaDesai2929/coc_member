import React, { useEffect, useState } from 'react'

import SuperResourcesTable from '../DataTable/SuperResourcesTable'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'
import { Modal,Button } from "react-bootstrap";
const SuperResources = () => {
  const [state, setState] = useState({})
  const [basic, setbasic] = useState(false);

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
  const handleModal = () => {
    setbasic(true)
  }
  const handleClose=()=>{
    setbasic(false)
  }
  return (
    <>
      <MemberTheme>
        <Modal show={basic} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>Super Resources Status</Modal.Title>
            <Button variant="" className="btn" onClick={handleClose}>
              x
            </Button>
          </Modal.Header>
          <Modal.Body>
            <div class="table-responsive">
              <table class="table text-light mb-0">
                <thead>
                  <tr>
                    <th>Super Resources</th>
                    <th>Percentage</th>
                    <th>Status</th>
                    {/* <!-- <th>Income Status</th> --> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>1 </td>
                    <td>10%</td>
                    <td>
                      <i class="text-warning fa fa-check-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>2 </td>
                    <td>8%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>3 </td>
                    <td>6%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>4 </td>
                    <td>4%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>5 </td>
                    <td>3%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>6 </td>
                    <td>2%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>7 </td>
                    <td>2%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>8 </td>
                    <td>2%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>9 </td>
                    <td>2%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>10 </td>
                    <td>2%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>11 </td>
                    <td>2%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>12 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>13 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>14 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>15 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>16 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>17 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>18 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>19 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                  <tr>
                    {/* <!-- <td></td> --> */}
                    <td>20 </td>
                    <td>1%</td>
                    <td>
                      <i class="text-warning fa fa-spinner"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal.Body>

        </Modal>
        <div class="content-wrap">
          <Breadcrumb value="Super Resources" />
          <div class="row datatable-row">
            <div class="col-lg-12 no-padding ">
              <div class="purple-box table-box py-5 px-4 ">
                <div class="row align-items-center mb-4">
                  <div class="col-lg-5 col-md-4 mb-3 mb-md-0 text-md-start text-center">
                    <h4 class="table-title text-center text-xl-start mb-xl-0">Super Resources [<a href="#" class="theme-text" onClick={handleModal}>Check Resources</a>]</h4>
                  </div>
                  <div class="col-lg-7 col-md-8 text-md-end text-center ">
                    <span class="balance-info">Total Super Resources: {state.total_super_resources}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mb-3">
                    <SuperResourcesTable />
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

export default SuperResources