import Create from './pages/Create';
import Notes from './pages/Notes';
import Appbar from './components/Appbar';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#8bc34a',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Appbar/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
