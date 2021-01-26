import './App.less';
import Layout from './components/Layout'
import Router from './routers'

function App() {
  return (
    <div className='app' >
      <Layout>
        <Router/>
      </Layout>
    </div>
  );
}

export default App;
