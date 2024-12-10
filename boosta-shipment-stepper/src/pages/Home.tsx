import SearchComponent from "@components/boosta/SearchComponent";
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";

import styles from "@styles/styles";

const Home = () => {
  return (
    <>
      <main className={`${styles.normalFlex} flex-col min-h-screen`}>
        <Header />
        {/* Pass the search handler to SearchComponent */}
        <SearchComponent />
        <Footer />
      </main>
    </>
  );
};

export default Home;