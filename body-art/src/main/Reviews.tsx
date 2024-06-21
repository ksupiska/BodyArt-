import React from "react";

import Navigation from "../components/Navigation";
import ReviewForm from "../components/ReviewForm";

import '../css/review-page.css'
const Reviews: React.FC = () => {
    return (
        <div>
            <Navigation />
            <div className="container">
                <h2>Тут вы можете оставить свой отзыв о нашей работе!</h2>
                <p>Спасибо, что пользуетесь нашими услугами</p>
                <div className="code-of-conduct">
                    <h2>Наш кодекс:</h2>
                    <ul>
                        <li>Каждый клиент у нас в приоритете.</li>
                        <li>Мы стремимся к высокому качеству обслуживания и работ.</li>
                        <li>Прозрачность и открытость в общении с клиентами.</li>
                        <li>Индивидуальный подход к каждому клиенту.</li>
                        <li>Мы ценим ваше мнение и отзывы помогают нам стать лучше.</li>
                    </ul>
                </div>
            </div>
            <ReviewForm />
        </div>
    );
}

export default Reviews;
