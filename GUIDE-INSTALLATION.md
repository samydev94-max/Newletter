# 🚀 Guide d'Installation - Alertes Crypto & Politique

## 📱 Option 1 : NTFY (LE PLUS SIMPLE - RECOMMANDÉ)

### Pourquoi NTFY ?
- ✅ **AUCUNE inscription requise**
- ✅ **AUCUNE clé API**
- ✅ **Gratuit à 100%**
- ✅ **Notifications push sur mobile**
- ✅ **Installation en 2 minutes**

### Installation NTFY

1. **Télécharger l'app NTFY**
   - Android : https://play.google.com/store/apps/details?id=io.heckel.ntfy
   - iOS : https://apps.apple.com/app/ntfy/id1625396347
   - Web : https://ntfy.sh

2. **S'abonner au topic**
   - Ouvrir l'app NTFY
   - Cliquer sur "+"
   - Entrer le nom du topic : `crypto-news-alerts`
   - Cliquer sur "Subscribe"

3. **C'EST TOUT !** 🎉
   - Vous recevrez les notifications à 8h chaque matin
   - Pas besoin de créer de compte
   - Pas besoin de configurer quoi que ce soit

### Personnaliser le nom du topic

Pour changer le nom du topic (et avoir un channel privé) :
- Dans le workflow n8n, modifier le noeud "Envoyer notification NTFY"
- Changer l'URL de `https://ntfy.sh/crypto-news-alerts` vers `https://ntfy.sh/VOTRE-NOM-UNIQUE`
- S'abonner à ce nouveau topic dans l'app

---

## 🎮 Option 2 : Discord Webhook

Si vous préférez recevoir les alertes sur Discord :

### Configuration Discord

1. **Créer un webhook Discord**
   - Aller sur votre serveur Discord
   - Paramètres du channel → Intégrations → Webhooks
   - Cliquer sur "Nouveau Webhook"
   - Copier l'URL du webhook

2. **Importer le workflow Discord**
   - Utiliser le fichier `crypto-news-workflow-discord.json`
   - Dans le noeud "Send Discord", remplacer `VOTRE_WEBHOOK_URL` par votre URL

---

## 🔧 Installation du Workflow n8n

### Prérequis
- Avoir n8n installé (Docker ou npm)
- Port 5678 accessible

### Méthode 1 : Docker (Recommandé)

```bash
# Démarrer n8n avec Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# Ouvrir dans le navigateur
# http://localhost:5678
```

### Méthode 2 : npm

```bash
# Installer n8n globalement
npm install n8n -g

# Démarrer n8n
n8n start

# Ouvrir dans le navigateur
# http://localhost:5678
```

### Importer le Workflow

1. **Ouvrir n8n** : http://localhost:5678
2. **Cliquer sur "Import from File"**
3. **Sélectionner** : `crypto-news-workflow.json`
4. **Activer le workflow** : Toggle "Active" en haut à droite
5. **C'EST PARTI !** 🎉

---

## ⏰ Configuration du Scheduler

Le workflow est configuré pour s'exécuter **tous les jours à 8h00**.

Pour modifier l'heure :
1. Ouvrir le noeud "Schedule - 8h du matin"
2. Modifier l'expression cron : `0 8 * * *`
   - `0 8 * * *` = 8h00 tous les jours
   - `0 12 * * *` = 12h00 tous les jours
   - `0 18 * * *` = 18h00 tous les jours

---

## 📰 Sources RSS Configurées

### Crypto
- **Cointelegraph** : News crypto générales
- **CoinDesk** : Bitcoin et marchés crypto

### Politique
- **Bloomberg Politics** : Politique et économie impactant les marchés

### Ajouter d'autres sources

Pour ajouter plus de sources RSS :
1. Ajouter un nouveau noeud "RSS Feed Read"
2. Entrer l'URL du flux RSS
3. Connecter au noeud "Fusionner tous les feeds"

**Suggestions de flux RSS :**
- Bitcoin Magazine : `https://bitcoinmagazine.com/.rss/full/`
- Reuters Business : `https://www.reuters.com/business/finance`
- The Block : `https://www.theblock.co/rss.xml`

---

## 🤖 Ajouter un Résumé avec IA (Optionnel)

### Option A : Ollama (Local, Gratuit)

1. **Installer Ollama**
```bash
# Linux/Mac
curl -fsSL https://ollama.com/install.sh | sh

# Démarrer Ollama
ollama pull llama2
```

2. **Ajouter le noeud dans n8n**
   - Ajouter un noeud "HTTP Request"
   - URL : `http://localhost:11434/api/generate`
   - Method : POST
   - Body :
   ```json
   {
     "model": "llama2",
     "prompt": "Résume ces news en français en 3 points clés : {{ $json.message }}",
     "stream": false
   }
   ```

### Option B : Sans IA (Actuel)

Le workflow actuel fait un résumé basique :
- Filtre les news pertinentes (Bitcoin, crypto, politique)
- Sépare en 2 catégories
- Affiche les 5 news les plus récentes de chaque catégorie

---

## 🧪 Tester le Workflow

Pour tester sans attendre 8h :
1. Ouvrir le workflow dans n8n
2. Cliquer sur "Execute Workflow" (bouton play)
3. Vérifier la notification NTFY/Discord

---

## ❓ FAQ

**Q : Je ne reçois pas de notifications**
- Vérifier que le workflow est "Active" dans n8n
- Vérifier que vous êtes abonné au bon topic dans NTFY
- Tester manuellement le workflow

**Q : Comment changer le fuseau horaire ?**
- n8n utilise le fuseau horaire du serveur
- Pour Docker, ajouter : `-e TZ=Europe/Paris`

**Q : Puis-je recevoir plus de news ?**
- Modifier le noeud "Limiter à 10 news récentes"
- Changer la limite de 10 à 20 ou plus

**Q : Comment ajouter d'autres cryptos (ETH, etc.) ?**
- Modifier le code JavaScript dans "Agréger & Résumer"
- Ajouter des conditions : `title.includes('ethereum')` etc.

---

## 📞 Besoin d'aide ?

Ce workflow est simple et fonctionne out-of-the-box. Si vous avez des questions :
1. Vérifier que n8n est bien démarré
2. Vérifier que le workflow est actif
3. Tester manuellement avec le bouton "Execute"

**Bon trading ! 📈🚀**
