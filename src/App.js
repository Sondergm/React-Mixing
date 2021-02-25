import './App.less';
import Layout from './components/Layout'
import Router from './routers'

function App() {
  return (
    <div className='app' >
      <Layout render={data => <Router msg={data} />}/>
    </div>
  );
}

export default App;
