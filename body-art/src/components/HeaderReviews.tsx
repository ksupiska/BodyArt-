import React from 'react';

import '../css/header.css'

interface HeaderReviewsProps {
    textIn: string;
}
const HeaderReviews: React.FC<HeaderReviewsProps> = (props) => {
    return (
        <div>
            <header className='header-reviews'>
                <div>
                    <svg width="463" height="92" viewBox="0 0 463 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.656 86.16H45.984L30.496 43.664L37.664 39.568C43.552 36.3253 46.496 31.1627 46.496 24.08C46.496 10.8533 36.4267 4.24 16.288 4.24H4.512V90H0.672001V0.399994H16.288C27.552 0.399994 36.0427 2.49066 41.76 6.672C47.4773 10.768 50.336 16.5707 50.336 24.08C50.336 32.6133 46.752 38.8853 39.584 42.896L35.232 45.328L51.488 90H10.656V86.16ZM120.199 82.448C115.506 88.336 107.826 91.28 97.159 91.28C86.4923 91.28 78.855 88.2507 74.247 82.192C69.639 76.1333 67.335 66.3627 67.335 52.88C67.335 39.3973 69.639 29.6267 74.247 23.568C78.855 17.5093 86.4923 14.48 97.159 14.48C109.532 14.48 117.938 18.5333 122.375 26.64L91.015 52.88H84.999L117.383 25.872C113.628 20.8373 106.887 18.32 97.159 18.32C92.8923 18.32 89.3083 18.7893 86.407 19.728C83.5057 20.5813 80.8177 22.2453 78.343 24.72C75.9537 27.1093 74.1617 30.6507 72.967 35.344C71.7723 39.952 71.175 45.7973 71.175 52.88C71.175 59.9627 71.7723 65.8507 72.967 70.544C74.1617 75.152 75.9537 78.6933 78.343 81.168C80.8177 83.5573 83.5057 85.2213 86.407 86.16C89.3083 87.0133 92.8923 87.44 97.159 87.44C106.887 87.44 113.628 84.9227 117.383 79.888L120.199 82.448ZM194.804 15.76L162.804 91.28L130.804 15.76H134.9L162.804 81.424L190.708 15.76H194.804ZM209.285 15.76H213.125V90H209.285V15.76ZM287.074 82.448C282.381 88.336 274.701 91.28 264.034 91.28C253.367 91.28 245.73 88.2507 241.122 82.192C236.514 76.1333 234.21 66.3627 234.21 52.88C234.21 39.3973 236.514 29.6267 241.122 23.568C245.73 17.5093 253.367 14.48 264.034 14.48C276.407 14.48 284.813 18.5333 289.25 26.64L257.89 52.88H251.874L284.258 25.872C280.503 20.8373 273.762 18.32 264.034 18.32C259.767 18.32 256.183 18.7893 253.282 19.728C250.381 20.5813 247.693 22.2453 245.218 24.72C242.829 27.1093 241.037 30.6507 239.842 35.344C238.647 39.952 238.05 45.7973 238.05 52.88C238.05 59.9627 238.647 65.8507 239.842 70.544C241.037 75.152 242.829 78.6933 245.218 81.168C247.693 83.5573 250.381 85.2213 253.282 86.16C256.183 87.0133 259.767 87.44 264.034 87.44C273.762 87.44 280.503 84.9227 284.258 79.888L287.074 82.448ZM301.775 15.76L329.679 81.424L349.007 35.984L368.207 81.424L394.447 19.6H311.887V15.76H400.207L368.207 91.28L349.007 45.84L329.679 91.28L297.679 15.76H301.775ZM434.244 14.224C444.825 14.224 452.335 16.5707 456.772 21.264L454.212 24.08C450.116 20.0693 443.631 18.064 434.756 18.064C421.444 18.064 414.788 23.3547 414.788 33.936C414.788 38.032 416.409 41.3173 419.652 43.792C422.895 46.1813 426.82 48.016 431.428 49.296C436.121 50.576 440.772 51.9413 445.38 53.392C450.073 54.7573 454.041 57.0187 457.284 60.176C460.527 63.248 462.148 67.3013 462.148 72.336C462.148 78.224 459.716 82.9173 454.852 86.416C449.988 89.9147 442.948 91.664 433.732 91.664C429.209 91.664 424.729 91.0667 420.292 89.872C415.94 88.6773 412.697 86.928 410.564 84.624L413.124 81.808C417.476 85.8187 424.175 87.824 433.22 87.824C441.497 87.824 447.727 86.288 451.908 83.216C456.175 80.144 458.308 76.56 458.308 72.464C458.308 68.1973 456.687 64.7413 453.444 62.096C450.201 59.4507 446.233 57.488 441.54 56.208C436.932 54.8427 432.281 53.4773 427.588 52.112C422.98 50.6613 419.055 48.4427 415.812 45.456C412.569 42.4693 410.948 38.544 410.948 33.68C410.948 27.1093 413.124 22.2453 417.476 19.088C421.913 15.8453 427.503 14.224 434.244 14.224Z" fill="white" />
                    </svg>
                </div>
                <p>{props.textIn}</p>
            </header>
        </div>
    );
}

const HeaderReviewsContainer: React.FC = () => {
    const textIn = 'искусство в каждом штрихе';

    return (
        <HeaderReviews
            textIn={textIn}
        />
    )
}
export default HeaderReviewsContainer;