import React from 'react';

import Navigation from '../components/Navigation';
import TattooInfoContainer from '../components/TattooInfo';
import PhotoInfoContainer from '../components/PhotoInfo';
import WorkInfoContainer from '../components/WorkInfo';

const Home: React.FC = () => {
    return (
        <div>
            <Navigation/>
            <TattooInfoContainer />
            <PhotoInfoContainer/>
            <WorkInfoContainer/>
        </div>
    );
}

export default Home;