import React, { useState } from "react";
import { useTranslate } from "@hooks/useTranslate";
import { formatDate } from "@utils/formateDate";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

interface ShipmentTrackingEventsProps {
  events:  [{
        state: string;
        timestamp: string;
        hub: string | null;
    }];
}

const TrackingDetails: React.FC<ShipmentTrackingEventsProps> = ({events}) => {
  const trans = useTranslate();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  // State to toggle details visibility
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // Group events by date
  const groupedEvents = events.reduce((acc: any, event: any) => {
    const date = formatDate(new Date(event.timestamp), false); // Group by formatted day
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  // Determine direction based on language
  const isRTL = currentLanguage === "ar"; // Check the `dir` attribute of the document

  return (
    <div className="mt-[20px]">
      {/* Clickable Tracking Details Header */}
      <h3
        onClick={() => setShowDetails(!showDetails)} // Toggle details visibility
        className="inline-block text-xl font-[600] mb-5 cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
      >
        {showDetails ? trans("Tracking Details") : trans("Show more details") }
      </h3>

      {/* Conditionally Render Details */}
      {showDetails && (
        <div className="relative">
          {Object.keys(groupedEvents).reverse().map((date, groupIndex) => (
            <div key={groupIndex} className="mb-8">
              {/* Display Date */}
              <p className="text-lg font-[600] text-gray-700 mb-4 mx-10 dark:text-gray-400">
                {date}
              </p>

              <div className={`relative pl-5 ${isRTL ? "pr-5 pl-0" : ""}`}>
                {/* Dots and Vertical Line */}
                <div
                  className={`w-3 h-3 rounded-full bg-gray-400 absolute -top-10 ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                ></div>
                <div
                  className={`absolute -top-5 -bottom-5 w-0.5 bg-gray-400 ${
                    isRTL ? "right-1.5" : "left-1.5"
                  }`}
                ></div>

                <div className={`px-10 ${isRTL ? "text-right" : "text-left"}`}>
                  {/* Events for the Day */}
                  {groupedEvents[date].reverse().map((event: any, eventIndex: number) => (
                    <div key={eventIndex} className="flex items-start mb-6">
                      {/* Event Content */}
                      <div className="border-2 rounded-md min-w-[220px] p-5">
                        <p className="text-sm font-[600] text-gray-700 dark:text-gray-300">
                          {trans(event.state.replace(/_+/g," "))}
                        </p>
                        <p dir="ltr">{formatDate(new Date(event.timestamp), true)}</p>
                        <p className="text-sm text-gray-500">
                          {trans(event.hub)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackingDetails;
