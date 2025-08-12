"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from ".";


export default function PdfButton() {
  return (
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
  
  );
}
