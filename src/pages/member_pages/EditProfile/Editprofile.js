import React from "react";
import Breadcrumb from "../theme/Breadcrumb";
import MemberTheme from "../theme/MemberTheme";


const EditProfile = () => {

    return (
        <MemberTheme>
            <div class="content-wrap">
                <Breadcrumb value="Edit Profile"
                <div class="row text-center d-flex profile-row">
                    <div class="col-xl-4 col-lg-12 rounded col shadow-lg form-column mb-4">
                        <div class="purple-box text-center text-white h-100">
                            <div class="profile-img">
                                {/* <?php $user_image = $this->functions->getUserImage($this->session->userdata('front_member_id')) ?>
                                <?php if (!empty($user_image) || $user_image != "") { ?> */}
                                <img src="<?= base_url(); ?><?= $this->profile_image.'120x120_'.$user_image; ?>" alt="profile" class="img-fluid rounded-circle" />
                                {/* <?php } else { ?> */}
                                <img src="<?php echo $this->template_images; ?>phone_min.jpg" class="img-fluid rounded-circle" alt="" width="120px" height="120px" />
                                {/* <?php } ?> */}
                            </div>
                            <div class="profile-info purple-budge-body pb-4 px-4 px-lg-5">
                                <h2></h2>
                                <h4 class="mb-4"><i></i></h4>
                                <div class="member_info text-start text-lg-center text-xl-start">
                                    <p><strong>Phone:</strong> </p>
                                    <p><strong>Email:</strong> </p>
                                    <p><strong>Clan League Reward:</strong> </p>
                                    <p><strong>League Reward:</strong> </p>
                                </div>

                                {/* <img src="<?php echo $this->template_images; ?>unranked_1.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Unranked</h2>
                          
                                    <img src="<?php echo $this->template_images; ?>bronze_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Rank 1</h2>
                               
                                    <img src="<?php echo $this->template_images; ?>silver_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Rank 2</h2>
                                
                                    <img src="<?php echo $this->template_images; ?>silver_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Bronze</h2>
                               
                                    <img src="<?php echo $this->template_images; ?>silver_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Silver</h2>
                               
                                    <img src="<?php echo $this->template_images; ?>gold_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Gold</h2>
                               
                                    <img src="<?php echo $this->template_images; ?>crystal_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Crystal</h2>
                             
                                    <img src="<?php echo $this->template_images; ?>master_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Master</h2>
                              
                                    <img src="<?php echo $this->template_images; ?>champion_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Champion</h2>
                               
                                    <img src="<?php echo $this->template_images; ?>titan_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Titan</h2>
                               
                                    <img src="<?php echo $this->template_images; ?>legend_league.png" alt="" class="img-fluid" width="90px" />
                                    <h2>Legend</h2>
                                */}
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-12 rounded col shadow-lg form-column mb-4">

                        <div class="purple-box text-white text-start purple-budge-body p-5 form-box">
                            <h2 class="mb-4">Personal Info</h2>
                            <form class="form" method="post" name="profile-form-pw" id="profile-form-pw" action="<?php echo base_url(); ?>profile" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form_input">
                                            <input type="text" readonly class="form-control" value="<?= $this->session->userdata('front_member_username') ?>" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_input">
                                            <input class="form-control" type="file" name="profile_pic" id="profilePic" aria-label="Profile Picture" />
                                            <input name="old_profile_pic" type="hidden" value="<?php echo $user['member_photo']; ?>" />
                                            {/* <?php echo form_error('profile_pic', '<small class="state-error text-danger">', '</small>'); ?> */}
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_input">
                                            <input type="text" id="full_name" class="form-control" name="full_name" value="<?= isset($full_name) ? $full_name : $user['member_fullname'] ?>" placeholder="Enter Full Name" />
                                            {/* <?php echo form_error('full_name', '<small class="state-error text-danger">', '</small>'); ?> */}
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_input">
                                            <input type="text" id="phone_no" class="form-control" name="phone_no" value="<?= isset($phone_no) ? $phone_no : $user['member_phone'] ?>" placeholder="Enter Phone No" />
                                            {/* <?php echo form_error('phone_no', '<small class="state-error text-danger">', '</small>'); ?> */}
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_input">
                                            <input type="email" class="form-control" name="member_email" id="email" value="<?= $user['member_email']?>" placeholder="Enter Email" readonly />
                                            {/* <?php echo form_error('email', '<small class="state-error text-danger">', '</small>'); ?> */}
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form_input">
                                            <select id="country_name" name="country_name" class="form-control">
                                                <option value="">Selecy Country Code</option>
                                                {/* <?php if(!empty($countries)): ?>
                                                    <?php foreach($countries as $cntry){ ?>
                                                        <?php $selected=""; ?>
                                                        <?php if(isset($country_name) && $country_name == $cntry['country_id']){ $selected = "selected"; }elseif(isset($user) && $user['member_country'] == $cntry['country_id']){ $selected = "selected"; } ?> */}
                                                <option></option>

                                            </select>
                                            {/* <?php echo form_error('country_name', '<small class="state-error text-danger">', '</small>'); ?> */}
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_input">
                                            <input type="password" class="form-control" id="security" name="security" placeholder="Enter your security code" />

                                        </div>
                                    </div>
                                </div>

                                <div class="form_input_btn text-center">
                                    <button type="submit" name="submitForm" id="submitForm" value="Update" class="theme-btn text-white">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6  rounded col shadow-lg form-column mb-4">
                        <div class="purple-box  h-100 text-white text-start purple-budge-body p-5 form-box">
                            <h2 class="mb-4">Change Password</h2>
                            <form class="form-valide-with-icon" method="post" name="form_password" id="form_password" action="<?php echo base_url(); ?>profile">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <div class="form_input">
                                            <input type="password" name="old_password" class="form-control" id="password" placeholder="Enter Old Password" value="" />

                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form_input">
                                            <input type="password" name="new_password" class="form-control" id="new_password" placeholder="Enter New Password" value="" />

                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form_input">
                                            <input type="password" id="c_password" class="form-control" name="c_password" placeholder="Enter Confirm Password" value="" />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 text-center">
                                    <button type="submit" id="submit_password" name="submit_password" class="theme-btn text-white" value="Update Password">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 rounded col shadow-lg form-column mb-4">
                        <div class="purple-box h-100 text-white text-start purple-budge-body p-5 form-box">
                            <h2 class="mb-4">Security Password</h2>
                            <form class="form-valide-with-icon" method="post" name="form_security" id="form_security" action="<?php echo base_url(); ?>security">
                                <div class="row g-3">
                                    <div class="col-lg-12">
                                        <div class="form_input">
                                            <input type="password" class="form-control" name="old_security" id="old_security" placeholder="Enter Old Security Code" value="" />

                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form_input">
                                            <input type="password" class="form-control" name="new_security" id="new_security" placeholder="Enter New Security Code" value="" />

                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form_input">
                                            <input type="password" class="form-control" id="c_security" name="c_security" placeholder="Enter Confirm Security Code" value="" />

                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <button type="submit" id="submit_security" name="submit_security" class="theme-btn text-white" value="Update Security">Submit</button>
                                        <a href="<?php echo base_url(); ?>profile/newSecurity" class="theme-btn text-white float-end">RESET</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 rounded col shadow-lg form-column mb-4">
                        <div class="purple-box h-100 text-white text-start purple-budge-body p-5 form-box">
                            <h2 class="mb-4">Two Factor Authentication</h2>

                            <div class="row mb-3">
                                <div class="col-xl-3">
                                    <img src="<?php echo $athu_qr_code; ?>" class="img-fluid" />
                                </div>
                                <div class="col-xl-9">
                                    <h6 class="my-2 factor">1. Install <a href="http://m.google.com/authenticator" target="_blank">Google Authenticator</a> on your mobile device.</h6>
                                    <h6 class="my-2 factor">2. Your Secret Code is: <b><span class="text-primary"></span></b></h6>
                                    <h6 class="my-2 factor">3. Please enter two factor token from Google Authenticator to verify correct setup:</h6>
                                </div>
                            </div>
                            <form class="form-valide-with-icon" name="google-auth-form" id="google-auth-form" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                <div class="form-group">
                                    <div class="form_input">
                                        <input type="text" class="form-control person-password" id="member_auth_code" name="member_auth_code" value="<?php if(isset($member_auth_code)){ echo $member_auth_code;}?>" placeholder="Enter two factor token" />
                                        {/* <?php echo form_error('member_auth_code', '<div class="invalid-feedback animated fadeInUp" style="display:block">', '</div>'); ?> */}
                                    </div>
                                </div>
                                <div class="col-md-12 text-center">
                                    <button type="submit" name="btnsubmit" class="theme-btn text-white" value="Activate">Active</button>
                                </div>
                            </form>
                            {/* <?php elseif($user['member_google_auth'] == '1'): ?> */}
                            <div class="alert alert-warning  fade show">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                <strong>Warning!</strong> Disabling two-factor authentication will reset your secret key.
                            </div>
                            <form class="form-valide-with-icon" name="google-auth-disable-form" id="google-auth-disable-form" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                <div class="form-group ">
                                    <div class="form_input">
                                        <input type="text" class="form-control person-password" id="member_auth_code" name="member_auth_code" value="" placeholder="Enter two factor token" />
                                        {/* <?php echo form_error('member_auth_code', '<div class="invalid-feedback animated fadeInUp" style="display:block">', '</div>'); ?> */}
                                    </div>
                                </div>
                                <div class="col-md-12 text-center">
                                    <button type="submit" name="submit_disable" class="theme-btn text-white" value="Disable 2FA">Disable</button>
                                </div>
                            </form>
                            <br />
                            <h3 class="small-title"> Factor Authentication Login</h3>
                            <form class="form-valide-with-icon" name="member_2fa" id="member_2fa" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                <div class="form-check-inline imp-grp">
                                    <label class="form-check-label">
                                        Enable 2Fa Security in login &nbsp;<input type="checkbox" class="form-check-input mr-2 radio" value="1" name="login_2fa" />
                                    </label>
                                </div>

                                <div class="form-check-inline mr-3 imp-grp">
                                    <label class="form-check-label">
                                        Enable 2Fa Security in withdraw &nbsp;<input type="checkbox" class="form-check-input mr-2 radio" value="1" name="withdraw_2fa" />
                                    </label>
                                </div>
                                <div class="col-md-12 text-center">
                                    <button type="submit" name="submit_member_2fa" class="theme-btn text-white" value="Update">Update</button>
                                </div>
                            </form>
                            {/* <?php endif; ?> */}
                        </div>
                    </div>
                    <div class="col-md-6 rounded col shadow-lg form-column mb-4">
                        <div class="purple-box  h-100 text-white text-start purple-budge-body p-5 form-box">
                            <h2 class="mb-4">Withdraw Wallet Address</h2>
                            <form class="" method="post" name="form_wallet" id="form_wallet" action="<?php echo base_url(); ?>profile">
                                <div class="row g-3">
                                    <div class="col-lg-12">
                                        <div class="form_input">
                                            <input type="text" class="form-control" name="wallet_address" id="wallet_address" placeholder="Enter Wallet Address" value="<?= $user['member_bitcoin_address']; ?>" />
                                            {/* <?php echo form_error('wallet_address', '<small class="state-error text-danger">', '</small>'); ?> */}
                                        </div>
                                    </div>

                                    <div class="col-lg-12 text-center">
                                        <button type="submit" id="submit_wallet" name="submit_wallet" class="theme-btn text-white" value="Update">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <
            </MemberTheme >

    )
}

export default EditProfile