import React, { useState, useEffect } from 'react';
import './CurrencySection.css'; // Importe um arquivo CSS para estilização

const CurrencySection = () => {
    const [currencyData, setCurrencyData] = useState([]);

    useEffect(() => {
        // Função para buscar os dados do JSON
        const fetchData = async () => {
            try {
                const response = await fetch('/currency_data.json');
                const data = await response.json();
                setCurrencyData(data);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

        // Chamada da função para buscar os dados do JSON
        fetchData();
    }, []);

    return (
        <div className="currency-section-container">
            <div className="currency-header">
                <img src="/image.png" alt="Logo" className="logo" />
                <h1>Cotações de Moedas</h1>
                <img src="/image.png" alt="Logo" className="logo" />
            </div>
            <table className="currency-table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {currencyData.map((currency, index) => (
                        <tr key={index} className={new Date(currency.date) < new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000) ? 'red-row' : 'green-row'}>
                            <td>{currency.code}</td>
                            <td>{currency.value}</td>
                            <td>{currency.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CurrencySection;
