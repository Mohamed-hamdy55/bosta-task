import SearchComponent from "@components/boosta/SearchComponent";
import TrackingStepper from "@components/boosta/TrackingStepper";
import Header from "@components/common/Header";
import { RootState } from "@store/store";
import actGetShipingItem from "@store/itemForShipment/act/getItem";
import { AppDispatch } from "@store/store";
import styles from "@styles/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "@components/common/Footer";
import { useTranslate } from "@hooks/useTranslate";

const TrackingShipmentPage: React.FC = () => {
  const trans = useTranslate();
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.shipment
  );

  useEffect(() => {
    dispatch(actGetShipingItem(searchParams.get("shipment-number") || ""));
  }, [searchParams, dispatch]);

  return (
    <>
      <main className={`${styles.normalFlex} flex-col min-h-screen`}>
        <Header />

        {/* Pass the search handler to SearchComponent */}
        <SearchComponent />

        {loading ? (
          <div className="mt-[50px]">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : data ? (
          <TrackingStepper shipmentData={data} />
        ) : (
          <div className="mt-[50px] text-[#e30613] text-xl">{trans(error?.replace("!","") || "Invalid tracking number")}</div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default TrackingShipmentPage;
