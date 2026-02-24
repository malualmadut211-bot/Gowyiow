const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/pages/services.html' },
  { name: 'About', path: '/pages/about.html' },
  { name: 'Gallery', path: '/pages/gallery.html' },
  { name: 'Contact', path: '/pages/contact.html' }
];

class AppHeader extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;
    
    // Helper to determine if a link is active
    const isActive = (path) => {
      if (path === '/' && (currentPath === '/' || currentPath === '/index.html')) return true;
      if (path !== '/' && currentPath.includes(path)) return true;
      return false;
    };

    const desktopLinksHtml = navLinks.map(link => `
      <a href="${link.path}" class="text-sm font-medium transition-colors ${isActive(link.path) ? 'text-[#ea3e69] font-bold' : 'text-[#1b0e11]/80 hover:text-[#ea3e69]'}">
        ${link.name}
      </a>
    `).join('');

    const mobileLinksHtml = navLinks.map(link => `
      <a href="${link.path}" class="block px-4 py-2 text-base font-medium transition-colors ${isActive(link.path) ? 'text-[#ea3e69] font-bold bg-[#ea3e69]/5 rounded-lg' : 'text-[#1b0e11]/80 hover:text-[#ea3e69] hover:bg-gray-50 rounded-lg'}">
        ${link.name}
      </a>
    `).join('');

    this.innerHTML = `
      <header class="sticky top-0 z-50 bg-[#fcf8f9]/95 backdrop-blur-md border-b border-[#e7d0d6]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <a href="/" class="flex items-center gap-3 text-[#1b0e11]">
              <div class="size-8 text-[#ea3e69]">
                <span class="material-symbols-outlined text-3xl">spa</span>
              </div>
              <h2 class="text-xl font-bold tracking-tight font-['Noto_Serif']">Gowyiow Skincare</h2>
            </a>
            <nav class="hidden md:flex gap-8 items-center">
              ${desktopLinksHtml}
            </nav>
            <div class="flex items-center">
              <a href="/pages/contact.html" class="hidden sm:flex bg-[#ea3e69] hover:bg-[#d12a52] text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-colors shadow-lg shadow-[#ea3e69]/20">
                Book Now
              </a>
              <button class="md:hidden ml-4 text-[#1b0e11] p-2 rounded-lg hover:bg-gray-100 transition-colors" id="mobile-menu-btn">
                <span class="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden hidden bg-white border-t border-[#e7d0d6]/30 absolute w-full shadow-lg" id="mobile-menu">
          <nav class="flex flex-col px-4 py-4 gap-2">
            ${mobileLinksHtml}
            <a href="/pages/contact.html" class="mt-4 text-center bg-[#ea3e69] hover:bg-[#d12a52] text-white text-base font-bold py-3 px-6 rounded-xl transition-colors shadow-md">
              Book Now
            </a>
          </nav>
        </div>
      </header>
    `;

    // Add mobile menu toggle logic
    const btn = this.querySelector('#mobile-menu-btn');
    const menu = this.querySelector('#mobile-menu');
    const icon = btn.querySelector('span');
    
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      if (menu.classList.contains('hidden')) {
        icon.textContent = 'menu';
      } else {
        icon.textContent = 'close';
      }
    });
  }
}
customElements.define('app-header', AppHeader);

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-[#1b0e11] text-gray-300 pt-16 pb-8 border-t border-[#e7d0d6]/10">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <!-- Brand -->
            <div class="space-y-4">
              <div class="flex items-center gap-2 text-[#ea3e69]">
                <span class="material-symbols-outlined text-2xl">spa</span>
                <span class="font-['Noto_Serif'] font-bold text-xl text-white">Gowyiow</span>
              </div>
              <p class="text-sm leading-relaxed text-gray-400">
                Luxury skincare and salon services designed to reveal your inner radiance. Experience the art of beauty.
              </p>
              <div class="flex gap-4 pt-2">
                <a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea3e69] hover:text-white transition-colors" href="#">
                  <span class="font-bold text-xs">FB</span>
                </a>
                <a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea3e69] hover:text-white transition-colors" href="#">
                  <span class="font-bold text-xs">IG</span>
                </a>
                <a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea3e69] hover:text-white transition-colors" href="#">
                  <span class="font-bold text-xs">TW</span>
                </a>
              </div>
            </div>
            <!-- Quick Links -->
            <div>
              <h4 class="font-bold text-lg mb-6 text-white font-['Noto_Serif']">Quick Links</h4>
              <ul class="space-y-3 text-sm">
                <li><a href="/" class="hover:text-[#ea3e69] transition-colors">Home</a></li>
                <li><a href="/pages/about.html" class="hover:text-[#ea3e69] transition-colors">About Us</a></li>
                <li><a href="/pages/services.html" class="hover:text-[#ea3e69] transition-colors">Services</a></li>
                <li><a href="/pages/gallery.html" class="hover:text-[#ea3e69] transition-colors">Gallery</a></li>
                <li><a href="/pages/contact.html" class="hover:text-[#ea3e69] transition-colors">Contact</a></li>
              </ul>
            </div>
            <!-- Services -->
            <div>
              <h4 class="font-bold text-lg mb-6 text-white font-['Noto_Serif']">Services</h4>
              <ul class="space-y-3 text-sm">
                <li><a href="/pages/services.html" class="hover:text-[#ea3e69] transition-colors">Facial Treatments</a></li>
                <li><a href="/pages/services.html" class="hover:text-[#ea3e69] transition-colors">Body Massages</a></li>
                <li><a href="/pages/services.html" class="hover:text-[#ea3e69] transition-colors">Hair Styling</a></li>
                <li><a href="/pages/services.html" class="hover:text-[#ea3e69] transition-colors">Nail Care</a></li>
                <li><a href="/pages/services.html" class="hover:text-[#ea3e69] transition-colors">Bridal Packages</a></li>
              </ul>
            </div>
            <!-- Contact -->
            <div>
              <h4 class="font-bold text-lg mb-6 text-white font-['Noto_Serif']">Contact</h4>
              <ul class="space-y-4 text-sm">
                <li class="flex gap-3">
                  <span class="material-symbols-outlined text-[#ea3e69] text-lg">location_on</span>
                  <span>123 Luxury Lane, Tombura</span>
                </li>
                <li class="flex gap-3">
                  <span class="material-symbols-outlined text-[#ea3e69] text-lg">call</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li class="flex gap-3">
                  <span class="material-symbols-outlined text-[#ea3e69] text-lg">mail</span>
                  <span>hello@gowyiow.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2023 Gowyiow Skincare. All rights reserved.</p>
            <div class="flex gap-6">
              <a class="hover:text-[#ea3e69]" href="#">Privacy Policy</a>
              <a class="hover:text-[#ea3e69]" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('app-footer', AppFooter);
