"use client";
import React from "react";

import dynamic from "next/dynamic";
const PdfButton = dynamic(() => import("./PdfButton"), { ssr: false });
const PdfViewerTab = dynamic(() => import("./PdfViewerTab"), { ssr: false });

export default function MainInvoice() {
  return (
    <div style={{ height: "100vh" }} className="w-full space-y-4">
          <div>
      <PdfButton />
    </div>
      <PdfViewerTab />
    </div>
  
  );
}
