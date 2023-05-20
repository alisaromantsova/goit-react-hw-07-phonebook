import React from 'react';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Contacts />} />
          <Route path="/form" element={<ContactForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
