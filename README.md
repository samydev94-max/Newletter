# Newsletter & Crypto News Alerts

Ce repository contient :
1. 📰 **Landing page Newsletter** - Une page d'inscription simple et élégante
2. 🚀 **Workflows n8n** - Alertes automatiques crypto & politique

---

## 📰 Newsletter Landing Page

Une landing page simple et élégante pour l'inscription à une newsletter.

### Fichiers

- `index.html` - Page principale avec fichiers séparés (CSS, JS)
- `standalone.html` - Version autonome avec tout le code inline (recommandé pour partage)
- `styles.css` - Feuille de styles
- `script.js` - Script JavaScript

---

## 🚀 n8n Crypto & Politique News Alerts

Workflows n8n pour recevoir automatiquement des alertes sur Bitcoin et la politique impactant les marchés.

### Fichiers n8n

- `crypto-news-workflow.json` - **Workflow NTFY (RECOMMANDÉ)** - Le plus simple, sans inscription
- `crypto-news-workflow-discord.json` - Workflow Discord - Nécessite un webhook Discord
- `GUIDE-INSTALLATION.md` - **Guide complet d'installation** 📖

### ⚡ Démarrage rapide

1. **Installer n8n** :
```bash
docker run -it --rm --name n8n -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n
```

2. **Importer le workflow** :
   - Ouvrir http://localhost:5678
   - Import from File → `crypto-news-workflow.json`
   - Activer le workflow

3. **Installer l'app NTFY** :
   - Android : https://play.google.com/store/apps/details?id=io.heckel.ntfy
   - iOS : https://apps.apple.com/app/ntfy/id1625396347
   - S'abonner au topic : `crypto-news-alerts`

4. **C'EST TOUT !** 🎉
   - Vous recevrez les alertes chaque jour à 8h

### 📊 Fonctionnalités

✅ **Sources RSS** :
- Cointelegraph (Crypto)
- CoinDesk (Bitcoin)
- Bloomberg Politics

✅ **Filtrage intelligent** :
- Détection automatique des news Bitcoin/Crypto
- Détection des news politiques impactant les marchés

✅ **Notifications** :
- NTFY (push gratuit, sans inscription)
- Discord (webhook)
- Extensible (email, Telegram, etc.)

✅ **Scheduler** :
- Exécution quotidienne à 8h00
- Personnalisable

### 📖 Documentation complète

Voir **[GUIDE-INSTALLATION.md](GUIDE-INSTALLATION.md)** pour :
- Installation détaillée pas à pas
- Configuration NTFY / Discord
- Ajout de sources RSS
- Intégration IA (Ollama)
- FAQ et troubleshooting

---

## 📰 Newsletter Landing Page (suite)

## Activer GitHub Pages

Pour rendre cette page accessible publiquement :

1. Allez sur votre dépôt GitHub : https://github.com/samydev94-max/Newletter
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Source", sélectionnez la branche : `claude/newsletter-landing-page-011CUgssA5WnGZgEkUwmKueu`
5. Sélectionnez `/ (root)` comme dossier
6. Cliquez sur **Save**

Après quelques minutes, votre page sera disponible à :
`https://samydev94-max.github.io/Newletter/standalone.html`

## Aperçu local

Pour tester localement :
```bash
python3 -m http.server 8000
```

Puis ouvrez : http://localhost:8000/standalone.html
