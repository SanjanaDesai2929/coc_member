import React, { useState } from 'react'

const WithdrawAdd = () => {
    //store state value
    const [state, setState] = useState({
        withdrawal_amount: "",
        security_pin: ""
    })
    const [error, setError] = useState({ formErrors: {} });
    //Handle Validation
    const handleError = () => {
        const { withdrawal_amount, security_pin } = state
        var formIsValid = false;
        var formErrors = {};
        if (!withdrawal_amount) {
            formIsValid = true;
            formErrors["withdrawal_amount"] = "Please Select Status"
        }
        if (!security_pin) {
            formIsValid = true;
            formErrors["security_pin"] = "Please Select Status"
        }
        setError({ formErrors: formErrors });
        return formIsValid;
    }
    //Call function on Submit Button
    const handleClick = () => {
        const data = handleError()
    }
    //Handle state Value
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }
    return (
        <>
            <div class="row mb-5">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="purple-box text-white text-start purple-budge-body p-5 form-box">
                                <form class="form-valide-with-icon"  name="withdrawal" id="withdrawal"  novalidate="novalidate">
                                    <div class="row g-3">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Select Withdraw Method</label>
                                            <div class="form-check font-user d-flex align-items-center">
                                                <input type="radio" class="form-check-input state-success" name="currency" value="blvrbsc" id="blvrbsc" checked />
                                                <label class="form-check-label ms-2" for="blvrbsc">COC</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Enter the amount (COC)</label>
                                            <input type="text" id="withdrawal_amount" class="form-control form-control1 state-error text-danger" name="withdrawal_amount" placeholder="Amount" value={state.withdrawal_amount} onChange={handleChange} aria-describedby="withdrawal_amount-error" aria-invalid="true" />
                                            {error.formErrors['withdrawal_amount'] && (
                                               <small id="withdrawal_amount-error" class="state-error text-danger">Please withdrawal amount!</small>
                                            )}
                                            
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Withdraw Amount (<span class="currency-text">COC</span>)</label>
                                            <input type="text" id="blvr_amount" name="blvr_amount" placeholder="Amount" class="form-control form-control1 state-success" readonly="" aria-invalid="false" />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Withdraw Fee (<span class="currency-text">COC</span>)</label>
                                            <input type="text" id="blvr_fee" name="blvr_fee" placeholder="Fee" class="form-control form-control1" readonly="" />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Final Amount (<span class="currency-text">COC</span>)</label>
                                            <input type="text" id="final_withdraw" name="final_withdraw" placeholder="Final Amount" class="form-control form-control1" readonly="" />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Security Code</label>
                                            <input type="password" name="security_pin" class="form-control form-control1 state-error text-danger" placeholder="Enter Security Code" value={state.security_pin} onChange={handleChange} aria-describedby="security_pin-error" />
                                            {error.formErrors['security_pin'] && (
                                               <small id="security_pin-error" class="state-error text-danger">Please withdrawal amount!</small>
                                            )}
                                            
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Wallet Address</label>
                                            <input type="text" readonly="" name="wallet_address" class="form-control form-control1 state-success" placeholder="Enter Wallet Address" value="0x00408D847665eD08737E01c84f9103fe772C472C" aria-invalid="false" />
                                        </div>
                                        <div class="col-md-12">
                                            <div class="info light badge-primary d-none">
                                                <p class="my-2">Withdraw Fee [<span class="exchange-fee">10</span>%]: <b id="wdl_fee_amount">0.00000000 COC</b></p>                                                                                                                          </div>
                                        </div>
                                        <div class="col-md-12 text-center" onClick={handleClick}>
                                            <button type="submit" name="submit" class="theme-btn text-light mt-3" value="Request"> Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default WithdrawAdd