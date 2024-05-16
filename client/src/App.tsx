import React from 'react';
import './App.css';
import { BlogPostController } from './components/BlogPostController';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Typography } from '@mui/material'
import { EditBlogPostController } from './components/EditBlogPostController';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogPostController />
  },
  {
    path: '/edit/:id',
    element: <EditBlogPostController />
  }
])

function App() {
  return (
    <div className="App-header" style={{ alignItems: 'center'}}>
      <Typography variant='h4'>
        My Blog
      </Typography>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
