import React from 'react'
import DailyTreasuretable from '../DataTable/DailyTreasuretable'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'

const DailyTreasure = () => {
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
                                <span class="balance-info">Total Daily Treasure: 0.00000000 COC</span>
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