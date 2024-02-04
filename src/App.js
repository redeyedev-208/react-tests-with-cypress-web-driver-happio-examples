import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://www.deque.com/'
          target='_blank'
          rel='noopener noreferrer'
          data-testid='learn-link'
        >
          Learn web accessibility with Deque and how to run tests with jest.
        </a>
      </header>
    </div>
  );
}

export default App;
