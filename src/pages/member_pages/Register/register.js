import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import clashofclans from "../../../assets/images/27795-1-clash-of-clans-picture.png"
import coc from "../../../assets/images/coc.png"
import arrrowicon from "../../../assets/images/arrrowicon.webp"

const Register = () => {
    let { id } = useParams();
    console.log(`${window.location.origin}/register/ref/{id}`);
    console.log({ id }, "aaa");

    const [state1, setState1] = useState();
    const [error, setError] = useState({ formErrors: {} });
    const [state, setState] = useState({
        username: "",
        full_name: "",
        pone_no: "",
        email: "",
        country_name: "",
    })

    const handleChange = (e) => {
        const { name } = e.target;
        const { value } = e.target
        // console.log(name ,"dsfsfd");
        setState({
            ...state,
            [name]: value
        })
    }

    useEffect(() => {
        // errorData();
    }, [state1]);

    const errorData = () => {
        const {
            username,
            full_name,
            pone_no,
            email,
            country_name,
        } = state;
        let formErrors = {};
        let formIsValid = true;

        if (!username) {
            formIsValid = true;
            formErrors["usernameIdErr"] = "Please Enter Username.";
        }

        if (!full_name) {
            formIsValid = true;
            formErrors["fullnameIdErr"] = "Please enter display name!";
        }

        if (!pone_no) {
            formIsValid = true;
            formErrors["ponenumberIdErr"] = "Please enter phone number!.";
        } else {
            var mobPattern = /^[0-9\b]+$/;
            if (!mobPattern.test(pone_no)) {
                formIsValid = true;
                formErrors["ponenumberIdErr"] = "Please enter phone number!";
            }
        } 
        // /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/
        if (!email) {
            formIsValid = true;
            formErrors["emailIdErr"] = "Please Enter email.";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            formIsValid = true;
            formErrors["emailIdErr"] = "Invalid email id.";
        }

        if (!country_name) {
            formIsValid = true;
            formErrors["countrynameIdErr"] = "Please select country!.";
        }

        setError({ formErrors: formErrors });
        return formIsValid;
    };


    async function from() {
        errorData();
        let formData = new FormData()
        formData.append("profilepicter", state.profilepicter)
        formData.append("username", state.username)
        formData.append("fullname", state.full_name)
        formData.append("email", state.email)
        formData.append("countryname", state.country_name)

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

    const {
        usernameIdErr,
        emailIdErr,
        fullnameIdErr,
        ponenumberIdErr,
        countrynameIdErr,
    } = error.formErrors;
    return (
        <>
            <body class="body__bg" data-bgimg="https://developerinfotech.com/demo/rtvk/ci_admin_api/application/views/themes/front/assets/img/bg/breadcrumbs-bg.webp" >
                <div class="page_wrapper wallpper">
                    <section class="contact_page_section mb-140">
                        <div class="container-fluid">
                            <div class="content-center">
                                <div class="row ">

                                    <div class="col-xl-3 col-lg-4  col-12 px-5 py-5 side_bg d-flex align-items-center coccocolor ">
                                        {/* <div className="header_logo  mb-3 text-center">
                                        <a href="https://developerinfotech.com/demo/rtvk/ci_admin_api/"><img aria-label="logo" width="215" height="100" src={coc} alt="" /></a>
                                    </div>
                                    <div className="alert alert-warning w-100 fade show">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                        <strong>Warning!</strong> aaaa1aad
                                    </div> */}
                                        <form id="login-form" name="login-form" class=" needs-validation w-100" method="post" action="" novalidate="novalidate">
                                            <div class="header_logo  mb-3 text-center">
                                                <a href="https://developerinfotech.com/demo/rtvk/ci_admin_api/"><img aria-label="logo" style={{ marginTop: "20px" }} width="215" height="100" src={coc} alt="" /></a>
                                            </div>
                                            <div class="section_title text-center mb-60">
                                                <h2 className="signup">Sign Up</h2>
                                            </div>
                                            <div class="form_input">
                                                <span id="sponsor_name"><strong class="theme-text">coc2ffdhjjerwfe</strong></span>
                                                <input type="text" name="username" id="username" className={`form-control ${usernameIdErr ? " showError" : ""}`} onChange={handleChange} placeholder="Enter Username" value={state.username} />
                                                <div>
                                                    {usernameIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                fontSize: "15px",
                                                                fontFamily: 'clashregular'
                                                            }}
                                                        >
                                                            {usernameIdErr}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div class="form_input">
                                                <input name="full_name" id="fullname" type="text" className={`form-control ${fullnameIdErr ? " showError" : ""}`} onChange={handleChange} placeholder="Enter Nmae" value={state.full_name} />
                                                <div>
                                                    {fullnameIdErr && (
                                                        <div
                                                            style={{
                                                                color: "#dc3545",
                                                                fontWeight: 500,
                                                                fontSize: "15px",
                                                                fontFamily: 'clashregular'
                                                            }}
                                                        >
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
                                                <input name="pone_no" maxlength="10" id="pone" type="tel" className={`form-control ${ponenumberIdErr ? " showError" : ""}`} onChange={handleChange} placeholder="Enter Pone NO" value={state.pone_no} />
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
                                                <select id="country_name" style={{ fontFamiy: 'clashregular' }} name="country_name" className={`form-control ${countrynameIdErr ? " showError" : ""}`} onChange={handleChange} placeholder="--Country--" value={state.country_name}>
                                                    <option value="" className="form-control">-- Country --</option>
                                                    <option data-code="+93" value="1">Afghanistan (+93)</option>
                                                    <option data-code="+355" value="2">Albania (+355)</option>
                                                    <option data-code="+213" value="3">Algeria (+213)</option>
                                                    <option data-code="+684" value="4">American Samoa (+684)</option>
                                                    <option data-code="+376" value="5">Andorra (+376)</option>
                                                    <option data-code="+244" value="6">Angola (+244)</option>
                                                    <option data-code="+1264" value="7">Anguilla (+1264)</option>
                                                    <option data-code="+672" value="8">Antarctica (+672)</option>
                                                    <option data-code="+1268" value="9">Antigua (+1268)</option>
                                                    <option data-code="+54" value="10">Argentina (+54)</option>
                                                    <option data-code="+374" value="11">Armenia (+374)</option>
                                                    <option data-code="+297" value="12">Aruba (+297)</option>
                                                    <option data-code="+247" value="13">Ascension (+247)</option>
                                                    <option data-code="+61" value="14">Australia (+61)</option>
                                                    <option data-code="+43" value="15">Austria (+43)</option>
                                                    <option data-code="+994" value="16">Azerbaijan (+994)</option>
                                                    <option data-code="+1242" value="17">Bahamas (+1242)</option>
                                                    <option data-code="+973" value="18">Bahrain (+973)</option>
                                                    <option data-code="+880" value="19">Bangladesh (+880)</option>
                                                    <option data-code="+1246" value="20">Barbados (+1246)</option>
                                                    <option data-code="+1268" value="21">Barbuda (+1268)</option>
                                                    <option data-code="+375" value="22">Belarus (+375)</option>
                                                    <option data-code="+32" value="23">Belgium (+32)</option>
                                                    <option data-code="+501" value="24">Belize (+501)</option>
                                                    <option data-code="+229" value="25">Benin (+229)</option>
                                                    <option data-code="+1441" value="26">Bermuda (+1441)</option>
                                                    <option data-code="+975" value="27">Bhutan (+975)</option>
                                                    <option data-code="+591" value="28">Bolivia (+591)</option>
                                                    <option data-code="+267" value="29">Botswana (+267)</option>
                                                    <option data-code="+55" value="30">Brazil (+55)</option>
                                                    <option data-code="+1284" value="31">British Virgin Islands (+1284)</option>
                                                    <option data-code="+673" value="32">Brunei Darussalam (+673)</option>
                                                    <option data-code="+359" value="33">Bulgaria (+359)</option>
                                                    <option data-code="+226" value="34">Burkina Faso (+226)</option>
                                                    <option data-code="+257" value="35">Burundi (+257)</option>
                                                    <option data-code="+855" value="36">Cambodia (+855)</option>
                                                    <option data-code="+237" value="37">Cameroon (+237)</option>
                                                    <option data-code="+124432" value="38">Canada (+124432)</option>
                                                    <option data-code="+238" value="39">Cape Verde Islands (+238)</option>
                                                    <option data-code="+1345" value="40">Cayman Islands (+1345)</option>
                                                    <option data-code="+236" value="41">Central African Republic (+236)</option>
                                                    <option data-code="+235" value="42">Chad (+235)</option>
                                                    <option data-code="+56" value="43">Chile (+56)</option>
                                                    <option data-code="+86" value="44">China (+86)</option>
                                                    <option data-code="+57" value="45">Colombia (+57)</option>
                                                    <option data-code="+269" value="46">Comoros (+269)</option>
                                                    <option data-code="+242" value="47">Congo (+242)</option>
                                                    <option data-code="+682" value="48">Cook Islands (+682)</option>
                                                    <option data-code="+506" value="49">Costa Rica (+506)</option>
                                                    <option data-code="+385" value="50">Croatia (+385)</option>
                                                    <option data-code="+53" value="51">Cuba (+53)</option>
                                                    <option data-code="+599" value="52">Curaçao (+599)</option>
                                                    <option data-code="+357" value="53">Cyprus (+357)</option>
                                                    <option data-code="+420" value="54">Czech Republic (+420)</option>
                                                    <option data-code="+45" value="55">Denmark (+45)</option>
                                                    <option data-code="+246" value="56">Diego Garcia (+246)</option>
                                                    <option data-code="+253" value="57">Djibouti (+253)</option>
                                                    <option data-code="+1767" value="58">Dominica (+1767)</option>
                                                    <option data-code="+670" value="59">East Timor (+670)</option>
                                                    <option data-code="+56" value="60">Easter Island (+56)</option>
                                                    <option data-code="+593" value="61">Ecuador (+593)</option>
                                                    <option data-code="+20" value="62">Egypt (+20)</option>
                                                    <option data-code="+503" value="63">El Salvador (+503)</option>
                                                    <option data-code="+240" value="64">Equatorial Guinea (+240)</option>
                                                    <option data-code="+291" value="65">Eritrea (+291)</option>
                                                    <option data-code="+372" value="66">Estonia (+372)</option>
                                                    <option data-code="+251" value="67">Ethiopia (+251)</option>
                                                    <option data-code="+298" value="68">Faroe Islands (+298)</option>
                                                    <option data-code="+679" value="69">Fiji Islands (+679)</option>
                                                    <option data-code="+358" value="70">Finland (+358)</option>
                                                    <option data-code="+33" value="71">France (+33)</option>
                                                    <option data-code="+596" value="72">French Antilles (+596)</option>
                                                    <option data-code="+594" value="73">French Guiana (+594)</option>
                                                    <option data-code="+689" value="74">French Polynesia (+689)</option>
                                                    <option data-code="+241" value="75">Gabonese Republic (+241)</option>
                                                    <option data-code="+220" value="76">Gambia (+220)</option>
                                                    <option data-code="+995" value="77">Georgia (+995)</option>
                                                    <option data-code="+49" value="78">Germany (+49)</option>
                                                    <option data-code="+233" value="79">Ghana (+233)</option>
                                                    <option data-code="+350" value="80">Gibraltar (+350)</option>
                                                    <option data-code="+30" value="81">Greece (+30)</option>
                                                    <option data-code="+299" value="82">Greenland (+299)</option>
                                                    <option data-code="+1473" value="83">Grenada (+1473)</option>
                                                    <option data-code="+590" value="84">Guadeloupe (+590)</option>
                                                    <option data-code="+1671" value="85">Guam (+1671)</option>
                                                    <option data-code="+5399" value="86">Guantanamo Bay (+5399)</option>
                                                    <option data-code="+502" value="87">Guatemala (+502)</option>
                                                    <option data-code="+224" value="89">Guinea (+224)</option>
                                                    <option data-code="+245" value="88">Guinea-Bissau (+245)</option>
                                                    <option data-code="+592" value="90">Guyana (+592)</option>
                                                    <option data-code="+509" value="91">Haiti (+509)</option>
                                                    <option data-code="+504" value="92">Honduras (+504)</option>
                                                    <option data-code="+852" value="93">Hong Kong (+852)</option>
                                                    <option data-code="+36" value="94">Hungary (+36)</option>
                                                    <option data-code="+354" value="95">Iceland (+354)</option>
                                                    <option data-code="+91" value="96">India (+91)</option>
                                                    <option data-code="+62" value="97">Indonesia (+62)</option>
                                                    <option data-code="+98" value="98">Iran (+98)</option>
                                                    <option data-code="+964" value="99">Iraq (+964)</option>
                                                    <option data-code="+353" value="100">Ireland (+353)</option>
                                                    <option data-code="+972" value="101">Israel (+972)</option>
                                                    <option data-code="+39" value="102">Italy (+39)</option>
                                                    <option data-code="+1876" value="103">Jamaica (+1876)</option>
                                                    <option data-code="+81" value="104">Japan (+81)</option>
                                                    <option data-code="+962" value="105">Jordan (+962)</option>
                                                    <option data-code="+7" value="106">Kazakhstan (+7)</option>
                                                    <option data-code="+254" value="107">Kenya (+254)</option>
                                                    <option data-code="+686" value="108">Kiribati (+686)</option>
                                                    <option data-code="+850" value="109">Korea (North) (+850)</option>
                                                    <option data-code="+82" value="110">Korea (South) (+82)</option>
                                                    <option data-code="+965" value="111">Kuwait (+965)</option>
                                                    <option data-code="+996" value="112">Kyrgyz Republic (+996)</option>
                                                    <option data-code="+856" value="113">Laos (+856)</option>
                                                    <option data-code="+371" value="114">Latvia (+371)</option>
                                                    <option data-code="+961" value="115">Lebanon (+961)</option>
                                                    <option data-code="+266" value="116">Lesotho (+266)</option>
                                                    <option data-code="+231" value="117">Liberia (+231)</option>
                                                    <option data-code="+218" value="118">Libya (+218)</option>
                                                    <option data-code="+423" value="119">Liechtenstein (+423)</option>
                                                    <option data-code="+370" value="120">Lithuania (+370)</option>
                                                    <option data-code="+352" value="121">Luxembourg (+352)</option>
                                                    <option data-code="+853" value="122">Macao (+853)</option>
                                                    <option data-code="+261" value="123">Madagascar (+261)</option>
                                                    <option data-code="+265" value="124">Malawi (+265)</option>
                                                    <option data-code="+60" value="125">Malaysia (+60)</option>
                                                    <option data-code="+960" value="126">Maldives (+960)</option>
                                                    <option data-code="+223" value="127">Mali Republic (+223)</option>
                                                    <option data-code="+356" value="128">Malta (+356)</option>
                                                    <option data-code="+692" value="129">Marshall Islands (+692)</option>
                                                    <option data-code="+596" value="130">Martinique (+596)</option>
                                                    <option data-code="+222" value="131">Mauritania (+222)</option>
                                                    <option data-code="+230" value="132">Mauritius (+230)</option>
                                                    <option data-code="+269" value="133">Mayotte Island (+269)</option>
                                                    <option data-code="+52" value="134">Mexico (+52)</option>
                                                    <option data-code="+1808" value="135">Midway Island (+1808)</option>
                                                    <option data-code="+373" value="136">Moldova (+373)</option>
                                                    <option data-code="+377" value="137">Monaco (+377)</option>
                                                    <option data-code="+976" value="138">Mongolia (+976)</option>
                                                    <option data-code="+382" value="139">Montenegro (+382)</option>
                                                    <option data-code="+1664" value="140">Montserrat (+1664)</option>
                                                    <option data-code="+212" value="141">Morocco (+212)</option>
                                                    <option data-code="+258" value="142">Mozambique (+258)</option>
                                                    <option data-code="+95" value="143">Myanmar (+95)</option>
                                                    <option data-code="+264" value="144">Namibia (+264)</option>
                                                    <option data-code="+674" value="145">Nauru (+674)</option>
                                                    <option data-code="+977" value="146">Nepal (+977)</option>
                                                    <option data-code="+31" value="147">Netherlands (+31)</option>
                                                    <option data-code="+599" value="148">Netherlands Antilles (+599)</option>
                                                    <option data-code="+1869" value="149">Nevis (+1869)</option>
                                                    <option data-code="+687" value="150">New Caledonia (+687)</option>
                                                    <option data-code="+64" value="151">New Zealand (+64)</option>
                                                    <option data-code="+505" value="152">Nicaragua (+505)</option>
                                                    <option data-code="+227" value="153">Niger (+227)</option>
                                                    <option data-code="+234" value="154">Nigeria (+234)</option>
                                                    <option data-code="+683" value="155">Niue (+683)</option>
                                                    <option data-code="+672" value="156">Norfolk Island (+672)</option>
                                                    <option data-code="+47" value="157">Norway (+47)</option>
                                                    <option data-code="+968" value="158">Oman (+968)</option>
                                                    <option data-code="+92" value="159">Pakistan (+92)</option>
                                                    <option data-code="+680" value="160">Palau (+680)</option>
                                                    <option data-code="+970" value="161">Palestinian Settlements (+970)</option>
                                                    <option data-code="+507" value="162">Panama (+507)</option>
                                                    <option data-code="+675" value="163">Papua New Guinea (+675)</option>
                                                    <option data-code="+595" value="164">Paraguay (+595)</option>
                                                    <option data-code="+51" value="165">Peru (+51)</option>
                                                    <option data-code="+63" value="166">Philippines (+63)</option>
                                                    <option data-code="+48" value="167">Poland (+48)</option>
                                                    <option data-code="+351" value="168">Portugal (+351)</option>
                                                    <option data-code="+974" value="169">Qatar (+974)</option>
                                                    <option data-code="+262" value="170">Réunion Island (+262)</option>
                                                    <option data-code="+40" value="171">Romania (+40)</option>
                                                    <option data-code="+7" value="172">Russia (+7)</option>
                                                    <option data-code="+250" value="173">Rwandese Republic (+250)</option>
                                                    <option data-code="+685" value="179">Samoa (+685)</option>
                                                    <option data-code="+378" value="180">San Marino (+378)</option>
                                                    <option data-code="+239" value="181">São Tomé and Principe (+239)</option>
                                                    <option data-code="+966" value="182">Saudi Arabia (+966)</option>
                                                    <option data-code="+221" value="183">Senegal (+221)</option>
                                                    <option data-code="+381" value="184">Serbia (+381)</option>
                                                    <option data-code="+248" value="185">Seychelles Republic (+248)</option>
                                                    <option data-code="+232" value="186">Sierra Leone (+232)</option>
                                                    <option data-code="+65" value="187">Singapore (+65)</option>
                                                    <option data-code="+421" value="188">Slovak Republic (+421)</option>
                                                    <option data-code="+386" value="189">Slovenia (+386)</option>
                                                    <option data-code="+677" value="190">Solomon Islands (+677)</option>
                                                    <option data-code="+252" value="191">Somali Democratic Republic (+252)</option>
                                                    <option data-code="+27" value="192">South Africa (+27)</option>
                                                    <option data-code="+34" value="193">Spain (+34)</option>
                                                    <option data-code="+94" value="194">Sri Lanka (+94)</option>
                                                    <option data-code="+290" value="174">St. Helena (+290)</option>
                                                    <option data-code="+1869" value="175">St. Kitts/Nevis (+1869)</option>
                                                    <option data-code="+1758" value="176">St. Lucia (+1758)</option>
                                                    <option data-code="+508" value="177">St. Pierre &amp; Miquelon (+508)</option>
                                                    <option data-code="+1784" value="178">St. Vincent &amp; Grenadines (+1784)</option>
                                                    <option data-code="+249" value="195">Sudan (+249)</option>
                                                    <option data-code="+597" value="196">Suriname (+597)</option>
                                                    <option data-code="+268" value="197">Swaziland (+268)</option>
                                                    <option data-code="+46" value="198">Sweden (+46)</option>
                                                    <option data-code="+41" value="199">Switzerland (+41)</option>
                                                    <option data-code="+963" value="200">Syria (+963)</option>
                                                    <option data-code="+886" value="201">Taiwan (+886)</option>
                                                    <option data-code="+992" value="202">Tajikistan (+992)</option>
                                                    <option data-code="+255" value="203">Tanzania (+255)</option>
                                                    <option data-code="+66" value="204">Thailand (+66)</option>
                                                    <option data-code="+670" value="205">Timor Leste (+670)</option>
                                                    <option data-code="+228" value="206">Togolese Republic (+228)</option>
                                                    <option data-code="+690" value="207">Tokelau (+690)</option>
                                                    <option data-code="+676" value="208">Tonga Islands (+676)</option>
                                                    <option data-code="+1868" value="209">Trinidad &amp; Tobago (+1868)</option>
                                                    <option data-code="+216" value="210">Tunisia (+216)</option>
                                                    <option data-code="+90" value="211">Turkey (+90)</option>
                                                    <option data-code="+993" value="212">Turkmenistan (+993)</option>
                                                    <option data-code="+1649" value="213">Turks and Caicos Islands (+1649)</option>
                                                    <option data-code="+688" value="214">Tuvalu (+688)</option>
                                                    <option data-code="+256" value="215">Uganda (+256)</option>
                                                    <option data-code="+380" value="216">Ukraine (+380)</option>
                                                    <option data-code="+971" value="217">United Arab Emirates (+971)</option>
                                                    <option data-code="+44" value="218">United Kingdom (+44)</option>
                                                    <option data-code="+1" value="219">United States of America (+1)</option>
                                                    <option data-code="+598" value="221">Uruguay (+598)</option>
                                                    <option data-code="+1340" value="220">US Virgin Islands (+1340)</option>
                                                    <option data-code="+998" value="222">Uzbekistan (+998)</option>
                                                    <option data-code="+678" value="223">Vanuatu (+678)</option>
                                                    <option data-code="+58" value="224">Venezuela (+58)</option>
                                                    <option data-code="+84" value="225">Vietnam (+84)</option>
                                                    <option data-code="+808" value="226">Wake Island (+808)</option>
                                                    <option data-code="+967" value="227">Yemen (+967)</option>
                                                    <option data-code="+260" value="228">Zambia (+260)</option>
                                                    <option data-code="+255" value="229">Zanzibar (+255)</option>
                                                    <option data-code="+263" value="230">Zimbabwe (+263)</option>

                                                </select>
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
                    </section >

                </div >

            </body >


        </>
    )
}
export default Register