import React from "react";

import '../css/footer.css'

interface FooterProps {
    titleOne: string;
    firstText: string;
    secondText: string;
    thirdText: string;
    forthText: string;
    titleTwo: string;
    fifthText: string;
    titleThree: string;
    linkOne: string;
    linkTwo: string;
    conclusion: string;
}

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <div>
            <div className="content-container">

                <div className="content">
                    <h3>{props.titleOne}</h3>
                    <p>{props.firstText}</p>
                    <p>{props.secondText}</p>
                    <p>{props.thirdText}</p>
                    <p className="last">{props.forthText}</p>
                </div>

                <div className="content">
                    <h3>{props.titleTwo}</h3>
                    <p>{props.fifthText}</p>
                </div>

                <div className="content">
                    <h3>{props.titleThree}</h3>
                    <p><a href="#">{props.linkOne}</a></p>
                    <p><a href="#">{props.linkTwo}</a></p>
                </div>

                <div className="content"><p>{props.conclusion}</p></div>
            </div>

        </div>
    )
}

const FooterContainer: React.FC = () => {

    const titleOne = 'О нас';
    const firstText = 'УНП: 193297292.';
    const secondText = 'Адрес салона: г. Минск, ул. Рафиева, 55, кабинет 39 (3-й этаж)';
    const thirdText = 'Регистрационный номер в торговом реестре РБ: 466755.'
    const forthText = 'Дата регистрации: 27 ноября 2019 г.';

    const titleTwo = 'График работы';
    const fifthText = 'Мы работаем для вас с 12:00 до 21:00 без выходных.';

    const titleThree = 'Социальные сети';
    const linkOne = 'Instagram';
    const linkTwo = 'Telegram';

    const conclusion = 'Вся информация на сайте, включая фотографии работ, являются интеллектуальной собственностью организации. Копирование и использование возможно при получении письменного разрешения ООО «BodyArt» и с указанием ссылки на BodyArt.by';
    return (
        <Footer
            titleOne={titleOne}
            firstText={firstText}
            secondText={secondText}
            thirdText={thirdText}
            forthText={forthText}
            titleTwo={titleTwo}
            fifthText={fifthText}
            titleThree={titleThree}
            linkOne={linkOne}
            linkTwo={linkTwo}
            conclusion={conclusion}
        />
    )
}
export default FooterContainer;