import React from "react";
import MemberTheme from "../theme/MemberTheme";
import Breadcrumb from "../theme/Breadcrumb";
const Withdraw = () => {


    return (

        <MemberTheme>
            <div className="content-wrap">
                <Breadcrumb value="Profile Setting" />
                </div>
                <div class="mb-5">
                    <div class="row box-row mb-3">
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col">
                            <div class="col-inner balance-card text-end">
                                <div class="card-header">
                                    <img src="<?php echo $this->template_images; ?>queen.png" alt="logo" class="img-fluid queen" />
                                    <h3 class="card-title">Main Wallet</h3>
                                    <h2 class="coin-balance"><img src="<?php echo $this->template_images; ?>coin.png" alt="$" class="img-fluid pe-2" /> </h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col">
                            <div class="col-inner balance-card text-end">
                                <div class="card-header">
                                    <img src="<?php echo $this->template_images; ?>warden_min.png" alt="logo" class="img-fluid queen" />
                                    <h3 class="card-title">Pending Withdraw</h3>
                                    <h2 class="coin-balance"><img src="<?php echo $this->template_images; ?>coin.png" alt="$" class="img-fluid pe-2" /> </h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 balance-col">
                            <div class="col-inner balance-card text-end">
                                <div class="card-header">
                                    <img src="<?php echo $this->template_images; ?>flying_min.png" alt="logo" class="img-fluid queen" />
                                    <h3 class="card-title">Paid Withdraw</h3>
                                    <h2 class="coin-balance"><img src="<?php echo $this->template_images; ?>coin.png" alt="$" class="img-fluid pe-2" /> </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-md-12">

                        <div class="alert alert-warning  fade show">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <strong>Warning!</strong>
                        </div>

                        <div class="alert alert-warning  fade show">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <strong>Warning!</strong> Please upgrade your ID. <a href="<?php echo site_url();?>subscriber/add_balance" class="btn btn-sm btn-outline-warning ms-1">Click to Create.</a>
                        </div>

                        <div class="alert alert-warning  fade show">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <strong>Warning!</strong> Please update your wallet address. <a href="<?php echo site_url();?>profile" class="btn btn-sm btn-outline-warning ms-1">Click to Update.</a>
                        </div>

                        <div class="alert alert-warning  fade show">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <strong>Warning!</strong> You have not sufficient balance to withdrawal.
                        </div>

                        <div class="alert alert-warning  fade show">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <strong>Warning! </strong>Please contact administrator to perform withdraw.
                        </div>

                        <div class="alert alert-danger fade show">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                            <strong>Error!</strong> You can not withdraw, Admin blocked your account
                        </div>



                        <div class="row">
                            <div class="col-md-6 offset-md-2">
                                <div class="card">
                                    <div class="card-body">
                                        <form method="post" name="check-authcode-form" id="check-authcode-form" action="<?php echo base_url(); ?>withdrawal">
                                            <input type="hidden" name="withdrawal_amount" value="<?php echo $withdrawal_amount; ?>" />
                                            <input type="hidden" name="wallet_address" value="<?php echo $wallet_address; ?>" />
                                            <label class="form-label">Enter Authentication Code</label>
                                            <input type="text" id="member_auth_code" class="form-control" name="member_auth_code" value="" placeholder="Enter Authenticator Code" />
                                            {/* <?php echo form_error('member_auth_code', '<small class="state-error text-danger">', '</small>'); ?> */}
                                            <button type="submit" name="submit" class="btn btn-outline-success btn-icon btn-icon-start" value="Submit"><i data-acorn-icon="save"></i> Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <?php
                                        } else {
                                ?> */}
                        <div class="row">
                            <div class="col-md-12">
                                <div class="purple-box text-white text-start purple-budge-body p-5 form-box">
                                    <form class="form-valide-with-icon" method="post" name="withdrawal" id="withdrawal" action="<?php echo base_url(); ?>withdrawal">
                                        <div class="row g-3">
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Select Withdraw Method</label>
                                                <div class="form-check d-flex align-items-center">
                                                    <input type="radio" class="form-check-input" name="currency" value="blvrbsc" id="blvrbsc" checked />
                                                    <label class="form-check-label ms-2" for="blvrbsc">COC</label>
                                                </div>
                                                {/* <?php echo form_error('currency', '<small class="state-error text-danger">', '</small>'); ?> */}
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Enter the amount (COC)</label>
                                                <input type="text" id="withdrawal_amount" class="form-control" name="withdrawal_amount" placeholder="Amount" value="<?php if(isset($withdrawal_amount)){ echo $withdrawal_amount; } ?>" />
                                                {/* <?php echo form_error('withdrawal_amount', '<small class="state-error text-danger">', '</small>'); ?> */}
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Withdraw Amount (<span class="currency-text"></span>)</label>
                                                <input type="text" id="blvr_amount" name="blvr_amount" placeholder="Amount" class="form-control" readonly />
                                            </div>
                                            {/* <?php if($this->system->withdraw_fee_set == '1'){ ?> */}
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Withdraw Fee (<span class="currency-text"></span>)</label>
                                                <input type="text" id="blvr_fee" name="blvr_fee" placeholder="Fee" class="form-control" readonly />
                                            </div>
                                            {/* <?php } ?> */}
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Final Amount (<span class="currency-text"></span>)</label>
                                                <input type="text" id="final_withdraw" name="final_withdraw" placeholder="Final Amount" class="form-control" readonly />
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Security Code</label>
                                                <input type="password" name="security_pin" class="form-control" placeholder="Enter Security Code" value="" />
                                                {/* <?php echo form_error('security_pin', '<small class="state-error text-danger">', '</small>'); ?> */}
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Wallet Address</label>
                                                <input type="text" readonly name="wallet_address" class="form-control" placeholder="Enter Wallet Address" value="" />
                                                {/* <?php echo form_error('wallet_address', '<small class="state-error text-danger">', '</small>'); ?> */}
                                            </div>
                                            <div class="col-md-12">
                                                <div class="info light badge-primary d-none ">
                                                    {/* <?php if($this->system->withdraw_fee_set == '1'){ ?> <p class="my-2">Withdraw Fee [<span class='exchange-fee'></span>%]: <b id="wdl_fee_amount">0.00000000 <span class="currency-text"></span> </b></p> <?php } ?> */}
                                                    <p class="mt-2 mb-0 ">Live Rate: <b>1 <span class="currency-text"></span> = <span class="live_rate"></span> USD</b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <button type="submit" name="submit" class="theme-btn text-light mt-3" value="Request"> Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </MemberTheme >

    )
}

export default Withdraw