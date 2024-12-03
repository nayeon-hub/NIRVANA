import { RecoilRoot } from 'recoil';
import './styles.css';

import { queryClient, QueryClientProvider } from './apis/queryClient';
import PageRoutes from './routes/PageRoutes';

function App() {
  return (
    <>
      <div id='root-modal'></div>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <PageRoutes />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
