import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const initialData = [
  {
    id: 1,
    courseName: 'Beginner British English',
    description: 'Basic course covering essential vocabulary, grammar, and pronunciation for beginners.',
    duration: '8 weeks',
    cost: '$500',
  },
  {
    id: 2,
    courseName: 'Intermediate British English',
    description: 'Build on your existing knowledge with more complex grammar structures and vocabulary.',
    duration: '12 weeks',
    cost: '$800',
  },
  {
    id: 3,
    courseName: 'Advanced British English',
    description: 'Refine your skills with advanced grammar, idioms, and conversation practice.',
    duration: '10 weeks',
    cost: '$1000',
  },
  {
    id: 4,
    courseName: 'Business English Certification',
    description: 'Specialized course focusing on English for business communication, presentations, and writing.',
    duration: '14 weeks',
    cost: '$1200',
  },
  {
    id: 5,
    courseName: 'IELTS Preparation Course',
    description: 'Prepare for the IELTS exam with intensive practice in all sections of the test.',
    duration: '16 weeks',
    cost: '$1500',
  },
  {
    id: 6,
    courseName: 'TOEFL Exam Preparation',
    description: 'Comprehensive course covering all sections of the TOEFL exam with mock tests and feedback.',
    duration: '12 weeks',
    cost: '$1300',
  },
];

const AdminViewCourse = () => {
  const [dummyData, setDummyData] = useState(initialData);
  const [editingCourse, setEditingCourse] = useState(null);
  const [editedCourse, setEditedCourse] = useState({});
  const navigate = useNavigate(); // Use the useNavigate hook to navigate
  const handleEdit = (id) => {
    const courseToEdit = dummyData.find(course => course.id === id);
    setEditingCourse(id);
    setEditedCourse(courseToEdit);
  };

  const handleSave = () => {
    const updatedData = dummyData.map(course => {
      if (course.id === editedCourse.id) {
        return editedCourse;
      }
      return course;
    });
    setEditingCourse(null);
    setDummyData(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = dummyData.filter(course => course.id !== id);
    setDummyData(updatedData);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', backgroundColor: '#ece8e7', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Course Name</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Description</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Duration</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Cost</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((course) => (
            <tr key={course.id}>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>
                {editingCourse === course.id ? (
                  <input type="text" value={editedCourse.courseName} onChange={(e) => setEditedCourse({ ...editedCourse, courseName: e.target.value })} />
                ) : course.courseName}
              </td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>
                {editingCourse === course.id ? (
                  <textarea value={editedCourse.description} onChange={(e) => setEditedCourse({ ...editedCourse, description: e.target.value })} />
                ) : course.description}
              </td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>
                {editingCourse === course.id ? (
                  <input type="text" value={editedCourse.duration} onChange={(e) => setEditedCourse({ ...editedCourse, duration: e.target.value })} />
                ) : course.duration}
              </td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000' }}>
                {editingCourse === course.id ? (
                  <input type="text" value={editedCourse.cost} onChange={(e) => setEditedCourse({ ...editedCourse, cost: e.target.value })} />
                ) : course.cost}
              </td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2', color: '#000', whiteSpace: 'nowrap' }}>
                {editingCourse === course.id ? (
                  <Button color="success" onClick={handleSave}>Save</Button>
                ) : (
                  <>
                    <Button color="primary" style={{ marginRight: '5px' }} onClick={() => handleEdit(course.id)}>Edit</Button>
                    <Button color="danger" onClick={() => handleDelete(course.id)}>Delete</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button color="primary" onClick={() => navigate('/admin-dash')} style={{ color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Go Back</Button>
      </div>
    </div>
  );
};

export default AdminViewCourse;
