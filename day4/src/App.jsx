import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Usercard from './components/Usercard'

export default function App() {
  const users = [
    {
      name: 'virat',
      role: 'batsman',
      country: 'india',
    },
    { name: 'rohit', role: 'superman', country: 'india' },
    { name: 'ms', role: 'wk', country: 'bharat' }
  ]

  const footerYear = [2024, 2025, 2026]
  const company = { name: 'Kiet', location: 'Ghaziabad', EstYear: 1990 }

  return (
    <>
      <Header title="Users Dashboard" color="Red" year="2023" />
      <h1>Users Dashboard</h1>

      <Wrapper title="Cricketers">
        {users.map((user, index) => (
          <Usercard key={index} user={user} />
        ))}
      </Wrapper>

      <Footer year={footerYear} company={company} />
    </>
  )
}
