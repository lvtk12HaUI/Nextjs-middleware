import type { ReactElement } from 'react'
import { useEffect, useState } from 'react';
import Layout from '../layouts'
import type { NextPageWithLayout } from './_app'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Page: NextPageWithLayout = () => {
  const [users, setUsers] = useState([{
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
  }])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get("/api/users/");
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct()
  }, [])

  return (
    <h1>Login</h1>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home">
      {page}
    </Layout>
  )
}

export default Page