import './App.css';
import MonacoEditor from 'react-monaco-editor';

function App() {
  return (
    <div className='App'>
      <h2 className='heading'>Start editing:</h2>
      <MonacoEditor height='90vh' options={{ automaticLayout: true }} />
    </div>
  );
}

export default App;
