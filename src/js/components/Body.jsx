import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Body() {
  return (
    <>
          <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">XXXXXXXX</h1>
          <p className="lead">XXXXXXXXXXXX</p>
          <a href="#features" className="btn btn-light mt-3">sXXXXXXXXX</a>
        </div>
      </header>

      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">XXXXXXXXXXXXXX</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-speedometer2 display-4 text-primary"></i>
              <h4>XXXXXXXXXX</h4>
              <p>XXXXXXXX.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-shield-lock display-4 text-primary"></i>
              <h4>XXXXXXXX</h4>
              <p>PXXXXXXXXXXXXX</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-phone display-4 text-primary"></i>
              <h4>XXXXXXXX</h4>
              <p>XXXXXXXXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
