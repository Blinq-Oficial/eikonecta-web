/**
 * seo-service-pages.js
 * Adds FAQPage schema, Twitter Cards, inLanguage to all 7 service subpages
 */
const fs = require('fs');
const path = require('path');

const DEPLOY = path.join(__dirname, 'deploy', 'servicios');

const services = [
  'acrilicos-3d-sincelejo',
  'ambientacion-sincelejo',
  'branding-sincelejo',
  'editorial-sincelejo',
  'gran-formato-sincelejo',
  'litografia-sincelejo',
  'souvenirs-sincelejo'
];

for (const svc of services) {
  const filePath = path.join(DEPLOY, svc, 'index.html');
  let html = fs.readFileSync(filePath, 'utf-8');

  // 1) Add Twitter Cards after og:site_name
  if (!html.includes('twitter:card')) {
    const ogTitle = html.match(/<meta property="og:title" content="([^"]+)">/);
    const ogDesc = html.match(/<meta property="og:description" content="([^"]+)">/);
    const ogImage = html.match(/<meta property="og:image" content="([^"]+)">/);

    const title = ogTitle ? ogTitle[1] : 'EIKONECTA';
    const desc = ogDesc ? ogDesc[1] : '';
    const img = ogImage ? ogImage[1] : 'https://eikonecta.com/assets/img/hero.webp';

    const twitterCards = `
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${desc}">
  <meta name="twitter:image" content="${img}">`;

    html = html.replace(
      /<meta property="og:site_name" content="EIKONECTA">/,
      `<meta property="og:site_name" content="EIKONECTA">${twitterCards}`
    );
    console.log(`✅ [${svc}] Twitter Cards added`);
  }

  // 2) Add inLanguage to Service schema
  if (html.includes('"@type": "Service"') && !html.includes('"inLanguage"')) {
    html = html.replace(
      '"@type": "Service",',
      '"@type": "Service",\n    "inLanguage": "es",'
    );
    console.log(`✅ [${svc}] inLanguage added to Service schema`);
  }

  // 3) Extract FAQ questions and add FAQPage schema
  if (!html.includes('FAQPage')) {
    // Extract FAQ Q&A pairs from the HTML
    const faqRegex = /<span>([^<]+(?:¿[^<]+)?)<\/span>\s*<span class="material-symbols-outlined[^"]*"[^>]*>expand_more<\/span>\s*<\/button>\s*<div class="faq-content[^"]*"[^>]*>([^<]+)<\/div>/g;
    
    // Alternative: simpler extraction
    const questions = [];
    const faqItemRegex = /<span>(¿[^<]+\?|[^<]*\?)<\/span>/g;
    const faqAnswerRegex = /<div class="faq-content[^"]*"[^>]*style="display:none">\s*([^<]+)/g;
    
    let qMatch, aMatch;
    const qList = [];
    const aList = [];
    
    while ((qMatch = faqItemRegex.exec(html)) !== null) {
      qList.push(qMatch[1].trim());
    }
    while ((aMatch = faqAnswerRegex.exec(html)) !== null) {
      aList.push(aMatch[1].trim());
    }

    if (qList.length > 0 && qList.length === aList.length) {
      const faqItems = qList.map((q, i) => {
        const escapedQ = q.replace(/"/g, '\\"');
        const escapedA = aList[i].replace(/"/g, '\\"');
        return `      {
        "@type": "Question",
        "name": "${escapedQ}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${escapedA}"
        }
      }`;
      });

      const faqSchema = `
  <!-- FAQPage Schema for Rich Snippets -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqItems.join(',\n')}
    ]
  }
  </script>`;

      // Insert before </head>
      html = html.replace('</head>', `${faqSchema}\n</head>`);
      console.log(`✅ [${svc}] FAQPage schema added (${qList.length} questions)`);
    } else {
      console.log(`⚠️ [${svc}] FAQ extraction mismatch: ${qList.length} questions, ${aList.length} answers`);
    }
  }

  // 4) Add BreadcrumbList schema
  if (!html.includes('BreadcrumbList')) {
    // Extract service name from title
    const titleMatch = html.match(/<title>([^|]+)/);
    const serviceName = titleMatch ? titleMatch[1].trim() : svc;
    const serviceUrl = `https://eikonecta.com/servicios/${svc}/`;
    
    const breadcrumbSchema = `
  <!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://eikonecta.com/" },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://eikonecta.com/#servicios" },
      { "@type": "ListItem", "position": 3, "name": "${serviceName}", "item": "${serviceUrl}" }
    ]
  }
  </script>`;

    html = html.replace('</head>', `${breadcrumbSchema}\n</head>`);
    console.log(`✅ [${svc}] BreadcrumbList schema added`);
  }

  fs.writeFileSync(filePath, html, 'utf-8');
}

console.log('\n🎉 All service pages SEO-optimized!');
