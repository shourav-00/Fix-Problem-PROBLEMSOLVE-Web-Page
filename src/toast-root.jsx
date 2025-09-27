// toast-root.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a separate div in index.html like: <div id="toast-root"></div>
const container = document.getElementById('toast-root');
if (container) {
  createRoot(container).render(<ToastContainer />);
}
