import './App.css'
import MuiButton from './components/MuiButton'
import MuiCheckbox from './components/MuiCheckbox'
import MuiTextField from './components/MuiTextField'
import MuiTypography from './components/MuiTypography'
import MuiGrid from './components/MuiGrid'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { purple, green } from '@mui/material/colors'
import '@fontsource/roboto/500.css'
import MuiAppbar from './components/MuiAppbar'
import CardSkeleton from './components/CardSkeleton'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
    typography: {
      h2: {
        fontSize: 36
      }
    }
  })

  return (
    <ThemeProvider theme={theme} >
      {/* <MuiAppbar />
      <MuiButton />
      <MuiCheckbox />
      <MuiTextField />
      <MuiTypography />
      <MuiGrid /> */}
      <CardSkeleton />
    </ThemeProvider>
  )
}

export default App;
