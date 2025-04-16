import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>首页</h1>
        <div>
          <Link to="/">首页</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/about">关于</Link>
        </div>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>关于页面</h1>
        <div>
          <Link to="/">首页</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/about">关于</Link>
        </div>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404</h1>
      </div>
    ),
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
