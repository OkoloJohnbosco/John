"use client";
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from ".";


export default function PdfViewerTab() {
  return (
      <PDFViewer width="100%" height="100%">
        <InvoicePDF />
      </PDFViewer>
  
  );
}
