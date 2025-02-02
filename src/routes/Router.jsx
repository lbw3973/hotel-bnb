import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MapPage from '@/pages/MapPage/MapPage'
import ProductDetailPage from '@/pages/RoomDetailPage/RoomDetailPage'
import MainPage from '@/pages/MainPage/Mainpage'

import WishlistPage from '@/pages/Wishlistpage/Wishlistpage'

import PersonalInfoPage from '@/pages/PersonalInfoPage/PersonalInfoPage'
import ReservationHistoryPage from '@/pages/ReservationHistoryPage/ReservationHistoryPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import AdminPage from '@/pages/AdminPage/AdminPage'
import PaymentPage from '@/pages/PaymentPage/PaymentPage'
import PaymentSuccess from '@/components/Payment/PaymentSuccess'
import PaymentWaiting from '@/components/Payment/PaymentWaiting'
import PaymentFail from '@/components/Payment/PaymentFail'
import SearchPage from '../pages/SearchPage/SearchPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search/:alt" element={<SearchPage />} />
      <Route path="/room/:id" element={<ProductDetailPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/book/:id" element={<PaymentPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/personalInfo" element={<PersonalInfoPage />} />
      <Route path="/account" element={<ReservationHistoryPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      <Route path="/paymentWaiting" element={<PaymentWaiting />} />
      <Route path="/paymentFail" element={<PaymentFail />} />
      <Route path="/notfound" element={<ErrorPage />} />
    </Routes>
  )
}

export default Router
