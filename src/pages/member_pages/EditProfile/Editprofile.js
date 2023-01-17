import React, { useState, useEffect } from "react";
import Breadcrumb from "../theme/Breadcrumb";
import MemberTheme from "../theme/MemberTheme";
import Chat from "../../../assets/images/chart.png"

const EditProfile = () => {

    //Personal Info
    const [state1, setState1] = useState();
    const [error, setError] = useState({ formErrors: {} });
    const [state, setState] = useState({
        username: "",
        profilepicter: "",
        full_name: "",
        pone_no: "",
        email: "",
        country_name: "",
        security: ""
    })

    const handleChange = (e) => {
        const {name} = e.target;
        const {value} = e.target
        // console.log(name ,"dsfsfd");
        setState({
            ...state,
            [name]: value
        })
    }
    const handleChange1 = (e) => {
        setState({
            ...state,
            profilepicter: e.target.files[0]
        })
    }

    useEffect(() => {
        // errorData();
    }, [state1]);

    const errorData = () => {
        const {
            username,
            full_name,
            profilepicter,
            pone_no,
            email,
            country_name,
            security,
        } = state;
        let formErrors = {};
        let formIsValid = true;

        if (!username) {
            formIsValid = true;
            formErrors["usernameIdErr"] = "Please Enter Username.";
        }

        if (!full_name) {
            formIsValid = true;
            formErrors["fullnameIdErr"] = "Please Enter Full Name.";
        }

        if (!profilepicter) {
            formIsValid = true;
            formErrors["profilepicterIdErr"] = "Please Enter Profile Picter.";
        }

        if (!pone_no) {
            formIsValid = true;
            formErrors["ponenumberIdErr"] = "Please Enter Pone Number.";
        } else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(pone_no)) {
                formIsValid = true;
                formErrors["ponenumberIdErr"] = "Please Invalid Pone Number.";
            }
        }

        if (!email) {
            formIsValid = true;
            formErrors["emailIdErr"] = "Please Enter Email.";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            formIsValid = true;
            formErrors["emailIdErr"] = "Invalid email id.";
        }


        if (!country_name) {
            formIsValid = true;
            formErrors["countrynameIdErr"] = "Please Enter Country Name.";
        }

        // if (password && cmfpassword && password !== cmfpassword) {
        //   formIsValid = true;
        //   formErrors["cmfpasswordIdErr"] = "password is not match .";
        // }

        if (!security) {
            formIsValid = true;
            formErrors["securitycodeIdErr"] = "Please Enter Security Code."
        }

        setError({ formErrors: formErrors });
        return formIsValid;
    };


    async function from() {
        errorData();
        let formData = new FormData()
        formData.append("profilepicter", state.profilepicter)
        formData.append("username", state.username)
        formData.append("fullname", state.fullname)
        formData.append("ponenumber", state.ponenumber)
        formData.append("email", state.email)
        formData.append("countryname", state.countryname)
        formData.append("securitycode", state.securitycode)

        console.log(state);
        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                // Authorization: admin.reset_api
            },
            body: formData,
        });
        const res_data = await response.json();
        console.log(res_data);
        setState1(res_data);
        // errorData();
    }

    // console.log(error);
    const handelsubmit = (e) => {
        e.preventDefault();
        from();
    };



    //change password

    const [error1, setError1] = useState({ formErrors1: {} })
    const [state2, setState2] = useState({
        oldpassword: "",
        newpassword: "",
        confirmpassword: ""
    })

    const handleChange2 = (e) => {
        const {name} = e.target
        const {value} = e.target
        setState2({
            ...state2,
            [name]: value
        })
    }
    const errorData1 = () => {
        const {
            oldpassword,
            newpassword,
            confirmpassword
        } = state2;
        let formErrors1 = {};
        let formIsValid = true;

        if (!oldpassword) {
            formIsValid = true;
            formErrors1["oldpasswordIdErr"] = "Please Enter Old password.";
        }

        if (!newpassword) {
            formIsValid = true;
            formErrors1["newpasswordIdErr"] = "Please Enter New password.";
        }
        // else if (password.length < 6) {
        //   formIsValid = true;
        //   formErrors1["newpasswordIdErr"] = "Please add at least 6 charachter.";
        // }

        if (!confirmpassword) {
            formIsValid = true;
            formErrors1["confirmpasswordIdErr"] = "Please Enter Confirm password.";
        }

        if (newpassword && confirmpassword && newpassword !== confirmpassword) {
            formIsValid = true;
            formErrors1["confirmpasswordIdErr"] = "Password is not match .";
        }
        setError1({ formErrors1: formErrors1 });
        return formIsValid;
    };

    async function Data() {
        errorData1()
        console.log(state2, " dfsfsd");

        let response1 = await fetch("", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                // Authorization: admin.reset_api
            },
            body: JSON.stringify(state2)
        })
        const res_data1 = await response1.json()
        console.log(res_data1, "aa");
        setState2(res_data1)
    }


    const handelUpdate = (e) => {
        e.preventDefault();
        Data()
    };

    // Security Password
    const [error2,setError2]=useState({formErrors2:{}})
    const [state3, setState3] = useState({
        oldsecuritycode: "",
        newsecuritycode: "",
        confirmsecuritycode: ""
    })

    const handleChange3 =(e)=>{
        const {name} = e.target
        const {value} = e.target
        setState3({
            ...state3,
            [name]:value
        })
    }
    const errorData2 = () => {
        const {
            oldsecuritycode,
            newsecuritycode,
            confirmsecuritycode
        } = state3
        ;
        let formErrors2 = {};
        let formIsValid = true;

        if (!oldsecuritycode) {
            formIsValid = true;
            formErrors2["oldsecurityIdError"] = "Please Enter Old Security Code.";
        }

        if (!newsecuritycode) {
            formIsValid = true;
            formErrors2["newsecurityIdError"] = "Please Enter New Security Code.";
        }

        if (!confirmsecuritycode) {
            formIsValid = true;
            formErrors2["confirmsecurityIdError"] = "Please Enter Confirm Security Code.";
        }

        if (newsecuritycode && confirmsecuritycode && newsecuritycode !== confirmsecuritycode) {
            formIsValid = true;
            formErrors2["confirmsecurityIdError"] = "Password is not match .";
        }
        setError2({ formErrors2: formErrors2 });
        return formIsValid;
    };

async function Data1 () {
    errorData2()
    console.log(state3, "hello");

    let response2 =  await fetch("",{
        method:"POST",
        headers:{
            "Content-type": "application/json",
            // Authorization: admin.reset_api
        },
        body:JSON.stringify(state3)
    });
    const res_data2 = await response2.json()
    console.log(res_data2);
    setState3(res_data2)
    
}

    const handelButton =(e) =>{
        e.preventDefault()
        Data1()
    };
//Wallet Address
const [error3,setError3] =useState({ formErrors3:{} })
const [wallet,setwallet] = useState({
    wallet_address:""
})

const handleChange5 =(e) =>{
    const {name} = e.target
    const {value} = e.target
    setwallet({
        ...wallet,
        [name]:value
    })
}

const errorData3 = () => {
    const {
        wallet_address,
    } = wallet
    ;
    let formErrors3 = {};
    let formIsValid = true;

    if (!wallet_address) {
        formIsValid = true;
        formErrors3["walletaddressIdErr"] = "Please enter COC wallet address.";
    }
   
    setError3({ formErrors3: formErrors3 });
    return formIsValid;
};

async function Address () {
errorData3()
console.log(wallet, "hello");

let response3 =  await fetch("",{
    method:"POST",
    headers:{
        "Content-type": "application/json",
        // Authorization: admin.reset_api
    },
    body:JSON.stringify(wallet)
});
const res_data3 = await response3.json()
console.log(res_data3);
setwallet(res_data3)
}

const handelButton1 =(e) =>{
    e.preventDefault()
    Address()
};

//Two Factor Authentication
const [error4,setError4] =useState({ formErrors4:{} })
const [wallet1,setwallet1] = useState({
    member_auth_code:""
})

const handleChange6 =(e) =>{
    const {name} = e.target
    const {value} = e.target
    setwallet({
        ...wallet,
        [name]:value
    })
}

const errorData4 = () => {
    const {
        member_auth_code,
    } = wallet1
    ;
    let formErrors4 = {};
    let formIsValid = true;

    if (!member_auth_code) {
        formIsValid = true;
        formErrors4["memberauthcodeIdErr"] = "Please enter your authentication code!";
    }
   
    setError4({ formErrors4: formErrors4 });
    return formIsValid;
};

async function Address1 () {
errorData4()
console.log(wallet1, "hello");

let response4 =  await fetch("",{
    method:"POST",
    headers:{
        "Content-type": "application/json",
        // Authorization: admin.reset_api
    },
    body:JSON.stringify(wallet1)
});
const res_data4 = await response4.json()
console.log(res_data4);
setwallet1(res_data4)
}

const handelButton2 =(e) =>{
    e.preventDefault()
    Address1()
};


//wallet addresserr
const {memberauthcodeIdErr}= error4.formErrors4

//wallet addresserr
const {walletaddressIdErr}= error3.formErrors3

//security password code
const {
    oldsecurityIdError,
    newsecurityIdError,
    confirmsecurityIdError
} = error2.formErrors2

    // chnage password error
    const {
        oldpasswordIdErr,
        newpasswordIdErr,
        confirmpasswordIdErr
    } = error1.formErrors1

    //Personal Info formerror
    const {
        usernameIdErr,
        emailIdErr,
        profilepicterIdErr,
        fullnameIdErr,
        ponenumberIdErr,
        countrynameIdErr,
        securitycodeIdErr
    } = error.formErrors;
    return (
        <MemberTheme>
            <div className="content-wrap">
                <Breadcrumb value="Profile Setting" />
                <div className="row datatable-row">
                    <div className="row text-center d-flex profile-row">
                        <div className="col-xl-4 col-lg-12 rounded col shadow-lg form-column mb-4">
                            <div className="purple-box text-center text-white h-100">
                                <div className="profile-img">
                                    {/* <img src="<?= base_url(); ?><?= $this->profile_image.'120x120_'.$user_image; ?>" alt="profile" className="img-fluid rounded-circle" /> */}
                                    <img src="<?php echo $this->template_images; ?>phone_min.jpg" className="img-fluid rounded-circle" alt="" width="120px" height="120px" />
                                </div>
                                <div className="profile-info purple-budge-body pb-4 px-4 px-lg-5">
                                    <h2></h2>
                                    <h4 className="mb-4"><i></i></h4>
                                    <div className="member_info text-start text-lg-center text-xl-start" style={{ fontFamily: 'clashregular', color: "white" }}>
                                        <p style={{ fontFamily: 'clashregular', color: "white" }}><strong>Phone:</strong></p>
                                        <p style={{ fontFamily: 'clashregular', color: "white" }}><strong>Email:</strong> </p>
                                        <p style={{ fontFamily: 'clashregular', color: "white" }}><strong>Clan League Reward:</strong> </p>
                                        <p style={{ fontFamily: 'clashregular', color: "white" }}><strong>League Reward:</strong></p>
                                    </div>

                                  
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
                                                <input type="text" readonly className={`form-control${usernameIdErr ? " showError" : ""}`} name="username" onChange={handleChange} value={state.username} placeholder="Enter User Name" readOnly />
                                                <div>
                                                    {usernameIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                paddingBottom: 0,
                                                                fontFamily:'clashregular'
                                                            }}
                                                        >
                                                            {usernameIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_input">
                                                <input className="form-control" type="file" name="profilepicter" id="profilePic" aria-label="Profile Picture" />
                                                <input name="old_profile_pic" type="hidden" onChange={handleChange1} classNameName={profilepicterIdErr ? " showError" : ""} value={state.profilepicter} />
                                                <div>
                                                    {profilepicterIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                paddingBottom: 0,
                                                                fontFamily:'clashregular'
                                                            }}
                                                        >
                                                            {profilepicterIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_input">
                                                {/* <input type="text" id="full_name" className={`form-control ${fullnameIdErr ? " showError" : ""}`} name="full_name" onChange={handleChange} value={state.full_name} placeholder="Enter Full Name" /> */}
                                                <input type="text" id="full_name" name="full_name" className={`form-control ${fullnameIdErr ? " showError" : ""}`} onChange={handleChange} value={state.full_name} placeholder="Enter Full Name" />

                                                <div>
                                                    {fullnameIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                paddingBottom: 0,
                                                                fontFamily:'clashregular'
                                                            }}
                                                        >
                                                            {fullnameIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_input">
                                                <input type="text" id="phone_no" className={`form-control${ponenumberIdErr ? " showError" : ""}`} name="phone_no" onChange={handleChange} value={state.pone_no} placeholder="Enter Phone No" />
                                                <div>
                                                    {ponenumberIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                paddingBottom: 0,
                                                                fontFamily:'clashregular'
                                                            }}
                                                        >
                                                            {ponenumberIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_input">
                                                <input type="email" className={`form-control ${emailIdErr ? " showError" : ""}`} name="email" id="email" onChange={handleChange} value={state.email} placeholder="Enter Email" readonly />
                                                <div>
                                                    {emailIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                paddingBottom: 0,
                                                                fontFamily:'clashregular'
                                                            }}
                                                        >
                                                            {emailIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form_input">
                                                <select id="country_name" name="country_name" className={`form-control ${countrynameIdErr ? " showError" : ""}`} placeholder="Selecy Country Code" onChange={handleChange} value={state.country_name}>
                                                    <option value={state.country_name} className="form-control">Selecy Country Code</option>
                                                    <option></option>
                                                    <div>
                                                        {countrynameIdErr && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {countrynameIdErr}
                                                            </div>
                                                        )}
                                                    </div>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_input">
                                                <input type="password" className={`form-control ${securitycodeIdErr ? " showError" : ""}`} id="security" name="security" onChange={handleChange} value={state.security} placeholder="Enter your security code" />
                                                <div>
                                                    {securitycodeIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                paddingBottom: 0,
                                                                fontFamily:'clashregular'
                                                            }}
                                                        >
                                                            {securitycodeIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form_input_btn text-center">
                                        <button type="submit" name="submitForm" id="submitForm" value="Update"
                                            onClick={handelsubmit}
                                            className="theme-btn text-white">Submit</button>
                                    </div>
                                </form>
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
                                                    <input type="password" name="old_password" className={`form-control${oldpasswordIdErr ? "showError" : ""}`} onChange={handleChange2} id="password" placeholder="Enter Old Password" value={state2.newpassword} />
                                                    <div>
                                                        {oldpasswordIdErr && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {oldpasswordIdErr}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form_input">
                                                    <input type="password" name="new_password" className={`form-control ${newpasswordIdErr ? "showError" : ""}`} onChange={handleChange2} id="new_password" placeholder="Enter New Password" value={state2.newpassword} />
                                                    <div>
                                                        {newpasswordIdErr && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {newpasswordIdErr}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form_input">
                                                    <input type="password" id="c_password" className={`form-control ${confirmpasswordIdErr ? "showError" : ""}`} onChange={handleChange2} name="c_password" placeholder="Enter Confirm Password" value={state2.confirmpassword} />
                                                    <div>
                                                        {confirmpasswordIdErr && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {confirmpasswordIdErr}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="submit" id="submit_password" name="submit_password" className="theme-btn text-white"
                                                onClick={handelUpdate}
                                                value="Update Password">Update</button>
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
                                                    <input type="password" className={`form-control ${oldsecurityIdError ? "showError" : ""}`} name="old_security" onChange={handleChange3} id="old_security" placeholder="Enter Old Security Code" value={state3.oldsecuritycode} />
                                                    <div>
                                                        {oldsecurityIdError && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {oldsecurityIdError}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_input">
                                                    <input type="password" className={`form-control ${newsecurityIdError ? "showError" : ""}`} name="new_security" onChange={handleChange3} id="new_security" placeholder="Enter New Security Code" value={state3.newsecuritycode} />
                                                    <div>
                                                        {newsecurityIdError && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {newsecurityIdError}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_input">
                                                    <input type="password" className={`form-control ${confirmsecurityIdError ? "showError" : ""}`} id="c_security" onChange={handleChange3} name="c_security" placeholder="Enter Confirm Security Code" value={state3.confirmsecuritycode} />
                                                    <div>
                                                        {confirmsecurityIdError && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {confirmsecurityIdError}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" id="submit_security" name="submit_security"
                                                 className="theme-btn text-white" onClick={handelButton}
                                                  value="Update Security">Submit</button>
                                                  
                                                <a href="" className="theme-btn text-white float-end">RESET</a>
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
                                            <img src={Chat} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-xl-9 text-white" style={{ fontFamily: "'clashregular'" }}>
                                            <h6 className="my-2 factor install">1. Install <a href="http://m.google.com/authenticator" target="_blank">Google Authenticator</a> on your mobile device.</h6>
                                            <h6 className="my-2 factor install">2. Your Secret Code is: <b><span style={{color:"#0d6efd"}}>KY7TOZKHLZA6G5VM</span></b></h6>
                                            <h6 className="my-2 factor install">3. Please enter two factor token from Google Authenticator to verify correct setup:</h6>
                                        </div>
                                    </div>
                                    <form className="form-valide-with-icon" name="google-auth-form" id="google-auth-form" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                        <div className="form-group">
                                            <div className="form_input">
                                                <input type="text" className={`form-control person-password ${memberauthcodeIdErr ? "showError" :""}`} id="member_auth_code" name="member_auth_code" value={wallet1.member_auth_code} placeholder="Enter two factor token" />
                                                <div>
                                                        {memberauthcodeIdErr && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {memberauthcodeIdErr}
                                                            </div>
                                                        )}
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="submit" name="btnsubmit" className="theme-btn text-white" onClick={handelButton2} value="Activate">Active</button>
                                        </div>
                                    </form>
                                    {/* <div className="alert alert-warning  fade show">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                <strong>Warning!</strong> Disabling two-factor authentication will reset your secret key.
                            </div> */}
                                    {/* <form className="form-valide-with-icon" name="google-auth-disable-form" id="google-auth-disable-form" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                <div className="form-group ">
                                    <div className="form_input">
                                            <input type="text" className="form-control person-password" id="member_auth_code" name="member_auth_code" value="" placeholder="Enter two factor token" />
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit" name="submit_disable" className="theme-btn text-white" value="Disable 2FA">Disable</button>
                                </div>
                            </form> */}
                                    {/* <br /> */}
                                    {/* <h3 className="small-title"> Factor Authentication Login</h3> */}
                                    {/* <form className="form-valide-with-icon" name="member_2fa" id="member_2fa" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>profile">
                                <div className="form-check-inline imp-grp">
                                    <label className="form-check-label">
                                        Enable 2Fa Security in login &nbsp;<input type="checkbox" className="form-check-input mr-2 radio" value="1" name="login_2fa"/>
                                    </label>
                                </div>
                                
                                <div className="form-check-inline mr-3 imp-grp">
                                    <label className="form-check-label">
                                        Enable 2Fa Security in withdraw &nbsp;<input type="checkbox" className="form-check-input mr-2 radio" value="1"  name="withdraw_2fa"/>
                                    </label>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit" name="submit_member_2fa" className="theme-btn text-white" value="Update">Update</button>
                                </div>
                            </form> */}

                                </div>
                            </div>
                            <div className="col-md-6 rounded col shadow-lg form-column mb-4">
                                <div className="purple-box  h-100 text-white text-start purple-budge-body p-5 form-box">
                                    <h2 className="mb-4">Withdraw Wallet Address</h2>
                                    <form className="" method="post" name="form_wallet" id="form_wallet" action="<?php echo base_url(); ?>profile">
                                        <div className="row g-3">
                                            <div className="col-lg-12">
                                                <div className="form_input">
                                                    <input type="text" className={`form-control${walletaddressIdErr? "showError" : ""}`} onChange={handleChange5} name="wallet_address" id="wallet_address" placeholder="Enter Wallet Address" value={wallet.wallet_address} />
                                                    <div>
                                                        {walletaddressIdErr && (
                                                            <div
                                                                style={{
                                                                    color: "#dc3545",
                                                                    fontWeight: 500,
                                                                    paddingBottom: 0,
                                                                    fontFamily:'clashregular'
                                                                }}
                                                            >
                                                                {walletaddressIdErr}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 text-center">
                                                <button type="submit" id="submit_wallet" name="submit_wallet" className="theme-btn text-white" onClick={handelButton1} value="Update">Update</button>
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

export default EditProfile