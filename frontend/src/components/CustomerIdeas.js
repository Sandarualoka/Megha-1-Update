

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You may need to install axios
import idea from '../assets/idea.png';


function CustomerIdeas() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetch feedback data from the backend API endpoint
    axios.get('/api/feedback')
      .then((response) => {
        setFeedbackData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  return (
    <div>
          <div className='flex flex-col items-center justify-center pt-10'>
                  <img className='w-12 h-12' src={idea} alt="Idea Icon" />
                  <h2 className="font-extrabold text-green-700 text-center text-4xl pt-2">
                  <span className='text-yellow-500 text-5xl'>CUSTOMER </span>
                  <span className='text-5xl'>IDEAS</span>
                  </h2>
        </div>

        <div class="bg-white py-10 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
   
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
        </div>
        <div class="group relative">
         
          <p className='' class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a href="#">
                <span class="absolute inset-0"></span>
                Sandaru De Silva
              </a>
            </p>
            <p class="text-gray-600">Phone:-12345678910</p>
          </div>
        </div>
      </article>

    </div>
  </div>
</div>

    </div>
  );
}

export default CustomerIdeas;

