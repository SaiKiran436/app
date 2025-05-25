import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid p-5 bg-light">
      {/* Property Main Section */}
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-muted small d-flex justify-content-start">₹70.8 Lac EMI ~32K Need Home Loan? Check Eligibility</h4>
          <h4 className="text-muted  d-flex justify-content-start">2 BHK Flat For Sale in Myra, <b> <span className="text-dark">Kompally, Hyderabad</span></b></h4>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRcGr_mtY8F5b_M6y0ez8EF7_a8IMNvoA9A&s" alt="main-property" className="img-fluid rounded mb-4 " />
          <div className="d-flex gap-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRcGr_mtY8F5b_M6y0ez8EF7_a8IMNvoA9A&s" className="img-thumbnail" width="100" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRcGr_mtY8F5b_M6y0ez8EF7_a8IMNvoA9A&s" className="img-thumbnail" width="100" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRcGr_mtY8F5b_M6y0ez8EF7_a8IMNvoA9A&s" className="img-thumbnail" width="100" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRcGr_mtY8F5b_M6y0ez8EF7_a8IMNvoA9A&s" className="img-thumbnail" width="100" />
          </div>
        </div>
        <div className="col-md-4">
          <div className=" p-3 rounded">
            <div className="d-flex justify-content-center  mb-4 small">
              <b>
              <span>🛏️ 2 Beds</span>
              <span>🛁 2 Baths</span><br/>
              <span>🌇 1 Balcony</span>
              <span>📦 Unfurnished</span>
              </b>
            </div>
            <div className="mb-2 text-secondary"><small>Super Built-Up Area: 1280 sqft<span>5,487/sqft</span></small></div>
            <div className="mb-2 text-secondary">Developer: Viksha Projects</div>
            <div className="mb-2 text-secondary">Project: Myra</div>
            <div className="mb-2 text-secondary">Transaction Type:<strong> New Property</strong></div>
            <div className="mb-2 text-secondary">Status:<strong> Ready To Move </strong></div>
            <div className="mb-2 text-secondary">Furnished Status:<strong> Unfurnished </strong></div>
            <div className="mb-2 text-secondary">Age Of Construction:<strong> Less than 5 years</strong></div>

            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-danger w-50 rounded-pill">Contact Agent</button>
              <button className="btn btn-outline-danger w-50 rounded-pill">Get Phone No.</button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Info Section */}
      <div>
      <div className="container py-5">
      <div className="d-flex justify-content-between">
        <div>
          <h4>₹8.27 Cr. <small className="text-muted">@ Rs 63851 per Sq.ft.</small></h4>
        </div>
        <div className="text-end">
          <p className="mb-0">Society:</p>
          <strong>Westend</strong>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <p>Bedrooms<br /><strong>2</strong></p>
        </div>
        <div className="col-md-4">
          <p>Bathrooms<br /><strong>2</strong></p>
        </div>
        <div className="col-md-4">
          <p>Property On Floor<br /><strong>2</strong></p>
        </div>
        <div className="col-md-4">
          <p>Facing<br /><strong>East</strong></p>
        </div>
        <div className="col-md-4">
          <p>Transaction Type<br /><span className="fw-bold">New Property</span></p>
        </div>
        <div className="col-md-4">
          <p><strong>Total Floor</strong><br />5</p>
        </div>
        <div className="col-md-4">
          <p>Built Up Area<br /><span className="fw-bold">1295 Sq.ft</span></p>
        </div>
        <div className="col-md-4">
          <p>Property Type<br /><span className="fw-bold">Flats & Apartments</span></p>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-2">
            {['Fully Renovated', 'Vastu Compliant', 'Ample Parking', 'Gated Society', 'Prime Location', 'Width of Facing Road', 'Pooja Room'].map((feature, i) => (
              <span className="badge bg-secondary border text-white p-2 rounded-pill" key={i}>✓ {feature}</span>
            ))}
          </div>
    </div>
      </div>

      {/* More Details Section */}
      <div className="mt-2 p-4 bg-white border rounded shadow-sm  " >
        <h5 className='d-flex justify-content-start'>More Details</h5>
        <p className='d-flex justify-content-start'><strong>Price Breakup:</strong> ₹70.8 Lac</p>
        <p className='d-flex justify-content-start'><strong>Address:</strong> Kompally, Hyderabad - North, Andhra Pradesh</p>
        <p className='d-flex justify-content-start'><strong>Furnishing:</strong> Unfurnished</p>
        <p className='d-flex justify-content-start'><strong>Estimated EMI:</strong> ₹31923 <span className="text-muted">(Apply with ICICI/SBI)</span><span className="text-dark fw-bold">Apply for Home Loan</span></p>
        <p className='d-flex justify-content-start'><strong>Loan Offered :</strong> <span>Estimated EMI: 31923</span></p>
        <p className='d-flex justify-content-start'><strong>Age of Construction</strong>  Less than 5 years <span className="text-muted">(Apply with ICICI/SBI)</span></p>
        <p className='d-flex justify-content-start'><strong>Description:</strong>  Multistorey Apartment for Sale in Kompally, Hyderabad. Covered area is 1290 Sq-ft. This property belongs to "Myra".</p>
        <button className="btn btn-danger px-4 py-2 fw-bold rounded-pill d-flex justify-content-start">
          Contact Agent
        </button>
      </div>

<div className="container py-5">

{/* Amenities Section */}
<div className="bg-light p-4 rounded">
  <h5 className="mb-4">Amenities</h5>
  <div className="row">
    <div className="col-md-4 mb-2 d-flex align-items-center">
      <span className="me-2 fs-5">⚡</span>
      <span>Power Back Up</span>
    </div>
    <div className="col-md-4 mb-2 d-flex align-items-center">
      <span className="me-2 fs-5">🛗</span>
      <span>Lift</span>
    </div>
    <div className="col-md-4 mb-2 d-flex align-items-center">
      <span className="me-2 fs-5">💧</span>
      <span>Rain Water Harvesting</span>
    </div>
    <div className="col-md-4 mb-2 d-flex align-items-center">
      <span className="me-2 fs-5">🏊</span>
      <span>Swimming Pool</span>
    </div>
    <div className="col-md-4 mb-2 d-flex align-items-center">
      <span className="me-2 fs-5">🏋️</span>
      <span>Gymnasium</span>
    </div>
    <div className="col-md-4 mb-2 d-flex align-items-center">
      <span className="me-2 fs-5">🅿️</span>
      <span>Reserved Parking</span>
    </div>
  </div>

  <div className="d-flex justify-content-between mt-4 flex-wrap">
    <a href="#" className="text-danger fw-bold">View all Amenities (19) ⌄</a>
    <button className="btn btn-dark">Download Brochure</button>
  </div>
</div>

{/* Other Properties Section */}
<div className="mt-5">
  <h5 className="fw-bold mb-4">Other Properties in this Project and Nearby</h5>
  <div className="row">
    {/* Card 1 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow-sm">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoX3Ux1gFuFTR-f_KzxZ3JqmCWh9lmGlO6Bw&s" className="card-img-top" alt="Property" />
        <div className="card-body">
          <span className="badge bg-secondary mb-2">📷 10</span>
          <h6 className="card-title mb-1 d-flex justify-content-start">2 BHK Flat</h6>
          <p className="fw-bold text-dark mb-1 d-flex justify-content-start">₹61.6 Lac <span className="text-muted">1100 sqft</span></p>
          <p className="mb-0 text-muted d-flex justify-content-start">Rubrick Tripura</p>
          <small className="text-muted d-flex justify-content-start">Nov 25</small>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow-sm">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5Yzd_c8pJEHgA0TT0ocTTXXLxtHXP7M0AQ&s" className="card-img-top" alt="Property" />
        <div className="card-body">
          <span className="badge bg-secondary mb-2">📷 10</span>
          <h6 className="card-title mb-1 d-flex justify-content-start">2 BHK Flat</h6>
          <p className="fw-bold text-dark mb-1 d-flex justify-content-start">₹70 Lac <span className="text-muted">1610 sqft</span></p>
          <p className="mb-0 text-muted d-flex justify-content-start">Thimu Kings Court Block A</p>
          <small className="text-muted d-flex justify-content-start">Feb 27</small>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow-sm">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbH7AuCAaEZd43HfdZz-sl1z0j-SR6QvjTg&s" className="card-img-top" alt="Property" />
        <div className="card-body ">
          <span className="badge bg-secondary mb-2 ">📷 10</span>
          <h6 className="card-title mb-1 d-flex justify-content-start">2 BHK Flat</h6>
          <p className="fw-bold text-dark mb-1 d-flex justify-content-start">₹84.6 Lac <span className="text-muted">1410 sqft</span></p>
          <p className="mb-0 text-muted d-flex justify-content-start">Subhisi Nest Residences</p>
          <small className="text-muted d-flex justify-content-start">Nov 27</small>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

      {/* Promo Banner */}
      <div className="d-flex justify-content-between align-items-center p-4 bg-white rounded shadow-sm">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWhcXR3Kf-jxY7Ceq5oZV9rhhPHhsTqcTXw&s" className="img-fluid rounded" width="300" alt="promo" />
        <div>
          <h4>Turn Your Property into Profit with Swipe Auctions!</h4>
          <p>List your residential, commercial, or industrial property & connect with buyers instantly.</p>
          <button className="btn btn-danger">Post for FREE</button>
        </div>
      </div>
    </div>
  );
};

export default App;
