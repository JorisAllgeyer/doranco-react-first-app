import { useState } from 'react';
import './App.css';
import ColorBox from './ColorBox/ColorBox';
import Layout from './Layout/Layout';
import { containerClass, headerContent, menuContent, colorsChannel } from './mockData';

function App() {

    // Compteur
    const [compteur, setCompteur] = useState(0);
    const incrementHandler = () => setCompteur(compteur + 1);
    const decrementHandler = () => setCompteur(compteur - 1);

    return (
        <div className={containerClass}>
            <Layout menuContent={menuContent}
                headerContent={headerContent}>

                {/* <div>
                    <button onClick={incrementHandler}>+</button>
                    <button onClick={decrementHandler}>-</button>
                    <span>{compteur}</span>
                </div> */}
                <ColorBox colorsChannel={colorsChannel} />
            </Layout>
        </div>
    );
}

export default App;
