import React from 'react';
import { Link } from 'react-router-dom';
import angularImg from '../../assets/angular.jpg'; // Adjust path as needed

const Dashboard = () => {
  const cards = [1, 2, 3, 4]; // Replace with real data later

  return (
    <div className="container-fluid px-3"> {/* Reduced horizontal padding */}
      <div className="row">
        {cards.map((_, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
            <div className="card bg-dark text-white h-100">
              <img
                src={angularImg}
                className="card-img-top"
                alt="Card Thumbnail"
                style={{ height: '200px', objectFit: 'cover' }}
              />
<div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="card-text mb-1">Title</p>
                  <span className="badge bg-info">Device</span>
                </div>
                <p className="card-text mt-1">Description</p>
                <div className="btn-group mt-3">
                  <Link to={`/admin/video/update/`} className="btn btn-light">
                    Edit
                  </Link>
                  <button type="button" className="btn btn-outline-light ms-2">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
