import React from 'react'

function Plan() {
    return (
        <div className="container plan">
            <div className="row plana">
                <div className="col-md-4 col-12">
                    <div className="planitem">
                        <div>
                            <img src="https://images.unsplash.com/photo-1533231595355-864c380aa5f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="img-fluid" />
                        </div>
                        <div className="plandetail">
                            <h2>HALF DAY HIKE</h2>
                            <p>Offered Daily</p>
                            <p>Duration Varies</p>
                            <p>$80</p>
                            <button>Book Now</button>
                        </div>
                        
                    </div>

                </div>
                <div className="col-md-4 col-12">
                <div className="planitem">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_960_720.jpg" className="img-fluid" />
                        </div>
                        <div className="plandetail">
                            <h2>FULL DAY HIKE</h2>
                            <p>Offered Daily</p>
                            <p>Duration Varies</p>
                            <p>$100</p>
                            <button>Book Now</button>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-md-4 col-12">
                <div className="planitem">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/03/26/10/39/hiking-691738_960_720.jpg" className="img-fluid" />
                        </div>
                        <div className="plandetail">
                            <h2>HALF DAY HIKE</h2>
                            <p>Offered Daily</p>
                            <p>Duration Varies</p>
                            <p>$130</p>
                            <button>Book Now</button>
                        </div>
                        
                    </div>
                    
                </div>
                
               
            </div>

        </div>
    )
}

export default Plan
