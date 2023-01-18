import React from 'react'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import $ from "jquery"
const AddNew = () => {

 
  return (
    <MemberTheme>
      <div class="content-wrap">
      <Breadcrumb value="Add Referral" />
       
        <div class="row datatable-row">
          <div class="col-md-12">
            <div class="mb-5">
              <h2 class="small-title">Add Referral</h2>
              <div class="card purple-box">
                <div class="card-body">

                  <div class="alert alert-warning  fade show">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <strong style={{paddingLeft:"6px"}}>Warning!</strong> aaaa1aad                                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </MemberTheme>
  )
}

export default AddNew