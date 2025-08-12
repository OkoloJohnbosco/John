 
"use client"
// InvoicePDF.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// ✅ Register a Google font
Font.register({
  family: "Poppins",
  fonts: [
    { src: "/fonts/mozilla/static/MozillaText-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/mozilla/static/MozillaText-Bold.ttf", fontWeight: "bold" }
  ]
});


const styles = StyleSheet.create({
  page: {
    fontFamily: "Poppins",
    fontSize: 11,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  section: {
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    objectFit: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#555",
  },
  bold: {
    fontWeight: "bold",
  },
  table: {
    display: "flex",
    width: "auto",
    marginTop: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#666",
    color: "white",
    padding: 5,
    fontWeight: "bold",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
  },
  totalBox: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#eee",
    textAlign: "right",
  },
});

const InvoicePDF = () => (
  <Document>
    <Page size="A3" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          {/* Replace with actual logo */}
          {/* <Image src="./mukuru-logo.webp" style={styles.logo} />   */}
          <Text style={{ fontSize: 24, color: "green", fontWeight: "bold" }}>
            EV
          </Text>
          <Text>John Company</Text>
          <Text>Your Name</Text>
          <Text>Company&apos;s Address</Text>
          <Text>City, State Zip</Text>
          <Text>United States</Text>
        </View>
        <View>
          <Text style={styles.title}>INVOICE</Text>
        </View>
      </View>

      {/* Bill To & Invoice Details */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.bold}>Bill To:</Text>
          <Text>Your Client&apos;s Name</Text>
          <Text>Client&apos;s Address</Text>
          <Text>City, State Zip</Text>
          <Text>United States</Text>
        </View>
        <View>
          <Text>
            <Text style={styles.bold}>Invoice#: </Text>INV-12
          </Text>
          <Text>
            <Text style={styles.bold}>Invoice Date: </Text>Aug 12, 2025
          </Text>
          <Text>
            <Text style={styles.bold}>Due Date: </Text>Sep 11, 2025
          </Text>
        </View>
      </View>

      {/* Table */}
      <View style={styles.table}>
        {/* Header Row */}
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Item Description</Text>
          <Text style={styles.tableColHeader}>Qty</Text>
          <Text style={styles.tableColHeader}>Rate</Text>
          <Text style={styles.tableColHeader}>Amount</Text>
        </View>

        {/* Data Rows */}
        {[
          ["Brochure Design", "2", "100.00", "200.00"],
          ["Okolo jdjdjd", "1", "0.00", "0.00"],
          ["Johnbosc", "1", "0.00", "0.00"],
        ].map((row, i) => (
          <View style={styles.tableRow} key={i}>
            {row.map((cell, j) => (
              <Text style={styles.tableCol} key={j}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Totals */}
      <View style={{ marginTop: 20, alignItems: "flex-end" }}>
        <Text>Sub Total: 200.00</Text>
        <Text>Sale Tax (10%): 20.00</Text>
        <View style={styles.totalBox}>
          <Text style={{ fontWeight: "bold" }}>TOTAL $220.00</Text>
        </View>
      </View>

      {/* Notes */}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.bold}>Notes</Text>
        <Text>It was great doing business with you.</Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
