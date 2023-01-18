import React from "react";
import clashofclans from "../../../assets/images/27795-1-clash-of-clans-picture.png"
import coc from "../../../assets/images/coc.png"

const Register = () => {

    return (
    <>
            <body class="body__bg" data-bgimg="">
                <div class="page_wrapper wallpper">
                    <section class="contact_page_section mb-140">
                        <div class="container-fluid">
                            <div class="row ">
                                <div class="col-xl-3 col-lg-4  col-12 px-5 py-5 side_bg d-flex align-items-center  coccocolor">
                                    <div class="header_logo  mb-3 text-center">
                                        <a href="https://developerinfotech.com/demo/rtvk/ci_admin_api/"><img aria-label="logo" width="215" height="100" src={coc} alt="" /></a>
                                    </div>
                                    <div class="alert alert-warning w-100 fade show">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                        <strong>Warning!</strong> aaaa1aad            
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-8 col-12 mx-auto text-center d-none d-lg-flex align-items-center justify-content-center imgwith">
                                    <img class="img-fluid" src={clashofclans} alt="" />
                                </div>
                            </div>
                        </div>
                        </section>
                        </div>
                    </body>
                </>
        )
}
 export default Register