import React, { useEffect, useRef, useState } from "react";

import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { searchPlugin } from "@react-pdf-viewer/search";
import "@react-pdf-viewer/search/lib/styles/index.css";

function PdfViewer({ fileUrl, maxWidth = 900, height }) {
  const containerRef = useRef(null);
  const [computedHeight, setComputedHeight] = useState(null);
  const [initialScale, setInitialScale] = useState(1.2);

  useEffect(() => {
    function updateHeight() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const bottomSpacing = 24; // keep a small space below
      const available = window.innerHeight - rect.top - bottomSpacing;
      const clamped = Math.max(320, Math.min(available, window.innerHeight));
      setComputedHeight(clamped);
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const small = window.innerWidth < 768;
    setInitialScale(small ? 1.0 : 1.2);
  }, []);
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;
  const searchPluginInstance = searchPlugin();
  const { ShowSearchPopover } = searchPluginInstance;

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
    renderToolbar: (Toolbar) => (
      <Toolbar>
        {(slots) => {
          const {
            GoToPreviousPage,
            CurrentPageInput,
            NumberOfPages,
            GoToNextPage,
            ZoomOut,
            ZoomPopover,
            ZoomIn,
          } = slots;

          return (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                gap: "8px",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                backgroundColor: "#f9f9fb",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <ShowSearchPopover />
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {GoToPreviousPage && <GoToPreviousPage />}
                {CurrentPageInput && <CurrentPageInput />}
                {NumberOfPages && (
                  <>
                    /<NumberOfPages />
                  </>
                )}
                {GoToNextPage && <GoToNextPage />}
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {ZoomOut && <ZoomOut />}
                {ZoomPopover && <ZoomPopover />}
                {ZoomIn && <ZoomIn />}
                <Download />
              </div>
            </div>
          );
        }}
      </Toolbar>
    ),
  });

  return (
    <div
      ref={containerRef}
      className="pdf-container"
      style={{
        width: "100%",
        maxWidth: `${maxWidth}px`,
        height: height ?? (computedHeight ? `${computedHeight}px` : "90vh"),
        maxHeight: "100vh",
      }}
    >
      <Viewer
        fileUrl={fileUrl}
        defaultScale={initialScale}
        plugins={[
          defaultLayoutPluginInstance,
          getFilePluginInstance,
          searchPluginInstance,
        ]}
      />
    </div>
  );
}

export default PdfViewer;
