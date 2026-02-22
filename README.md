# Ortodòncia i adolescència a les Terres de l'Ebre

**Treball de Recerca de Batxillerat 2025-2026**

Investigadora: Laia Genaró Solé  
Centre: Col·legi Diocesà de la Sagrada Família, Tortosa

---

## Descripció del Projecte

Web estàtica que presenta un estudi transversal analític sobre com influeixen les xarxes socials, l'economia i la cultura en l'ortodòncia dels adolescents de les Terres de l'Ebre.

La web inclou:
- **Presentació del treball de recerca** amb context local i motivació
- **Explicació de la metodologia** (enquestes quantitatives + entrevistes qualitatives)
- **Marc teòric**: Model Biopsicosocial-Cultural (BS-C)
- **Enllaços a les enquestes** per a adolescents i pares/mares
- **Consideracions ètiques** i privacitat
- **Informació sobre la investigadora**

---

## Estructura del Projecte

```
/
├── index.html           ← Pàgina principal (HTML5 semàntic)
├── client/
│   ├── index.html       ← Template HTML amb meta tags
│   ├── src/
│   │   ├── App.tsx      ← Component principal de React
│   │   ├── index.css    ← Estils globals (Tailwind + variables CSS)
│   │   ├── main.tsx     ← Punt d'entrada de React
│   │   └── pages/
│   │       └── Home.tsx ← Component principal amb totes les seccions
│   └── public/          ← Actius estàtics
├── package.json         ← Dependències del projecte
└── README.md            ← Aquest fitxer
```

---

## Tecnologies Utilitzades

- **React 19** - Framework frontend
- **Tailwind CSS 4** - Utilitats CSS per al disseny responsive
- **TypeScript** - Tipat estàtic
- **Vite** - Build tool ràpid
- **Wouter** - Enrutament client-side

---

## Instal·lació i Execució Local

### Requisits Previs
- Node.js 18+ instal·lat
- npm o pnpm com a gestor de paquets

### Passos per Executar

1. **Clonar o descarregar el repositori**
   ```bash
   git clone https://github.com/[usuari]/tdr-ortodoncia-ebre.git
   cd tdr-ortodoncia-ebre
   ```

2. **Instal·lar dependències**
   ```bash
   npm install
   # o si useu pnpm:
   pnpm install
   ```

3. **Executar el servidor de desenvolupament**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. **Accedir a la web**
   - Obriu el navegador a `http://localhost:3000`

---

## Despliegament a GitHub Pages

### Opció 1: Despliegament Manual

1. **Construir la web per a producció**
   ```bash
   npm run build
   # o
   pnpm build
   ```

2. **Crear un repositori a GitHub**
   - Aneu a [github.com/new](https://github.com/new)
   - Creeu un repositori amb el nom `tdr-ortodoncia-ebre`
   - **Important**: Seleccioneu "Public" perquè GitHub Pages funcioni

3. **Pujar el codi a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TDR web"
   git branch -M main
   git remote add origin https://github.com/[usuari]/tdr-ortodoncia-ebre.git
   git push -u origin main
   ```

4. **Activar GitHub Pages**
   - Aneu a **Settings** del repositori
   - Seleccioneu **Pages** al menú esquerre
   - Sota "Source", seleccioneu:
     - **Branch**: `main`
     - **Folder**: `/` (root)
   - Feu clic a **Save**

5. **Accedir a la web publicada**
   - La web estarà disponible a: `https://[usuari].github.io/tdr-ortodoncia-ebre`
   - Pot trigar alguns minuts a estar disponible

---

## Característiques de la Web

### Disseny Responsive
- ✅ Optimitzat per a mòbils (320px en amunt)
- ✅ Tablet (768px)
- ✅ Desktop (1024px+)
- ✅ Menú hamburguesa en mòbil

### Navegació
- ✅ Navbar sticky amb navegació per ancoratge
- ✅ Menú responsiu amb obrir/tancar
- ✅ Desplazament suau entre seccions
- ✅ Indicador d'actiu a la navegació

### Seccions Incloses
1. **Hero** - Portada amb imatge de fons i CTAs
2. **Motivació** - Context local i dades impactants
3. **Recerca** - Pregunta central, objectius i hipòtesis
4. **Marc Teòric** - Model BS-C amb 6 dimensions
5. **Metodologia** - Enquestes i entrevistes
6. **Participa** - CTAs principals per a les enquestes
7. **Ètica** - Consideracions de privacitat i LOPD
8. **Investigadora** - Presentació de Laia
9. **Contacte** - Informació de contacte
10. **Footer** - Informació del projecte

### Accessibilitat
- ✅ HTML5 semàntic
- ✅ Meta tags SEO
- ✅ Contrast de colors adequat
- ✅ Text descriptiu en botons i enllaços
- ✅ Navegació per teclat

---

## Personalització

### Canviar Informació de Contacte
Editeu el fitxer `client/src/pages/Home.tsx` i cerqueu:
```typescript
<a href="mailto:laia.genaro@example.com">
```
Canvieu `laia.genaro@example.com` pel vostre email.

### Actualitzar Enllaços de les Enquestes
Cerqueu les URLs de Google Forms:
- **Adolescents**: `https://forms.gle/NungYdppMM6jM2YK6`
- **Pares**: `https://forms.gle/qD9iTxrs1UcmJH538`

Reemplaceu-les pels vostres enllaços de formularis.

### Modificar Colors
Els colors es defineixen a `client/src/index.css`:
```css
:root {
  --primary: #1e3a5f;        /* Blau profund */
  --accent: #2ec4b6;         /* Turquesa */
  --destructive: #ff6b6b;    /* Coral/Vermell */
}
```

---

## Estructura de Seccions

### Hero Section
- Imatge de fons amb adolescents i somriures
- Títol i subtítol impactants
- Dos botons CTA per a les enquestes

### Motivació
- Context econòmic local
- 4 targetes amb dades clau
- Explicació del problema

### Recerca
- Pregunta central destacada
- 5 objectius numerats
- 4 hipòtesis en targetes

### Marc Teòric
- Imatge del model hexagonal BS-C
- 6 targetes amb factors explicatius
- Menció a Lamine Yamal

### Metodologia
- Imatge de metodologia mixed-methods
- Dues fases: quantitativa i qualitativa
- Timeline de recollida de dades

### Participa
- Secció destacada amb fons gradient
- Dues targetes per a enquestes
- Nota de privacitat
- Opció de voluntariat per entrevistes

### Ètica
- 6 punts de consideracions ètiques
- Compliment LOPD
- Destrucció de dades

### Investigadora
- Presentació personal de Laia
- Motivació per investigar el tema

### Contacte
- Email de contacte
- Centre educatiu
- Curs

---

## Imatges Incloses

La web utilitza imatges generades per a les seccions visuals prominents:

1. **Hero Background** - Adolescents amb somriures en clínica dental
2. **Factors Socioeconòmics** - Infografia de dades locals
3. **Metodologia** - Diagrama mixed-methods
4. **Model BS-C** - Hexàgon amb 6 dimensions

Totes les imatges estan optimitzades per a web i carregades des de CDN.

---

## Consideracions de Privacitat

La web compleix amb:
- ✅ **LOPD** (Llei Orgànica 3/2018 de Protecció de Dades)
- ✅ **RGPD** (Reglament General de Protecció de Dades)
- ✅ Consentiment doble (pares + adolescent)
- ✅ Anonimitat garantida
- ✅ Dades encriptades
- ✅ Destrucció de dades (setembre 2027)

---

## Suport i Manteniment

### Problemes Comuns

**La web no es carrega correctament**
- Assegureu-vos que teniu Node.js 18+ instal·lat
- Executeu `npm install` de nou
- Esborreu la carpeta `node_modules` i `pnpm-lock.yaml` i reinstal·leu

**GitHub Pages no mostra la web**
- Espereu 5-10 minuts després de fer push
- Verifiqueu que el repositori és **Public**
- Comproveu que GitHub Pages està activat a Settings

**Els enllaços de les enquestes no funcionen**
- Verifiqueu que les URLs de Google Forms són correctes
- Assegureu-vos que els formularis són públics

---

## Llicència

Aquest projecte és un Treball de Recerca de Batxillerat. Podeu usar, modificar i distribuir aquest codi lliurement.

---

## Autor

**Laia Genaró Solé**  
2n Batxillerat  
Col·legi Diocesà de la Sagrada Família, Tortosa  
Curs 2025-2026

---

## Agraïments

- Col·legi Diocesà de la Sagrada Família per la supervisió
- Participants en les enquestes i entrevistes
- Ortodoncistes de Tortosa per la col·laboració

---

## Contacte

📧 Email: [laia.genaro@example.com]  
🏫 Centre: Col·legi Diocesà de la Sagrada Família, Tortosa  
📅 Curs: 2025-2026

---

**Última actualització**: Febrer 2026
