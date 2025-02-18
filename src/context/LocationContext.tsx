import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface LocationContextType {
  location: "foreign" | "not_foreign" | null; // Use null initially
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<"foreign" | "not_foreign" | null>(
    null // Start with null to avoid incorrect initial state
  );

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it's client-side

    const storedLocation = localStorage.getItem("user_location");
    if (storedLocation) {
      setLocation(storedLocation as "foreign" | "not_foreign");
      return;
    }

    const fetchUserLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const newLocation = ["SA", "KW", "OM"].includes(data.country_code)
          ? "not_foreign"
          : "foreign";

        setLocation(newLocation);
        localStorage.setItem("user_location", newLocation);
      } catch (error) {
        console.error("Error fetching user location:", error);
        setLocation("foreign"); // Default fallback
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ location }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
