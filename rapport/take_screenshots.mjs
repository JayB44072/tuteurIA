import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, 'screenshots');
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:5174';

const PAGES = [
  { name: '01_accueil',        url: '/',               label: 'Page d\'accueil (mode clair)',    w: 1440, h: 900  },
  { name: '02_accueil_dark',   url: '/',               label: 'Page d\'accueil (mode sombre)',   w: 1440, h: 900,  dark: true },
  { name: '03_inscription',    url: '/auth/signup',    label: 'Page d\'inscription',             w: 1440, h: 900  },
  { name: '04_connexion',      url: '/auth/login',     label: 'Page de connexion',               w: 1440, h: 900  },
  { name: '05_dashboard',      url: '/dashboard',      label: 'Tableau de bord',                 w: 1440, h: 900  },
  { name: '06_matieres',       url: '/matieres',       label: 'Catalogue des matieres',          w: 1440, h: 900  },
  { name: '07_cours',          url: '/matieres/maths', label: 'Detail matiere Mathematiques',    w: 1440, h: 900  },
  { name: '08_qcm_liste',      url: '/qcm',            label: 'Liste des QCM',                   w: 1440, h: 900  },
  { name: '09_tuteur_ia',      url: '/ai-tuteur',      label: 'Tuteur IA conversationnel',       w: 1440, h: 900  },
  { name: '10_doc_quiz',       url: '/doc-quiz',       label: 'Generateur Doc vers QCM',         w: 1440, h: 900  },
  { name: '11_progression',    url: '/progression',    label: 'Tableau de progression',          w: 1440, h: 900  },
  { name: '12_profil',         url: '/profil',         label: 'Page profil utilisateur',         w: 1440, h: 900  },
  { name: '13_mobile_accueil', url: '/',               label: 'Accueil Vue mobile',              w: 390,  h: 844  },
  { name: '14_mobile_tuteur',  url: '/ai-tuteur',      label: 'Tuteur IA Vue mobile',            w: 390,  h: 844  },
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  console.log('Lancement du navigateur...');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-extensions',
    ],
    timeout: 30000,
  });

  console.log('Navigateur lance. Debut des captures...');

  for (const page of PAGES) {
    const tab = await browser.newPage();
    await tab.setViewport({ width: page.w, height: page.h, deviceScaleFactor: 1.5 });

    // Set dark mode via localStorage before navigating
    await tab.evaluateOnNewDocument((dark) => {
      localStorage.setItem('tuteur-theme', dark ? 'dark' : 'light');
      localStorage.setItem('tuteur-lang', 'fr');
    }, page.dark ? 'dark' : 'light');

    let success = false;
    for (const waitUntil of ['networkidle2', 'domcontentloaded', 'load']) {
      try {
        await tab.goto(`${BASE}${page.url}`, { waitUntil, timeout: 20000 });
        success = true;
        break;
      } catch (e) {
        console.log(`  retry ${waitUntil} for ${page.name}...`);
      }
    }

    if (!success) {
      console.log(`  SKIP ${page.name} (cannot navigate)`);
      await tab.close();
      continue;
    }

    await sleep(2000);

    // Apply dark class if needed
    if (page.dark) {
      await tab.evaluate(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      });
      await sleep(600);
    }

    // Scroll a bit to trigger lazy content
    await tab.evaluate(() => window.scrollTo(0, 0));
    await sleep(500);

    const path = join(OUT, `${page.name}.png`);
    await tab.screenshot({ path, fullPage: false, type: 'png' });
    console.log(`  OK ${page.name}.png — ${page.label}`);
    await tab.close();
  }

  await browser.close();
  console.log(`\nDone — captures dans ${OUT}`);
})();
