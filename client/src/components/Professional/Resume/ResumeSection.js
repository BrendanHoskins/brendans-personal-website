import React from "react";

import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function ResumeSection() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
    return (
    <div>
      <Viewer fileUrl="/resume.pdf" plugins={[defaultLayoutPluginInstance]}/>
    </div>
    );
}

export default ResumeSection;
