import React from "react";
import projects from "./projects";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Portfolio() {
  return (
    <section>
      <h2 class="m-4 text-center"> Projects </h2>
      <div className="d-flex flex-wrap flex-row justify-content-center">
        <div class="d-flex flex-wrap justify-space-around">
        {projects.map((project) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Card.Text>
                <a href={project.repo}>GitHub Repo</a>
              </Card.Text>
              <Button variant="primary">
                <a href={project.url}>Live Site</a>
              </Button>
            </Card.Body>
          </Card>
        ))}
        </div>
      </div>
    </section>
  );
}
