import React from "react";

import '../css/price.css'

interface PriceInfoProps {
    title: string;
    liltitleOne: string;
    textOne: string;
    liltitleTwo: string;
    textTwo: string;
    liltitleThree: string;
    textThree: string;
    liltitleFour: string;
    textFour: string;
    liltitleFive: string;
    textFive: string;
}
const PriceInfo: React.FC<PriceInfoProps> = (props) => {
    return (
        <div className="text-container">
            <h2>{props.title}</h2>

            <h3>{props.liltitleOne}</h3>
            <p>{props.textOne}</p>

            <h3>{props.liltitleTwo}</h3>
            <p>{props.textTwo}</p>

            <h3>{props.liltitleThree}</h3>
            <p>{props.textThree}</p>

            <h3>{props.liltitleFour}</h3>
            <p>{props.textFour}</p>

            <h3>{props.liltitleFive}</h3>
            <p>{props.textFive}</p>
        </div>
    );
}

const PriceInfoContainer: React.FC = () => {
    const title = 'Что влияет на цену тату?';

    const liltitleOne = 'Размер татуировки';
    const textOne = 'Размер — это один из основных факторов, влияющих на стоимость татуировки. Чем больше изображение, тем больше требуется времени и расходных материалов для выполнения тату – соответственно, чем больше татуировка, тем дороже она стоит. Как говориться, размер имеет значение))';

    const liltitleTwo = 'Место наннесения татуировки';
    const textTwo = 'Место для тату также влияет на стоимость услуги. Например, татуировки на кистях рук, на шее и татуировка интимных мест в силу своей некоторой специфики могут стоить дороже.';

    const liltitleThree = 'Сложность рисунка';
    const textThree = 'Сложные татуировки делаются дольше, и работа может разбиваться на несколько сеансов. Кроме того, при расчёте стоимости, учитывается степень заливки рисунка, его «нагруженность», количество цветов и т.д.';

    const liltitleFour = 'Уровень и специализация тату-мастера';
    const textFour = 'Как правило разные мастера специализируются на разных художественных стилях тату. Это могут быть: олд скул или нью скул, чикано, реализм и абстракционизм, органика, биомеханника, акварель, минимализм и другие. В зависимости от специализации и уровня мастера стоимость одного сеанса может отличаться.';

    const liltitleFive = 'Качество и безопасность материалов';
    const textFive = 'Все работы в целях безопасности мы делаем новым комплектом расходников и используем краски ведущих американских производителей. В связи с этим мы закладываем их стоимость в цену наших работ, поэтому качественное и безопасное тату не может стоить 10$.';

    return(
        <PriceInfo
        title={title}
        liltitleOne={liltitleOne}
        textOne={textOne}
        liltitleTwo={liltitleTwo}
        textTwo={textTwo}
        liltitleThree={liltitleThree}
        textThree={textThree}
        liltitleFour={liltitleFour}
        textFour={textFour}
        liltitleFive={liltitleFive}
        textFive={textFive}
        />
    );
}
export default PriceInfoContainer;
