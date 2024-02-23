import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const initialEnquiries = [
  {
    id: 1,
    courseName: 'Beginner British English',
    description: 'I am having trouble understanding some basic concepts in the course.',
    enquiryType: 'Technical Support',
    status: 'Pending',
    solution: ''
  },
  {
    id: 2,
    courseName: 'Intermediate British English',
    description: 'The course materials are not accessible to me.',
    enquiryType: 'Accessibility Issue',
    status: 'Replied',
    solution: 'Please try clearing your browser cache and cookies. If the issue persists, contact support for further assistance.'
  },
  {
    id: 3,
    courseName: 'Advanced British English',
    description: 'I need more information about the course structure and syllabus.',
    enquiryType: 'General Inquiry',
    status: 'Pending',
    solution: ''
  },
  {
    id: 4,
    courseName: 'Business English Certification',
    description: 'I have completed the course but did not receive a certificate.',
    enquiryType: 'Certificate Issue',
    status: 'Replied',
    solution: 'Your certificate has been resent to your registered email address. Please check your inbox and spam folder.'
  },
  {
    id: 5,
    courseName: 'Professional English Diploma',
    description: 'I am unable to access the course quizzes.',
    enquiryType: 'Technical Support',
    status: 'Pending',
    solution: ''
  },
  {
    id: 6,
    courseName: 'Advanced Business English',
    description: 'I want to know about the career prospects after completing the course.',
    enquiryType: 'General Inquiry',
    status: 'Replied',
    solution: 'After completing the course, you will gain valuable skills that are highly sought after in the business industry. You can explore various career opportunities such as business analyst, consultant, or project manager.'
  },
];

const ViewEnquiry = () => {
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [modal, setModal] = useState(false);
  const [solution, setSolution] = useState('');
  const navigate = useNavigate(); // Access navigate function from React Router

  const toggleModal = () => setModal(!modal);

  const handleDelete = (id) => {
    const updatedEnquiries = enquiries.filter(enquiry => enquiry.id !== id);
    setEnquiries(updatedEnquiries);
  };

  const handleViewSolution = (enquiry) => {
    setSolution(enquiry.solution);
    toggleModal();
  };

  return (
    <div>
      <h2 style={{ color: 'black', fontWeight: 'bold' }}>View Enquiries</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000' }}>Course Name</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000' }}>Description</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000' }}>Enquiry Type</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000' }}>Status</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.id}>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>{enquiry.courseName}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>{enquiry.description}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>{enquiry.enquiryType}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>{enquiry.status}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>
                {enquiry.status === 'Replied' && (
                  <Button color="info" onClick={() => handleViewSolution(enquiry)}>View Solution</Button>
                )}
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(enquiry.id)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modal} toggle={toggleModal} centered style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', zIndex: '9999' }}>
        <ModalBody style={{ color: '#000' }}>
          <h5>Solution</h5>
          <p>{solution}</p>
          <Button color="secondary" onClick={toggleModal}>Close</Button>
        </ModalBody>
      </Modal>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/student-dash')}>Go Back</button>
      </div>
    </div>
  );
};

export default ViewEnquiry;
