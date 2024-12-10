import styles from "@styles/styles";
import ShipmentTrakingHeader from "./ShipmentTrakingHeader";
import TrackingDetails from "./TrackingDetails";
interface TrackingStepperProps {
  shipmentData: {
    provider: string;
    CurrentStatus: {
      state: string;
      timestamp: string;
    };
    PromisedDate: string;
    TrackingNumber: number;
    TrackingURL: string;
    SupportPhoneNumbers: [string];
    TransitEvents: [{
        state: string;
        timestamp: string;
        hub: string | null;
    }],
    CreateDate: string;
    isEditableShipment: boolean;
    nextWorkingDay: [{
      dayDate:string;
      dayName:string;
    }];
    isOnlinePaymentFeatureEnabled: boolean;
  };
}

const TrackingStepper: React.FC<TrackingStepperProps> = ({ shipmentData }) => {

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
