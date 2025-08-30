import React from 'react'

function Home() {
    return (
        <>
            {/* banner div start  */}
            <div>
                <img src="https://pn-paul.netlify.app/image/slidwr33.jpg" alt="" className="w-100" />
                 </div>
            {/* banner div END  */}
            <div className="container  ">
                <h2 className="text-center mb-3">WELCOME TO <b style={{ color: 'orange' }}>FIRST FRIDDLE</b></h2>
                <div className="row">
                    <div className="col-md-7">
                        <p>First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector, is
                            headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and Bougie
                            in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands, and
                            franchises across India.</p>
                        <div className="text-center">
                            <button className="btn btn-success">Read More</button>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" />
                    </div>


                </div>
                {/* row END  */}
            </div>
            {/* container END  */}
            <div className="container-fluid c "> 
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center text-white">
                        <h2 className="d">MEDIA MENTIONS</h2>
                        <p className="e">We've been making splashes and headlines since 1999 for our innovative concepts and
                            aesthetic
                            ideations, experimental gastronomic affairs, and exotic mixology. We made our way from the heart
                            of the country into the hearts of its people!</p>
                        <div className="text-center">
                            <button className="btn btn-info">read more..</button>
                        </div>
                    </div>
                    <div className="col-md-2">

                    </div>

                </div>

            </div>






        </>
    )
}

export default Home
