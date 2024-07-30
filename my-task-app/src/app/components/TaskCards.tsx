import React from 'react';


const TaskCards: React.FC = () => {

    return (<>
    <div className='flex flex-center justify-between'>
        <div className='flex flex-center justify-center bg-white rounded-xl m-5'>
            <div>
            <img src="/download (1).jpg" alt="card1" className=''/>

            </div>
            <div>
            <h2 className='font-semibold text-gray-700'>Title</h2>
<p>Easily Categories and find your notes by adding tags. Keep your workspace clutter-free and efficeinet.</p>

            </div>
        </div>
        <div className='flex flex-center justify-center bg-white rounded-xl m-5'>
            <div>
            <img src="/download (3).jpg" alt="card1" />

            </div>
            <div>
            <h2 className='font-semibold text-gray-700'>Title</h2>
<p>Easily Categories and find your notes by adding tags. Keep your workspace clutter-free and efficeinet.</p>

            </div>
        </div>
        <div className='flex flex-center justify-center bg-white rounded-xl m-5'>
            <div>
            <img src="/download (3).jpg" alt="card1" />

            </div>
            <div>
            <h2 className='font-semibold text-gray-700'>Title</h2>
<p>Easily Categories and find your notes by adding tags. Keep your workspace clutter-free and efficeinet.</p>

            </div>
        </div>
    </div>
    </>)
}

export default TaskCards;
