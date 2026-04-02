"use client"; 
// 👉 Next.js এ client-side hook (useState, useContext) use করতে হলে এটা লাগবে

import { createContext, useContext, useState } from "react";
// 👉 React থেকে দরকারি functionগুলো নিচ্ছি

// 👉 Context তৈরি করছি (একটা empty box 📦)
// এখানে আমরা পরে data রাখবো
const PageContext = createContext<any>(null);

// 👉 Provider component (এইটা data share করবে)
export const PageProvider = ({ children }: any) => {

  // 👉 একটা state বানালাম
  // page = current page name
  // setPage = page change করার function
  const [page, setPage] = useState("");

  return (
    // 👉 Provider দিয়ে আমরা data pass করছি
    // যেই component এইটার ভিতরে থাকবে, তারা এই data use করতে পারবে
    <PageContext.Provider value={{ page, setPage }}>
      
      {/* 👉 children মানে: Navbar + সব pages */}
      {children}

    </PageContext.Provider>
  );
};

// 👉 custom hook (shortcut)
// যাতে বারবার useContext(PageContext) লিখতে না হয়
export const usePage = () => {
  return useContext(PageContext);
};