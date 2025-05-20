import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const classOptions = [
  "Monday 5:30 AM", "Monday 8:30 AM", "Monday 12 PM", "Monday 4:30 PM", "Monday 5:30 PM", "Monday 6:30 PM",
  "Tuesday 5:30 AM", "Tuesday 8:30 AM", "Tuesday 12 PM", "Tuesday 4:30 PM", "Tuesday 5:30 PM", "Tuesday 6:30 PM",
  "Wednesday 5:30 AM", "Wednesday 8:30 AM", "Wednesday 12 PM", "Wednesday 4:30 PM", "Wednesday 5:30 PM", "Wednesday 6:30 PM",
  "Thursday 5:30 AM", "Thursday 8:30 AM", "Thursday 12 PM", "Thursday 4:30 PM", "Thursday 5:30 PM", "Thursday 6:30 PM",
  "Friday 5:30 AM", "Friday 8:30 AM", "Friday 12 PM", "Friday 4:30 PM", "Friday 5:30 PM", "Friday 6:30 PM",
  "Saturday 9:30 AM",
  "Yoga Wednesday 6:00 PM", "Yoga Friday 9:30 AM"
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

const FreeTrial = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    classTime: "",
  });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const sendText = async (data) => {
    try {
      await fetch("/api/send-free-trial-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
  };

  const validateFields = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!form.phone.trim()) {
      errors.phone = "Please enter your phone number.";
    } else if (!phoneRegex.test(form.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (!form.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!emailRegex.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.classTime) errors.classTime = "Please select a class.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    setError("");
    const errors = validateFields();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setError("Please correct the errors in the form.");
      return;
    }

    const success = await sendText(form);
    if (success) {
      setSubmitted(true);
    } else {
      setError("There was an error sending your request. Please try again or contact CrossFit XLR8.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100%",
        }}
      >
        <h4 className="poppins-900-sub">Start Your Free Trial</h4>
        <p>
          Join us today and get a free trial to experience our amazing CrossFit programs. No commitments, just results!
        </p>
        <Button
          variant="primary"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setShow(true)}
        >
          Start Now
        </Button>
      </div>
      <Modal centered show={show} onHide={() => { setShow(false); setSubmitted(false); setValidated(false); setError(""); setFieldErrors({}); }}>
        <Modal.Header closeButton>
          <Modal.Title>Free Trial Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted ? (
            <Alert variant="success">
              Thank you for signing up! We will see you at your selected class time. If you have any questions or need to reschedule, please contact us at <a href="tel:361-444-3316">361-444-3316</a>
            </Alert>
          ) : (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="freeTrialName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  isInvalid={!!fieldErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {fieldErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="freeTrialPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  isInvalid={!!fieldErrors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {fieldErrors.phone}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="freeTrialEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  isInvalid={!!fieldErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {fieldErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="freeTrialClass">
                <Form.Label>Select a Class</Form.Label>
                <Form.Select
                  required
                  name="classTime"
                  value={form.classTime}
                  onChange={handleChange}
                  isInvalid={!!fieldErrors.classTime}
                >
                  <option value="">Choose a class...</option>
                  {classOptions.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {fieldErrors.classTime}
                </Form.Control.Feedback>
              </Form.Group>
              {error && <Alert variant="danger">{error}</Alert>}
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FreeTrial;