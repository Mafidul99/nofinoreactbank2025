
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { RouterProvider } from 'react-router'
import AppLayout from './components/Layouts/AppLayout'
import ErrorPage from './pages/ErrorPage'
import AboutUs from './pages/About/AboutUs'
import ContactUs from './pages/Contact/ContactUs'
import Accounts from './pages/Accounts/Accounts'
import LoanService from './pages/LoanService/LoanService'
import DigitalSolutions from './pages/DigitalSolutions/DigitalSolutions'
import GoldLoanService from './pages/GoldLoanService/GoldLoanService'
import CashMangProd from './pages/CashMangProd/CashMangProd'
import InvesmentsPlan from './pages/InvesmentsPlan/InvesmentsPlan'
import TermsConditions from './pages/Policy/TermsConditions'
import PrivacyPolicy from './pages/Policy/PrivacyPolicy'
import Disclaimer from './pages/Policy/Disclaimer'
import RefundPolicy from './pages/Policy/RefundPolicy'
import Faq from './pages/Others/Faq'
import Support from './pages/Others/Support'
import { ThemeProvider } from './context/ThemeContext'

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/accounts",
        element: <Accounts/>,
      },
      {
        path: "/loan-Service",
        element: <LoanService/>,
      },
      {
        path: "/digital-solutions",
        element: <DigitalSolutions/>,
      },
      {
        path: "/gold-loan-services",
        element: <GoldLoanService/>,
      },
      {
        path: "/cash-managment-product",
        element: <CashMangProd/>,

      },
      {
        path: "/invesments-plan",
        element: <InvesmentsPlan/>,

      },
      {
        path: "/terms-conditions",
        element: <TermsConditions/>,

      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,

      },
      {
        path: "/disclaimer",
        element: <Disclaimer/>,

      },
      {
        path: "/refund-policy",
        element: <RefundPolicy/>,

      },
      {
        path: "/faq",
        element: <Faq/>,

      },
      {
        path: "/support",
        element: <Support/>,

      },
      {
        path: "/contact",
        element: <ContactUs/>,
      }
    ]
  }
]);

const App = () => {
  return (    
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App;
