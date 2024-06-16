import React from 'react';

import '../css/header.css'
interface HeaderTattooProps {
    textIn: string;
}
const HeaderTattoo: React.FC<HeaderTattooProps> = (props) => {
    return (
        <div>
            <header className='header-tattoo'>
                <div>

                    <svg width="408" height="92" viewBox="0 0 408 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64.92 0.399994V4.24H34.84V90H31V4.24H0.92V0.399994H64.92ZM85.819 86.16H127.547L101.307 24.336L73.403 90H69.307L101.307 14.48L133.307 90H85.819V86.16ZM195.91 15.76V19.6H169.03V90H165.19V19.6H138.31V15.76H195.91ZM258.66 15.76V19.6H231.78V90H227.94V19.6H201.06V15.76H258.66ZM310.786 19.728C307.885 18.7893 304.301 18.32 300.034 18.32C295.767 18.32 292.183 18.7893 289.282 19.728C286.381 20.5813 283.693 22.2453 281.218 24.72C278.829 27.1093 277.037 30.6507 275.842 35.344C274.647 39.952 274.05 45.7973 274.05 52.88C274.05 59.9627 274.647 65.8507 275.842 70.544C277.037 75.152 278.829 78.6933 281.218 81.168C283.693 83.5573 286.381 85.2213 289.282 86.16C292.183 87.0133 295.767 87.44 300.034 87.44C304.301 87.44 307.885 87.0133 310.786 86.16C313.687 85.2213 316.333 83.5573 318.722 81.168C321.197 78.6933 323.031 75.152 324.226 70.544C325.421 65.8507 326.018 59.9627 326.018 52.88C326.018 45.7973 325.421 39.952 324.226 35.344C323.031 30.6507 321.197 27.1093 318.722 24.72C316.333 22.2453 313.687 20.5813 310.786 19.728ZM322.946 82.192C318.338 88.2507 310.701 91.28 300.034 91.28C289.367 91.28 281.73 88.2507 277.122 82.192C272.514 76.1333 270.21 66.3627 270.21 52.88C270.21 39.3973 272.514 29.6267 277.122 23.568C281.73 17.5093 289.367 14.48 300.034 14.48C310.701 14.48 318.338 17.5093 322.946 23.568C327.554 29.6267 329.858 39.3973 329.858 52.88C329.858 66.3627 327.554 76.1333 322.946 82.192ZM388.411 19.728C385.51 18.7893 381.926 18.32 377.659 18.32C373.392 18.32 369.808 18.7893 366.907 19.728C364.006 20.5813 361.318 22.2453 358.843 24.72C356.454 27.1093 354.662 30.6507 353.467 35.344C352.272 39.952 351.675 45.7973 351.675 52.88C351.675 59.9627 352.272 65.8507 353.467 70.544C354.662 75.152 356.454 78.6933 358.843 81.168C361.318 83.5573 364.006 85.2213 366.907 86.16C369.808 87.0133 373.392 87.44 377.659 87.44C381.926 87.44 385.51 87.0133 388.411 86.16C391.312 85.2213 393.958 83.5573 396.347 81.168C398.822 78.6933 400.656 75.152 401.851 70.544C403.046 65.8507 403.643 59.9627 403.643 52.88C403.643 45.7973 403.046 39.952 401.851 35.344C400.656 30.6507 398.822 27.1093 396.347 24.72C393.958 22.2453 391.312 20.5813 388.411 19.728ZM400.571 82.192C395.963 88.2507 388.326 91.28 377.659 91.28C366.992 91.28 359.355 88.2507 354.747 82.192C350.139 76.1333 347.835 66.3627 347.835 52.88C347.835 39.3973 350.139 29.6267 354.747 23.568C359.355 17.5093 366.992 14.48 377.659 14.48C388.326 14.48 395.963 17.5093 400.571 23.568C405.179 29.6267 407.483 39.3973 407.483 52.88C407.483 66.3627 405.179 76.1333 400.571 82.192Z" fill="white" />
                    </svg>

                </div>
                <p>{props.textIn}</p>

            </header>
        </div>
    );
}

const HeaderTattooContainer: React.FC = () => {
    const textIn = 'искусство в каждом штрихе';

    return (
        <HeaderTattoo
            textIn={textIn}
        />
    )
}
export default HeaderTattooContainer;