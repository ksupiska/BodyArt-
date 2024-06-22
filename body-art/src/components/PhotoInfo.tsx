import React, { useState } from 'react';
import Modal from './Modal'; // Импортируем модальное окно
import '../css/home.css';
import girlOne from '../images/girl-one.jpg';
import boyOne from '../images/boy-one.jpg';
import girlTwo from '../images/girl-two.jpg';
import boyTwo from '../images/boy-two.jpg';
import girlThree from '../images/girl-three.jpg';
import boyThree from '../images/boy-three.png';

interface PhotoInfoProps {
  name: string;
  text: string;
  imgSrc: string;
}


const PhotoInfoContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoInfoProps | null>(null);

  const openModal = (photo: PhotoInfoProps) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const photos: PhotoInfoProps[] = [
    { name: 'Sophia Harper', text: 'exp. 3 years', imgSrc: girlOne },
    { name: 'James Sullivan', text: 'exp. 5 years', imgSrc: boyOne },
    { name: 'Lily Thompson', text: 'exp. 1,5 year', imgSrc: girlTwo },
    { name: 'Ethan Mitchell', text: 'exp. 4 years', imgSrc: boyTwo },
    { name: 'Emily Bennett', text: 'exp. 2,5 years', imgSrc: girlThree },
    { name: 'Oliver Harrison', text: 'exp. 1 year', imgSrc: boyThree },
  ];

  return (
    <div className="masters-container">
      <h2>Наши мастера</h2>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <div key={index} className="photo-text" onClick={() => openModal(photo)}>
            <img src={photo.imgSrc} alt={photo.name} />
            <h3>{photo.name}</h3>
            <p>{photo.text}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedPhoto && (
          <div>
            <h3>{selectedPhoto.name}</h3>
            <p>{selectedPhoto.text}</p>
            <img src={selectedPhoto.imgSrc} alt={selectedPhoto.name} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PhotoInfoContainer;