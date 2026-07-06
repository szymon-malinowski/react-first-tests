# Individuelle Learning Phase: Erste Tests in React 19 mit Vitest und React Testing Library

## Dein Ziel 

Du richtest in einem kleinen React-19-Projekt eine einfache Testumgebung mit Vitest und React Testing Library ein und schreibst eigene Tests für eine kleine UI-Komponente. Dabei unterscheidest du praktisch zwischen Unit-, Integrations- und Komponententests, lernst den Aufbau einer Testdatei kennen und führst erste Tests selbst aus.

## Das brauchst du 

- Ein lauffähiges React-19-Projekt, idealerweise mit Vite
- Node.js und npm
- Einen Code-Editor
- Terminal oder Konsole
- Diese Pakete in deinem Projekt:
  - `vitest`
  - `@testing-library/react`
  - `@testing-library/jest-dom`
  - `@testing-library/user-event`
  - `jsdom`

## Zeitplanung 

- 15 Minuten: Projekt prüfen und Testwerkzeuge einrichten
- 20 Minuten: Testbare React-Komponente erstellen
- 20 Minuten: Erste Testdatei aufbauen und Struktur verstehen
- 25 Minuten: Render- und Inhaltstests schreiben
- 20 Minuten: Interaktion testen
- 20 Minuten: Erweitern, aufräumen und reflektieren

## Basis-Aufgaben

### Aufgabe 1: 
Testumgebung vorbereiten **Ziel:** Du richtest Vitest und React Testing Library in deinem React-19-Projekt so ein, dass du Tests ausführen kannst. 

**Arbeitsauftrag:**  
- Öffne dein React-Projekt oder erstelle ein neues Vite-Projekt mit React.
- Installiere die benötigten Testing-Pakete.
- Richte Vitest so ein, dass Tests in einer Browser-ähnlichen Umgebung laufen.
- Lege eine Setup-Datei an, in der du `@testing-library/jest-dom` einbindest.
- Ergänze in deiner Projektkonfiguration einen passenden Test-Befehl.
- Starte den Test-Runner einmal, auch wenn noch keine echten Tests vorhanden sind.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Dein Projekt enthält eine funktionierende Testkonfiguration.
- Du kannst einen Testlauf per Terminal starten.
- Die Testing-Bibliotheken sind korrekt eingebunden.

### Aufgabe 2: 
Eine kleine Komponente zum Testen bauen **Ziel:** Du erstellst eine einfache React-Komponente, die sich gut für erste Tests eignet. 

**Arbeitsauftrag:**  
- Erstelle eine Komponente `CounterCard`.
- Die Komponente soll:
  - eine Überschrift anzeigen
  - einen Zählerstand anzeigen
  - einen Button zum Erhöhen des Zählers enthalten
  - optional einen Reset-Button enthalten
- Verwende React 19 wie in deinem Projekt üblich.
- Achte darauf, dass die Texte in der Oberfläche eindeutig testbar sind.
- Binde die Komponente kurz in deine App ein und prüfe im Browser, ob sie funktioniert.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Du hast eine sichtbare, funktionierende React-Komponente.
- Die Komponente zeigt Inhalte an und reagiert auf Klicks.
- Die Oberfläche enthält klar erkennbare Texte und Buttons.

### Aufgabe 3: 
Erste Testdatei anlegen und strukturieren **Ziel:** Du lernst den Aufbau einer einfachen Testdatei kennen und ordnest deinen Test sinnvoll. 

**Arbeitsauftrag:**  
- Lege neben deiner Komponente oder in einem passenden Testordner eine Testdatei für `CounterCard` an.
- Strukturiere die Datei mit:
  - Importen
  - einer `describe`-Gruppe
  - mindestens einem `it`- oder `test`-Block
- Notiere als Kommentar in der Datei kurz, welcher Testtyp hier hauptsächlich vorliegt:
  - Unit-Test
  - Komponententest
  - Integrationstest
- Formuliere zusätzlich in 1–2 kurzen Kommentaren, worin sich diese drei Testarten unterscheiden.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Deine Testdatei ist sauber aufgebaut.
- Du kannst die Grundstruktur eines React-Tests erkennen.
- Du hast die drei Testarten knapp voneinander abgegrenzt.

### Aufgabe 4: 
Rendern und sichtbare Inhalte prüfen **Ziel:** Du testest, ob deine Komponente korrekt gerendert wird und die erwarteten Inhalte anzeigt. 

**Arbeitsauftrag:**  
- Schreibe Tests, die prüfen:
  - ob die Überschrift sichtbar ist
  - ob der Startwert des Zählers angezeigt wird
  - ob der Erhöhen-Button vorhanden ist
  - ob ein Reset-Button vorhanden ist, falls du ihn eingebaut hast
- Verwende React Testing Library zum Rendern der Komponente.
- Nutze möglichst Abfragen, die sich an sichtbaren Inhalten und Rollen orientieren.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Deine Tests laufen erfolgreich durch.
- Die wichtigsten sichtbaren Bestandteile der Komponente sind geprüft.
- Du verwendest sinnvolle Queries aus der React Testing Library.

### Aufgabe 5: 
Interaktionen testen **Ziel:** Du prüfst, ob Benutzeraktionen die Komponente wie erwartet verändern. 

**Arbeitsauftrag:**  
- Schreibe mindestens zwei Interaktionstests:
  - Ein Klick auf den Erhöhen-Button erhöht den Zählerstand.
  - Ein Klick auf Reset setzt den Wert zurück, falls du einen Reset-Button hast.
- Nutze `@testing-library/user-event` für die Benutzerinteraktion.
- Achte darauf, dass du den Zustand vor und nach der Aktion prüfst.
- Führe alle Tests aus und beseitige Fehler, bis der Testlauf sauber ist.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Die Interaktionen deiner Komponente sind automatisiert getestet.
- Der Testlauf ist grün.
- Du hast mindestens einen Test, der eine Zustandsänderung überprüft.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Testfälle für Props ergänzen 
**Ziel:** Du testest Varianten deiner Komponente mit unterschiedlichen Eingaben. 

**Arbeitsauftrag:**  
- Erweitere `CounterCard` um mindestens eine Prop, zum Beispiel:
  - `title`
  - `initialCount`
  - `step`
- Schreibe Tests für mindestens zwei unterschiedliche Prop-Kombinationen.
- Prüfe, ob die Komponente sich abhängig von den Props korrekt verhält.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Deine Komponente ist flexibler geworden.
- Die Tests decken verschiedene Eingabewerte ab.
- Du erkennst, wie Tests bei variantenreichen Komponenten helfen.

### Erweiterungsaufgabe 2: Negativen Testfall ergänzen 
**Ziel:** Du prüfst bewusst einen Fall, in dem ein Element nicht vorhanden sein soll. 

**Arbeitsauftrag:**  
- Baue in deine Komponente eine Bedingung ein, zum Beispiel:
  - Der Reset-Button erscheint erst ab einem Zählerstand größer als 0.
  - Eine Zusatzmeldung erscheint nur ab einem bestimmten Wert.
- Schreibe einen Test, der prüft, dass das Element zunächst nicht sichtbar ist.
- Schreibe einen weiteren Test, der prüft, dass es nach einer Interaktion erscheint.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Du hast mindestens einen Test für „nicht vorhanden“ und einen für „danach vorhanden“.
- Du übst den Umgang mit positiven und negativen Testfällen.

### Erweiterungsaufgabe 3: Testdatei aufräumen und dokumentieren 
**Ziel:** Du verbesserst die Lesbarkeit und Wartbarkeit deiner Tests. 

**Arbeitsauftrag:**  
- Überarbeite deine Testnamen so, dass sofort klar ist, was geprüft wird.
- Fasse zusammengehörige Tests sinnvoll in `describe`-Blöcken zusammen.
- Entferne unnötige Wiederholungen.
- Ergänze am Dateianfang einen kurzen Kommentar mit 3 Stichpunkten:
  - Was wird getestet?
  - Warum ist dieser Test nützlich?
  - Welcher Testtyp überwiegt?

**Erwartetes Ergebnis / Soll-Zustand:**  
- Deine Testdatei ist übersichtlich und verständlich.
- Du kannst deine Tests leichter erweitern.
- Du hast eine gut lesbare erste Testbasis für dein React-19-Projekt.

## Wichtige Hinweise 

- Arbeite schrittweise und führe Tests regelmäßig aus.
- Achte auf klare Benennungen für Komponenten, Testdateien und Testfälle.
- Prüfe sichtbare Inhalte möglichst über Rollen, Texte und Labels.
- Halte deine Tests unabhängig voneinander.
- Passe deine Komponente nur so weit an, dass sie gut testbar bleibt.
- Wenn ein Test fehlschlägt, dokumentiere kurz die Ursache direkt im Code als Kommentar und behebe den Fehler anschließend.
- Wenn du vorzeitig fertig bist, bearbeite mindestens zwei Erweiterungsaufgaben.

## Reflexionsfragen 

- Woran erkennst du in deinem Beispiel den Unterschied zwischen einem Unit-, Komponenten- und Integrationstest?
- Welche Bestandteile einer Testdatei brauchst du mindestens, damit ein einfacher React-Test verständlich bleibt?
- Welche Query aus der React Testing Library hat dir am meisten geholfen und warum?
- Was bringt dir ein automatisierter Test in deiner `CounterCard`, obwohl du die Komponente auch im Browser anklicken kannst?
- Welche Änderung an deiner Komponente würdest du als Nächstes testen?

---