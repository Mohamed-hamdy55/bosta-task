import { useTranslate } from "@hooks/useTranslate";
import IconComponent from "@components/utils/IconComponent";
import { FaSearch } from "react-icons/fa";
import styles from "@styles/styles";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const trans = useTranslate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Empty Search is not allowed");
    } else {
      // Navigate with the query parameter
      navigate(`/tracking-shipments?shipment-number=${query.trim()}`);
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center  mt-[130px] bg-[#f3fafb] rounded-sm">
      <div className={`${styles.normalFlex} flex-col text-center`}>
        <div>
          <img rel="preload" fetchPriority="high" src="https://bosta.co/ac8dbe8ae2210d1a650279fb14d01f7e.png" alt="tracking-icon" />
        </div>
        <h1 className="font-semibold text-[35px] mb-10 mt-5">{trans("Track Your Order")}</h1>
        <p>{trans("All order updates will be available through this link")}</p>
      </div>
      <div className={`sm:w-[450px]  w-[50%] mx-auto -mb-[20px] mt-[40px] `}>
        <form
          className={`relative  ${styles.normalFlex} flex-col justify-center bg-white shadow-md rounded-md`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="shipment-number"></label>
          <input
            id="shipment-number"
            name="shipment-number"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={trans("Enter tracking number")}
            className="w-full rounded-l-md focus:outline-none focus:border focus:border-[#e30613] p-[20px] border border-[#e4e7ec]"
          />
          <button
            id="search-submit-btn"
            name="search-submit-btn"
            type="submit"
            className="bg-[#e30613] absolute left-[calc(100%-15px)]  h-full w-fit pr-4 pl-4 pt-2 pb-2 rounded-r-md"
            aria-label="Search"
            title="search"
          >
            <span className="text-white">
              <IconComponent icon={FaSearch} size={35} />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchComponent;
