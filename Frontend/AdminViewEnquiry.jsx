import React, { useState } from 'react';
import { Button, Modal, ModalBody, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const initialEnquiries = [
  {
    id: 1,
    courseName: 'Beginner British English',
    description: 'I am having trouble understanding some basic concepts in the course.',
    email: 'john@example.com',
    enquiryType: 'Technical Support',
  },
  {
    id: 2,
    courseName: 'Intermediate British English',
    description: 'The course materials are not accessible to me.',
    email: 'jane@example.com',
    enquiryType: 'Accessibility Issue',
  },
  {
    id: 3,
    courseName: 'Advanced British English',
    description: 'I need more information about the course structure and syllabus.',
    email: 'mike@example.com',
    enquiryType: 'General Inquiry',
  },
  {
    id: 4,
    courseName: 'Business English Certification',
    description: 'I have completed the course but did not receive a certificate.',
    email: 'sarah@example.com',
    enquiryType: 'Certificate Issue',
  },
];

const AdminViewEnquiry = () => {
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook to navigate
  const toggleModal = () => setModal(!modal);

  const handleEnquiryClick = (enquiry) => {
    setSelectedEnquiry(enquiry);
    toggleModal();
  };

  const handleSendSolution = () => {
    const updatedEnquiries = enquiries.filter((enquiry) => enquiry.id !== selectedEnquiry.id);
    setEnquiries(updatedEnquiries);
    toggleModal();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} centered>
  <ModalBody style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '20px' }}>
    <h4 style={{ margin: '0 0 10px 0' }}>Help</h4>
    <p style={{ margin: '0 0 10px 0' }}>Please provide a solution for the enquiry.</p>
    <Input type="textarea" placeholder="Enter solution..." className="modal-textarea" style={{ marginBottom: '10px', height: '100px', width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }} />
    <div style={{ textAlign: 'center' }}>
      <Button color="primary" onClick={handleSendSolution} style={{ marginRight: '5px' }}>Send</Button>
      <Button color="secondary" onClick={toggleModal}>Cancel</Button>
    </div>
  </ModalBody>
</Modal>

      <div style={{ display: modal ? 'none' : 'block' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Course Name</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Description</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Email</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Enquiry Type</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id} onClick={() => handleEnquiryClick(enquiry)} style={{ cursor: 'pointer' }}>
                <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>{enquiry.courseName}</td>
                <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>{enquiry.description}</td>
                <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>{enquiry.email}</td>
                <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>{enquiry.enquiryType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button color="primary" onClick={() => navigate('/admin-dash')} style={{ color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Go Back</Button>
      </div>
      </div>
    </div>
  );
};

export default AdminViewEnquiry;
