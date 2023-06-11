import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoute from './routes/index';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <AppRoute />
        <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </QueryClientProvider>
    </>
  );
}

export default App;
