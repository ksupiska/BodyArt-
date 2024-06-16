import React from 'react';

import Navigation from '../components/Navigation';
import PriceForm from '../components/PriceForm';
import PriceInfoContainer from '../components/PriceInfo';

const Price: React.FC = () => {
    return (
        <div>
            <Navigation />
            <PriceForm/>
            <PriceInfoContainer/>
        </div>
    );
}

export default Price;
