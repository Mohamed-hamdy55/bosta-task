import SearchComponent from "@components/boosta/SearchComponent";
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";

import styles from "@styles/styles";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <main className={`${styles.normalFlex} flex-col min-h-screen`}>
        <Header />
        {/* Pass the search handler to SearchComponent */}
        <SearchComponent />
      </main>
      <Footer />
    </>
  );
};

export default Home;
