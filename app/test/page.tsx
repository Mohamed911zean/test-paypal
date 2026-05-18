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
              "BAAeInT46U7jciUQKLuH91CNIF8lNfYBuYqy6qGZD3z4fTCA0fSsnDmA4kbm4h4aTmszwYa9u9bLcROX2c",
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
                  "P-0VC73179B9909843CNIFVWSI",
              });
            }}
           onApprove={async (data) => {
  console.log(data);

  alert("Subscription Active: " + data.subscriptionID);
}}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}