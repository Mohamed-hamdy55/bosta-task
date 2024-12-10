import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse =  {
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

// Async thunk to fetch shipment status
export const fetchShipmentStatus = createAsyncThunk(
  'shipment/fetchStatus',
  async (shipmentId: string) => {
      const {data} = await axios(`${import.meta.env.VITE_SERVER_BASE_URL}/shipments/track/${shipmentId}`,{
        headers: {
          "x-requested-by": "Bosta",
        },
      });
      return data;
  }
);

const actGetShipingItem = createAsyncThunk(
  "shipingItems/actGetShipingItem",
  async (shipmentId: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const {data} = await axios.get<TResponse>(
        `${import.meta.env.VITE_SERVER_BASE_URL}/shipments/track/${shipmentId}`
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.error || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
export default actGetShipingItem;