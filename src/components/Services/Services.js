import React from 'react'
import SingleService from './SingleService/SingleService'
import serviceData from '../../fakeData/service-data'

const Services = () => {
    return (
        <div className="service-area pt-100 pb-35">
		    <div className="container">
		        <div className="row align-items-center">
		            <div className="col-12 col-lg-4">
		                <div className="service-img">
		                    <img src="img/service/service.jpg" alt=""/>
		                </div>
		            </div>
		            <div className="col-12 col-lg-8">
		                <div className="row">
		                    <div className="col-12">
		                        {/* <!--Section Title Start--> */}
		                        <div className="section-title mb-60">
                                   <img src="img/icon/icon1.png" alt=""/>
                                    <h4>Services</h4>
		                            <h2>My Practice Area</h2>
		                            <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas molestias cepturi sint  eca itate non provident, similique sunt in culpa modi tempora incidunt ut labore et dolor am </p>
		                        </div>
		                        {/* <!--Section Title End--> */}
		                    </div>
		                    <div className="col-12">
		                        <div className="row">
                                    {/* <!--Single Service Start--> */}
									{serviceData.map((singleServiceData)=><SingleService key={singleServiceData.id} singleServiceData={singleServiceData}/>)}
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
    )
}

export default Services
