// src/SignInForm.tsx
import React, { useEffect, useState } from "react";
import bgimg from "../../assets/Homepage/Herosection/background-img.jpg";
import { useLocation } from "react-router-dom";
const LoginAndSignup: React.FC = () => {


  const location = useLocation();
  // const isLoginPath = location.pathname.includes('./login')
  // const isSignupPath = location.pathname.includes('./signup')
  const [activeTab, setActvieTab] = useState<'tab1' | 'tab2'>('tab1');
  useEffect(() => {
    if (location.pathname === '/login') {
      setActvieTab('tab1')
    } else if (location.pathname === '/signup') {
      setActvieTab('tab2')
    }
  }, [location.pathname]);

  const handleClick = (tabName: 'tab1' | 'tab2') => {
    setActvieTab(tabName)
  }

  return (
    <>
      {/* <div className="form-container" style={{display:'grid', gridTemplateColumns:'60vw 40vw' }}>
    <div style={{backgroundImage:`url(${bgimg})`, height:'100vh', backgroundSize:'cover'}}>

    </div>
      <form className="form" style={{}}>

        <h2 className="title" style={{marginBottom:'4px'}}>Sign Up</h2>
        <p style={{}}>Create your account by filling the information</p>
       <div style={{marginTop:'0.75rem', width:"100%"}}>
       <p >Mobile Number</p>
        <input  
          type="text"
          placeholder="Mobile Number"
          className="input"
        />
       </div>
      <div style={{display:'flex', width:'100%', justifyContent:'end'}}>
      <p>Resend OTP</p>
      </div>

      
        <button type="submit" className="button" style={{marginTop:'1rem'}}>Send OTP</button>

      </form>
 
    </div> */}






















      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.75fr_1fr] p-8 gap-4 h-[100vh] lg:pt-28 bg-white'>

        <div className=''>
          <img src={bgimg} alt="" className='object-cover h-[100%] rounded-2xl' />
        </div>
        <div className="form-container rounded-lg p-10 bg-white">
          <form className="form flex flex-col gap-16">
            <div>
              <svg height="2rem" viewBox="0 0 1127 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M329.42 47.29H348.65L375.22 109.5L404.24 47.29H417.17L443.74 109.5L485.35 17.46H470.31L444.09 76.7599L436.05 57.12L460.52 0H511.57L451.43 134.6H437.45L410.18 72.4L383.26 134.6H368.93L329.42 47.29Z" fill="#161E4A" />
                <path fillRule="evenodd" clipRule="evenodd" fill="black" d="M924.811 39.332H925.891V139.112H924.811V39.332ZM636.121 81.5509C636.123 81.2346 636.127 80.8304 636.133 80.3529C636.195 74.5956 636.372 58.1716 634.451 56.3709C630.367 43.912 606.252 45.0698 588.157 45.9385C580.952 46.2845 574.702 46.5846 571.051 45.9609V134.111H582.891L582.981 100.801C591.684 101.258 598.603 101.007 604.086 100.808C623.452 100.107 624.904 100.054 623.751 134.111H636.111C636 131.858 636.075 128.913 636.158 125.646V125.645V125.645V125.644C636.465 113.584 636.884 97.1404 628.481 94.9609C635.941 92.2209 636.121 81.5509 636.121 81.5509ZM623.811 79.8209C624.244 88.5379 615.626 88.9678 611.586 89.1693C611.241 89.1865 610.93 89.202 610.661 89.2209H583.071V57.7409C584.257 57.8067 587.053 57.7758 590.614 57.7366C601.134 57.6207 618.324 57.4312 620.371 59.4409C624.483 62.1656 624.128 68.499 623.827 73.8797C623.7 76.1413 623.583 78.2346 623.811 79.8209ZM296.064 46.0296C299.147 46.1138 302.12 46.195 304.861 46.1518C329.6 46.6323 328.492 73.6031 327.598 95.3598V95.3602V95.3607V95.3612V95.3617C327.338 101.676 327.097 107.551 327.511 112.212C326.655 137.002 304.417 136.395 286.088 135.894C283.005 135.81 280.032 135.729 277.291 135.772C252.544 135.291 253.655 108.309 254.551 86.5466V86.5464V86.5463V86.5461V86.546C254.81 80.2387 255.052 74.3699 254.641 69.7118C255.497 44.9215 277.735 45.5289 296.064 46.0296ZM288.289 124.215C300.109 124.771 315.286 125.486 315.271 111.522V69.9118C315.271 62.9618 309.801 57.2718 303.121 57.2718C300.674 57.5408 297.412 57.3871 293.843 57.219C282.022 56.6623 266.846 55.9476 266.861 69.9118V111.522C266.861 118.472 272.331 124.162 279.011 124.162C281.457 123.893 284.72 124.046 288.289 124.215ZM558.94 57.791V45.9609H497.83V134.111H558.94V122.481H509.58V94.231H557.65V83.0309H509.58V57.791H558.94ZM62.12 46.8203V58.6503H12.75V83.8903H60.82V95.0803H12.75V123.34H62.12V134.97H1V46.8203H62.12ZM960.291 49.1702H952.561V60.1102H959.681V62.4102H952.561V75.7202H949.621V46.9102H960.291V49.1702ZM982.691 73.6802C982.691 74.2802 982.471 74.7701 982.021 75.1501C981.581 75.5301 981.011 75.7202 980.311 75.7202H971.041C970.351 75.7202 969.781 75.5301 969.351 75.1501C968.911 74.7701 968.691 74.2802 968.691 73.6802V48.9501C968.691 48.3501 968.911 47.8602 969.351 47.4802C969.791 47.1002 970.351 46.9102 971.041 46.9102H980.311C981.001 46.9102 981.571 47.1002 982.021 47.4802C982.461 47.8602 982.691 48.3501 982.691 48.9501V73.6802ZM979.751 73.4601V49.1702H971.641V73.4601H979.751ZM1004.59 75.1501C1005.03 74.7701 1005.24 74.2802 1005.24 73.6802V67.0101C1005.24 66.2201 1004.94 65.5002 1004.33 64.8602L995.141 55.2502V49.1702H1002.3V55.6501H1005.24V48.9501C1005.24 48.3501 1005.02 47.8602 1004.59 47.4802C1004.16 47.1002 1003.6 46.9102 1002.91 46.9102H994.571C993.881 46.9102 993.311 47.1002 992.871 47.4802C992.421 47.8602 992.201 48.3501 992.201 48.9501V54.7902C992.201 55.5902 992.521 56.3202 993.151 56.9802L1002.3 66.5901V73.4601H995.141V66.3702H992.201V73.6802C992.201 74.2802 992.421 74.7701 992.871 75.1501C993.311 75.5301 993.881 75.7202 994.571 75.7202H1002.91C1003.6 75.7202 1004.16 75.5301 1004.59 75.1501ZM1026.2 49.1702H1021.08V75.7202H1018.14V49.1702H1012.97V46.9102H1026.2V49.1702ZM1033.99 75.7202H1044.87H1044.88V73.4501H1036.94V62.2202H1044.06V59.9202H1036.94V49.1702H1044.75V46.9102H1033.99V75.7202ZM1067.91 75.7202H1064.82L1058.66 60.2902L1059.06 59.7701H1064.31V49.1602H1056.75V75.7101H1053.81V46.9102H1064.91C1065.6 46.9102 1066.17 47.1002 1066.6 47.4802C1067.04 47.8602 1067.26 48.3501 1067.26 48.9501V59.8901C1067.26 61.2801 1066.19 61.9702 1064.04 61.9702C1063.83 61.9702 1063.52 61.9602 1063.11 61.9402C1062.7 61.9202 1062.4 61.9102 1062.22 61.9102C1064.12 66.5002 1066.02 71.1102 1067.91 75.7202ZM1076.82 75.7202H1079.76V46.9102H1076.82V75.7202ZM1103.28 75.7202H1101.25L1092.4 54.5302V75.7202H1089.63V46.9102H1091.83L1100.51 67.7402V46.9102H1103.28V75.7202ZM1125.66 75.1501C1126.1 74.7701 1126.32 74.2802 1126.32 73.6802V61.2902H1119.82V63.5002H1123.36V73.4601H1115.86V49.1702H1123.36V55.6501H1126.32V48.9501C1126.32 48.3501 1126.1 47.8602 1125.66 47.4802C1125.23 47.1002 1124.66 46.9102 1123.97 46.9102H1115.27C1114.58 46.9102 1114.02 47.1002 1113.58 47.4802C1113.14 47.8602 1112.92 48.3501 1112.92 48.9501V73.6802C1112.92 74.2802 1113.14 74.7701 1113.58 75.1501C1114.01 75.5301 1114.58 75.7202 1115.27 75.7202H1123.97C1124.66 75.7202 1125.22 75.5301 1125.66 75.1501ZM969.39 127.711C969.39 129.851 968.16 130.921 965.7 130.921H952.99C950.6 130.921 949.4 129.851 949.4 127.711V99.0112C949.4 96.8512 950.62 95.7812 953.07 95.7812H965.7C968.16 95.7812 969.39 96.8612 969.39 99.0112V106.511H963.32V100.291H955.44V126.411H963.32V116.571H958.83V112.101H969.39V127.711ZM993.9 130.92H1000.2L993.54 115C995.54 115 996.849 114.88 997.469 114.66C998.62 114.22 999.199 113.26 999.199 111.78V98.9996C999.199 96.8496 997.99 95.7695 995.56 95.7695H979.52V130.92H985.56V100.28H993.18V111.42H987.24V114.59L993.9 130.92ZM1029.56 127.711C1029.56 129.851 1028.34 130.921 1025.89 130.921H1012.77C1010.38 130.921 1009.18 129.851 1009.18 127.711V99.0112C1009.18 96.8512 1010.38 95.7812 1012.77 95.7812H1025.89C1028.33 95.7812 1029.56 96.8612 1029.56 99.0112V127.711ZM1023.52 126.411V100.291H1015.23V126.411H1023.52ZM1063.62 130.97L1069.54 95.7695H1063.41L1060.28 116.61C1060.16 118.03 1060.09 119.1 1060.07 119.82C1060.02 119.096 1059.97 118.464 1059.94 117.922L1059.93 117.828L1059.93 117.811C1059.89 117.338 1059.86 116.937 1059.84 116.61L1056.35 95.7695H1051.39L1047.9 116.61C1047.76 118.03 1047.69 119.1 1047.67 119.82C1047.58 118.4 1047.51 117.33 1047.46 116.61L1044.33 95.7695H1038.21L1044.13 130.97H1050.07L1053.66 111.05C1053.8 109.63 1053.87 108.56 1053.87 107.84C1053.98 109.26 1054.05 110.33 1054.08 111.05L1057.7 130.97H1063.62ZM1095.78 100.42H1089.12V130.92H1083.1V100.42H1076.44V95.7695H1095.79V100.42H1095.78ZM1118.37 130.92H1124.47V95.7695H1118.37V110.26H1110.18V95.7695H1104.14V130.92H1110.18V115.15H1118.37V130.92ZM732.45 45.9609V57.791H683.08V83.0309H731.15V94.231H683.08V122.481H732.45V134.111H671.33V45.9609H732.45ZM74.3711 46.8203V134.97L86.1911 135.02L86.1511 63.4803L112.891 135.02H126.051L152.591 63.3903V135.02H164.361V46.8303H146.851L119.371 120.45L91.7311 46.8203H74.3711ZM235.831 49.7085C224.479 45.9549 212.818 46.3771 201.117 46.8007C194.739 47.0317 188.349 47.2631 181.991 46.8185L181.871 135.029H193.741V101.899H219.991C220.454 101.871 220.971 101.848 221.533 101.824L221.534 101.824L221.534 101.824L221.534 101.824C229.039 101.498 244.512 100.825 244.251 82.3686C243.933 79.8081 244.092 76.8052 244.258 73.6436V73.6434V73.6432V73.643V73.6428V73.6426C244.721 64.8642 245.249 54.8622 235.831 49.7085ZM232.101 67.5385C232.079 68.0778 232.094 69.1401 232.113 70.5054C232.189 76.0524 232.333 86.6001 230.391 87.3785C225.352 90.9902 214.26 90.525 205.029 90.1378C200.484 89.9472 196.39 89.7754 193.691 90.1186V58.5486L221.081 58.6985C229.761 58.4785 232.431 62.2785 232.101 67.5385ZM754.969 45.9073C772.924 45.6306 805.514 45.1286 808.162 51.7109C817.393 60.8437 816.642 76.8962 815.993 90.7628C815.723 96.5282 815.471 101.916 815.962 106.271C816.752 130.221 799.052 134.201 790.012 134.111H744.762V45.9509C746.681 46.0349 750.338 45.9786 754.969 45.9073ZM785.332 122.881C792.052 123.191 804.482 122.901 803.772 105.591C803.771 100.344 803.826 95.6578 803.876 91.4735V91.4706C804.08 74.3228 804.184 65.6027 799.875 61.2265C795.417 56.6985 786.236 56.8209 767.554 57.0701C764.174 57.1151 760.483 57.1644 756.452 57.1909L756.512 122.881H785.332ZM830.081 45.9609H842.01C842.491 49.5607 842.244 58.0681 841.954 68.0795V68.0803V68.0811C841.38 87.8552 840.635 113.497 844.99 118.781C844.99 118.781 847.18 122.341 855.51 122.431C857.621 122.089 860.658 122.257 864.032 122.444C873.083 122.945 884.56 123.58 887.081 114.861C888.18 113.868 888.015 81.0111 887.915 60.9819V60.981C887.875 52.9598 887.845 46.9961 887.911 45.9609H899.911V106.221C899.911 106.221 901.28 128.541 885.24 133.201C880.751 135.455 862.29 135.243 855.631 135.166L855.161 135.161C855.161 135.161 837.01 135.161 832.54 121.531C829.419 117.382 829.813 84.8779 830.07 63.5914V63.59C830.173 55.0719 830.255 48.3502 830.081 45.9609Z" />

              </svg>
            </div>

            <div className="flex flex-col gap-8">
              <div className="tab-nav border-[1px] p-1.5 rounded-[6rem] flex flex-row gap-2 w-[fit-content]">
                <div className={`${activeTab === 'tab1' ? 'primary-button border-[1px] border-primary' : 'primary-button-outline rounded-3xl'} tab-link hover:cursor-pointer`} onClick={() => handleClick("tab1")}>Login </div>
                <div className={`${activeTab === 'tab2' ? 'primary-button border-[1px] border-primary' : 'primary-button-outline rounded-3xl'} tab-link hover:cursor-pointer`} onClick={() => handleClick("tab2")}>Sign up</div>
              </div>
              { }


              {activeTab === "tab1" &&
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <h1 className="text-[2rem] font-medium " >
                      Login
                    </h1>
                    <p>Please enter the details to continue</p>
                  </div>
                  <div className="flex flex-col">
                    <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
                      <p>Mobile Number</p>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="input-style w-[100%]"
                      />
                    </div>

                    <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
                      <p>Password</p>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="input-style w-[100%]"
                      />
                    </div>
                  </div>

                  <div className="w-[100%] mt-8">
                    <button
                      type="submit"
                      className="primary-button w-[100%]"
                      area-label="Send OTP"
                    >
                      Submit
                    </button>
                  </div>


                </div>
              }

              {activeTab === "tab2" &&
                <div className="flex flex-col">

                  <div className="flex flex-col">
                    <h1 className="text-[2rem] font-medium " >
                      Sign Up
                    </h1>
                    <p style={{}}>Create your account by filling the information</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
                      <p>Mobile Number</p>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="input-style w-[100%]"
                      />
                    </div>
                    <div className="flex w-[100%] justify-end">
                      {/* <p className="font-semibold text-primary">Resend OTP</p> */}
                    </div>
                  </div>

                  <div className="w-[100%] mt-8">
                    <button
                      type="submit"
                      className="primary-button w-[100%]"
                      area-label="Send OTP"
                    >
                      Send OTP
                    </button>
                  </div>

                </div>
              }
            </div>


            {/* <div className="flex flex-col">

              <div className="flex flex-col">
                <h1 className="text-[2rem] font-medium " >
                  Sign Up
                </h1>
                <p style={{}}>Create your account by filling the information</p>
              </div>
              <div className="flex flex-col gap-4">
                <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
                  <p>Mobile Number</p>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="input-style w-[100%]"
                  />
                </div>
                <div className="flex w-[100%] justify-end">
                  <p className="font-semibold text-primary">Resend OTP</p>
                </div>
              </div>

              <div className="w-[100%] mt-8">
                <button
                  type="submit"
                  className="primary-button w-[100%]"
                  area-label="Send OTP"
                >
                  Send OTP
                </button>
              </div>

            </div> */}
            {/* <p>Login with Email</p> */}

          </form>
        </div>

      </div>

    </>
  );
};

export default LoginAndSignup;



// // src/SignInForm.tsx
// import React from 'react';

// interface FormValues {
//   mobile: string;
// }

// const SignupForm: React.FC = () => {

//   return (
//    <>
//     <div className="form-container" style={{display:'grid', gridTemplateColumns:'2fr 1fr', justifyContent:'start', alignItems:'start', }}>

//     <div>

//     </div>
//       <form className="form" style={{ marginRight:'10vh', marginTop:'10vh'}}>

//         <h2 className="title" style={{marginBottom:'4px'}}>Sign Up</h2>
//         <p style={{}}>Create your account by filling the information</p>
//        <div style={{marginTop:'0.75rem', width:"100%"}}>
//        <p >Mobile Number</p>
//         <input
//           type="text"
//           placeholder="Mobile Number"
//           className="input"
//         />
//        </div>
//       <div style={{display:'flex', width:'100%', justifyContent:'end'}}>
//       <p>Resend OTP</p>
//       </div>

//         {/* <p>Login with Email</p> */}
//         <button type="submit" className="button" style={{marginTop:'1rem'}}>Send OTP</button>

//       </form>

//     </div>

//    </>
//   );
// };

// export default SignupForm;





<div className="m-4 h-[96vh] overflow-hidden rounded-2xl">
  <div className="relative">
    <img src={bgimg} alt="" className="object-cover blur-[2px]" />
  </div>

  <div className="absolute top-[25%] left-[40%]">
    <div className="form-container rounded-lg p-10 bg-white" >
      <form className="form flex flex-col gap-2">

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-[2rem] font-medium " >
              Sign Up
            </h1>
            <p style={{}}>Create your account by filling the information</p>
          </div>
          <div className="flex flex-col gap-2">
            <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
              <p>Mobile Number</p>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="input-style w-[100%]"
              />
            </div>
            {/* <div className="flex w-[100%] justify-end">
              <p className="font-semibold text-primary">Resend OTP</p>
            </div> */}
          </div>

        </div>
        {/* <p>Login with Email</p> */}
        <div className="w-[100%]">
          <button
            type="submit"
            className="primary-button w-[100%]"
            area-label="Send OTP"
          >
            Send OTP
          </button>
        </div>
      </form>
    </div>
  </div>
</div>