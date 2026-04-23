# NASA ANOMALY MONITOR 🚀

Ein React Native App-Prototyp zur Überwachung und Dokumentation astronomischer Anomalien unter Verwendung der NASA API.

## 🛠 Tech Stack & Versionen
* **Framework:** Expo (Managed Workflow)
* **SDK Version:** 54.0.0 (Latest)
* **Sprache:** TypeScript
* **Routing:** Expo Router
* **Icons:** @expo/vector-icons (MaterialIcons)

## 📋 Features
* **Anomalies-Dashboard:** Anzeige aktueller astronomischer Daten.
* **Detailansicht:** Ausführliche Informationen zu jeder Anomalie inklusive Bilddarstellung.
* **Sharing-System:** * Teilen von NASA-Web-Bildern via Link-Preview (optimiert für Messenger-Vorschauen).
    * Teilen von lokal hochgeladenen Bildern als echte Dateianhänge.
* **Context API:** Zentrales State-Management für die Anomalie-Daten.
* **APOD Intelligence & Search:** Dynamische Integration der NASA "Astronomy Picture of the Day"-API zur Identifizierung und Anzeige astronomischer Phänomene.
* **Global State Management:** Einsatz der React Context API zur konsistenten Verwaltung der APOD-Daten über alle Screens hinweg (Dashboard, Suche und Detailansicht), wodurch unnötige API-Reloads vermieden werden.

## 🚀 Installation & Start
1. Repository klonen
2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
3. App starten:
   ```bash
   npx expo start
   ```

## 📂 Struktur
* **/app:** Expo Router Dateisystem-Routing. (Navigation)

* **/components:** Wiederverwendbare UI-Komponenten 

* **/context:** Globaler State für Anomalie-Daten.

* **/constants:** Zentrales Styling und Farbschemata.

* **/assets:** Enthält alle statischen Ressourcen der App.