import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { estiloBoton, cssSearch } from './components/styles'

function Search({ alRegresar }) {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('Dark Magician');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchCards = async (query) => {
        if (!query) return;
        setLoading(true);
        setError('');

        try {
            const res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${query}`);
            setCards(res.data.data.slice(0, 16));
        } catch (err) {
            setError('No se encontraron cartas con ese nombre. Intenta buscar en inglés si no aparece.');
            setCards([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        searchCards('Dark Magician');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCards(search);
    };

    return (
        <>
            <style>{cssSearch}</style>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                >
                </input>
                <button style={estiloBoton} type="submit">
                    Buscar
                </button>
            </form>

            <div className="grid-cartas">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="card-header">
                            <img src={card.card_images[0].image_url_small} className="card-img" />
                            <strong>{card.name}</strong>
                        </div>
                        <p className="card-desc">{card.desc}</p>
                        <button style={estiloBoton}>
                            View More
                        </button>
                    </div>
                ))}
            </div>
            <button style={estiloBoton} onClick={alRegresar}>
                Regresar al Home
            </button>
        </>
    );
};

export default Search;