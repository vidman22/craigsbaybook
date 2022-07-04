import { useState } from 'react';

function App() {
    const [value, setValue] = useState('');
    return (
        <div className='bg-slate-50 w-full h-screen'>
            <header className='relative z-50 bg-white py-3 min-w-full flex items-center justify-between shadow-md'>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder='Search'
                />
            </header>
            <div className='text-slate-500'>
                
            </div>
        </div>
    );
}

export default App;
