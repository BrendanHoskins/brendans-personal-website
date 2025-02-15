import React from "react";

import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function CoverLetterSection() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
      <Viewer
        fileUrl="/cover-letter.pdf"
        plugins={[defaultLayoutPluginInstance]}
      />
  );
}

export default CoverLetterSection;
