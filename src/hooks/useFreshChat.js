import { useState } from "react";

const useFreshchat = () => {
  const [isFreshchatInitialized, setIsFreshchatInitialized] = useState(false);

  const initializeFreshchat = () => {
    if (typeof window !== "undefined") {
      // Check if Freshchat widget is already initialized
      if (!isFreshchatInitialized) {
        // Dynamically load Freshchat script
        const script = document.createElement("script");
        script.src = "https://wchat.freshchat.com/js/widget.js";
        script.async = true;
        script.onload = () => {
          // Initialize Freshchat widget once the script has loaded
          window.fcWidget.init({
            token: "c32499b1-2d48-4d53-ad8a-23261b3c8ee4",
            host: "https://wchat.in.freshchat.com",
          });
          setIsFreshchatInitialized(true); // Set state to true after initialization
          console.log("Freshchat widget initialized.");
          window.fcWidget.open(); // Open the widget after initializing
        };
        document.body.appendChild(script);
      } else {
        // If already initialized, just open the widget
        window.fcWidget.open();
      }
    } else {
      console.error("Window is not defined.");
    }
  };

  return initializeFreshchat;
};

export default useFreshchat;
