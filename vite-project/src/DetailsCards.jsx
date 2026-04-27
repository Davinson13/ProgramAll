import React from 'react';
import { estiloOverlay, estiloModal, estiloBoton } from './components/styles';

function DetailsCards({ carta, alCerrar }) {
    if (!carta) return null;

    return (
        <div style={estiloOverlay}>
            <div style={estiloModal}>
                <button 
                    style={{ ...estiloBoton, float: 'right', color: 'red' }} 
                    onClick={alCerrar}
                >
                    Cerrar
                </button>
                
                <h2>{carta.name}</h2>
                <img 
                    src={carta.card_images[0].image_url} 
                    alt={carta.name} 
                    style={{ width: '100%', borderRadius: '8px' }} 
                />
                
                <div style={{ marginTop: '15px' }}>
                    <p><strong>Raza:</strong> {carta.race}</p>
                    <p><strong>Descripción:</strong></p>
                    <p style={{ fontSize: '14px', color: '#444' }}>{carta.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailsCards;