import React from 'react'
import $ from 'jquery'

const SuperResourcesTable = () => {
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
                    'searchPlaceholder': "Type something.."

                },
                ajax: {
                    url: `/demo/rtvk/ci_admin_api/coc22game/api/reports/superResources?member_id='3'`,

                    headers: {
                        Authorization: "d200d1f41c0f1b45087d6e8a2158c382bce469daf7dc51dc28237a0822a08d86b7df15b7272aeee7a09191e0511ca96f8cdabb11b1bbae92ed0df86ef18d554altcbvyVgoGH+89DP5k7os7Q2VCfHDSCUl4gaAWeQzWM="

                    },
                    type: "GET",
                    dataSrc: "message",
                },
                columns: [
                    {
                      data: null,
                      sortable: true,
                      render: function (data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                      },
                    },
                    
                    { data: "from_member_username" },
                    { data: "from_member_fullname" },
             
                    
                    { data: "roi_amount" },
                    {
                        data: null,
                        sortable: true,
                        render: function (data, type, row, meta) {
                          
                             return '<span >' + data.level+" "+"("+data.level_roi_percentage+")" + '</span>'
                        
                        }},
                    { data:"final_amount"},
              
                    {data:"date"}
          
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
        <>
 <table class="table table-striped datatable-values mt-1 manage_tbl dataTable no-footer" id="manage_tbl">
            <thead>
            <tr>
    <th class="text-muted  border-0 text-center sorting_disabled" rowspan="1" colspan="1" aria-label="Sr No.">Sr No.</th>
    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="From User: activate to sort column ascending">From User</th>
    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="From Username: activate to sort column ascending">From Username</th>
    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Daily Treasure Amount: activate to sort column ascending">Daily Treasure Amount</th>
    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Super Resources (Fee): activate to sort column ascending">Super Resources (Fee)</th>
    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Super Resources Amount: activate to sort column ascending">Super Resources Amount</th>
    <th class="text-muted  border-0 sorting" tabindex="0" aria-controls="manage_tbl" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending">Date</th>
</tr>



            </thead>
            <tbody>

            </tbody>
        </table>
        </>
    )
}

export default SuperResourcesTable