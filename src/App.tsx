import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { Geral } from './componentes/Geral';
/*iimport { Titulo } from './componentes/Titulo';*/
import Routing from './routes';
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Geral/>
      <Routing/>
    </MuiThemeProvider>
  );
}

export default App;

