import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-opensans">
    <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
       
    </Routes>
      </div>
  );
}

export default App;
