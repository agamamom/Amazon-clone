import './App.css';
import { CssBaseline, Grid } from '@material-ui/core'
import Header from './components/Header/Header';
import Map, { MapContainer } from './components/Map/Map';
import List from './components/List/List';
import Home from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Home />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

