/**
 * update-service-pages.js
 * Applies gallery images + global navbar to all 7 service subpages
 */
const fs = require('fs');
const path = require('path');

const DEPLOY = path.join(__dirname, 'deploy', 'servicios');

// The new global navbar that matches the homepage (with absolute paths)
const NAVBAR_HTML = `  <!-- NAVBAR -->
  <nav class="fixed top-1 left-0 right-0 z-50" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass-card rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg shadow-navy-500/5">
        <a href="/" class="flex items-center gap-2">
          <img src="/assets/img/logo-eikonecta-color.png" alt="EIKONECTA" class="h-9 w-auto">
        </a>
        <div class="hidden md:flex items-center gap-8">
          <a href="/" class="font-heading font-semibold text-sm text-navy-400 hover:text-accent-500 transition-colors">INICIO</a>
          <!-- SERVICIOS Dropdown -->
          <div class="relative group">
            <button class="font-heading font-semibold text-sm text-navy-400 hover:text-accent-500 transition-colors flex items-center gap-1 cursor-pointer">
              SERVICIOS
              <span class="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
            </button>
            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="bg-white rounded-2xl shadow-2xl shadow-navy-500/10 border border-navy-100/50 p-4 min-w-[260px]">
                <a href="/servicios/gran-formato-sincelejo/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-accent-500 text-xl">panorama_wide_angle</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">Gran Formato</span>
                </a>
                <a href="/servicios/branding-sincelejo/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-navy-400 text-xl">palette</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">Branding</span>
                </a>
                <a href="/servicios/ambientacion-sincelejo/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-accent-500 text-xl">room_preferences</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">Ambientación</span>
                </a>
                <a href="/servicios/litografia-sincelejo/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-navy-400 text-xl">print</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">Litografía</span>
                </a>
                <a href="/servicios/souvenirs-sincelejo/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-accent-500 text-xl">featured_seasonal_and_gifts</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">Souvenirs</span>
                </a>
                <a href="/servicios/editorial-sincelejo/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-navy-400 text-xl">menu_book</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">Impresión Editorial</span>
                </a>
                <a href="/servicios/acrilicos-3d-sincelejo/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-accent-500 text-xl">view_in_ar</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">Acrílicos 3D</span>
                </a>
              </div>
            </div>
          </div>
          <!-- NOSOTROS Dropdown -->
          <div class="relative group">
            <button class="font-heading font-semibold text-sm text-navy-400 hover:text-accent-500 transition-colors flex items-center gap-1 cursor-pointer">
              NOSOTROS
              <span class="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
            </button>
            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="bg-white rounded-2xl shadow-2xl shadow-navy-500/10 border border-navy-100/50 p-4 min-w-[220px]">
                <a href="/#nosotros" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-navy-400 text-xl">history_edu</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">Nuestra Historia</span>
                </a>
                <a href="/#por-que" class="flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors group/item">
                  <span class="material-symbols-outlined text-accent-500 text-xl">workspace_premium</span>
                  <span class="font-heading font-semibold text-sm text-navy-500 group-hover/item:text-accent-500">¿Por qué elegirnos?</span>
                </a>
              </div>
            </div>
          </div>
          <a href="https://wa.me/573022383891?text=Hola%20Eikonecta%2C%20quiero%20cotizar%20un%20proyecto" target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            CONTACTAR AHORA
          </a>
        </div>
        <button id="mobile-toggle" class="md:hidden p-2 rounded-xl hover:bg-navy-50 transition-colors" aria-label="Menú">
          <svg class="w-6 h-6 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden mt-2 glass-card rounded-2xl p-4 shadow-xl">
        <a href="/" class="block py-3 px-4 font-heading font-semibold text-navy-500 hover:bg-accent-50 rounded-xl transition-colors">INICIO</a>
        <p class="px-4 pt-3 pb-1 font-heading font-bold text-xs text-navy-300 uppercase tracking-wider">Servicios</p>
        <a href="/servicios/gran-formato-sincelejo/" class="block py-2 px-4 text-sm text-navy-400 hover:bg-accent-50 rounded-xl transition-colors">Gran Formato</a>
        <a href="/servicios/branding-sincelejo/" class="block py-2 px-4 text-sm text-navy-400 hover:bg-accent-50 rounded-xl transition-colors">Branding</a>
        <a href="/servicios/ambientacion-sincelejo/" class="block py-2 px-4 text-sm text-navy-400 hover:bg-accent-50 rounded-xl transition-colors">Ambientación</a>
        <a href="/servicios/litografia-sincelejo/" class="block py-2 px-4 text-sm text-navy-400 hover:bg-accent-50 rounded-xl transition-colors">Litografía</a>
        <a href="/servicios/souvenirs-sincelejo/" class="block py-2 px-4 text-sm text-navy-400 hover:bg-accent-50 rounded-xl transition-colors">Souvenirs</a>
        <a href="/servicios/editorial-sincelejo/" class="block py-2 px-4 text-sm text-navy-400 hover:bg-accent-50 rounded-xl transition-colors">Impresión Editorial</a>
        <a href="/servicios/acrilicos-3d-sincelejo/" class="block py-2 px-4 text-sm text-navy-400 hover:bg-accent-50 rounded-xl transition-colors">Acrílicos 3D</a>
        <a href="/#nosotros" class="block py-3 px-4 font-heading font-semibold text-navy-500 hover:bg-accent-50 rounded-xl transition-colors mt-2">NOSOTROS</a>
        <a href="https://wa.me/573022383891?text=Hola%20Eikonecta%2C%20quiero%20cotizar%20un%20proyecto" target="_blank" class="block mt-2 bg-green-500 text-white font-heading font-bold text-center py-3 px-4 rounded-xl hover:bg-green-600 transition-colors">
          💬 CONTACTAR AHORA
        </a>
      </div>
    </div>
  </nav>`;

// Gallery replacements
const GALLERY_AMBIENTACION = `          <div class="fade-up rounded-2xl overflow-hidden group relative lg:col-span-2 lg:row-span-2" style="background:linear-gradient(135deg,#f8f9fa,#e8edf5);">
            <div class="h-64 lg:h-full flex items-center justify-center p-4">
              <img src="/assets/img/portfolio/ambientacion_oficina_branding.webp" alt="Interior de oficina corporativa ambientada con branding profesional — Proyecto de Ambientación de Espacios Eikonecta, Sincelejo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" loading="lazy">
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-800/80 to-transparent p-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="font-heading font-bold text-sm text-white">Oficina Corporativa Ambientada</span>
            </div>
          </div>

          <div class="fade-up rounded-2xl overflow-hidden group relative " style="background:linear-gradient(135deg,#f8f9fa,#e8edf5);">
            <div class="h-48 lg:h-64 flex items-center justify-center p-4">
              <img src="/assets/img/portfolio/ambientacion_local_comercial.webp" alt="Local comercial con diseño de ambientación integral — Proyecto de Ambientación de Espacios Eikonecta, Sincelejo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" loading="lazy">
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-800/80 to-transparent p-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="font-heading font-bold text-sm text-white">Local Comercial Ambientado</span>
            </div>
          </div>`;

const GALLERY_ACRILICOS = `          <div class="fade-up rounded-2xl overflow-hidden group relative lg:col-span-2 lg:row-span-2" style="background:linear-gradient(135deg,#f8f9fa,#e8edf5);">
            <div class="h-64 lg:h-full flex items-center justify-center p-4">
              <img src="/assets/img/portfolio/acrilicos_3d_fachada_iluminada.webp" alt="Letrero 3D acrílico iluminado en fachada de negocio — Proyecto de Acrílicos 3D Eikonecta, Sincelejo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" loading="lazy">
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-800/80 to-transparent p-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="font-heading font-bold text-sm text-white">Letrero 3D Iluminado en Fachada</span>
            </div>
          </div>

          <div class="fade-up rounded-2xl overflow-hidden group relative " style="background:linear-gradient(135deg,#f8f9fa,#e8edf5);">
            <div class="h-48 lg:h-64 flex items-center justify-center p-4">
              <img src="/assets/img/portfolio/acrilicos_3d_senalizacion_interior.webp" alt="Señalización interior en acrílico para oficinas — Proyecto de Acrílicos 3D Eikonecta, Sincelejo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" loading="lazy">
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-800/80 to-transparent p-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="font-heading font-bold text-sm text-white">Señalización Interior Acrílica</span>
            </div>
          </div>`;

const GALLERY_LITOGRAFIA_EXTRA = `
          <div class="fade-up rounded-2xl overflow-hidden group relative " style="background:linear-gradient(135deg,#f8f9fa,#e8edf5);">
            <div class="h-48 lg:h-64 flex items-center justify-center p-4">
              <img src="/assets/img/portfolio/litografia_material_corporativo.webp" alt="Material litográfico corporativo premium — tarjetas, brochures, carpetas — Proyecto Litografía Eikonecta, Sincelejo" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" loading="lazy">
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-800/80 to-transparent p-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="font-heading font-bold text-sm text-white">Material Corporativo Premium</span>
            </div>
          </div>`;

const services = [
  'acrilicos-3d-sincelejo',
  'ambientacion-sincelejo',
  'branding-sincelejo',
  'editorial-sincelejo',
  'gran-formato-sincelejo',
  'litografia-sincelejo',
  'souvenirs-sincelejo'
];

// The old navbar pattern — match from <!-- NAVBAR --> to </nav>
const navbarRegex = /  <!-- NAVBAR -->[\s\S]*?<\/nav>/;

// The placeholder gallery pattern
const placeholderRegex = /          <div class="fade-up col-span-full rounded-2xl p-12 text-center"[\s\S]*?Portafolio en construcci[^<]*<\/h3>\s*<p[^>]*>[^<]*<\/p>\s*<\/div>/;

for (const svc of services) {
  const filePath = path.join(DEPLOY, svc, 'index.html');
  let html = fs.readFileSync(filePath, 'utf-8');

  // 1) Replace navbar
  if (navbarRegex.test(html)) {
    html = html.replace(navbarRegex, NAVBAR_HTML);
    console.log(`✅ [${svc}] Navbar updated`);
  } else {
    console.log(`⚠️ [${svc}] Navbar pattern not found`);
  }

  // 2) Replace gallery placeholders
  if (svc === 'ambientacion-sincelejo' && placeholderRegex.test(html)) {
    html = html.replace(placeholderRegex, GALLERY_AMBIENTACION);
    console.log(`✅ [${svc}] Gallery images inserted`);
  }

  if (svc === 'acrilicos-3d-sincelejo' && placeholderRegex.test(html)) {
    html = html.replace(placeholderRegex, GALLERY_ACRILICOS);
    console.log(`✅ [${svc}] Gallery images inserted`);
  }

  // 3) Add extra image to litografía (after the existing brochure entry)
  if (svc === 'litografia-sincelejo') {
    const litSearchStr = '          </div>\n      </div>';
    // Find the gallery section closing — the first occurrence after GALLERY comment
    const galleryIdx = html.indexOf('<!-- GALLERY -->');
    if (galleryIdx > -1) {
      const afterGallery = html.indexOf(litSearchStr, galleryIdx);
      if (afterGallery > -1) {
        html = html.slice(0, afterGallery) + GALLERY_LITOGRAFIA_EXTRA + '\n' + html.slice(afterGallery);
        console.log(`✅ [${svc}] Extra gallery image added`);
      }
    }
  }

  fs.writeFileSync(filePath, html, 'utf-8');
}

console.log('\\n🎉 All service pages updated!');
