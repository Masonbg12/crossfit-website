import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Button, Form, Modal, Alert } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";

function PostWod() {
  // STATE VARIABLES
  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // show login state
  const [showLogin, setShowLogin] = useState(true);
  // Username input
  const [username, setUsername] = useState("");
  // Password input
  const [password, setPassword] = useState("");
  // Alert messages
  const [alertMessage, setAlertMessage] = useState(null);
  // Form data for posts
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    content: "",
    images: null,
  });
  // All posts fetched from the backend
  const [posts, setPosts] = useState([]);
  // Selected post for update/delete
  const [selectedPost, setSelectedPost] = useState(null);
  // Tracks which form to display
  const [activeForm, setActiveForm] = useState(null);
  // Selected year
  const [selectedYear, setSelectedYear] = useState("");
  // Selected month
  const [selectedMonth, setSelectedMonth] = useState("");
  // State for confirmation modal
  const [showConfirmation, setShowConfirmation] = useState(false);
  // Tracks the action (update/delete)
  const [confirmationAction, setConfirmationAction] = useState(null);
  // Scheduled date and time for posts
  const [scheduledDateTime, setScheduledDateTime] = useState("");

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL;

  
  // HANDLER/FETCHING FUNCTIONS
  const handleLogin = () => {
    if (username === "admin" && password === "password123") {
      setIsLoggedIn(true);
      setShowLogin(false);
      setAlertMessage(null);
    } else {
      setAlertMessage("Invalid username or password");
    }
  };

  // FETCH POSTS FROM BACKEND
  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/data`);
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      alert(err.message);
    }
  }, [API_URL]);

  // ORGANIZE POSTS BY YEAR AND MONTH
  const organizePosts = () => {
    const organized = {};
    posts.forEach((post) => {
      const date = new Date(post.date);
      const year = date.getFullYear();
      const month = date.toLocaleString("default", { month: "long" });

      if (!organized[year]) organized[year] = {};
      if (!organized[year][month]) organized[year][month] = [];
      organized[year][month].push(post);
    });
    return organized;
  };

  // HANDLE POST SELECTION FOR UPDATE/DELETE
  const handlePostSelection = (e) => {
    const postId = e.target.value;
    const post = posts.find((p) => p._id === postId);
    setSelectedPost(post);
    setFormData({
      date: post.date,
      title: post.title,
      content: post.content,
      images: null,
    });
  };

  // ADD POST FUNCTION
const handleAddPost = async () => {
  const formDataToSend = new FormData();
  formDataToSend.append("date", scheduledDateTime);
  formDataToSend.append("title", formData.title);
  formDataToSend.append("content", formData.content);
  if (formData.images) formDataToSend.append("images", formData.images);

  try {
    const response = await fetch(`${API_URL}/new-post`, {
      method: "POST",
      body: formDataToSend,
    });
    if (!response.ok) throw new Error("Failed to add post. Contact Mason.");
    alert("Post added successfully!");
    setFormData({
      date: "",
      title: "",
      content: "",
      images: null,
    });
    setScheduledDateTime("");
    setSelectedYear("");
    setSelectedMonth("");
    setSelectedPost(null);
    fetchPosts();
  } catch (err) {
    alert(err.message);
  }
};

  // UPDATE POST FUNCTION
  const handleUpdatePost = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("date", formData.date);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    if (formData.images) formDataToSend.append("images", formData.images);

    try {
      const response = await fetch(`${API_URL}/update-post/${selectedPost._id}`, {
        method: "PUT",
        body: formDataToSend,
      });
      if (!response.ok) throw new Error("Failed to update post. Contact Mason.");
      alert("Post updated successfully!");
      setFormData({
        date: "",
        title: "",
        content: "",
        images: null,
      });
      setSelectedYear("");
      setSelectedMonth("");
      setSelectedPost(null);
      fetchPosts();
    } catch (err) {
      alert(err.message);
    }
  };

  // DELETE POST FUNCTION
  const handleDeletePost = async () => {
    console.log(`[Delete Post] ID:`, selectedPost._id);

    try {
      const response = await fetch(`${API_URL}/delete-post/${selectedPost._id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete post");
      alert("Post deleted successfully!");
      setFormData({
        date: "",
        title: "",
        content: "",
        images: null,
      });
      setSelectedYear("");
      setSelectedMonth("");
      setSelectedPost(null);
      fetchPosts();
    } catch (err) {
      alert(err.message);
    }
  };

  // SHOW CONFIRMATION MODAL
  const handleShowConfirmation = (action) => {
    setConfirmationAction(action); 
    setShowConfirmation(true); 
  };

  // CONFIRMATION ACTION
  const handleConfirmAction = () => {
    if (confirmationAction === "update") {
      handleUpdatePost(); 
    } else if (confirmationAction === "delete") {
      handleDeletePost(); 
    }
    setShowConfirmation(false);
  };

  useEffect(() => {
    if (activeForm === "updateDelete") {
      fetchPosts(); 
    }
  }, [activeForm, fetchPosts]);

  // LOGIN MODAL/LOGIC
  if (!isLoggedIn) {
    return (
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alertMessage && <Alert variant="danger">{alertMessage}</Alert>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const organizedPosts = organizePosts();

  // MAIN EDITING COMPONENT
  return (
    <Container style={{ padding: "2rem 0" }}>
      <Row className="mb-4">
        <Col>
          <h2>Manage Workouts</h2>
          <p>Add, update, or delete workouts of the day (WOD). Please Fill out all of the boxes before submitting anything.</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Button
            variant="success"
            className="me-2"
            onClick={() => {
              setActiveForm("add");
              setFormData({
                date: "",
                title: "",
                content: "",
                images: null,
              });
              setSelectedYear("");
              setSelectedMonth("");
              setSelectedPost(null);
            }}
          >
            Add Post
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              setActiveForm("updateDelete");
              setFormData({
                date: "",
                title: "",
                content: "",
                images: null,
              });
              setSelectedYear("");
              setSelectedMonth("");
              setSelectedPost(null);
            }}
          >
            Update/Delete Post
          </Button>
        </Col>
      </Row>
      {activeForm === "add" && (
        <Form>
          {/* Schedule Date & Time moved up */}
          <Form.Group className="mb-3">
            <Form.Label>Schedule Date & Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={scheduledDateTime}
              onChange={(e) => setScheduledDateTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <Form.Text className="text-muted">
              Please structure the title as "Month Date-Date, Year". For Example: "May 26-31, 2025".
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Editor
              apiKey="vz83r7df8uh8sv96mh2u08bjn97n2v42p319lxrbaoi995ha"
              value={
                formData.content ||
                `<p style="color: red;">WOD Details at CrossFit XLR8/Movements only:<br/>
                Monday:<br/>
                Tuesday:<br/>
                Wednesday:<br/>
                Thursday:<br/>
                Friday:<br/>
                Saturday:</p>`
              }
              init={{
                height: 300,
                menubar: false,
                statusbar: false,
                branding: false, 
                link_assume_external_targets: false,
                link_context_toolbar: false, 
                paste_as_text: true, 
                paste_auto_cleanup_on_paste: true, 
                paste_remove_styles: false,
                paste_remove_spans: false, 
                plugins: [
                  "advlist", "lists", "link", "image", "charmap", "preview", "anchor",
                  "searchreplace", "visualblocks", "code", "fullscreen",
                  "insertdatetime", "media", "table", "help", "wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | bold italic forecolor backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | removeformat | help",
                setup: function (editor) {
                  // Disable automatic link detection on paste
                  editor.on('paste', function (e) {
                    e.preventDefault();
                    const clipboardData = e.clipboardData || window.clipboardData;
                    const pastedData = clipboardData.getData('text/plain');
                    editor.insertContent(pastedData);
                  });
                }
              }}
              onEditorChange={(content) => setFormData({ ...formData, content })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Images</Form.Label>
            <Form.Control
              type="file"
              name="images"
              onChange={(e) => setFormData({ ...formData, images: e.target.files[0] })}
            />
          </Form.Group>
          <Button variant="success" onClick={handleAddPost}>
            Submit
          </Button>
        </Form>
      )}
      {activeForm === "updateDelete" && (
        <Form>
          {/* Year Dropdown */}
          <Form.Group className="mb-3">
            <Form.Label>Select Year</Form.Label>
            <Form.Control
              as="select"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                setSelectedMonth("");
                setSelectedPost(null);
              }}
            >
              <option value="">Select a year</option>
              {Object.keys(organizedPosts)
                .sort((a, b) => b - a)
                .map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>

          {/* Month Dropdown */}
          {selectedYear && (
            <Form.Group className="mb-3">
              <Form.Label>Select Month</Form.Label>
              <Form.Control
                as="select"
                value={selectedMonth}
                onChange={(e) => {
                  setSelectedMonth(e.target.value);
                  setSelectedPost(null);
                }}
              >
                <option value="">Select a month</option>
                {Object.keys(organizedPosts[selectedYear])
                  .sort((a, b) => new Date(`${b} 1, ${selectedYear}`) - new Date(`${a} 1, ${selectedYear}`))
                  .map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          )}

          {/* Post Dropdown */}
          {selectedMonth && (
            <Form.Group className="mb-3">
              <Form.Label>Select Post</Form.Label>
              <Form.Control as="select" onChange={handlePostSelection}>
                <option value="">Select a post</option>
                {organizedPosts[selectedYear][selectedMonth]
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((post) => (
                    <option key={post._id} value={post._id}>
                      {post.title} ({new Date(post.date).toLocaleDateString()})
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          )}

          {selectedPost && (
            <>
              {/* Schedule Date & Time moved up */}
              <Form.Group className="mb-3">
                <Form.Label>Schedule Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={scheduledDateTime}
                  onChange={(e) => setScheduledDateTime(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Please select the date as the date above in parenthesis with any time.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <Form.Text className="text-muted">
                  Please structure the title as "Month Date-Date, Year". For Example: "May 26-31, 2025".
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Editor
                  apiKey="vz83r7df8uh8sv96mh2u08bjn97n2v42p319lxrbaoi995ha"
                  value={formData.content}
                  init={{
                    height: 300,
                    menubar: false,
                    statusbar: false, // Remove status bar at bottom
                    branding: false, // Remove "Powered by TinyMCE" branding
                    link_assume_external_targets: false, // Don't assume external targets
                    link_context_toolbar: false, // Disable link context toolbar
                    paste_as_text: true, // Paste as plain text by default
                    paste_auto_cleanup_on_paste: true, // Clean up pasted content
                    paste_remove_styles: false, // Keep some styles when pasting
                    paste_remove_spans: false, // Keep spans when pasting
                    plugins: [
                      "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor",
                      "searchreplace", "visualblocks", "code", "fullscreen",
                      "insertdatetime", "media", "table", "help", "wordcount"
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic forecolor backcolor | " +
                      "alignleft aligncenter alignright alignjustify | " +
                      "bullist numlist outdent indent | removeformat | help",
                  }}
                  onEditorChange={(content) => setFormData({ ...formData, content })}
                />
                <Form.Text className="text-muted">
                  If there is an image in the content box above do not add another image below.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Images</Form.Label>
                <Form.Control type="file" name="images" onChange={(e) => setFormData({ ...formData, images: e.target.files[0] })} />
              </Form.Group>
              <div className="d-flex justify-content-start">
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleShowConfirmation("update")}
                >
                  Update Post
                </Button>
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={() => handleShowConfirmation("delete")}
                >
                  Delete Post
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSelectedYear("");
                    setSelectedMonth("");
                    setSelectedPost(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </Form>
      )}

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to {confirmationAction === "update" ? "update" : "delete"} this post?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmAction}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default PostWod;