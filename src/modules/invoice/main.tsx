"use client";
import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from ".";

export default function MainInvoice() {
  return (
    <div style={{ height: "100vh" }} className="w-full space-y-4">
          <div>
      <PDFDownloadLink
        document={<InvoicePDF />}
        fileName="invoice.pdf"
        style={{
          textDecoration: "none",
          padding: "10px 20px",
          color: "#fff",
          backgroundColor: "#007bff",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {({ loading }) => (loading ? "Preparing document..." : "Download Invoice")}
      </PDFDownloadLink>
    </div>
      <PDFViewer width="100%" height="100%">
        <InvoicePDF />
      </PDFViewer>
    </div>
  
  );
}
