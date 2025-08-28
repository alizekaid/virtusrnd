import React from 'react';
import { Redirect } from '@docusaurus/router';
import Navbar from '../components/Navbar';

export default function RootRedirect() {
  return <Redirect to="/" />;
}
