import React from 'react';
import { createRoot } from 'react-dom/client';
import AppNote from './components/AppNote';
// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <AppNote />
);