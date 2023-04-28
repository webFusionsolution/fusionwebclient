import "./testimonial.css";
import React from "react";
const Testimonial = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return (
        <div className="testimonial-content">
            <h2>What Our Client Say</h2>
            <div className="content">
                <div className="left"><img src="/assets/test-1.png" /></div>
                <div className="right">
                    <div>
                        Thank You Fusion Web for offering us the excellent need of our business, we thank you for all your efforts and work.
                        Working on a latest technology really made our work easier and efficent.
                        Excellent Job!
                        <p>
                            <strong>
                                Suman Gurung,<br />
                                xtyles.in
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="right">
                    <div>
                        Upgrading to the digital platform has improved our business a lot, we got the exact platform that we are looking for Our business,
                        Thanks Team for our webiste and mobile app.
                        <p>
                            <strong>
                                A Sharkar,<br />
                                Hamro Bazaar
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="left"><img src="/assets/test-2.png" /></div>
            </div>
            <div className="content">
            <div className="left"><img src="/assets/test-3.png" /></div>
                <div className="right">
                    <div>
                        Fusion Web Solution provided us with a platform that allowed me to share our my musical journey without any boundaries. Their extraordinay support and experience has finally came with great results as www.restomusicschool.com. Great Team and Great work! Will hope for next project soon!
                        <p>
                            <strong>
                                Sunny Rai,<br />
                                Resto Music School
                            </strong>
                        </p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Testimonial;
