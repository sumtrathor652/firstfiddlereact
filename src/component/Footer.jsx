import React from 'react'

function Footer() {
  return (
    <>
     
    <footer>
        <div className="container-fluid">
            <div className="row" style={{backgroundColor:"#111215"}}>
                <div className="col-md-1"></div>
                <div className="col-md-3"><img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" width={"80%"}
                        style={{marginTop:"75px"}}/></div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <h1 className="text-white mt-4">
                        <span style={{color: "orange"}}>CONTACT</span> US
                    </h1>
                    <p style={{color:"white", lineHeight: "30px", wordSpacing: "1px", letterSpacing: "2px"}}>We're a team
                        focusing on redefining the way the hospitality industry works by bringing in concept based
                        restaurants across India. We are truly committed to catering to the ever-changing cosmopolitan
                        taste
                        of the customer and revolutioning the F & B industry!</p>
                    <div className="row">
                        <div className="col-md-6 text-white">
                            <h3 style={{color: "orange"}}>Address</h3>
                            <p>S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi 110017
                            </p>
                        </div>
                        <div className="col-md-6 text-white">
                            <h3 style={{color: "orange"}}>Enquiry</h3>
                            <p>Email: <span style={{color: "orange"}}>customercare@firstfiddle.in</span></p>
                        </div>
                        <div className="row">

                            <div className="col-md-6  mb-5">
                                <a href="#"><i className="fa-brands fa-facebook"
                                        style={{color: "orange", fontSize: "40px", marginLeft: "3px"}}></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"
                                        style={{color: "orange", fontSize: "40px", marginLeft: "3px"}}></i></a>
                                <a href="#"><i className="fa-brands fa-whatsapp"
                                        style={{color: "orange", fontSize: "40px", marginLeft: "3px"}}></i></a>
                            </div>

                        </div><br/><br/>

                    </div>

                </div>

            </div>
            {/* <!-- background div end --> */}

        </div>
        {/* <!-- comtainer -fluid end --> */}
        <div className="container-fluid " style={{backgroundColor: "black"}}>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6  text-white">
                    <p className="mt-4">EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG | APP <span
                            style={{color: "orange", paddingLeft: "60px"}}>COPYRIGHT ©</span> 2021 FIRST FIDDLE F&B PRIVATE
                        LIMITED</p>
                </div>
            </div>
            {/* <!-- end --> */}
        </div>
    </footer>



    </>
  )
}











export default Footer