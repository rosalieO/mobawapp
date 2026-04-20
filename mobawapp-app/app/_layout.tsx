import { Stack } from 'expo-router';
import { AnomalyProvider } from '../context/anomaly_context';

export default function Layout() {
    return (
        <AnomalyProvider>
          <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </AnomalyProvider>
    );
}