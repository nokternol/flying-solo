import './App.css';
import { Container } from './components/react-skeleton/container';
import { Row } from './components/react-skeleton/row';
import { Column } from "./components/react-skeleton/column";
import { Section } from './components/section';

function App() {
  return (
    <>
      <Section className="hero">
        <Container>
          <Row>
            <Column size="one-half">
              <h4 className="hero-heading">Playing with CRU means learning to play the game properly and grow together</h4>
              <a className="button button-primary" href="www.google.com">Game Wiki</a>
            </Column>
            <Column size="one-half" className="phones">
              <img alt="phone" className="phone" src="images/iphone.png" />
              <img alt="phone" className="phone" src="images/iphone.png" />
            </Column>
          </Row>
        </Container>
      </Section>

      <Section className="values" style={{ backgroundImage: "url(/images/values-bg.jpg)" }}>
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
      </Section>

      <Section className="get-help">
        <div className="container">
          <h3 className="section-heading">Need help getting started?</h3>
          <p className="section-description">Skeleton is an amazingly easy place to start with responsive development. If you want to learn more, just visit the documentation!</p>
          <a className="button button-primary" href="http://getskeleton.com">View Skeleton Docs</a>
        </div>
      </Section>

      <Section className="categories" style={{ backgroundImage: "url(/images/values-bg.jpg)" }}>
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
      </Section>
    </>
  );
}

export default App;
