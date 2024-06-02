import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  console.log("Home component is rendering"); // Debug line
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Welcome to Shreya's Learning Portfolio!</Card.Title>
              <Card.Text>
                Explore my notes and learning journey across various subjects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={4}>
          <Link to="/calculus" className="card-link">
            <Card className="bg-primary text-white">
              <Card.Body>
                <Card.Title>Calculus I</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/physics" className="card-link">
            <Card className="bg-success text-white">
              <Card.Body>
                <Card.Title>Physics: Mechanics</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/electronics" className="card-link">
            <Card className="bg-danger text-white">
              <Card.Body>
                <Card.Title>Introduction to Electronics</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={4}>
          <Link to="/leetcode" className="card-link">
            <Card className="bg-warning text-white">
              <Card.Body>
                <Card.Title>Python Leetcode Prep</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Current Things I'm Learning</Card.Title>
              <Card.Text>
                <ul>
                  <li>Python</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Current Sections I'm Updating</Card.Title>
              <Card.Text>
                <ul>
                  <li>Calculus I</li>
                  <li>Physics: Mechanics</li>
                  <li>Introduction to Electronics</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
