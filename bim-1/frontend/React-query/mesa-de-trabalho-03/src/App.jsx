import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Form from './components/form';
import StudentList from './components/list';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="h=screen mx-auto w-10/12">
        <h2 className="text-gray-200 font-medium text-2xl pt-10 ">Diário Eletrônico</h2>
        <Form className="" />
        <StudentList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
