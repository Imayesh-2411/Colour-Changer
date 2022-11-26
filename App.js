import './App.css';
import CA2 from './CA2';

function App() {
    var options = [
        { 'label': 'Lime', 'value': 'lime' },
        { 'label': 'Lavender', 'value': 'lavender' },
        { 'label': 'Crimson', 'value': 'crimson' },
        { 'label': 'Yellow', 'value': 'yellow' },
        { 'label': 'Teal', 'value': 'teal' },
        { 'label': 'Rebecca Purple', 'value': 'rebeccapurple' },
        { 'label': 'Ghost White', 'value': 'ghostwhite' },
        { 'label': 'Aqua Marine', 'value': 'aquamarine' },
        { 'label': 'Alice Blue', 'value': 'aliceblue' },
        { 'label': 'Pink', 'value': 'pink' },
        { 'label': 'Dark Orange', 'value': 'darkorange' }
    ];
    return (
        <div className="App">
            <h1><u>COLOUR CHANGER</u></h1>
            <CA2 options={options} />
            
        </div>
    );
}

export default App