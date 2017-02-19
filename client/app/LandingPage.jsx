import React from 'react';
import { Link } from 'react-router'

const styles = {

}

const LandingPage = () => (
  <div>
  <h1> LandingPage </h1>
  <Link className="btn btn-default link" to='/playerpage'>PlayerPage</Link>
  </div>
)

export default LandingPage; 