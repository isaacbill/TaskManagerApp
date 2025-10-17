import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import TaskManager from "./features/TaskManager/TaskManager";
import PostsPage from "./pages/PostsPage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </Layout>

        {/* Footer */}
        <footer className="text-center py-4 border-t mt-4 text-gray-600 dark:text-gray-400">
          © 2025 PLP MERN | All rights reserved.
        </footer>
      </Router>
    </ThemeProvider>
  );
};

export default App;