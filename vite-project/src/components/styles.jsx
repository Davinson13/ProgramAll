export const estiloBoton = {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: '5px'
};

export const estiloHome = {
    textAlign: 'center',
    padding: '50px'
};

// 3. Estilos para las Cards y Grid (como texto para soportar Media Queries)
export const cssSearch = `
    .grid-cartas {
        display: grid;
        gap: 20px;
        padding: 20px;
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 600px) {
        .grid-cartas { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
        .grid-cartas { grid-template-columns: repeat(4, 1fr); }
    }
    .card {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 8px;
        background: #fff;
    }
    .card-header { display: flex; gap: 10px; align-items: center; }
    .card-img { width: 80px; height: auto; }
    .card-desc {
        font-size: 0.8rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

// --- ESTILOS DE DETAILSCARDS (MODAL) ---
export const estiloOverlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
};

export const estiloModal = {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    maxWidth: '450px',
    width: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative'
};

export const estiloContenedor = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4', // O el color que prefieras
    minHeight: '100vh'
};