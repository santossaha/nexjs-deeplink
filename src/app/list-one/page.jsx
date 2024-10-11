"use client"; // Ensures that this is a client-side component

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Ensure that Bootstrap's JS bundle is dynamically imported
import dynamic from 'next/dynamic';

const ListContent = () => {
  const searchParams = useSearchParams(); // Access search parameters
  const source = searchParams.get('source'); // Get the source parameter
  const [sourceInfo, setSourceInfo] = useState(null);

  // Dynamically import Bootstrap JS only on the client-side
  useEffect(() => {
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js'); // Import Bootstrap JS
    if (source) {
      setSourceInfo(`Redirected from: ${source}`);
    }

    // Automatically open the modal when the page loads
    const modalElement = document.getElementById('redirectModal');
    if (modalElement) {
      const myModal = new bootstrap.Modal(modalElement);
      myModal.show();
    }
  }, [source]);

  return (
    <div className="container mt-5">
      <h1>This is the List Page</h1>

      {/* Show where the user came from */}
      {sourceInfo && <p>{sourceInfo}</p>}

      {/* Modal */}
      <div className="modal fade" id="redirectModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Redirect Back to App</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              You will be redirected back to the app. Are you sure you want to continue?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
              {/* Link Button inside the Modal */}
              <Link href="appa://redirect-back">
                <button type="button" className="btn btn-primary">
                  Go back to appa://redirect-back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ListContent), { ssr: false }); // Disable server-side rendering
