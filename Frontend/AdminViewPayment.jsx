import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const dummyData = [
    {
        payment_id: 7,
      student_id: 107,
      username: 'David Smith',
      status: 'FAILED',
      total_amount: '$400',
      payment_date: '2024-02-26',
      mode_of_payment: 'PayPal',
    },
  {
    payment_id: 1,
    student_id: 101,
    username: 'John Doe',
    status: 'SUCCESSFUL',
    total_amount: '$500',
    payment_date: '2024-02-20',
    mode_of_payment: 'Credit Card',
  },
 
  
  {
      payment_id: 4,
      student_id: 104,
      username: 'Jane Doe',
      status: 'SUCCESSFUL',
      total_amount: '$450',
      payment_date: '2024-02-23',
      mode_of_payment: 'Venmo',
    },
    {
        payment_id: 5,
    student_id: 105,
    username: 'Michael Brown',
    status: 'FAILED',
    total_amount: '$600',
    payment_date: '2024-02-24',
    mode_of_payment: 'Credit Card',
},
{
    payment_id: 6,
    student_id: 106,
    username: 'Emily Johnson',
    status: 'FAILED',
    total_amount: '$550',
    payment_date: '2024-02-25',
    mode_of_payment: 'Debit Card',
},
{
  payment_id: 3,
  student_id: 103,
  username: 'Bob Johnson',
  status: 'SUCCESSFUL',
  total_amount: '$700',
  payment_date: '2024-02-22',
  mode_of_payment: 'PayPal',
},
{
    payment_id: 2,
    student_id: 102,
    username: 'Alice Smith',
    status: 'SUCCESSFUL',
    total_amount: '$300',
    payment_date: '2024-02-21',
    mode_of_payment: 'Debit Card',
  },
  {
    payment_id: 8,
    student_id: 108,
    username: 'Sarah Miller',
    status: 'FAILED',
    total_amount: '$350',
    payment_date: '2024-02-27',
    mode_of_payment: 'Venmo',
  },
];

const AdminViewPayment = () => {
  const [hideSuccessful, setHideSuccessful] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleVerifyPayments = () => {
    setHideSuccessful(true);
  };

  const handleSendAlert = () => {
    const redRows = dummyData.filter((payment) => payment.status !== 'SUCCESSFUL');
    redRows.forEach((row) => {
      alert(`Sent alert to ${row.username}`);
    });
  };

  const handleRowClick = (username) => {
    setSelectedUsers((prevUsers) => [...prevUsers, username]);
  };

  const handleGoBack = () => {
    navigate('/admin-dash'); // Navigate to admin dashboard
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', backgroundColor: '#ece8e7', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Payment ID</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Student ID</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Username</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Status</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Total Amount</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Payment Date</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#0a0a0a', color: '#fff' }}>Mode of Payment</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((payment) => (
            <tr
              key={payment.payment_id}
              onClick={() => payment.status === 'SUCCESSFUL' ? handleRowClick(payment.username) : null}
              style={{
                display: hideSuccessful && payment.status === 'SUCCESSFUL' ? 'none' : 'table-row',
                color: payment.status === 'SUCCESSFUL' ? 'green' : 'red',
                cursor: payment.status === 'SUCCESSFUL' ? 'pointer' : 'default',
              }}
            >
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2' }}>{payment.payment_id}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2' }}>{payment.student_id}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2' }}>{payment.username}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2' }}>{payment.status}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2' }}>{payment.total_amount}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2' }}>{payment.payment_date}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '2px solid #000', backgroundColor: '#f2f2f2' }}>{payment.mode_of_payment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <Button onClick={handleVerifyPayments} color="green" style={{ marginRight: '10px' }}>Verify Payments</Button>
        <Button onClick={handleSendAlert} color="danger" style={{ marginRight: '10px' }}>Send Alert</Button>
        <Button onClick={handleGoBack} color="info">Go Back</Button>
      </div>
      
    </div>
  );
};

export default AdminViewPayment;
