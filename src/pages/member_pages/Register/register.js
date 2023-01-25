import React, { useState, useEffect } from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";
import clashofclans from "../../../assets/images/27795-1-clash-of-clans-picture.png"
import coc from "../../../assets/images/coc.png"
import arrrowicon from "../../../assets/images/arrrowicon.webp"
import Select from 'react-select';

const Register = () => {
    const params = useParams()
    const [abc, setAbc] = useState("")
    const [hello, setHello] = useState("")
    const [hello1, setHello1] = useState("")

    const [error, setError] = useState({ formErrors: {} });
    const [state, setState] = useState({
        sponser_id: params && params.id,
        fullname: "",
        phone: "",
        email: "",
        country_name: "",
    })

    const handleChange = (e) => {
        // var sing = (state !== abc[0])
        // console.log(sing,"aaaaa");

        // if (state !== abc[0]) {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
        // }
    }

    const errorData = () => {

        const { sponser_id, fullname, phone, email, country_name,
        } = state;
        let formErrors = {};
        let formIsValid = true;

        if (!sponser_id) {
            formIsValid = true;
            formErrors["sponseridrr"] = "Please Enter Username.";
        }
        else if (state.sponser_id !== abc[0].member_username) {
            formIsValid = true;
            formErrors["sponseridrr"] = "Please enter  valid referral username.";
        }

        if (!fullname) {
            formIsValid = true;
            formErrors["fullnameIdErr"] = "Please enter display name!";
        }

        if (state2) {
            if (state.status == 400) {
                if (state2 == "member_email") {
                    formIsValid = true;
                    formErrors["emailIdErr"] = "Email already exist!"
                }
            }
        }

        if (!email) {
            formIsValid = true;
            formErrors["emailIdErr"] = "Please Enter email.";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            formIsValid = true;
            formErrors["emailIdErr"] = "Invalid email id.";
        }
        else if (state.email == abc[0].member_email) {
            formIsValid = true;
            formErrors["emailIdErr"] = "Please enter valid referral email!.";
        }

        if (!phone) {
            formIsValid = true;
            formErrors["ponenumberIdErr"] = "Please Enter phone number.";
        }
        else if (!/[0-9]+$/.test(phone)) {
            formIsValid = true;
            formErrors["ponenumberIdErr"] = "Invalid phone number!.";
        }
        else if (state.phone == abc[0].member_phone) {
            formIsValid = true;
            formErrors["ponenumberIdErr"] = "Please enter valid referral phone!.";
        }
        // else if(state.phone == state2[0].member_phone){
        //     formIsValid = true;
        //     formErrors["ponenumberIdErr"] = "Please enter valid referral phone!.";
        // }

        if (!country_name) {
            formIsValid = true;
            formErrors["countrynameIdErr"] = "Please select country"
        }

        setError({ formErrors: formErrors });
        return formIsValid;
    };

    async function from() {
        errorData();

        console.log(state, 'ffff');
        const response = await fetch("/demo/rtvk/ci_admin_api/coc22member/api/User/register/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: "d200d1f41c0f1b45087d6e8a2158c382bce469daf7dc51dc28237a0822a08d86b7df15b7272aeee7a09191e0511ca96f8cdabb11b1bbae92ed0df86ef18d554altcbvyVgoGH+89DP5k7os7Q2VCfHDSCUl4gaAWeQzWM="
            },
            body: JSON.stringify(state)
        });
        const res_data = await response.json();
        console.log(res_data.message, "ADADAD");
        // setState(res_data.message)
    }

    // console.log(error);
    const handelsubmit = (e) => {
        e.preventDefault();
        from()
    };

    const [state2, setState2] = useState("")
    const [user, setUser] = useState("")
    const handleInput3 = (e) => {
        const { name, value } = e.target
        setState2({
            ...state2,
            [name]: value
        })
    }

    useEffect(() => {
        async function Data() {
            const texClone = await fetch("/demo/rtvk/ci_admin_api/coc22member/api/user/getAllMember", {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                },
            });
            const response_data = await texClone.json();
            console.log(response_data, "abcaa")
            setState2(response_data)

            console.log(state2, "lll");

            // const options=[]
            // // console.log(options,"dfsf");
            // response_data.message.map((data) => {
            //     options.push({
            //         value: data.country_id, label: data.country_name
            //     })
            // })

            const data_response = response_data.filter((data_response) => {
                return data_response.member_username == state.sponser_id
            })

            const data_response1 = response_data.filter((data_response) => {
                return data_response.member_email !== state.email
            })

            const data_response2 = response_data.filter((data_response) => {
                return data_response.member_phone !== state.phone
            })

            setAbc(data_response && data_response);
            setHello(data_response1 && data_response1);
            setHello1(data_response2 && data_response2);

            setUser(data_response && data_response[0].member_fullname)
            console.log(state2 && state2, "mmmmmmm");
            console.log(state, "asdasd");

            console.log(data_response && data_response, "adadad");
            console.log(data_response1 && data_response1, "pqr");
            console.log(data_response2 && data_response2, "xyz");

        }
        Data();
        country();
    }, [])

    const [demo, setDemo] = useState([])

    const handleInput2 = (e) => {
        const { name, value } = e.target
        setDemo({
            ...demo,
            [name]: value
        })
    }

    async function country() {

        const good = await fetch("/demo/rtvk/ci_admin_api/coc22member/api/User/getAllCountry", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        });
        const res_response2 = await good.json();
        // console.log(res_response2.message, "fddfs");
        // setDemo(res_response2.message)

        const options = []

        res_response2.message.map((data_res) => {
            options.push({
                value: data_res.country_id, label: data_res.p_code + " " + data_res.country_name
            })
        })

        // console.log(demo && demo, "aaa");
        // const data_res = res_response2.message.filter((data) => {
        //     return data.country_id == state.country_name
        // })
        // setState1(data_res && data_res[0].country_name)
        // console.log(data_res && data_res[0].country_name, "dsdfsdf");

        setDemo(options)
        // console.log(options, "fsfsfs");
    }

    const {
        sponseridrr,
        emailIdErr,
        fullnameIdErr,
        ponenumberIdErr,
        countrynameIdErr,
    } = error.formErrors;

    return (
        <>
            <body class="body__bg" data-bgimg="" >
                <div class="page_wrapper wallpper">
                    <section class="contact_page_section mb-140">
                        <div class="container-fluid">
                            <div class="content-center">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-4  col-12 px-5 py-5 side_bg d-flex align-items-center coccocolor ">
                                        {/* <div className="header_logo  mb-3 text-center">
                                        <a href="https://developerinfotech.com/demo/rtvk/ci_admin_api/"><img aria-label="logo" width="215" height="100" src={coc} alt="" /></a>
                                    </div>
                                    <div className="alert alert-warning w-100 fade show">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                        <strong>Warning!</strong> aaaa1aad
                                    </div> */}
                                        <form id="login-form" name="login-form" class=" needs-validation w-100" method="post" action="" noValidate="novalidate">
                                            <div class="header_logo  mb-3 text-center">
                                                <a href="https://developerinfotech.com/demo/rtvk/ci_admin_api/"><img aria-label="logo" style={{ marginTop: "20px" }} width="215" height="100" src={coc} alt="" /></a>
                                            </div>
                                            <div class="section_title text-center mb-60">
                                                <h2 className="signup">Sign Up</h2>
                                            </div>
                                            <div class="form_input">
                                                <span id="sponsor_name"><strong class="theme-text">{user}</strong></span>

                                                <input type="text" name="sponser_id" id="username" className={`form-control ${sponseridrr ? " showError" : ""}`}
                                                    onChange={handleChange} placeholder="Enter Username" value={state.sponser_id} />

                                                <div>
                                                    {sponseridrr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                fontSize: "15px",
                                                                fontFamily: 'clashregular'
                                                            }}
                                                        >
                                                            {sponseridrr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div class="form_input">
                                                <input name="fullname" id="fullname" type="text" className={`form-control ${fullnameIdErr ? " showError" : ""}`} onChange={handleChange} placeholder="Enter Name" value={state.fullname} />
                                                <div>
                                                    {fullnameIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                fontSize: "15px",
                                                                fontFamily: 'clashregular'
                                                            }}>
                                                            {fullnameIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div class="form_input">
                                                <input name="email" id="email" type="email" className={`form-control ${emailIdErr ? " showError" : ""}`} onChange={handleChange} placeholder="Enter Email" value={state.email} />
                                                <div>
                                                    {emailIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                fontSize: "15px",
                                                                fontFamily: 'clashregular'
                                                            }}
                                                        >
                                                            {emailIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div class="form_input">
                                                <input name="phone" id="phone" maxLength="11" type="tel" className={`form-control ${ponenumberIdErr ? " showError" : ""}`} onChange={handleChange} placeholder="Enter Pone NO" value={state.phone} />
                                                <div>
                                                    {ponenumberIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                fontSize: "15px",
                                                                fontFamily: 'clashregular'
                                                            }}
                                                        >
                                                            {ponenumberIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="form_input">

                                                <select id="country_name" style={{ fontFamiy: 'clashregular' }} name="country_name"
                                                    className={`form-control ${countrynameIdErr ? " showError" : ""}`} onChange={handleChange}
                                                    placeholder="--Country--" value={state.country_name} >
                                                    <option className="form-control">-- Country-- </option>
                                                    {demo.map((person, index) => (
                                                        <option key={index} value={person.value} >
                                                            {person.label}
                                                        </option>
                                                    ))}
                                                </select>

                                                {/* <Select
                                                    classNamePrefix="selectproduct"
                                                    id="country_name"
                                                    name="country_name"
                                                    options={demo}
                                                    style={{ fontFamiy: 'clashregular' }}
                                                    className={`form-control ${countrynameIdErr ? "showError" : ""}`}
                                                    isSearchable
                                                    // value={state1}
                                                    placeholder="--Country--"
                                                    onChange={date => handleChange({ target: { value: date } })}

                                                    defaultValue={{ value:state.value, label: state1 && state1.label }}
                                                /> */}

                                                <div>
                                                    {countrynameIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                fontSize: "15px",
                                                                fontFamily: 'clashregular'
                                                            }}
                                                        >
                                                            {countrynameIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div class="form_input_btn text-center register1">
                                                <button type="submit" id="btnsubmit" name="register_submit" value="Register" onClick={handelsubmit} class="btn ">Register<img width="20" style={{ marginLeft: "14px" }} height="20" src={arrrowicon} alt="" /></button>
                                            </div>
                                            <p class="text-center account">Already have an account? <a class="account1" href="https://developerinfotech.com/demo/rtvk/ci_admin_api/login"> Login here</a></p>
                                        </form>
                                    </div>
                                    <div class="col-xl-9 col-lg-8 col-12 mx-auto text-center d-none d-lg-flex align-items-center justify-content-center imgwith">
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
export default Register