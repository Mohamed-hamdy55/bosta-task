import { useTranslate } from "@hooks/useTranslate";
import styles from "@styles/styles";
import ShipmentTrakingHeader from "./ShipmentTrakingHeader";
import TrackingDetails from "./TrackingDetails";

const TrackingStepper = ({ shipmentData }: { shipmentData: any }) => {
  const trans = useTranslate();

  return (
    <section className={`${styles.container} mt-[50px] `}>
      {
        <>
          <div className="shadow-search-input-shadow border border-gray-200 p-5 rounded-md">
            <ShipmentTrakingHeader shipmentData={shipmentData} />
          </div>
          <div>
            {/* Tracking Details */}
            <TrackingDetails events={shipmentData.TransitEvents} />
          </div>
        </>
      }
    </section>
  );
};

export default TrackingStepper;
