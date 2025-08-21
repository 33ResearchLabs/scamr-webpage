import React, { useState } from "react";
import { QrReader } from "@blackbox-vision/react-qr-reader";

export const PresaleModal = ({ isOpen, onClose }) => {
  const [scannedAddress, setScannedAddress] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#0a0f1c] p-6 md:p-10 rounded-2xl shadow-2xl w-[90%] max-w-md text-white relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-2">
          SCAM<span className="text-cyan-400">R</span>
        </h2>

        <p className="text-center text-sm mb-4">
          Scan a QR code to fill in wallet address
        </p>

        {/* QR Scanner */}
        <div className="rounded-lg overflow-hidden mb-4">
          <QrReader
            constraints={{ facingMode: "environment" }}
            onResult={(result, error) => {
              if (!!result) {
                setScannedAddress(result?.text);
              }
              if (!!error) {
                console.error(error);
              }
            }}
            containerStyle={{ width: "100%" }}
            videoStyle={{ width: "100%" }}
          />
        </div>

        {/* Show scanned address */}
        {scannedAddress && (
          <div className="bg-gray-800 text-sm text-center p-2 rounded mb-4 break-words">
            Scanned Address:{" "}
            <span className="text-cyan-400">{scannedAddress}</span>
          </div>
        )}

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter wallet address"
          value={scannedAddress}
          onChange={(e) => setScannedAddress(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        {/* Deposit Button */}
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold py-3 w-full rounded-lg hover:opacity-90 transition">
          Deposit SOL Now
        </button>

        <p
          className="text-center text-xs mt-4 text-gray-500 hover:text-cyan-400 cursor-pointer"
          onClick={onClose}
        >
          ← Back to Home
        </p>
      </div>
    </div>
  );
};
