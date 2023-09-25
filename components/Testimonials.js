import React from 'react'
import $ from 'jquery';

const Testimonials = () => {

  
    return (
        <div>
            <section className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block">
                            <ol className="carousel-indicators tabs">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                                    <figure>
                                        <img src="https://images.unsplash.com/photo-1584598665938-079ecb78d906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGh1bWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=179&h=179" style={{borderRadius: "50%"}}  className="img-fluid" alt="" />
                                    </figure>
                                </li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                    <figure>
                                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGh1bWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=306&h=360" style={{borderRadius: "50%"}} className="img-fluid" alt="" />
                                    </figure>
                                </li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                    <figure>
                                        <img src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=179&h=179" style={{borderRadius: "50%"}} className="img-fluid" alt="" />
                                    </figure>
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div id="carouselExampleIndicators" data-interval="false" className="carousel slide" data-ride="carousel">
                                <h3>WHAT OUR CLIENTS SAY</h3>
                                <h1>TESTIMONIALS</h1>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="quote-wrapper">
                                            <p>I have tried a lot of Movies  Recommendation services but SMDB is something out of this world! Their website is really good, which is why I recommend this company to all my friends!</p>
                                            <h3>peter lee</h3>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="quote-wrapper">
                                            <p>I have tried a lot of Movies  Recommendation services but SMDB is something out of this world! Their website is really good, which is why I recommend this company to all my friends!</p>
                                            <h3>peter lee</h3>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="quote-wrapper">
                                            <p>I have tried a lot of Movies  Recommendation services but SMDB is something out of this world! Their website is really good, which is why I recommend this company to all my friends!</p>
                                            <h3>peter lee</h3>
                                        </div>
                                    </div>
                                </div>
                                <ol className="carousel-indicators indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials