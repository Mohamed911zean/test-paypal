"use client";

import {
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-zinc-900 p-10 rounded-2xl w-[400px]">
        <h1 className="text-white text-3xl font-bold mb-4">
          Premium Wallpapers
        </h1>

        <p className="text-zinc-400 mb-6">
          Unlock all wallpapers for $5/month
        </p>

        <PayPalScriptProvider
          options={{
            clientId:
              "AagZ9APsvKnVUXZDB1B-eUHhAunII_-wQv2uRFg-8d6dPeCMEwM7fYsvrC6gwF7p2Gg8AE3dB8H5x9Jj",
            vault: true,
            intent: "subscription",
          }}
        >
          <PayPalButtons
            style={{
              layout: "vertical",
              shape: "pill",
              color: "gold",
              label: "subscribe",
            }}
            createSubscription={(data, actions) => {
              return actions.subscription.create({
                plan_id:
                  "P-5798562813009874CNIFPIHA",
              });
            }}
            onApprove={(data) => {
              console.log(data);

              alert(
                "Subscription Active: " +
                  data.subscriptionID
              );
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}