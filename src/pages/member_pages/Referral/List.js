import React from 'react'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'

const List = () => {
    return (
        <MemberTheme>
            <div class="content-wrap">
               <Breadcrumb value="Referral List"/>
                <div class="row datatable-row">
                    <div class="col-md-6 offset-md-3">
                        <div class="mb-5">
                            <h2 class="small-title" style={{fontFamily:"clashregular",marginBottom:"13px"}}>Search Level</h2>
                            <div class="card purple-box">
                                <div class="card-body">
                                    <form class="form-valide-with-icon" name="check_user" id="check_user" method="post" action="https://developerinfotech.com/demo/rtvk/ci_admin_api/">
                                        <div class="mb-3 w-100">
                                            <label for="level" class="form-label" style={{fontFamily:"clashregular"}}>Level</label>
                                            <select class="form-control select-single-no-search" name="level" id="level" style={{fontFamily:"clashregular"}}>
                                                <option value="1"> Level - 1 </option>
                                                <option value="2"> Level - 2 </option>

                                            </select>
                                        </div>
                                        <div class="mb-3 form_input_btn ">
                                            <button type="submit" name="submit" id="search" value="Search" class="btn btn-primary  theme-btn">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 no-padding ">
                        <div class="purple-box table-box py-5 px-4 ">
                            <div class="row align-items-center">
                                <div class="col-md-6 mb-3">
                                    <h4 class="table-title">Referral List</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <div class="table-responsive table-scrollable mt-4">
                                        <div id="manage_tbl_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="manage_tbl_length"><label>Show <select name="manage_tbl_length" aria-controls="manage_tbl" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="manage_tbl_filter" class="dataTables_filter"><label><input type="search" class="" placeholder="Type something..." aria-controls="manage_tbl" /></label></div><div id="manage_tbl_processing" class="dataTables_processing" style={{display: "none"}}><div><div></div><div></div><div></div><div></div></div></div><table class="table table-striped datatable-values mt-1 manage_tbl dataTable no-footer" id="manage_tbl">
                                            <thead>
                                                <tr><th class="text-muted text-medium border-0 text-center sorting_disabled" rowspan="1" colspan="1" aria-label="SR">SR</th><th class="text-muted text-medium border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Username: activate to sort column ascending">Username</th><th class="text-muted text-medium border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Full Name: activate to sort column ascending">Full Name</th><th class="text-muted text-medium border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Investment: activate to sort column ascending">Investment</th><th class="text-muted text-medium border-0 sorting_disabled" rowspan="1" colspan="1" aria-label="Activation Date">Activation Date</th><th class="text-muted text-medium border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Registration Date: activate to sort column ascending">Registration Date</th></tr>
                                            </thead>
                                            <tbody>

                                                <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr></tbody>
                                        </table><div class="dataTables_paginate paging_simple_numbers" id="manage_tbl_paginate"><a class="paginate_button previous disabled" aria-controls="manage_tbl" data-dt-idx="0" tabindex="-1" id="manage_tbl_previous"><span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-left"></i></span></a><span></span><a class="paginate_button next disabled" aria-controls="manage_tbl" data-dt-idx="1" tabindex="-1" id="manage_tbl_next"><span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-right"></i></span></a></div></div>
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

export default List