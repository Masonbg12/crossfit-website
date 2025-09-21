import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m the CrossFit XLR8 assistant. Ask me about our classes, coaches, programs, or anything else!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
      
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message
      }]);
    } catch (err) {
      setError('Sorry, I\'m having trouble responding right now. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Hi! I\'m the CrossFit XLR8 assistant. Ask me about our classes, coaches, programs, or anything else!'
      }
    ]);
    setError('');
  };

  return (
    <>
      {/* Chat Button */}
      <div 
        className="chat-button"
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        💬
      </div>

      {/* Chat Modal */}
      <Modal
        show={isOpen}
        onHide={() => setIsOpen(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="poppins-900-sub">CrossFit XLR8 Assistant</Modal.Title>
          <div className="ms-auto">
            <Button
              variant="outline-secondary" 
              size="sm"
              onClick={clearChat}
            >
              Clear Chat
            </Button>
          </div>
        </Modal.Header>
        
        <Modal.Body style={{ height: '400px', padding: 0 }}>
          <div 
            className="chat-messages"
            style={{
              height: 'calc(100% - 60px)',
              overflowY: 'auto',
              padding: '15px',
              backgroundColor: '#f8f9fa'
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.role}`}
                style={{
                  marginBottom: '15px',
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 15px',
                    borderRadius: '15px',
                    backgroundColor: msg.role === 'user' ? 'var(--primary)' : '#fff',
                    color: msg.role === 'user' ? '#000' : '#333',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="message assistant" style={{ marginBottom: '15px', display: 'flex' }}>
                <div style={{
                  padding: '10px 15px',
                  borderRadius: '15px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                  <Spinner animation="border" size="sm" /> Thinking...
                </div>
              </div>
            )}
            
            {error && (
              <Alert variant="danger" style={{ margin: '10px' }}>
                {error}
              </Alert>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '15px',
            borderTop: '1px solid #dee2e6',
            backgroundColor: '#fff'
          }}>
            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                placeholder="Ask me about CrossFit XLR8..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                style={{ marginRight: '10px' }}
              />
              <Button 
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                variant="primary"
              >
                Send
              </Button>
            </Form.Group>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChatBot;