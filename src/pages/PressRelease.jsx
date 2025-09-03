import React from 'react'

function PressRelease() {
  return (
    <>
      <div className='container-fluid ccccd'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 text-white' style={{ paddingTop: "140px" }}>
            <h1 className='text-center' style={{ fontSize: "1.5cm", marginTop: "4cm", fontFamily: "fantasy" }}>PRESS RELEASE</h1>
          </div>
        </div>
      </div>
      {/* container fluid end */}
      <br /><br /><br />
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>
            <i className='fa-regular fa-newspaper' style={{ fontSize: "1cm" }}> </i>
            <span style={{ fontSize: "0.5" }}>OFFLINE</span>

          </div>

        </div>
        {/* row div end */}

      </div>
      {/* container div end */}
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <img src="https://pn-paul.netlify.app/image/1.png" alt="" className='w-100' />
          </div>
          <div className='col-md-3'>
            <img src="https://pn-paul.netlify.app/image/2.png" alt="" className='w-100' />
          </div>
          <div className='col-md-3'>
            <img src="https://pn-paul.netlify.app/image/3.png" alt="" className='w-100' />
          </div>
          <div className='col-md-3'>
            <img src="https://pn-paul.netlify.app/image/4.png" alt="" className='w-100' />
          </div>

        </div>
        {/* row 1 end */}
        <br />
        <div className='row'>
          <div className='col-md-3'>
            <img src="https://pn-paul.netlify.app/image/5.png" alt="" className='w-100' />
          </div>
          <div className='col-md-3'>
            <img src="https://pn-paul.netlify.app/image/6.png" alt="" className='w-100' />
          </div>
          <div className='col-md-3'>
            <img src="https://pn-paul.netlify.app/image/7.png" alt="" className='w-100' />
          </div>
          <div className='col-md-3'>
            <img src="https://pn-paul.netlify.app/image/8.png" alt="" className='w-100' />
          </div>
        </div>
      </div>
      {/* container div end */}
      <br />
      <div className='container'>
        <div className='card' style={{ boxShadow: "1px 1px 12px #020001" }}>
          <div className='row mt-5 mb-5'>
            <h3 className='text-center'>ONLINE MENTIONS</h3>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
              <img src="  https://pn-paul.netlify.app/image/et-prime.jpg" alt="" className='w-100' /></div>
            <div className='col-md-1'></div>
            <div className='col-md-5' style={{ overflowY: "auto", height: "10cm" }}>
              <p className='mt-4 ms-2'>FEB 18,2020</p>
              <h4 className='ms-2'>ET PRIME</h4>
              <p className='go ms-2'>"Go big, or go home: Lazeez Affaire to Lord of the Drinks, Priyank Sukhija's success recipe for dining</p>
              <p className='read ms-2'>READ FULL ARTICLE</p>
              <hr />
              <p className='mt-4 ms-2'>JUL 16,2018</p>
              <h4 className='ms-2'>AIN</h4>
              <p className='go ms-2'>"First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion"</p>
              <p className='read ms-2'> READ FULL ARTICLE</p>
              <hr />
              <p className='mt-4 ms-2'>MAY 20,2019</p>
              <h4 className='ms-2'>BUSINESS LINE</h4>
              <h4 className='ms-2'>ET PRIME</h4>
              <p className='go ms-2'>"First Fiddle opens outlet in Chennai"</p>
              <p className='read ms-2'>READ FULL ARTICLE</p>
              <hr />
              <h4 className='ms-2'>BUSINESS STANDARD</h4>
              <p className='go ms-2'>"First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion"</p>
              <p className='read ms-2'>READ FULL ARTICLE</p>

              <hr />
              <p className='mt-4 ms-2'>JUL 16,2018</p>
              <h4 className='ms-2'>CHENNAI ONLINE</h4>
              <p className='go ms-2'>"Happy Hour"</p>
              <p className='read ms-2'>READ FULL ARTICLE</p>
              <hr />

              <p className='mt-4 ms-2'>FEB 18,2018</p>
              <h4 className='ms-2'>BUSINESS TODAY
              </h4>
              <p className='go ms-2'>"Fly High While Experiencing Newly Launched Dragonfly"</p>
              <p className='read ms-2'>READ FULL ARTICLE</p>

            </div>
          </div>
        </div>
      </div>
      <br />



    </>
  )
}

export default PressRelease
