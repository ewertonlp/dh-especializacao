import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Form from './components/form';
import StudentList from './components/list';
import Footer from './components/footer/footer';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const client = new QueryClient();

function App() {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    matricula: '',
    curso: '',
    bimestre: '',
  });

  function clearState() {
    setFormData({
      id: '',
      nome: '',
      matricula: '',
      curso: '',
      bimestre: '',
    });
  }

  return (
    <QueryClientProvider client={client}>
      <div className="h=screen md:mx-auto sm:mx-4 md:w-10/12 sm:w-full mb-12 bg-slate-950">
        <h2 className="text-gray-200 font-medium text-2xl pt-10 ">
          Gestão de Alunos
        </h2>
        <Form
          className=""
          formData={formData}
          setFormData={setFormData}
          clearState={clearState}
        />
        <StudentList formData={formData} setFormData={setFormData} />
      </div>
      <Footer />
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
  );
}

export default App;
