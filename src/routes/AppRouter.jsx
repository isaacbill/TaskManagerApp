import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TaskManager from '../features/TaskManager/TaskManager'
import ApiDemo from '../features/ApiDemo'

export default function AppRouter(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<TaskManager />} />
          <Route path="/api" element={<ApiDemo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
