import React from 'react'
import MemberTheme from './theme/MemberTheme'
import Breadcrumb from './theme/Breadcrumb'
import InvestDatatable from './DataTable/InvestDatatable'
const InvestNow = () => {
    return (
        <>
        <MemberTheme>
            <div class="content-wrap">
                <Breadcrumb value="Invest Now"/>
                <div class="row mb-5">
                    <div class="col-md-12">


                        <div class="alert alert-info">
                            <strong>Info!</strong> Your previous order is still in pending mode. Please wait till it gets checked.
                        </div>


                    </div>
                </div>
                <div class="row datatable-row">
                    <div class="col-lg-12 no-padding ">
                        <div class="purple-box table-box py-5 px-4 ">
                            <div class="row align-items-center">
                                <div class="col-md-6 mb-3">
                                    <h4 class="table-title">Investment History</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mb-3">
                                <div class="table-responsive table-scrollable mt-4">
                                       <InvestDatatable/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade " id="pricingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content purple-box table-box bg-opacity-1 py-5 px-4">
                            <div class="modal-header p-0 ps-3">
                                <h5 class="modal-title table-title" id="exampleModalLabel">Packages</h5>
                                <button type="button" class="close btn btn-daek border-0" id="close_modal" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <table class="table text-white table-striped datatable-values mt-1 manage_tbl" id="manage_tbl">
                                    <thead>
                                        <tr>
                                            <th>Sr</th>
                                            <th>Package Amount</th>
                                            <th>Daily Return</th>
                                            <th>Total Benefit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>100</td>
                                            <td>0.25%</td>
                                            <td>200%</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>500</td>
                                            <td>0.5%</td>
                                            <td>200%</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>1000</td>
                                            <td>0.75%</td>
                                            <td>200%</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>2000</td>
                                            <td>1%</td>
                                            <td>200%</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>5000</td>
                                            <td>1.25%</td>
                                            <td>200%</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>10000</td>
                                            <td>1.5%</td>
                                            <td>200%</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </MemberTheme>
        </>
    )
}

export default InvestNow