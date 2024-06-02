import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Modal,
  Button,
} from "react-bootstrap";
import CalculusNotes from "./CalculusNotes";
import "../styles/calculus.css";

const notesData = [
  {
    id: 1,
    title: "Section 2.1: The Tangent and Velocity Problems",
    component: <CalculusNotes />,
  },
  // Add more notes here if needed
];

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for project 1",
    demo: "Demo for project 1",
    details: "Detailed info for project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2",
    demo: "Demo for project 2",
    details: "Detailed info for project 2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for project 3",
    demo: "Demo for project 3",
    details: "Detailed info for project 3",
  },
];

function Calculus() {
  const [selectedNote, setSelectedNote] = useState(notesData[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="mt-3">
      <h2>Calculus I</h2>
      <Row className="mt-3">
        <Col md={4}>
          <h3>Notes</h3>
          <ListGroup>
            {notesData.map((note) => (
              <ListGroup.Item
                key={note.id}
                active={selectedNote.id === note.id}
                onClick={() => handleNoteClick(note)}
                action
              >
                {note.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>{selectedNote.component}</Col>
      </Row>
      <Row className="mt-5">
        <h3>Projects</h3>
        {projectsData.map((project) => (
          <Col md={4} key={project.id} className="mb-3">
            <Card onClick={() => handleProjectClick(project)}>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedProject && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Demo</h5>
            <p>{selectedProject.demo}</p>
            <h5>Details</h5>
            <p>{selectedProject.details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Calculus;
