import React, { useState, useEffect } from 'react';

const CurrentLocationMap = () => {
  const [mapUrl, setMapUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Try to get the user's current location
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success - create map URL with the user's coordinates
          const { latitude, longitude } = position.coords;
          const newMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0PCsDA4JzI4LjAiTiA0M8KwMTAnMTIuMCJF!5e0!3m2!1sen!2sca!4v1649856241789!5m2!1sen!2sca`;
          setMapUrl(newMapUrl);
          setLoading(false);
        },
        (error) => {
          // Error handling
          console.error("Error getting location:", error);
          setError("Unable to access your location. Please allow location access or enter your location manually.");
          setLoading(false);
        },
        { 
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0 
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading your location...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 p-4">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-2">⚠️</div>
            <p className="text-gray-700">{error}</p>
          </div>
        </div>
      )}
      
      {!loading && !error && mapUrl && (
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
};

export default CurrentLocationMap;