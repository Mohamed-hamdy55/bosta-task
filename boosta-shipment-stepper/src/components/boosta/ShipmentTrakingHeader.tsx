import { useTranslate } from "@hooks/useTranslate";
import { formatDate } from "@utils/formateDate";

const ShipmentTrakingHeader = ({ shipmentData }: { shipmentData: any }) => {
  const trans = useTranslate();

  const isInTransit: boolean =
    shipmentData.CurrentStatus.state != "Delivered" &&
    shipmentData.CurrentStatus.state != "DELIVERED" &&
    shipmentData.CurrentStatus.state != "Returned" &&
    shipmentData.CurrentStatus.state != "RETURNED";

  const dayToArrive: string = formatDate(new Date(shipmentData.PromisedDate));
  const lastStateDate: string = formatDate(
    new Date(shipmentData.CurrentStatus.timestamp)
  );

  return (
    <div>
      <span className="text-sm font-[600] text-gray-500">
        {trans("ORDER")} #{shipmentData.TrackingNumber}
      </span>
      <div className="border-b border-b-gray-400">
        {isInTransit ? (
          <div>
            <h1 className="text-3xl font-[600]">
              {trans(shipmentData.CurrentStatus.state.replace(/_+/g," "))}
            </h1>
            <h2>
              {dayToArrive < lastStateDate ? "": trans("Arriving by") }
              <span className={`text-[#0098a5] ${dayToArrive < lastStateDate?"":"mx-5"}`} dir="ltr">
                {dayToArrive < lastStateDate ? lastStateDate : dayToArrive}
              </span>
            </h2>
            <p className="text-sm font-[600] text-gray-400 mt-[10px] mb-[10px]">
              {dayToArrive < lastStateDate
                ? ""
                : trans(
                    "Your order is expected to arrive within 2-3 working days"
                  )}
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-[600]">
              {trans(shipmentData.CurrentStatus.state.replace(/_+/g," "))}
            </h1>
            <h2>
              <span className="text-[#0098a5]" dir="ltr">
                {lastStateDate}
              </span>
            </h2>
          </div>
        )}
      </div>
      <div className="mt-[20px]">
        
      </div>
    </div>
  );
};

export default ShipmentTrakingHeader;
