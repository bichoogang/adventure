import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <div className="container">
            <div className="text-center my-5">
                <h2>CONTACT US</h2>
            </div>  
                <div className="row">
                    <div className="col-md-8 col-12 offset-0 offset-md-2 conb">
                        <div className="row">
                            <div className="col-md-4 col-10 p-0 d-none d-md-block">
                                <img src="https://cdn.pixabay.com/photo/2020/02/03/06/43/holiday-4814905_960_720.jpg" className="img-fluid w-100 h-100" />
                            </div>
                            <div className="col-md-8 col-12">
                                <form>
                                    <input type="text" placeholder="First Name"/>
                                    <input type="text" placeholder="Last Name"/>
                                    <input type="email" placeholder="Email"/>
                                    <input type="text" placeholder="Mobile"/>
                                    <textarea placeholder="Type Your Message"/>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
