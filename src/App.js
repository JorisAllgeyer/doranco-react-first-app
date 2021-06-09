import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
    const text = "Hello world";
    const containerClass = "App";

    const user = {
        firstname: "Joe"
    }

    const content_fr = {
        greetingMessage: "Hello, "
    }

    const listKeyValues = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    }

    return (
        <div className={containerClass}>
            <Header 
                pseudo={user.firstname} 
                message={content_fr.greetingMessage}
                { ...listKeyValues}>
                
                <span>Partie droite</span>
                <p>Petit paragraphe</p>
            </Header>
            <h2>{text}</h2>
            <Footer />
        </div>
    );
}

export default App;
