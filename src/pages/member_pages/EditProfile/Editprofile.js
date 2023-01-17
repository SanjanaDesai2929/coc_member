import React from "react";
import Breadcrumb from "../theme/Breadcrumb";
import MemberTheme from "../theme/MemberTheme";


const EditProfile = () => {

    return (
            <MemberTheme>
                <div className="main-wrapper">
                    <Breadcrumb value="Edit Profile" />
                    <div className="container-fluid">
                        <div className="row">
                            {/* <div className="col-lg-2">

                            </div> */}
                            <div className="col-lg-10">
                                <div className="content-wrapper">

                                    <div className="content-wrap">
                                        {/* <div className="row breadcrumb-row">
                                            <div className="col-12 px-4">
                                                <h2 className="breadcrumb-title"><a href="<?= base_url(); ?>dashboard">Dashboard </a><span></span></h2>

                                                <div className="alert alert-success mt-4">

                                                </div>


                                                <div className="alert alert-danger mt-4">
                                                    <span></span>
                                                </div>

                                            </div>

                                        </div> */}
                                        <div className="row text-center d-flex profile-row">

                                            <div className="col-xl-4 col-lg-12 rounded col shadow-lg form-column mb-4">
                                                <div className="purple-box text-center text-white h-100">
                                                    <div className="profile-img">

                                                        <img src="<?= base_url(); ?><?= $this->profile_image.'120x120_'.$user_image; ?>" alt="profile" className="img-fluid rounded-circle" />

                                                        <img src="<?php echo $this->template_images; ?>phone_min.jpg" className="img-fluid rounded-circle" alt="" width="120px" height="120px" />

                                                    </div>
                                                    <div className="profile-info purple-budge-body pb-4 px-4 px-lg-5">

                                                        <div className="member_info text-start text-lg-center text-xl-start">
                                                            <p><strong>Phone:</strong> </p>
                                                            <p><strong>Email:</strong></p>
                                                            <p><strong>Clan League Reward:</strong></p>
                                                            <p><strong>League Reward:</strong></p>
                                                        </div>

                                                        <img src="<?php echo $this->template_images; ?>unranked_1.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Unranked</h2>

                                                        <img src="<?php echo $this->template_images; ?>bronze_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Rank 1</h2>

                                                        <img src="<?php echo $this->template_images; ?>silver_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Rank 2</h2>

                                                        <img src="<?php echo $this->template_images; ?>silver_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Bronze</h2>

                                                        <img src="<?php echo $this->template_images; ?>silver_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Silver</h2>

                                                        <img src="<?php echo $this->template_images; ?>gold_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Gold</h2>

                                                        <img src="<?php echo $this->template_images; ?>crystal_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Crystal</h2>

                                                        <img src="<?php echo $this->template_images; ?>master_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Master</h2>

                                                        <img src="<?php echo $this->template_images; ?>champion_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Champion</h2>

                                                        <img src="<?php echo $this->template_images; ?>titan_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Titan</h2>

                                                        <img src="<?php echo $this->template_images; ?>legend_league.png" alt="" className="img-fluid" width="90px" />
                                                        <h2>Legend</h2>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-lg-12 rounded col shadow-lg form-column mb-4">

                                                <div className="purple-box text-white text-start purple-budge-body p-5 form-box">
                                                    <h2 className="mb-4">Personal Info</h2>
                                                    <form className="form" method="post" name="profile-form-pw" id="profile-form-pw" action="<?php echo base_url(); ?>profile" enctype="multipart/form-data">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form_input">
                                                                    <input type="text" readonly className="form-control" value="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form_input">
                                                                    <input className="form-control" type="file" name="profile_pic" id="profilePic" aria-label="Profile Picture" />
                                                                    <input name="old_profile_pic" type="hidden" value="" />

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form_input">
                                                                    <input type="text" id="full_name" className="form-control" name="full_name" value="" placeholder="Enter Full Name" />

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form_input">
                                                                    <input type="text" id="phone_no" className="form-control" name="phone_no" value="" placeholder="Enter Phone No" />

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form_input">
                                                                    <input type="email" className="form-control" name="member_email" id="email" value="" placeholder="Enter Email" readonly />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <div className="form_input">
                                                                    <select id="country_name" name="country_name" className="form-control">
                                                                        <option value="">Selecy Country Code</option>
                                                                        {/* <?php if(!empty($countries)): ?>
                                                    <?php foreach($countries as $cntry){ ?>
                                                        <?php $selected=""; ?>
                                                        <?php if(isset($country_name) && $country_name == $cntry['country_id']){ $selected = "selected"; }elseif(isset($user) && $user['member_country'] == $cntry['country_id']){ $selected = "selected"; } ?> */}
                                                                        {/* <option <?php echo $selected; ?> data-code="<?php echo $cntry['p_code']; ?>" value="<?php echo $cntry['country_id']; ?>"><?php echo $cntry['country_name']; ?> (<?php echo $cntry['p_code']; ?>)</option> */}
                                                                        {/* <?php } ?>
                                                <?php endif; ?> */}
                                                                    </select>

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form_input">
                                                                    <input type="password" className="form-control" id="security" name="security" placeholder="Enter your security code" />

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form_input_btn text-center">
                                                            <button type="submit" name="submitForm" id="submitForm" value="Update" className="theme-btn text-white">Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6  rounded col shadow-lg form-column mb-4">
                                                <div className="purple-box  h-100 text-white text-start purple-budge-body p-5 form-box">
                                                    <h2 className="mb-4">Change Password</h2>
                                                    <form className="form-valide-with-icon" method="post" name="form_password" id="form_password" action="<?php echo base_url(); ?>profile">
                                                        <div className="row g-3">
                                                            <div className="col-12">
                                                                <div className="form_input">
                                                                    <input type="password" name="old_password" className="form-control" id="password" placeholder="Enter Old Password" value="" />

                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form_input">
                                                                    <input type="password" name="new_password" className="form-control" id="new_password" placeholder="Enter New Password" value="" />

                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form_input">
                                                                    <input type="password" id="c_password" className="form-control" name="c_password" placeholder="Enter Confirm Password" value="" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 text-center">
                                                            <button type="submit" id="submit_password" name="submit_password" className="theme-btn text-white" value="Update Password">Update</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-md-6 rounded col shadow-lg form-column mb-4">
                                                <div className="purple-box h-100 text-white text-start purple-budge-body p-5 form-box">
                                                    <h2 className="mb-4">Security Password</h2>
                                                    <form className="form-valide-with-icon" method="post" name="form_security" id="form_security" action="<?php echo base_url(); ?>security">
                                                        <div className="row g-3">
                                                            <div className="col-lg-12">
                                                                <div className="form_input">
                                                                    <input type="password" className="form-control" name="old_security" id="old_security" placeholder="Enter Old Security Code" value="" />

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form_input">
                                                                    <input type="password" className="form-control" name="new_security" id="new_security" placeholder="Enter New Security Code" value="" />

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form_input">
                                                                    <input type="password" className="form-control" id="c_security" name="c_security" placeholder="Enter Confirm Security Code" value="" />

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <button type="submit" id="submit_security" name="submit_security" className="theme-btn text-white" value="Update Security">Submit</button>
                                                                <a href="<?php echo base_url(); ?>profile/newSecurity" className="theme-btn text-white float-end">RESET</a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 rounded col shadow-lg form-column mb-4">
                                                <div className="purple-box h-100 text-white text-start purple-budge-body p-5 form-box">
                                                    <h2 className="mb-4">Two Factor Authentication</h2>

                                                    <div className="row mb-3">
                                                        <div className="col-xl-3">
                                                            <img src="" className="img-fluid" />
                                                        </div>
                                                        <div className="col-xl-9">
                                                            <h6 className="my-2 factor">1. Install <a href="http://m.google.com/authenticator" target="_blank">Google Authenticator</a> on your mobile device.</h6>
                                                            <h6 className="my-2 factor">2. Your Secret Code is: <b><span className="text-primary"></span></b></h6>
                                                            <h6 className="my-2 factor">3. Please enter two factor token from Google Authenticator to verify correct setup:</h6>
                                                        </div>
                                                    </div>
                                                    <form className="form-valide-with-icon" name="google-auth-form" id="google-auth-form" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                                        <div className="form-group">
                                                            <div className="form_input">
                                                                <input type="text" className="form-control person-password" id="member_auth_code" name="member_auth_code" value="" placeholder="Enter two factor token" />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 text-center">
                                                            <button type="submit" name="btnsubmit" className="theme-btn text-white" value="Activate">Active</button>
                                                        </div>
                                                    </form>
                                                    <div className="alert alert-warning  fade show">
                                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                                        <strong>Warning!</strong> Disabling two-factor authentication will reset your secret key.
                                                    </div>
                                                    <form className="form-valide-with-icon" name="google-auth-disable-form" id="google-auth-disable-form" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                                        <div className="form-group ">
                                                            <div className="form_input">
                                                                <input type="text" className="form-control person-password" id="member_auth_code" name="member_auth_code" value="" placeholder="Enter two factor token" />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 text-center">
                                                            <button type="submit" name="submit_disable" className="theme-btn text-white" value="Disable 2FA">Disable</button>
                                                        </div>
                                                    </form>
                                                    <br />
                                                    <h3 className="small-title"> Factor Authentication Login</h3>
                                                    <form className="form-valide-with-icon" name="member_2fa" id="member_2fa" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                                        <div className="form-check-inline imp-grp">
                                                            <label className="form-check-label">
                                                                Enable 2Fa Security in login &nbsp;<input type="checkbox" className="form-check-input mr-2 radio" value="1" name="login_2fa" />
                                                            </label>
                                                        </div>
                                                        <div className="form-check-inline mr-3 imp-grp">
                                                            <label className="form-check-label">
                                                                Enable 2Fa Security in withdraw &nbsp;<input type="checkbox" className="form-check-input mr-2 radio" value="1" name="withdraw_2fa" />
                                                            </label>
                                                        </div>
                                                        <div className="col-md-12 text-center">
                                                            <button type="submit" name="submit_member_2fa" className="theme-btn text-white" value="Update">Update</button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                            <div className="col-md-6 rounded col shadow-lg form-column mb-4">
                                                <div className="purple-box  h-100 text-white text-start purple-budge-body p-5 form-box">
                                                    <h2 className="mb-4">Withdraw Wallet Address</h2>
                                                    <form className="" method="post" name="form_wallet" id="form_wallet" action="<?php echo base_url(); ?>profile">
                                                        <div className="row g-3">
                                                            <div className="col-lg-12">
                                                                <div className="form_input">
                                                                    <input type="text" className="form-control" name="wallet_address" id="wallet_address" placeholder="Enter Wallet Address" value="<?= $user['member_bitcoin_address']; ?>" />

                                                                </div>
                                                            </div>

                                                            <div className="col-lg-12 text-center">
                                                                <button type="submit" id="submit_wallet" name="submit_wallet" className="theme-btn text-white" value="Update">Update</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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

export default EditProfile