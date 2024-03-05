import { Container } from '@mui/material';
import Weather from './components/Weather';
import ToDo from './components/ToDo';

function App() {
  return (
    <div style={{ backgroundColor: '#94C3C3', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', display: 'flex' }}>
      <Container maxWidth="lg" style={{ backgroundColor: '#F6F6F6', borderRadius: '10px', padding: '1%', marginTop: '5%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '2%', width: '100%' }}>
          <Weather />
        </div>
        <div style={{ width: '100%' }}>
          <ToDo />
        </div>
      </Container>
    </div>
  );
}

export default App;
