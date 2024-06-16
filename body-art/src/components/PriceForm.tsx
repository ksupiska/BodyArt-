import React, { useState } from "react";

import '../css/price.css'

const PriceForm: React.FC = () => {
    const [length, setLength] = useState<number | string>('');
    const [width, setWidth] = useState<number | string>('');
    const [bodyPart, setBodyPart] = useState<string>('');
    const [price, setPrice] = useState<number | null>(null);

    const bodyPartPrices: { [key: string]: number } = {
        arm: 100,
        leg: 120,
        back: 150,
        chest: 140,
    };

    const calculatePrice = () => {
        const area = (Number(length) * Number(width)) / 100; // Площадь в квадратных сантиметрах
        const basePrice = bodyPartPrices[bodyPart] || 0;
        const totalPrice = area * basePrice;
        setPrice(totalPrice);
    };

    return (
        <div className="price-form">
            <h2>Расчет стоимости татуировки</h2>
            <div>
                <label>
                    Длина (см):
                    <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Ширина (см):
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Часть тела:
                    <select
                        value={bodyPart}
                        onChange={(e) => setBodyPart(e.target.value)}
                    >
                        <option value="">Выберите часть тела</option>
                        <option value="arm">Рука</option>
                        <option value="leg">Нога</option>
                        <option value="back">Спина</option>
                        <option value="chest">Грудь</option>
                    </select>
                </label>
            </div>
            <button onClick={calculatePrice}>Рассчитать стоимость</button>
            {price !== null && (
                <div className="price-result">
                    <h3>Примерная стоимость: {price.toFixed(2)} руб.</h3>
                </div>
            )}
        </div>
    );
};

export default PriceForm;
