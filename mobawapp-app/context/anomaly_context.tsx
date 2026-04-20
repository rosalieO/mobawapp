import { createContext, useContext, useState } from 'react';

export interface Anomaly {
    id: string;
    name: string;
    description: string;
    image: string | null;
}

interface AnomalyContextType {
  anomalies: Anomaly[];
  addAnomaly: (newAnomaly: Anomaly) => void;
  getAnomalyById: (id: string) => Anomaly | undefined;
}

const AnomalyContext = createContext<AnomalyContextType | undefined>(undefined);

export const useAnomalies = () => {
  const context = useContext(AnomalyContext);
  if (!context) throw new Error("useAnomalies muss innerhalb von AnomalyProvider genutzt werden");
  return context;
};

export function AnomalyProvider({ children }: { children: React.ReactNode }) {
    const [anomalies, setAnomalies] = useState<Anomaly[]>([]);

    const addAnomaly = (newAnomaly: Anomaly) => {
        setAnomalies((prev) => [...prev, newAnomaly]);
    };

    const getAnomalyById = (id: string) => anomalies.find((a) => a.id === id);

    return (
        <AnomalyContext.Provider
          value={{ anomalies, addAnomaly, getAnomalyById }}
        >
            {children}
        </AnomalyContext.Provider>
    );
}