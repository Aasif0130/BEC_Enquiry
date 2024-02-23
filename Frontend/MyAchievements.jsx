import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faMedal, faDownload, faShare } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const MyAchievements = () => {
  // Dummy data for achievements
  const achievements = [
    { name: 'Certificate in English Grammar', icon: faCertificate },
    { name: 'Medal for Outstanding Performance in Literature', icon: faMedal },
    { name: 'Certificate in Business Communication', icon: faCertificate },
    { name: 'Certificate in Public Speaking', icon: faCertificate },
    { name: 'Medal for Excellence in Creative Writing', icon: faMedal },
    { name: 'Certificate in Effective Presentations', icon: faCertificate }
  ];

  // State to manage popups and success message
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Navigate hook
  const navigate = useNavigate();

  // Function to handle download action
  const handleDownload = (achievementName) => {
    setSelectedAchievement(achievementName);
    setShowDownloadPopup(true);
    setDownloadSuccess(true); // Update to show download success
  };

  // Function to handle share action
  const handleShare = (achievementName) => {
    setSelectedAchievement(achievementName);
    setShowSharePopup(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ color: '#000' }}>My Achievements</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            style={{ 
              width: '300px', 
              margin: '20px', 
              padding: '20px', 
              backgroundColor: '#fff', 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
              borderRadius: '8px',
              position: 'relative', // Adjusted to position popups relative to achievement boxes
              zIndex: '1', // Ensures popups appear above achievement boxes
              cursor: 'pointer'
            }}
          >
            {achievement.icon === faMedal ? (
              <FontAwesomeIcon icon={achievement.icon} style={{ fontSize: '3em', marginBottom: '20px', color: 'gold' }} />
            ) : (
              <FontAwesomeIcon icon={achievement.icon} style={{ fontSize: '3em', marginBottom: '20px', color: '#000' }} />
            )}
            <h3 style={{ fontSize: '20px', color: '#000', marginBottom: '10px' }}>{achievement.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button onClick={() => handleDownload(achievement.name)} style={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
                <FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px' }} />
                Download
              </button>
              <button onClick={() => handleShare(achievement.name)} style={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
                <FontAwesomeIcon icon={faShare} style={{ marginRight: '5px' }} />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Download Popup */}
      {showDownloadPopup && (
        <div 
          className="popup-overlay" 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999'
          }}
        >
          <div 
            className="popup" 
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}
          >
            {downloadSuccess ? (
              <>
                <h3>Downloaded Successfully</h3>
                <p>{selectedAchievement}</p>
              </>
            ) : (
              <>
                <h3>Downloading Certificate</h3>
                <p>{selectedAchievement}</p>
              </>
            )}
            <button onClick={() => setShowDownloadPopup(false)} style={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
              Close
            </button>
          </div>
        </div>
      )}
      {/* Share Popup */}
      {showSharePopup && (
        <div 
          className="popup-overlay" 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999'
          }}
        >
          <div 
            className="popup" 
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}
          >
            <h3>Sharing Achievement</h3>
            <p>{selectedAchievement}</p>
            <div>
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '2em', margin: '0 10px', color: '#25D366' }} />
              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '2em', margin: '0 10px', color: '#1877F2' }} />
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '2em', margin: '0 10px', color: '#E4405F' }} />
              <FontAwesomeIcon icon={faSnapchat} style={{ fontSize: '2em', margin: '0 10px', color: '#FFFC00' }} />
            </div>
            <button onClick={() => setShowSharePopup(false)} style={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
              Close
            </button>
          </div>
        </div>
      )}
            <button onClick={() => {
              navigate('/student-dash');
              setShowSharePopup(false);
            }} style={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginLeft: '10px' }}>
              Go back
            </button>
              
    </div>
  );
};

export default MyAchievements;
