import FooterComp from './components/footer/Footer'
import NavbarComp from './components/navbar/Navbar'
import './globals.scss'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComp />
        <div className="main">
        {children}
        </div>
        
        <FooterComp />
        </body>
        
    </html>
  )
}
