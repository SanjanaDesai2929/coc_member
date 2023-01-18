import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import coc from "../../../assets/images/coc.png"
import twitter from "../../../assets/images/twitter.png"
import discord from "../../../assets/images/discord.png"
import medium from "../../../assets/images/medium.png"
import reddit from "../../../assets/images/reddit.png"
import telegram from "../../../assets/images/telegram.png"
import instagram from "../../../assets/images/instagram.png"
import github from "../../../assets/images/github.png"
import clashofclans from "../../../assets/images/27795-1-clash-of-clans-picture.png"

const Promotion = () => {
    const [state, setState] = useState()


    return (
        <>
            <body class="body__bg" data-bgimg="">
                <div class="page_wrapper wallpper">
                    <section class="contact_page_section mb-140">
                        <div class="container-fluid">
                            <div class="content-center">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-4  col-12 px-5 py-5 side_bg d-flex align-items-center coccocolor">
                                        <div class="w-100 text-center">
                                            <div class="header_logo mb-5 text-center">
                                                <NavLink to="https://developerinfotech.com/demo/rtvk/ci_admin_api/"><img aria-label="logo" width="215" height="100" src={coc} alt="" /></NavLink>
                                            </div>
                                            <div class="content">
                                                <p class="installfont">Join Clash of Clans Special Offer to get Referral Revenue, Daily Treasure, League Reward, Clan League Reward, etc...</p>
                                                <p class="install">Click on the below button to get started.</p>
                                                <NavLink className="btn mt-3 install now register" target="_blank" to="/register/ref" >Register Now</NavLink>
                                                <div class="footer_widget_list">
                                                    <div class="footer_social">
                                                        <ul class="d-flex flex-wrap flex-md-nowrap justify-content-center mt-5">
                                                            <li><a aria-label="twitter" target="_blank" href="https://twitter.com/cocgameofficial"><img src={twitter} alt="" /></a></li>
                                                            <li><a aria-label="discord" target="_blank" href="https://discord.gg/VncrHXtQ33"><img src={discord} alt="" /></a></li>
                                                            <li><a aria-label="medium" target="_blank" href="https://medium.com/@cocgameofficial"><img src={medium} alt="" /></a></li>
                                                            <li><a aria-label="reddit" target="_blank" href="https://www.reddit.com/r/COCGame/"><img src={reddit} alt="" /></a></li>
                                                            <li><a aria-label="telegram" target="_blank" href="https://t.me/cocgameofficial"><img src={telegram} alt="" /></a></li>
                                                            <li><a aria-label="instagram" target="_blank" href="https://www.instagram.com/clash2crypto/"><img src={instagram} alt="" /></a></li>
                                                            <li><a aria-label="github" target="_blank" href="https://github.com/COCGame"><img src={github} alt="" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-8 col-12 mx-auto text-center d-none d-lg-flex align-items-center justify-content-center imgwith">
                                        <img class="img-fluid" src={clashofclans} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </body>
        </>
    )
}

export default Promotion

{/* <NavLink className="btn btn-link mt-3 install  now register" target="_blank" to="/register/ref" >Register Now</NavLink>   */ }
