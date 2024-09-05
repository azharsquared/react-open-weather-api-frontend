
import { useState } from 'react';
import './App.css';
import Repositories from './Repositories';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
function Github() {
    const [keyword, setKeyword] = useState('');
    const [fetch, setFetch] = useState(false);
    return (
        <>
            <QueryClientProvider client={queryClient}>
            <input
                value={keyword}
            onChange={e => {setKeyword(e.target.value); setFetch(false);}}
            />
            <button onClick={()=>setFetch(true)}>Fetch</button>
            {fetch} ?
                <Repositories keyWord={keyword} />
                :<></>
            </QueryClientProvider>
        </>
    );
}
export default Github;
