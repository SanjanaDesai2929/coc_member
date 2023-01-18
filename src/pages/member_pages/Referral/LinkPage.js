import React from 'react'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'

const LinkPage = () => {
  //Copy Text
  const copyRefLink=(id,value)=>{

    navigator.clipboard.writeText(value)
    var copyText = document.getElementById(id);

    copyText.select();
    copyText.setSelectionRange(0, 99999)
  }
  return (
   <MemberTheme>
      
                <div class="content-wrap">
                <Breadcrumb value="Referral Link" />

              <div class="row datatable-row">
                    <div class="col-lg-6">
                        <div class="mb-5">
                            <h2 class="small-title">Your Referral Link</h2>
                            <div class="card purple-box">
                                <div class="card-body">
                                     <div class="copy  w-100">
                                        <input type="text" class="form-control" value={`https://developerinfotech.com/demo/rtvk/ci_admin_api/register/ref/COC428789`} id="reflink" style={{fontFamily:"clashregular",padding:"0 25px",height:"62px",fontSize:"1.001rem"}}/>
                                        <div class="d-flex justify-content-center mt-4">
                                            <button onClick={(value)=>copyRefLink('reflink',`https://developerinfotech.com/demo/rtvk/ci_admin_api/register/ref/COC428789`)} class="theme-btn text-white me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy Link">
                                                Copy
                                            </button>
                                            <a href={`${window.location.origin}/demo/rtvk/ci_admin_api/register/ref/COC428789`} target="_blank" class="theme-btn text-white " data-bs-toggle="tooltip" data-bs-placement="top" title="Copy Link">
                                                Open
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="mb-5">
                            <h2 class="small-title">Your Promotion Link</h2>
                            <div class="card purple-box">
                                <div class="card-body">
                                     <div class="copy  w-100">
                                        <input type="text" class="form-control" value="https://developerinfotech.com/demo/rtvk/ci_admin_api/promotion?ref=COC428789" id="prolink"  style={{fontFamily:"clashregular",padding:" 0 25px",height:"62px",fontSize:"1.001rem"}}/>
                                        <div class="d-flex justify-content-center mt-4">
                                            <button onClick={()=>copyRefLink('prolink','https://developerinfotech.com/demo/rtvk/ci_admin_api/promotion?ref=COC428789')} class="theme-btn text-white me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy Link">
                                                Copy
                                            </button>
                                            <a href={`${window.location.origin}/demo/rtvk/ci_admin_api/promotion?ref=COC428789`} target="_blank" class="theme-btn text-white " data-bs-toggle="tooltip" data-bs-placement="top" title="Copy Link">
                                                Open
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
   </MemberTheme>
  )
}

export default LinkPage