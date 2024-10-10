// src/app/list/page.jsx
"use client"; // This ensures that the component is a Client Component

import { useSearchParams } from 'next/navigation'; // Use the new search params hook
import { useEffect, useState, Suspense } from 'react';

function ListContent() {
  const searchParams = useSearchParams(); // Access search parameters
  const source = searchParams.get('source'); // Get the source parameter
  const [sourceInfo, setSourceInfo] = useState(null);

  useEffect(() => {
    if (source) {
      setSourceInfo(`Redirected from: ${source}`);
    }
  }, [source]);

  const handleRedirectToApp = () => {
    // Redirect the user back to the app using the deep link
    const scheme = source ? source.toLowerCase() : 'myapp'; 

    console.log(source, 'source.....');
    
    const redirectUrl = `${scheme}://redirect-back`;
  };



  return (
    <div>
      <h1>This is the List Page</h1>

      {/* Show where the user came from */}
      {sourceInfo && <p>{sourceInfo}</p>}

      {/* Button to redirect back to the app */}
      <button onClick={handleRedirectToApp}>
        Go back to the app
      </button>
    </div>
  );
}

export default function ListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListContent />
    </Suspense>
  );
}
