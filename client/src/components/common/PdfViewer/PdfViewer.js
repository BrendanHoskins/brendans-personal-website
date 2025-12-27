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
      style={{
        maxWidth: `${maxWidth}px`,
        height: height ?? (computedHeight ? `${computedHeight}px` : "90vh"),
        maxHeight: "100vh",
        margin: "24px auto",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <Viewer
        fileUrl={fileUrl}
        defaultScale={1.2}
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
