import jquery from 'jquery'
import React, { useState } from 'react'
import Breadcrumb from '../theme/Breadcrumb'
import MemberTheme from '../theme/MemberTheme'
import $ from 'jquery'
const List = () => {
    //store selected referral id
    const [state, setState] = useState({
        referral_id: ""
    })
    //handle Change Event
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            referral_id: value
        })

    }

    // List Table
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            var table = $("#manage_tbl");
            var table1 = table.DataTable({
                processing: true,
                serverSide: true,
                "bDestroy": true,
                info: false,
                language: {
                    paginate: {
                        next: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
                        previous: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
                    },

                    'search': '' /*Empty to remove the label*/,
                    'searchPlaceholder': "Type Something.."

                },
                ajax: {
                    url: "/demo/rtvk/ci_admin_api/coc22game/api/news/getAllNews",

                    headers: {
                        Authorization: "d200d1f41c0f1b45087d6e8a2158c382bce469daf7dc51dc28237a0822a08d86b7df15b7272aeee7a09191e0511ca96f8cdabb11b1bbae92ed0df86ef18d554altcbvyVgoGH+89DP5k7os7Q2VCfHDSCUl4gaAWeQzWM="

                    },
                    type: "GET",
                    dataSrc: "message",
                },
                columns: [

                    { data: "news_image" },
                    { data: "news_title" },
                    { data: "date" },
                    { data: "news_status" },

                    {
                        data: null,
                        render: function () {
                            return (
                                '<svg  className="svg-icon " style="fill:#5cd3b9; cursor:pointer;" id="edit-btn" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" > <path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"/><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" /></svg>' +
                                '<i class="far fa-trash-alt text-lightblue fa-lg ps-2 pointer" style="color:#f34343; cursor:pointer;" aria-hidden="true" id="del-btn"></i>'
                            );
                        },
                    },
                    {
                        data: null,
                        render: function () {
                            return (
                                '<svg  className="svg-icon " style="fill:#5cd3b9; cursor:pointer;" id="edit-btn" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" > <path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"/><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" /></svg>' +
                                '<i class="far fa-trash-alt text-lightblue fa-lg ps-2 pointer" style="color:#f34343; cursor:pointer;" aria-hidden="true" id="del-btn"></i>'
                            );
                        },
                    },
                ],

                order: [[2, "asc"]],
                Destroy: true,
            });

        };
        return {
            init: function () {
                if (!$().dataTable) {
                    return;
                }
                initTable1();
            },
        };
    })();
    $(document).ready(function () {
        $.fn.dataTableExt.sErrMode = "throw";
        TableDatatablesManaged.init();
    });
    return (
        <MemberTheme>
            <div class="content-wrap">
                <Breadcrumb value="Referral List" />
                {/* Search Bar  */}
                <div class="row datatable-row">
                    <div class="col-md-6 offset-md-3">
                        <div class="mb-5">
                            <h2 class="small-title" style={{ fontFamily: "clashregular", marginBottom: "13px" }}>Search Level</h2>
                            <div class="card purple-box" style={{backgroundColor:"transparent"}}>
                                <div class="card-body">
                                    <form class="form-valide-with-icon" name="check_user" id="check_user" method="post" action="https://developerinfotech.com/demo/rtvk/ci_admin_api/">
                                        <div class="mb-3 w-100">
                                            <label for="level" class="form-label" style={{ fontFamily: "clashregular" }}>Level</label>
                                            <select class="form-control select-single-no-search" name="level" id="level" style={{ fontFamily: "clashregular",height:"65px",fontSize:"16px" }} onChange={handleChange}>
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
                    {/* Referral Data  */}
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
                                        <table class="table table-striped datatable-values mt-1 manage_tbl dataTable no-footer" id="manage_tbl">
                                            <thead>
                                                <tr>
                                                    <th class="text-muted  border-0 text-center sorting_disabled" rowspan="1" colspan="1" aria-label="SR">SR</th>
                                                    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Username: activate to sort column ascending">Username</th>
                                                    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Full Name: activate to sort column ascending">Full Name</th>
                                                    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Investment: activate to sort column ascending">Investment</th>
                                                    <th class="text-muted  border-0 sorting_disabled" rowspan="1" colspan="1" aria-label="Activation Date">Activation Date</th>
                                                    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Registration Date: activate to sort column ascending">Registration Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </MemberTheme >
    )
}

export default List