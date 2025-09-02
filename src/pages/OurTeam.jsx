import React from 'react'

function OurTeam() {
  return (
    <>
      <div className='container-fluid  ccccc'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 text-white' style={{ paddingTop: "140px" }}>
            <h1 className='text-center' style={{ fontSize: "1.5cm", marginTop: "4cm", fontFamily: "fantasy", letterSpacing: "2px", wordSpacing: "1px" }}>MEET THE TEAM</h1>
          </div>
        </div>
      </div>
      <br />
      {/* continer div start */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg" alt="" />
          </div>
          <div className='col-md-6'>
            <h2>
              Priyank Sukhija
            </h2>
            <h6>  C.E.O. & M.D</h6>
            <p className='b'> A 19-year-old dropout kid, who was just setting up his first venture, envisioned what nobody thought would make him a business tycoon in the hospitality industry. Once he began, there was no stopping this entrepreneur from reaching the heights he has reached today. It is the passion and creative streak of Priyank Sukhija that has made him the most watched-out restaurateur of today’s time. Coming from a family of lawyers, he ventured into the business world on his own with Lazeez Affaire in 1999 and has never looked back since.</p>
            <button className='btn btn-warning btn-lg '>Read more</button>
            <br /><br />
            <div className='row'>
              <div className='col-md-6 mb-5'>
                <a href="#"><i className="fa-brands fa-facebook"
                  style={{ color: "orange", fontSize: "40px", marginLeft: "3px" }}></i></a>
                <a href="#"><i className="fa-brands fa-instagram"
                  style={{ color: "orange", fontSize: "40px", marginLeft: "3px" }}></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp"
                  style={{ color: "orange", fontSize: "40px", marginLeft: "3px" }}></i></a>

              </div>
            </div>

          </div>

        </div>
        {/* row div end */}


      </div>
      {/* container div end */}
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card shadow ms-2 mb-4 '>
              <img src="https://pn-paul.netlify.app/image/YPAshok.jpg" alt="" width="100%" />
              <h4 className='text-center '>Y. P. ASHOK
                chairman</h4>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow ms-2 mb-4 '>
              <img src="https://pn-paul.netlify.app/image/B.R.-Sachdeva.jpg" alt="" width="100%" />
              <h4 className='text-center '>B.R. SACHDEVA
                Director </h4>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow ms-2 mb-4 '>
              <img src="https://pn-paul.netlify.app/image/Sagar-Bajaj.jpg" alt="" width="100%" />
              <h4 className='text-center '>SAGAR BAJAJ
                Corporate Chef</h4>

            </div>
          </div>

        </div>
        {/* row div end */}
        <div className='row'>
          <div className='col-md-4'>
            <div className='card shadow ms-2 mb-4 '>
              <img src="https://pn-paul.netlify.app/image/JAY-PHOTO-1-1.jpg" alt="" width="100%" />
              <h4 className='text-center '>JAY SHANKAR NATRAJ
                Franchise Lead</h4>

            </div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow ms-2 mb-4 '>
              <img src="https://pn-paul.netlify.app/image/vibhutiPR.jpg" alt="" width="100%" />
              <h4 className='text-center '>VIBHUTI SOOD
                PR And Communications Head</h4>

            </div>
          </div>


        </div>
        {/* row div end */}
      </div>
      {/* container div end */}


    </>
  )
}

export default OurTeam
