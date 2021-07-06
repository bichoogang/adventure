import React from 'react'

function Tour() {
    return (
        <div className="tour">
            <div className="text-center">
                <h2>Our Tours</h2>
            </div>    
            <div className="container plant">
            <div className="row plana">
                <div className="col-md-4 col-12 mb-5">
                    <div className="planitemt">
                        <div>
                            <img src="https://images.unsplash.com/photo-1533231595355-864c380aa5f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="img-fluid tk1" />
                        </div>
                        <div className="plandetailt p-5">
                            <h2>HALF DAY HIKE</h2>
                            <p>Offered Daily</p>
                            <p>Duration Varies</p>
                            <p>$80</p>
                            <button>Book Now</button>
                        </div>
                        
                    </div>

                </div>
                <div className="col-md-4 col-12 mb-5">
                    <div className="planitemt">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/10/16/20/41/hiking-1746200_960_720.jpg" className="img-fluid tk2" />
                        </div>
                        <div className="plandetailt p-5">
                            <h2>FULL DAY HIKE</h2>
                            <p>Offered Daily</p>
                            <p>Duration Varies</p>
                            <p>$100</p>
                            <button>Book Now</button>
                        </div>
                        
                    </div>

                </div>
                <div className="col-md-4 col-12 mb-5">
                    <div className="planitemt">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2020/07/27/07/53/man-5441613_960_720.jpg" className="img-fluid" />
                        </div>
                        <div className="plandetailt p-5">
                            <h2>TWO DAYS HIKE</h2>
                            <p>Offered Daily</p>
                            <p>Duration Varies</p>
                            <p>$130</p>
                            <button>Book Now</button>
                        </div>
                        
                    </div>

                </div>
                
               
            </div>

        </div>
        </div>
    )
}

export default Tour
