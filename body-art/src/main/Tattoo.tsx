import React from 'react';

import Navigation from '../components/Navigation';
import '../css/tattoo.css'

interface TattooProps {
    history: string;
    titleTypes: string;
    textTypes: string;
    titleTypesTwo: string;
    textTypesTwo: string;

    numOne: string;
    numTwo: string;
    numThree: string;
    numFour: string;
    numFive: string;
    numOneText: string;
    numTwoText: string;
    numThreeText: string;
    numFourText: string;
    numFiveText: string;

    textInfoOne: string;
    textInfoTwo: string;
    textInfoThree: string;
    textInfoFour: string;
}
const Tattoo: React.FC<TattooProps> = (props) => {
    return (
        <div>
            <Navigation />
            <div className='rect'>
                <svg width="217" height="58" viewBox="0 0 217 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.216 45H25.296V22.6H2.256V45H0.336V0.199997H2.256V20.68H25.296V0.199997H27.216V45ZM39.6425 7.88H41.5625V45H39.6425V7.88ZM63.497 7.112C68.7877 7.112 72.5423 8.28533 74.761 10.632L73.481 12.04C71.433 10.0347 68.1903 9.032 63.753 9.032C57.097 9.032 53.769 11.6773 53.769 16.968C53.769 19.016 54.5797 20.6587 56.201 21.896C57.8223 23.0907 59.785 24.008 62.089 24.648C64.4357 25.288 66.761 25.9707 69.065 26.696C71.4117 27.3787 73.3957 28.5093 75.017 30.088C76.6383 31.624 77.449 33.6507 77.449 36.168C77.449 39.112 76.233 41.4587 73.801 43.208C71.369 44.9573 67.849 45.832 63.241 45.832C60.9797 45.832 58.7397 45.5333 56.521 44.936C54.345 44.3387 52.7237 43.464 51.657 42.312L52.937 40.904C55.113 42.9093 58.4623 43.912 62.985 43.912C67.1237 43.912 70.2383 43.144 72.329 41.608C74.4623 40.072 75.529 38.28 75.529 36.232C75.529 34.0987 74.7183 32.3707 73.097 31.048C71.4757 29.7253 69.4917 28.744 67.145 28.104C64.841 27.4213 62.5157 26.7387 60.169 26.056C57.865 25.3307 55.9023 24.2213 54.281 22.728C52.6597 21.2347 51.849 19.272 51.849 16.84C51.849 13.5547 52.937 11.1227 55.113 9.544C57.3317 7.92267 60.1263 7.112 63.497 7.112ZM110.768 7.88V9.8H97.3275V45H95.4075V9.8H81.9675V7.88H110.768ZM136.831 9.864C135.38 9.39467 133.588 9.16 131.455 9.16C129.321 9.16 127.529 9.39467 126.079 9.864C124.628 10.2907 123.284 11.1227 122.047 12.36C120.852 13.5547 119.956 15.3253 119.359 17.672C118.761 19.976 118.463 22.8987 118.463 26.44C118.463 29.9813 118.761 32.9253 119.359 35.272C119.956 37.576 120.852 39.3467 122.047 40.584C123.284 41.7787 124.628 42.6107 126.079 43.08C127.529 43.5067 129.321 43.72 131.455 43.72C133.588 43.72 135.38 43.5067 136.831 43.08C138.281 42.6107 139.604 41.7787 140.799 40.584C142.036 39.3467 142.953 37.576 143.551 35.272C144.148 32.9253 144.447 29.9813 144.447 26.44C144.447 22.8987 144.148 19.976 143.551 17.672C142.953 15.3253 142.036 13.5547 140.799 12.36C139.604 11.1227 138.281 10.2907 136.831 9.864ZM142.911 41.096C140.607 44.1253 136.788 45.64 131.455 45.64C126.121 45.64 122.303 44.1253 119.999 41.096C117.695 38.0667 116.543 33.1813 116.543 26.44C116.543 19.6987 117.695 14.8133 119.999 11.784C122.303 8.75466 126.121 7.24 131.455 7.24C136.788 7.24 140.607 8.75466 142.911 11.784C145.215 14.8133 146.367 19.6987 146.367 26.44C146.367 33.1813 145.215 38.0667 142.911 41.096ZM172.571 26.376L181.275 45H179.163L170.203 25.8C170.288 25.7573 170.651 25.5867 171.291 25.288C171.974 24.9467 172.443 24.712 172.699 24.584C172.955 24.4133 173.382 24.136 173.979 23.752C174.576 23.368 175.024 23.0053 175.323 22.664C175.622 22.28 175.942 21.8533 176.283 21.384C176.667 20.872 176.944 20.3173 177.115 19.72C177.286 19.08 177.371 18.3973 177.371 17.672C177.371 14.984 176.091 13 173.531 11.72C170.971 10.44 167.792 9.8 163.995 9.8H158.875V45H156.955V7.88H163.995C169.03 7.88 172.827 8.75466 175.387 10.504C177.99 12.2533 179.291 14.6427 179.291 17.672C179.291 19.6347 178.63 21.384 177.307 22.92C175.984 24.4133 174.406 25.5653 172.571 26.376ZM192.195 7.88H216.963L201.923 43.4V57.8H200.003V43.4L184.963 7.88H187.011L200.963 40.712L214.083 9.8H192.195V7.88Z" fill="black" />
                </svg>
            </div>
            <div className='container'>
                <p>{props.history}</p>
            </div>
            <div className='rect'>
                <svg width="167" height="58" viewBox="0 0 167 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.96 0.199997V2.12H17.92V45H16V2.12H0.96V0.199997H32.96ZM42.2575 7.88H67.0255L51.9855 43.4V57.8H50.0655V43.4L35.0255 7.88H37.0735L51.0255 40.712L64.1455 9.8H42.2575V7.88ZM90.077 31.176L89.117 29.512L92.701 27.464C95.645 25.8427 97.117 23.2613 97.117 19.72C97.117 13.1067 92.0823 9.8 82.013 9.8H76.125V57.8H74.205V7.88H82.013C87.645 7.88 91.8903 8.92533 94.749 11.016C97.6077 13.064 99.037 15.9653 99.037 19.72C99.037 23.9867 97.245 27.1227 93.661 29.128L90.077 31.176ZM132.912 41.224C130.565 44.168 126.725 45.64 121.392 45.64C116.059 45.64 112.24 44.1253 109.936 41.096C107.632 38.0667 106.48 33.1813 106.48 26.44C106.48 19.6987 107.632 14.8133 109.936 11.784C112.24 8.75466 116.059 7.24 121.392 7.24C127.579 7.24 131.781 9.26666 134 13.32L118.32 26.44H115.312L131.504 12.936C129.627 10.4187 126.256 9.16 121.392 9.16C119.259 9.16 117.467 9.39467 116.016 9.864C114.565 10.2907 113.221 11.1227 111.984 12.36C110.789 13.5547 109.893 15.3253 109.296 17.672C108.699 19.976 108.4 22.8987 108.4 26.44C108.4 29.9813 108.699 32.9253 109.296 35.272C109.893 37.576 110.789 39.3467 111.984 40.584C113.221 41.7787 114.565 42.6107 116.016 43.08C117.467 43.5067 119.259 43.72 121.392 43.72C126.256 43.72 129.627 42.4613 131.504 39.944L132.912 41.224ZM152.935 7.112C158.225 7.112 161.98 8.28533 164.199 10.632L162.919 12.04C160.871 10.0347 157.628 9.032 153.191 9.032C146.535 9.032 143.207 11.6773 143.207 16.968C143.207 19.016 144.017 20.6587 145.639 21.896C147.26 23.0907 149.223 24.008 151.527 24.648C153.873 25.288 156.199 25.9707 158.503 26.696C160.849 27.3787 162.833 28.5093 164.455 30.088C166.076 31.624 166.887 33.6507 166.887 36.168C166.887 39.112 165.671 41.4587 163.239 43.208C160.807 44.9573 157.287 45.832 152.679 45.832C150.417 45.832 148.177 45.5333 145.959 44.936C143.783 44.3387 142.161 43.464 141.095 42.312L142.375 40.904C144.551 42.9093 147.9 43.912 152.423 43.912C156.561 43.912 159.676 43.144 161.767 41.608C163.9 40.072 164.967 38.28 164.967 36.232C164.967 34.0987 164.156 32.3707 162.535 31.048C160.913 29.7253 158.929 28.744 156.583 28.104C154.279 27.4213 151.953 26.7387 149.607 26.056C147.303 25.3307 145.34 24.2213 143.719 22.728C142.097 21.2347 141.286 19.272 141.286 16.84C141.286 13.5547 142.375 11.1227 144.551 9.544C146.769 7.92267 149.564 7.112 152.935 7.112Z" fill="black" />
                </svg>
            </div>
            <div className='container'>
                <h3><b>{props.titleTypes}</b></h3>
                <p>{props.textTypes}</p>
                <h3><b>{props.titleTypesTwo}</b></h3>
                <p>{props.textTypesTwo}</p>
            </div>
            <div className='rect'>
                <svg width="160" height="46" viewBox="0 0 160 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.312 21.576H4.304L23.888 2.12H2.256V45H0.336V0.199997H28.56L8.976 19.656H23.312V21.576ZM38.6595 43.08H59.5235L46.4035 12.168L32.4515 45H30.4035L46.4035 7.24L62.4035 45H38.6595V43.08ZM71.561 41.096C69.257 38.0667 68.105 33.1813 68.105 26.44C68.105 19.6987 69.257 14.8133 71.561 11.784C73.865 8.75466 77.6837 7.24 83.017 7.24C88.3503 7.24 92.1903 8.712 94.537 11.656L93.129 12.936C91.2517 10.4187 87.881 9.16 83.017 9.16C80.8837 9.16 79.0917 9.39467 77.641 9.864C76.1903 10.2907 74.8463 11.1227 73.609 12.36C72.4143 13.5547 71.5183 15.3253 70.921 17.672C70.3237 19.976 70.025 22.8987 70.025 26.44C70.025 29.9813 70.3237 32.9253 70.921 35.272C71.5183 37.576 72.4143 39.3467 73.609 40.584C74.8463 41.7787 76.1903 42.6107 77.641 43.08C79.0917 43.5067 80.8837 43.72 83.017 43.72C87.881 43.72 91.2517 42.4613 93.129 39.944L94.537 41.224C92.1903 44.168 88.3503 45.64 83.017 45.64C77.6837 45.64 73.865 44.1253 71.561 41.096ZM128.08 7.88V9.8H114.64V45H112.72V9.8H99.28V7.88H128.08ZM145.247 7.112C150.538 7.112 154.292 8.28533 156.511 10.632L155.231 12.04C153.183 10.0347 149.94 9.032 145.503 9.032C138.847 9.032 135.519 11.6773 135.519 16.968C135.519 19.016 136.33 20.6587 137.951 21.896C139.572 23.0907 141.535 24.008 143.839 24.648C146.186 25.288 148.511 25.9707 150.815 26.696C153.162 27.3787 155.146 28.5093 156.767 30.088C158.388 31.624 159.199 33.6507 159.199 36.168C159.199 39.112 157.983 41.4587 155.551 43.208C153.119 44.9573 149.599 45.832 144.991 45.832C142.73 45.832 140.49 45.5333 138.271 44.936C136.095 44.3387 134.474 43.464 133.407 42.312L134.687 40.904C136.863 42.9093 140.212 43.912 144.735 43.912C148.874 43.912 151.988 43.144 154.079 41.608C156.212 40.072 157.279 38.28 157.279 36.232C157.279 34.0987 156.468 32.3707 154.847 31.048C153.226 29.7253 151.242 28.744 148.895 28.104C146.591 27.4213 144.266 26.7387 141.919 26.056C139.615 25.3307 137.652 24.2213 136.031 22.728C134.41 21.2347 133.599 19.272 133.599 16.84C133.599 13.5547 134.687 11.1227 136.863 9.544C139.082 7.92267 141.876 7.112 145.247 7.112Z" fill="black" />
                </svg>
            </div>
            <div className='facts'>
                <div className='num'><h3>{props.numOne}</h3></div>
                <div className='fact'><p>{props.numOneText}</p></div>
            </div>
            <div className='facts'>
                <div className='num'><h3>{props.numTwo}</h3></div>
                <div className='fact'><p>{props.numTwoText}</p></div>
            </div>
            <div className='facts'>
                <div className='num'><h3>{props.numThree}</h3></div>
                <div className='fact'><p>{props.numThreeText}</p></div>
            </div>
            <div className='facts'>
                <div className='num'><h3>{props.numFour}</h3></div>
                <div className='fact'><p>{props.numFourText}</p></div>
            </div>
            <div className='facts'>
                <div className='num'><h3>{props.numFive}</h3></div>
                <div className='fact'><p>{props.numFiveText}</p></div>
            </div>
            <div className='rect'>
                <svg width="349" height="46" viewBox="0 0 349 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.256 45H0.336V0.199997H2.256V45ZM14.6425 45V7.88H16.5625L37.4265 41.48V7.88H39.3465V45H37.4265L16.5625 11.336V45H14.6425ZM50.8775 45V26.44C50.8775 19.6987 52.0295 14.8133 54.3335 11.784C56.6802 8.75466 60.4988 7.24 65.7895 7.24C71.9762 7.24 76.1788 9.26666 78.3975 13.32L65.0215 24.52H78.6535V26.44H59.7095L75.9015 12.936C74.0242 10.4187 70.6535 9.16 65.7895 9.16C63.6562 9.16 61.8642 9.39467 60.4135 9.864C58.9628 10.2907 57.6188 11.1227 56.3815 12.36C55.1868 13.5547 54.2908 15.3253 53.6935 17.672C53.0962 19.976 52.7975 22.8987 52.7975 26.44V45H50.8775ZM106.956 9.864C105.505 9.39467 103.713 9.16 101.58 9.16C99.4462 9.16 97.6542 9.39467 96.2035 9.864C94.7528 10.2907 93.4088 11.1227 92.1715 12.36C90.9768 13.5547 90.0808 15.3253 89.4835 17.672C88.8862 19.976 88.5875 22.8987 88.5875 26.44C88.5875 29.9813 88.8862 32.9253 89.4835 35.272C90.0808 37.576 90.9768 39.3467 92.1715 40.584C93.4088 41.7787 94.7528 42.6107 96.2035 43.08C97.6542 43.5067 99.4462 43.72 101.58 43.72C103.713 43.72 105.505 43.5067 106.956 43.08C108.406 42.6107 109.729 41.7787 110.924 40.584C112.161 39.3467 113.078 37.576 113.676 35.272C114.273 32.9253 114.572 29.9813 114.572 26.44C114.572 22.8987 114.273 19.976 113.676 17.672C113.078 15.3253 112.161 13.5547 110.924 12.36C109.729 11.1227 108.406 10.2907 106.956 9.864ZM113.036 41.096C110.732 44.1253 106.913 45.64 101.58 45.64C96.2462 45.64 92.4275 44.1253 90.1235 41.096C87.8195 38.0667 86.6675 33.1813 86.6675 26.44C86.6675 19.6987 87.8195 14.8133 90.1235 11.784C92.4275 8.75466 96.2462 7.24 101.58 7.24C106.913 7.24 110.732 8.75466 113.036 11.784C115.34 14.8133 116.492 19.6987 116.492 26.44C116.492 33.1813 115.34 38.0667 113.036 41.096ZM142.696 26.376L151.4 45H149.288L140.328 25.8C140.413 25.7573 140.776 25.5867 141.416 25.288C142.099 24.9467 142.568 24.712 142.824 24.584C143.08 24.4133 143.507 24.136 144.104 23.752C144.701 23.368 145.149 23.0053 145.448 22.664C145.747 22.28 146.067 21.8533 146.408 21.384C146.792 20.872 147.069 20.3173 147.24 19.72C147.411 19.08 147.496 18.3973 147.496 17.672C147.496 14.984 146.216 13 143.656 11.72C141.096 10.44 137.917 9.8 134.12 9.8H129V45H127.08V7.88H134.12C139.155 7.88 142.952 8.75466 145.512 10.504C148.115 12.2533 149.416 14.6427 149.416 17.672C149.416 19.6347 148.755 21.384 147.432 22.92C146.109 24.4133 144.531 25.5653 142.696 26.376ZM166.096 43.08H190.8V10.568L176.4 24.968L162 10.568V45L160.08 44.936V7.88H162L176.4 22.28L190.8 7.88H192.72V45L166.096 44.936V43.08ZM208.285 43.08H229.149L216.029 12.168L202.077 45H200.029L216.029 7.24L232.029 45H208.285V43.08ZM263.33 7.88V9.8H249.89V45H247.97V9.8H234.53V7.88H263.33ZM270.705 7.88H272.625V45H270.705V7.88ZM303.456 9.864C302.005 9.39467 300.213 9.16 298.08 9.16C295.946 9.16 294.154 9.39467 292.704 9.864C291.253 10.2907 289.909 11.1227 288.672 12.36C287.477 13.5547 286.581 15.3253 285.984 17.672C285.386 19.976 285.088 22.8987 285.088 26.44C285.088 29.9813 285.386 32.9253 285.984 35.272C286.581 37.576 287.477 39.3467 288.672 40.584C289.909 41.7787 291.253 42.6107 292.704 43.08C294.154 43.5067 295.946 43.72 298.08 43.72C300.213 43.72 302.005 43.5067 303.456 43.08C304.906 42.6107 306.229 41.7787 307.424 40.584C308.661 39.3467 309.578 37.576 310.176 35.272C310.773 32.9253 311.072 29.9813 311.072 26.44C311.072 22.8987 310.773 19.976 310.176 17.672C309.578 15.3253 308.661 13.5547 307.424 12.36C306.229 11.1227 304.906 10.2907 303.456 9.864ZM309.536 41.096C307.232 44.1253 303.413 45.64 298.08 45.64C292.746 45.64 288.928 44.1253 286.624 41.096C284.32 38.0667 283.168 33.1813 283.168 26.44C283.168 19.6987 284.32 14.8133 286.624 11.784C288.928 8.75466 292.746 7.24 298.08 7.24C303.413 7.24 307.232 8.75466 309.536 11.784C311.84 14.8133 312.992 19.6987 312.992 26.44C312.992 33.1813 311.84 38.0667 309.536 41.096ZM323.58 45V7.88H325.5L346.364 41.48V7.88H348.284V45H346.364L325.5 11.336V45H323.58Z" fill="black" />
                </svg>
            </div>
            <div className='facts'>
                <div className='num'>
                    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="67" height="67" fill="url(#pattern0_15_56)" />
                        <defs>
                            <pattern id="pattern0_15_56" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_15_56" transform="scale(0.0078125)" />
                            </pattern>
                            <image id="image0_15_56" width="128" height="128" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAB+VJREFUeJztnUuPVEUUx389MCAQXUF4GUHcSEjASXQDW2Ehn0CRrwA+IdGgLGAhmnGlC0a3oF9ChiDjVkUTYAWYsBHi8Fgwocd2UX2cme6q231v1+NUU7+kNv2499z6/++r6txz4dljJ/AVcA143G3Xup/tTBZVITgt4CSwAHQcbQE4kSrAQjgmgPO4he9t57v/KYwBLeBbhhdf2vcUE2RPU/GLCcaACWAGt7jTwOZum6743QzFBNkxaM//xPKfDyp+X44EGdFEfKGYIHNGEV8oJsgUH+ILxQSZ4VN8oZggE0KILxQTKCek+EIxgVJawDeEFV8oJlBGTPGFYgIlpBBfKCZITErxhWKCRGgQXygmiIwm8YVigkhoFF8oJgiMZvGFYoJAtKhO49KUu/cx7jjPY7alUJPT6N7ze6k6EnyWMK4smQL+Rf+e38sJ7DEvAnsTxpUdP5Kf+ILLBBdSBpUTq4EH9HfgmZRB1eQs/fHPA6tSBpULL9LfeQ+AyZRB1WQSeEj/dmxLGZQNjbcoay2fPQKexg5kBJ5iYu7ludiB5MgGoE3/3nMwZVA1OUR//G1gXcqgcuIq/R34D/BGyqCG5DXgHv3xX04ZVG4cxX4lrd0ELvE7wNsJ48qOCWAWe0fex4wTaGMKE5st5p/Qeb2lmo3AdfIwQZX41zHbUmjAZuBPdJ8Oqg77N1B465cbmk1QxI+ERhMU8WswCWwHXsHc5zdBkwlCib8B00fbyWvk08kUZmJn+bBoG5gD3qX+lbEGE/gWfwJz2zuHmTVcPvz9Q3d92dECPsc9pSttFthUc9kpTeBb/E2YAaKqPlrE5BNkk1QyKI2rt93EHPLqkMIEvsWv2gZbyyK9rK74uZggtfhZmGBQKbaHwN2K76/jtyN9mcC3+NtwD3B1MH1km0qWprKE3SDxz7J0VXuQ6lEzTSaoEv9mg1irxL/P0oznJPakEpUmaJK6PahjNZwOYsf4uuU/6lPOR8nb12wCDeILak3g46ENjSbQJL6gzgQ+n9jRZAKN4gtqTBDicS0NJtAsvpDcBCGf1fMtwDbMbZptefeBA8t+e6Bi3b7v85uKLyQzQYyCTDFN0MYMw17GnoSqUXwhugliiC/EPBRXNS2HfRfRTBBTfCG1CbSLLwQ3QQrxBd8m2IKZch0k/tXub+uQQnwhmAlSii/4NsEa4Dhw27K8W8Cx7m/qkFJ8wbsJNIgv+DaBsBs43G2vNlyGBvEFbybQJL4QygSjoEl8YWQTaBRf0GQCjeILjU2gWXxBgwk0iy/UNkFOBZmqnsK5Qf0r+DpsoXp0UdPTSq5KJR0shatOVvxYk/hClQnmqH8lPwxrgV8c69QmvlBlgv913QE8cfxIw2HfRdXp4HiA9bkOq1oO+y5ccS8AL4N5aXIue34vriPBbc/raQF3LOvRuuf34joSnAP4w/LFdJIwm3EA+2TObo/r2GNZfpuVM4ra+Zr+bfgdTC2b3i9CXkiFwPZwxVsel3/YsvxZj8uPwVb6t+FR8qTCQlI6ANfI+xSwn3SngP0e1xEa2/uRfwP40vJFB1MAWTuuO4Fbntfjugi8Rx4Pb7qKWX8B43kbeCzA+t53rCv720CoHjDQeCSYwi3+VcINBLnyCe6h83awqoz9Cl0HDQVrMkGV+CmHgrWZYNA7DPrI4e0cZTJoOEaaEdRqAg3iC5pN4CUnQJsJNIkvaDSB16wgLSYIJf4ellLC9jRchiYTBMkLTG0C3+KvxdzO/WVZ3h3gPUpS6AoGmeDTUaIeQIi0cNd8/vI2h/+08JCFqz50rHdk8YUUJhjHB0NCmCC4+EJME6QWPxcTRBNfiGGC2A+HXuq2mA+H+jBBdPGFkCYYVI0r5OPh+wesW5MJqsT/DgU1ApqYIGYdPteV+T7gb8d/tJwOkosv+DSBBvEFzSZQI77gwwSaxBc0mkCd+MIoJtAovqDJBGrFF5qYQLP4ggYTqBdfqFMq9hBxS8WOMhTr2wRjWSpW0Fgs2sc4fEwTdDB9ZEvVVy2+0LRcvJbDvouYp4Oqpuqw76KuCbSLL6Q2QRbiCy3Ma06WvwPH1i5R/6WKKadf9+F3qHojpg+q+mgROEVGr4xZzj7gIjDP0ga1gSvAO/h/aVSMuXff8xUTwBHgZ1bOScwDF4C9XqJOzGpMx+wC1jdchgbxhVBZSusxfbQd02eFLprEFzTmKY4lGsUXigkCo1l8oZggEJsor49/ZpnA/UZNbeILVSaYJaN7eA0cJS/xhSoTHEkYV3bYnsLVcs4fhOua4ErKoHJiPfYkzTdTBlWTg/TH3wbWpQwqF3bR33l3k0bUDNvM566kEVnQeGHyxPLZ8yzlE+TAGuAFy+e2bSv0sBp4QP/ecyZlUDWxJXPMA6tSBpUTF7FfSedQvdRVbudCyqByYy/uqeSQD6SOiiuHb5E8qomp4jT2ztRqgqoEzlMJ48qWnApX1arNXxielPUJhiWb1O1c0WyCIn4kNJqgiB8ZTSYo4idCgwmK+IlJWb2siK+EFCYo4isjpgmK+EqJYYJkBZkKwxHSBEX8TAhhgiJ+Zvg0QRE/U3yYoIifOaOYoIg/JjQxQRF/zJgAZnCLOo15nepW7O/VlTZDET9bmtYsKnv+GNHUBEX8MWJQCbveproUW6EZLUzu3gJu4Z8AH6UKsBCHHcA5zJuzH3fbr93PXkoYVxL+A2to95nJe1H6AAAAAElFTkSuQmCC" />
                        </defs>
                    </svg>
                </div>
                <div className='fact'><p>{props.textInfoOne}</p></div>
            </div>
            <div className='facts'>
                <div className='num'>
                    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="67" height="67" fill="url(#pattern0_15_56)" />
                        <defs>
                            <pattern id="pattern0_15_56" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_15_56" transform="scale(0.0078125)" />
                            </pattern>
                            <image id="image0_15_56" width="128" height="128" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                </div>
                <div className='fact'><p>{props.textInfoTwo}</p></div>
            </div>
            <div className='facts'>
                <div className='num'>
                    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="67" height="67" fill="url(#pattern0_15_56)" />
                        <defs>
                            <pattern id="pattern0_15_56" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_15_56" transform="scale(0.0078125)" />
                            </pattern>
                            <image id="image0_15_56" width="128" height="128" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                </div>
                <div className='fact'><p>{props.textInfoThree}</p></div>
            </div>
            <div className='facts'>
                <div className='num'>
                    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="67" height="67" fill="url(#pattern0_15_56)" />
                        <defs>
                            <pattern id="pattern0_15_56" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_15_56" transform="scale(0.0078125)" />
                            </pattern>
                            <image id="image0_15_56" width="128" height="128" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                </div>
                <div className='fact'><p>{props.textInfoFour}</p></div>
            </div>
        </div>
    );
}

const TattooContainer: React.FC = () => {
    const history = 'Целенаправленное нанесение себе узоров из тонких продолговатых шрамов с вкраплением в свежую рану различных измельчённых инородных химических элементов (красителей) и без, по всей вероятности, является и первобытной формой искусства, сопровождающего человеческую цивилизацию с доисторических времён, что подтверждается раскопками и результатами углеродного анализа останков древних людей.';
    const titleTypes = 'Постоянные';
    const textTypes = 'Наносится под кожу с помощью одной или нескольких игл. При правильном нанесении и использовании качественного пигмента такая татуировка может выцвести, но только в случае её стаpости или пpи непpавильном заживлении.';
    const titleTypesTwo = 'Косметические';
    const textTypesTwo = 'Татуировки часто используют в косметических целях для ликвидации различных пятен или для нанесения макияжа на лицо — так называемый перманентный макияж. Перманентному макияжу могут подвергаться губы, брови или глаза (веки), шрамы, имитировать румяна и волосы (маскировка шрамов после пересадки волос). Перманентный макияж рассчитан на срок от 1 года до 5 лет.';

    const numOne = '01';
    const numTwo = '02';
    const numThree = '03';
    const numFour = '04';
    const numFive = '05';
    const numOneText = 'Несмотря на то, что когда-то татуировки считались более мужским занятием, в современном обществе большинство обладательниц татуировок — именно девушки. Фактически, в исследовании, проведенном в 2006 году, примерно 23% американских женщин носят на своем теле хотя бы одну татуировку, в то время как процент татуированных мужчин достигает всего лишь 19%.';
    const numTwoText = 'Пигмент татуировки помещается не в эпидермис, а в дерму, то есть второй слой кожи. Эпидермис считается нестабильным по сравнению с дермой, поскольку он теряет клетки с течением времени.';
    const numThreeText = 'Существует мнение, что гейши наносят на свое тело рисунки, чтобы не оказаться полностью оголенной перед мужчиной. Считается, что татуированное тело является уже одетым. Нетронутыми у девушек оставались только лицо, ступни и ладони.';
    const numFourText = 'Есть человек, который покрыл 100% своего тела татуировками! Его зовут Lucky Diamond Rich (он родился в 1971 году ). Все части его тела покрыты чернилами, включая рот, уши и внутреннюю часть крайней плоти!';
    const numFiveText = 'Черные пигменты — самые легкие для удаления с помощью лазера. Черный цвет поглощает больше лазерных лучей, чем любой другой цвет, что позволяет более эффективно разрушить пигмент. Самыми сложными цветами для удаления являются зеленые и желтые оттенки.';

    const textInfoOne = 'Татуировки на любом участке тела. Любого размера, типа, цветные и чёрно-белые. В разных художественных стилях: ньюскул, олд-скулл, минимализм, реализм, абстракционизм, хоррор-реализм, биомеханика, блек энд грей, кельтика, готика, барроко, фэнтези, чикано, майя и другие.';
    const textInfoTwo = 'Перекрытие тату (нанесение новой татуировки поверх старой). Исправление некачественных работ «дворовых» мастеров. Подберём новый рисунок так чтобы старого не было видно или разработаем эскиз чтобы старая тату «вписалась» в новый рисунок.';
    const textInfoThree = 'Маскировка татуировкой (перекрытие) послеоперационных, послеродовых и других шрамов, дефектов и изъянов кожи. Перекрытие ожогов, скрытие растяжек (стрий). Подбор необходимого рисунка с учётом конкретного случая или разработка индивидуального эскиза.';
    const textInfoFour = 'Реставрация тату. Обновление, реставрация, раскрашивание старых тату. Коррекция татуировок частичная или полная (контурная обводка, ретуширования цветов и т.д.) для увеличения чёткости или яркости.';

    return (
        <Tattoo
            history={history}
            titleTypes={titleTypes}
            textTypes={textTypes}
            titleTypesTwo={titleTypesTwo}
            textTypesTwo={textTypesTwo}

            numOne={numOne}
            numTwo={numTwo}
            numThree={numThree}
            numFour={numFour}
            numFive={numFive}
            numOneText={numOneText}
            numTwoText={numTwoText}
            numThreeText={numThreeText}
            numFourText={numFourText}
            numFiveText={numFiveText}

            textInfoOne={textInfoOne}
            textInfoTwo={textInfoTwo}
            textInfoThree={textInfoThree}
            textInfoFour={textInfoFour}
        />
    );
}
export default TattooContainer;
