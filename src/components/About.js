import React from 'react'
const imgpack=["https://cdn.pixabay.com/photo/2016/11/29/09/30/backpack-1868720_960_720.jpg"
,"https://cdn.pixabay.com/photo/2015/10/12/14/50/person-983889_960_720.jpg", "https://cdn.pixabay.com/photo/2019/07/15/10/57/backpack-4339090_960_720.jpg","https://cdn.pixabay.com/photo/2017/06/15/18/57/journey-2406354_960_720.jpg",
"https://cdn.pixabay.com/photo/2015/03/26/10/39/hiking-691738_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_960_720.jpg","https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/22/19/25/adventure-1850178_960_720.jpg"]
function About() {
    return (
        <div className="about ">
            <div className="container">
                <div className="row">
                <h2 className=" my-3">About US</h2>
                    <div className="col-md-5 col-12 order-1 order-md-0">
                        
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                         <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                    </div>
                    <div className="col-md-7 col-12 order-0 order-md-1 ">
                        <img src="https://cdn.pixabay.com/photo/2017/08/06/08/33/people-2590300_960_720.jpg" className="img-fluid atk1" />
                    </div>
                </div>
                <div className ="row my-5">
                    <h3>GAllERY</h3>
                    {
                        imgpack.map((val)=>{
                            return(
                                <div className="col-md-3 col-12 gal mt-0 p-0 ">
                                    <img src={val} className="img-fluid gtrek "/>
                                    </div>
                            )
                        })
                    }
                    
                </div>
                
            </div>

        </div>
    )
}

export default About
