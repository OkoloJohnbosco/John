import Image from "next/image";
import React from "react";
import MainInvoice from "@/modules/invoice/main";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col w-full items-center sm:items-start">
       
       <MainInvoice />
      </main>
     
    </div>
  );
}
