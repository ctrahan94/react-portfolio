import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "../assets/images/colby.jpg";

function Home() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="lg-4 sm-12">
            <img src={logo} alt="Colby" />
          </Col>
          <Col size="lg-4 sm-12">
            <p>
              My name is Colby Trahan. I graduated from Texas A&M Unversity with
              my B.S. in Economics. I am a full-stack developer who recently
              completed a full-stack developer certificate program through the
              University of Denver. I have held multiple positions across
              different industries that I think will benefit me on my journey to
              becoming a web developer. If you would like to learn more about my
              past experience, feel free to check out my LinkedIn profile. To
              see current projects I am working on, visit my Github. I would
              love to discuss how my past experience and the skills that I am
              learning can benefit you. You can email me directly or click on
              the contact tab and leave me a message.
            </p>
            <br />
            <p>
              <span>Technical Skills:</span>JavaScript, jQuery, React.js, React,
              JSX, React Hooks, GIT, GitHub, MongoDB, Mongoose, MySQL,
              Sequelize, Bootstrap, HTML5, CSS3, Heroku, Terminal, Handlebars,
              APIs, AJAX, Restful API, ES6, JSON, Node.Js., Express
            </p>
          </Col>
          <Col size="lg-4">
            <ul>
              <li>
                <strong>Phone: </strong>
                <a className="links" href="tel:4097196833">
                  (409) 719-6833
                </a>
              </li>
              <li>
                <strong> Email: </strong>{" "}
                <a className="links" href="mailto:colby.trahan1229@gmail.com">
                  colby.trahan1229@gmail.com
                </a>
              </li>
              <li>
                <strong> Github: </strong>{" "}
                <a
                  className="links"
                  href="https://github.com/ctrahan94"
                  rel="noreferrer"
                  target="_blank"
                >
                  github.com/ctrahan94
                </a>
              </li>
              <li>
                <strong> LinkedIn: </strong>{" "}
                <a
                  className="links"
                  href="https://www.linkedin.com/in/colby-trahan/"
                  rel="noreferrer"
                  target="_blank"
                >
                  linkedin.com/in/colby-trahan/
                </a>
              </li>
              <li>
                <strong>View my </strong>
                <a
                  className="links"
                  href="https://drive.google.com/file/d/1jcSR_jHXK_h6u3F2N9OATNz-g-JBi8PS/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume:
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
