import React from 'react';

import '../css/header.css'

interface HeaderPriceProps {
    textIn: string;
}
const HeaderPrice: React.FC<HeaderPriceProps> = (props) => {
    return (
        <div>
            <header className='header-price'>
                <div>
                    <svg width="283" height="92" viewBox="0 0 283 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.416 46.992L30.496 43.664L37.664 39.568C43.552 36.3253 46.496 31.1627 46.496 24.08C46.496 10.8533 36.4267 4.24 16.288 4.24H4.512V90H0.672001V0.399994H16.288C27.552 0.399994 36.0427 2.49066 41.76 6.672C47.4773 10.768 50.336 16.5707 50.336 24.08C50.336 32.6133 46.752 38.8853 39.584 42.896L32.416 46.992ZM98.767 52.752L116.175 90H111.951L94.031 51.6C94.2017 51.5147 94.927 51.1733 96.207 50.576C97.5723 49.8933 98.511 49.424 99.023 49.168C99.535 48.8267 100.388 48.272 101.583 47.504C102.778 46.736 103.674 46.0107 104.271 45.328C104.868 44.56 105.508 43.7067 106.191 42.768C106.959 41.744 107.514 40.6347 107.855 39.44C108.196 38.16 108.367 36.7947 108.367 35.344C108.367 29.968 105.807 26 100.687 23.44C95.567 20.88 89.2097 19.6 81.615 19.6H71.375V90H67.535V15.76H81.615C91.6843 15.76 99.279 17.5093 104.399 21.008C109.604 24.5067 112.207 29.2853 112.207 35.344C112.207 39.2693 110.884 42.768 108.239 45.84C105.594 48.8267 102.436 51.1307 98.767 52.752ZM133.535 15.76H137.375V90H133.535V15.76ZM165.372 82.192C160.764 76.1333 158.46 66.3627 158.46 52.88C158.46 39.3973 160.764 29.6267 165.372 23.568C169.98 17.5093 177.617 14.48 188.284 14.48C198.951 14.48 206.631 17.424 211.324 23.312L208.508 25.872C204.753 20.8373 198.012 18.32 188.284 18.32C184.017 18.32 180.433 18.7893 177.532 19.728C174.631 20.5813 171.943 22.2453 169.468 24.72C167.079 27.1093 165.287 30.6507 164.092 35.344C162.897 39.952 162.3 45.7973 162.3 52.88C162.3 59.9627 162.897 65.8507 164.092 70.544C165.287 75.152 167.079 78.6933 169.468 81.168C171.943 83.5573 174.631 85.2213 177.532 86.16C180.433 87.0133 184.017 87.44 188.284 87.44C198.012 87.44 204.753 84.9227 208.508 79.888L211.324 82.448C206.631 88.336 198.951 91.28 188.284 91.28C177.617 91.28 169.98 88.2507 165.372 82.192ZM280.074 82.448C275.381 88.336 267.701 91.28 257.034 91.28C246.367 91.28 238.73 88.2507 234.122 82.192C229.514 76.1333 227.21 66.3627 227.21 52.88C227.21 39.3973 229.514 29.6267 234.122 23.568C238.73 17.5093 246.367 14.48 257.034 14.48C269.407 14.48 277.813 18.5333 282.25 26.64L250.89 52.88H244.874L277.258 25.872C273.503 20.8373 266.762 18.32 257.034 18.32C252.767 18.32 249.183 18.7893 246.282 19.728C243.381 20.5813 240.693 22.2453 238.218 24.72C235.829 27.1093 234.037 30.6507 232.842 35.344C231.647 39.952 231.05 45.7973 231.05 52.88C231.05 59.9627 231.647 65.8507 232.842 70.544C234.037 75.152 235.829 78.6933 238.218 81.168C240.693 83.5573 243.381 85.2213 246.282 86.16C249.183 87.0133 252.767 87.44 257.034 87.44C266.762 87.44 273.503 84.9227 277.258 79.888L280.074 82.448Z" fill="white" />
                    </svg>

                </div>
                <p>{props.textIn}</p>

            </header>
        </div>
    );
}

const HeaderPriceContainer: React.FC = () => {
    const textIn = 'искусство в каждом штрихе';

    return (
        <HeaderPrice
            textIn={textIn}
        />
    )
}
export default HeaderPriceContainer;