import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import actGetShipingItem from './act/getItem';

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

export interface ShipmentData {
  data: TResponse | null
  loading: boolean;
  error: string | null;
}

const initialState: ShipmentData = {
  data: null,
  loading: false,
  error: null,
};


const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetShipingItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actGetShipingItem.fulfilled, (state, action: PayloadAction<ShipmentData['data']>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(actGetShipingItem.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = null;
      });
  },
});

export default shipmentSlice.reducer;