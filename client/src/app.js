import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";

import Layout from "./components/common/Layout/Layout";
import ResumeSection from "./components/Professional/Resume/ResumeSection";
import CoverLetterSection from "./components/Professional/CoverLetter/CoverLetterSection";
import MoreAboutMeProfessionalPage from "./components/Professional/MoreAboutMe/MoreAboutMeProfessionalPage";

function App() {
  return (
    <Router>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/professional/resume" />} />
            <Route
              path="/professional"
              element={<Navigate to="/professional/resume" />}
            />
            <Route path="/professional/resume" element={<ResumeSection />} />
            <Route
              path="/professional/cover-letter"
              element={<CoverLetterSection />}
            />
            <Route
              path="/professional/about-me"
              element={<MoreAboutMeProfessionalPage />}
            />
          </Route>
        </Routes>
      </Worker>
    </Router>
  );
}

export default App;
