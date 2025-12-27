import React from "react";

import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { searchPlugin } from "@react-pdf-viewer/search";
import "@react-pdf-viewer/search/lib/styles/index.css";

function ResumeSection() {
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
      style={{
        maxWidth: "900px",
        height: "80vh",
        margin: "24px auto",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <Viewer
        fileUrl="/resume.pdf"
        plugins={[
          defaultLayoutPluginInstance,
          getFilePluginInstance,
          searchPluginInstance,
        ]}
      />
    </div>
  );
}

export default ResumeSection;
