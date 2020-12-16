# Ich bin eine Biene API Server

## Beschreibung

Der Server ist für die [Ich bin eine Biene](https://github.com/markxoe/ich-bin-eine-biene-mobile) App mit Express.js gebaut, um

1. Infos zu speichern und in der App abzurufen
2. Benutzerdaten speichern für den Highscore

## Zum Testen / verwenden

1. Eine `.env` Datei erstellen und die Variable `mongouri` auf die MongoURI stellen
2. Secret-Keys erstellen, mit vorlage von `src/secrets.example.json`
3. Benötigte Pakete mit `npm i` installieren
4. Den server mit `npm start` starten (verwendet `nodemon`)
