import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from './styles/theme.ts'
import { JokenpoContextProvider } from './contexts/JokenpoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <JokenpoContextProvider>
        <App />
      </JokenpoContextProvider>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
