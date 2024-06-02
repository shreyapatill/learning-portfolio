import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import "../styles/calculusnotes.css";
import { Card, Container } from "react-bootstrap";

function CalculusNotes() {
  return (
    <Container fluid="md" className="mt-4">
      <h3 className="text-center mb-4">
        Section 2.1: The Tangent and Velocity Problems
      </h3>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(184, 184, 243, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>
            Introduction to Limits
          </Card.Title>
          <Card.Text style={{ color: "#555" }}>
            - Limits underlie various branches of calculus.
            <br />- Essential for defining tangents and velocities, central to
            differential calculus.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(215, 184, 243, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>
            Introduction to Tangents and Rates of Change
          </Card.Title>
          <Card.Text style={{ color: "#555" }}>
            In the 1600s, Newton and Leibniz independently created new
            mathematical language to talk about tangent lines and rates of
            change.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(243, 151, 214, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>Focus Questions</Card.Title>
          <Card.Text style={{ color: "#555" }}>
            1. Given a graph of a function, how do we find its tangent lines?
            <br />
            2. How do we describe the instantaneous velocity of an object in
            motion?
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(160, 62, 153, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>The Tangent Problem</Card.Title>
          <Card.Text style={{ color: "#555" }}>
            - <b>Definition:</b> A tangent to a curve touches the curve at a
            single point and has the same direction as the curve at that point.
            <br />- <b>Example 1:</b> Finding the tangent line to the parabola{" "}
            <InlineMath math="y = x^2" /> at point <InlineMath math="(1,1)" />.
            <ul>
              <li>
                The slope of the tangent line can be approximated by the slopes
                of the secant lines approaching the point.
              </li>
              <li>
                Calculation:
                <ul>
                  <li>
                    Select a point <InlineMath math="Q(x, x^2)" /> near{" "}
                    <InlineMath math="P(1,1)" />.
                  </li>
                  <li>
                    Compute the slope of secant lines{" "}
                    <InlineMath math="m_{PQ}" /> as <InlineMath math="Q" />{" "}
                    approaches <InlineMath math="P" />
                  </li>
                  <li>
                    As <InlineMath math="x" /> gets closer to 1, the slope{" "}
                    <InlineMath math="m_{PQ}" /> approaches 2.
                  </li>
                </ul>
              </li>
              <li>
                <b>Conclusion:</b> The slope of the tangent line at{" "}
                <InlineMath math="P(1, 1)" /> is the limit of the slopes of the
                secant lines, which is 2.
              </li>
              <li>
                <b>Equation:</b> Using the point-slope form, the equation of the
                tangent line at <InlineMath math="P(1, 1)" /> is{" "}
                <InlineMath math="y = 2x-1" />.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(184, 184, 243, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>
            The Slope of the Secant Line
          </Card.Title>
          <Card.Text style={{ color: "#555" }}>
            - The slope of the secant line through{" "}
            <InlineMath math="(a, f(a))" /> and{" "}
            <InlineMath math="(a+h, f(a+h))" /> is given by:
            <br />
            <BlockMath math="\frac{f(a+h)-f(a)}{h}" />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(215, 184, 243, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>
            Newton and Leibniz's Contribution
          </Card.Title>
          <Card.Text style={{ color: "#555" }}>
            Newton and Leibniz developed language to express what happens to the
            slope of the secant line as <InlineMath math="h" /> gets
            "infinitesimally" close to 0:
            <br />
            <BlockMath math="\lim_{{h \to 0}} \frac{{f(a + h) - f(a)}}{h}" />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(243, 151, 214, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>
            The Velocity Problem
          </Card.Title>
          <Card.Text style={{ color: "#555" }}>
            - <b>Definition:</b> Instantaneous velocity is the velocity of an
            object at a specific moment.
            <br />- <b>Example 3:</b> Finding the velocity of a ball dropped
            from the CN Tower after 5 seconds.
            <ul>
              <li>
                Using Galilleo's law <InlineMath math="s(t)=4.9t^2" />
              </li>
              <li>
                Calculate average velocities over shorter time intervals around{" "}
                <InlineMath math="t = 5" />:
                <ul>
                  <li>
                    <InlineMath math="\text{Average velocity} = \frac{s(5.1) - s(5)}{5.1 - 5} = 49.49 \, \text{m/s}" />
                    .
                  </li>
                  <li>
                    As the interval shortens, the average velocity approaches 49
                    m/s.
                  </li>
                </ul>
              </li>
              <li>
                <b>Conclusion:</b> The instantaneous velocity at{" "}
                <InlineMath math="t = 5" /> seconds is the limit of these
                average velocities, which is 49 m/s.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(160, 62, 153, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>
            Calculating Velocity
          </Card.Title>
          <Card.Text style={{ color: "#555" }}>
            To find out how fast an object is moving, we:
            <ol>
              <li>Measure the distance it travels.</li>
              <li>Divide by the amount of time it takes.</li>
            </ol>
            If <InlineMath math="\Delta x" /> is the change in location, and{" "}
            <InlineMath math="\Delta t" /> is the change in time, then{" "}
            <InlineMath math="\frac{\Delta x}{\Delta t}" /> is the average
            velocity.
            <br />
            We then let <InlineMath math="\Delta t" /> get "infinitesimally"
            small and see what happens to{" "}
            <InlineMath math="\frac{\Delta x}{\Delta t}" />:
            <BlockMath math="\lim_{{\Delta t \to 0}} \frac{\Delta x}{\Delta t}" />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mb-3"
        style={{ backgroundColor: "rgba(184, 184, 243, 0.2)" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "#333" }}>
            Example: Dropping an Apple
          </Card.Title>
          <Card.Text style={{ color: "#555" }}>
            We are given the position function of an apple dropped from a
            height, described by the equation:
            <br />
            <BlockMath math="x(t) = 4.9t^2" />
            <b>Average Velocity on a Time Interval</b>
            <br />
            To compute the average velocity on the time interval from{" "}
            <InlineMath math="t = 1" /> to <InlineMath math="t = 2" />:
            <BlockMath math="x(1) = 4.9" />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CalculusNotes;
