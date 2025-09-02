import React from 'react'

function Home() {
    return (
        <>
          <img src="https://pn-paul.netlify.app/image/slider1.jpg" alt="" className="w-100" />
          <div></div>
          
          
        {/* <!-- container div start --> */}
    <div class="container">
        <h2 class="a">Welcome To <span style={{color: "orange"}}>FIRST FIDDLE</span> </h2>
        <br/><br/>
        <div class="row">
            <div class="col-md-7">
                <p class="b"> First Fiddle Restaurants, one of India's most prominent F&B companies in the casual
                    dining sector, is headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso
                    Sexy and Bougie in 2022, we have created wave after wave in the industry with over 30+ restaurants,
                    brands, and franchises across India.</p>

            </div>
            <div class="col-md-5 text-center"><img src="https://pn-paul.netlify.app/image/first.jpg" class="img"/></div>

        </div>
        {/* <!-- row div end --> */}

    </div>
    {/* <!-- conatiner div end --> */}
    <br /><br /><br />

      {/* <!-- container-fluid start --> */}
    <div class="container-fluid c">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-center text-white">
                <h1 class="d ">MEDIA MENTIONS</h1>
                <p class="e">We've been making splashes and headlines since 1999 for our innovative concepts and
                    aesthetic ideations, experimental gastronomic affairs, and exotic mixology. We’ve made our way from
                    the heart of the country into the hearts of its people!</p>
            </div>
            <center>
                <button class="btn btn-warning btn-lg mt-5" style={{marginBottom: "75px"}}>Know more.</button>
            </center>
        </div>
        {/* <!-- <div class="col-md-"></div> --> */}
    </div>
    {/* <!-- conatiner -fluid end --> */}

    <br /><br /><br />
    <div class="container">
        <div class="row">
            <div>
                <h1 class="text-center">EXPLORE OUR <span style={{color: "orange"}}>BRANDS</span></h1>
            </div>
            <div class="col-md-3 mt-4"><img src="https://pn-paul.netlify.app/image/ffpic1.jpg " alt=""/></div>
            <div class="col-md-3 mt-4"><img src="https://pn-paul.netlify.app/image/ffpic2.jpg" alt=""/></div>
            <div class="col-md-3 mt-4"><img src="https://pn-paul.netlify.app/image/ffpic3.jpg" alt=""/></div>
            <div class="col-md-3 mt-4"><img src="https://pn-paul.netlify.app/image/ffpic4.jpg" alt=""/></div>

        </div>
        {/* <!-- row div end --> */}
    </div>
    {/* <!-- container div end --> */}
    <br /> <br />
     <div class="container-fluid cc">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-center text-white">
                <h1 class="f">EXPERIENCE OUR CONCEPTS</h1>
                <p class="g">Moving beyond just offering Indian, international, and fusion cuisines, our restaurants
                    create magic
                    with our special events, mood-setting music, Insta-worthy aesthetics, and tongue-tingling
                    signatures! Head over to experience it for yourself!</p>
            </div>
            <center>
                <button class="btn btn-warning btn-lg mt-4">Know more.</button>
            </center>

        </div>

    </div>

        </>
    )
}

export default Home
