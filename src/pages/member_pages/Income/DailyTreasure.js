import React, { useState ,useEffect} from 'react'
import DailyTreasuretable from '../DataTable/DailyTreasuretable'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'

const DailyTreasure = () => {
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
   <>
   <MemberTheme>
   <div class="content-wrap">
            <Breadcrumb value="Daily Treasure"/>
              <div class="row datatable-row">
                <div class="col-lg-12 no-padding ">
                    <div class="purple-box table-box py-5 px-4 ">
                        <div class="row align-items-center mb-4">
                            <div class="col-lg-5 col-md-4 mb-3 mb-md-0 text-md-start text-center">
                                <h4 class="table-title">Daily Treasure</h4>
                            </div>
                            <div class="col-lg-7 col-md-8 text-md-end text-center ">
                                <span class="balance-info">Total Daily Treasure: {state.total_daily_treasure}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-3">
                             <DailyTreasuretable/>
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

export default DailyTreasure