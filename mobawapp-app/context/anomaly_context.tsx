import { createContext, useContext } from 'react';

const anomalies: any[] = [
];

const AnomalyContext = createContext({
    anomalies,
    getAnomalyById: (id: string) => anomalies.find((f) => f.id === id),
});

export const useAnomalies = () => useContext(AnomalyContext);

export function AnomalyProvider({ children }: { children: React.ReactNode }) {
    return (
        <AnomalyContext.Provider
          value={useContext(AnomalyContext)}
        >
            {children}
        </AnomalyContext.Provider>
    );
}