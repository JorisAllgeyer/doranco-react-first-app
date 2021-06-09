import './App.css';
import Layout from './Layout/Layout';

function App() {
    const containerClass = "App";

    const headerContent = {
        user: {
            firstname: "Joe"
        },
        content: {
            greetingMessage: "Hello, "
        }
    }

    const menuContent = [
        { background: 'green', name: "menu Item 1", id: "menuItem1" },
        { background: 'violet', name: "menu Item 2", id: "menuItem2" },
        { background: 'blue', name: "menu Item 3", id: "menuItem3" }
    ]

    return (
        <div className={containerClass}>
            <Layout menuContent={menuContent}
                headerContent={headerContent}>

                {/* <CentralPanel></CentralPanel> */}
                <div>contenu</div>
            </Layout>
        </div>
    );
}

export default App;
