import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Vaishya </span>
            from <span className="purple"> Gwalior, India.</span>
            <br />
            I’m an aspiring software developer with a strong foundation in programming and a keen interest in building real-world applications.
            <br />
            I have completed BTech from ITM UNIVERSITY.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
