import React from 'react';

import '../css/home.css'

import girlOne from '../images/girl-one.jpg';
import boyOne from '../images/boy-one.jpg';
import girlTwo from '../images/girl-two.jpg';
import boyTwo from '../images/boy-two.jpg';
import girlThree from '../images/girl-three.jpg';
import boyThree from '../images/boy-three.png';

interface PhotoInfoProps {
    nameGirlOne: string;
    textGirlOne: string;
    nameBoyOne: string;
    textBoyOne: string;
    nameGirlTwo: string;
    textGirlTwo: string;
  
    nameBoyTwo: string;
    textBoyTwo: string;
    nameGirlThree: string;
    textGirlThree: string;
    nameBoyThree: string;
    textBoyThree: string;
  }
  
  const PhotoInfo: React.FC<PhotoInfoProps> = (props) => {
    return (
      <div>
        <div className='masters-container'>
  
          <h2>
            Наши мастера
          </h2>
          <div className='photo-container'>
  
            <div className='photo-text'>
              <img src={girlOne} alt="girl-one" />
              <h3>{props.nameGirlOne}</h3>
              <p>{props.textGirlOne}</p>
            </div>
  
            <div className='photo-text'>
              <img src={boyOne} alt="boy-one" />
              <h3>{props.nameBoyOne}</h3>
              <p>{props.textBoyOne}</p>
            </div>
  
            <div className='photo-text'>
              <img src={girlTwo} alt="girl-two" />
              <h3>{props.nameGirlTwo}</h3>
              <p>{props.textGirlTwo}</p>
            </div>
  
            <div className='photo-text'>
              <img src={boyTwo} alt="boy-two" />
              <h3>{props.nameBoyTwo}</h3>
              <p>{props.textBoyTwo}</p>
            </div>
  
            <div className='photo-text'>
              <img src={girlThree} alt="girl-three" />
              <h3>{props.nameGirlThree}</h3>
              <p>{props.textGirlThree}</p>
            </div>
  
            <div className='photo-text'>
              <img src={boyThree} alt="boy-three" />
              <h3>{props.nameBoyThree}</h3>
              <p>{props.textBoyThree}</p>
            </div>
  
          </div>
        </div>
  
      </div>
    );
  }
  const PhotoInfoContainer: React.FC = () => {
    const nameGirlOne = 'Sophia Harper';
    const textGirlOne = 'exp. 3 years';
    const nameBoyOne = 'James Sullivan';
    const textBoyOne = 'exp. 5 years';
    const nameGirlTwo = 'Lily Thompson';
    const textGirlTwo = 'exp. 1,5 year';
    const nameBoyTwo = 'Ethan Mitchell';
    const textBoyTwo = 'exp. 4 years';
    const nameGirlThree = 'Emily Bennett';
    const textGirlThree = 'exp. 2,5 years';
    const nameBoyThree = 'Oliver Harrison';
    const textBoyThree = 'exp. 1 year';
    return (
      <PhotoInfo
        nameGirlOne={nameGirlOne}
        textGirlOne={textGirlOne}
        nameBoyOne={nameBoyOne}
        textBoyOne={textBoyOne}
        nameGirlTwo={nameGirlTwo}
        textGirlTwo={textGirlTwo}
        nameBoyTwo={nameBoyTwo}
        textBoyTwo={textBoyTwo}
        nameGirlThree={nameGirlThree}
        textGirlThree={textGirlThree}
        nameBoyThree={nameBoyThree}
        textBoyThree={textBoyThree}
      />
    );
  }
  
  export default PhotoInfoContainer;
  