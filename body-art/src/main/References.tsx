
import Navigation from "../components/Navigation";
import CarouselLines from "../components/CarouselLines";
import CarouselAnimals from "../components/CarouselAnimals";
import CarouselAnime from "../components/CarouselAnime";

import '../css/references.css'
const References: React.FC = () => {
    return (
        <div>
            <Navigation />

            <div className="container">
                <h2>Выбор стиля татуировки</h2>
                <p>
                    Выбор стиля татуировки — это важный шаг, который зависит от ваших
                    предпочтений, индивидуальности и желаемого эффекта. Некоторые из
                    популярных стилей включают:
                </p>
                <ul className="tattoo-styles">
                    <li>Реалистичные татуировки</li>
                    <li>Традиционные (Old School)</li>
                    <li>Биомеханика</li>
                    <li>Блэкворк</li>
                    <li>Граффити</li>
                    <li>Трибал</li>
                    <li>Геометрические узоры</li>
                </ul>
                <h2>Тут вы можете выбрать референс тату или уже на месте проконсультироваться с мастером</h2>
            </div>

            <div className="container"><h2>Линии</h2></div>
            <CarouselLines />

            <div className="container"><h2>Животные</h2></div>
            <CarouselAnimals/>

            <div className="container"><h2>Аниме</h2></div>
            <CarouselAnime/>
        </div>
    );
}

export default References;
