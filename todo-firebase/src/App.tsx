import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="section hero">
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h4 className="hero-heading">Playing with CRU means learning to play the game properly and grow together</h4>
              <a className="button button-primary">Game Wiki</a>
            </div>
            <div className="one-half column phones">
              <img alt="phone" className="phone" src="images/iphone.png" />
              <img alt="phone" className="phone" src="images/iphone.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="section values" style={{ backgroundImage: "url(/images/values-bg.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="one-third column value">
              <h2 className="value-multiplier">67%</h2>
              <h5 className="value-heading">Purchase Increase</h5>
              <p className="value-description">Percentage of users more likely to purchase on mobile friendly site.</p>
            </div>
            <div className="one-third column value">
              <h2 className="value-multiplier">90%</h2>
              <h5 className="value-heading">Multi-device Users</h5>
              <p className="value-description">Most of the world accesses the internet on multiple devices.</p>
            </div>
            <div className="one-third column value">
              <h2 className="value-multiplier">66%</h2>
              <h5 className="value-heading">Sad Users</h5>
              <p className="value-description">Percentage of users that are frustrated with page load times.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section get-help">
        <div className="container">
          <h3 className="section-heading">Need help getting started?</h3>
          <p className="section-description">Skeleton is an amazingly easy place to start with responsive development. If you want to learn more, just visit the documentation!</p>
          <a className="button button-primary" href="http://getskeleton.com">View Skeleton Docs</a>
        </div>
      </div>

      <div className="section categories" style={{ backgroundImage: "url(/images/values-bg.jpg)" }}>
        <div className="container">
          <h3 className="section-heading">Responsive Images</h3>
          <p className="section-description">Skeleton images sit easily in grid with .u-max-full-width className. I suggest exploring solution to serving different images based on device size.</p>
          <div className="row">
            <div className="one-half column category">
              <img alt="placeholder" className="u-max-full-width" src="images/placeholder.png" />
            </div>
            <div className="one-half column category">
              <img alt="placeholder" className="u-max-full-width" src="images/placeholder.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
