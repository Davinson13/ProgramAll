import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailsCards from './DetailsCards';
import { estiloBoton, cssSearch, estiloContenedor } from './components/styles'

function Search({ alRegresar }) {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('Dark Magician');
    const [selectedCard, setSelectedCard] = useState(null);
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
        <div style={estiloContenedor}>
            {/* Inyectamos el CSS de las cards */}
            <style>{cssSearch}</style>

            {/* MOSTRAR DETALLES (MODAL) SI HAY UNA CARTA SELECCIONADA */}
            {selectedCard && (
                <DetailsCards 
                    carta={selectedCard} 
                    alCerrar={() => setSelectedCard(null)} 
                />
            )}

            <button style={estiloBoton} onClick={alRegresar}>
                Regresar al Home
            </button>

            <h1>Buscador Yu-Gi-Oh</h1>

            <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Escribe el nombre de una carta..."
                />
                <button style={estiloBoton} type="submit">
                    Buscar
                </button>
            </form>

            {loading && <p>Cargando cartas...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* GRID DE RESULTADOS */}
            <div className="grid-cartas">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="card-header">
                            <img 
                                src={card.card_images[0].image_url_small} 
                                className="card-img" 
                                alt={card.name}
                            />
                            <strong>{card.name}</strong>
                        </div>
                        <p className="card-desc">{card.desc}</p>
                        
                        {/* ESTE ES EL BOTÓN QUE AHORA SÍ FUNCIONA */}
                        <button 
                            style={estiloBoton} 
                            onClick={() => setSelectedCard(card)}
                        >
                            View More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;