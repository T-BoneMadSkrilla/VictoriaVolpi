function createNavbarStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Navigation styles */
    .navbar {
      position: relative;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      height: 100px;
    }

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }

    /* Desktop navigation */
    .nav-left, .nav-right {
      flex: 1;
    }

    .nav-left {
      display: flex;
      justify-content: flex-start;
      margin-top: 10px;
    }

    .nav-right {
      display: flex;
      justify-content: flex-end;
      margin-top: 1px;
    }

    .nav-center {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      margin-top: 10px;
    }

    /* Logo styling */
    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
    }

    .logo-initials {
      font-family: 'Times New Roman', serif;
      font-size: 0.8rem;
      color: #333333;
      border: 1px solid #333333;
      border-radius: 50%;
      padding: 4px 8px;
      margin-bottom: 5px;
    }

    .logo-name {
      font-family: 'Trajan Pro', 'Times New Roman', serif;
      font-size: 1rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      font-weight: 400;
      color: #333333;
    }

    .logo-subtitle {
      font-family: 'Times New Roman', serif;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 300;
      color: #666666;
      margin-top: 5px;
    }

    /* Navigation links */
    .nav-link {
      font-family: 'Times New Roman', serif;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #333333;
      text-decoration: none;
    }

    .nav-link:hover {
      color: #777777;
    }

    /* Mobile menu button */
    .menu-button {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      color: #333333;
    }

    /* Mobile navigation menu */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      background-color: white;
      border-top: 1px solid #eaeaea;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .mobile-menu a {
      display: block;
      padding: 15px 20px;
      font-family: 'Times New Roman', serif;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #333333;
      text-decoration: none;
    }

    .mobile-menu a:hover {
      color: #777777;
    }

    /* Mobile menu toggle state */
    .mobile-menu.active {
      display: block;
    }

    /* Media queries for responsive design */
    @media (max-width: 768px) {
      .nav-left, .nav-right {
        display: none;
      }

      .menu-button {
        display: block;
      }

      .nav-content {
        justify-content: center;
        position: relative;
      }

      .menu-button {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  `;
  document.head.appendChild(styleElement);
}

function createNavbar() {
  const navbarElement = document.createElement('nav');
  navbarElement.className = 'navbar';
  navbarElement.innerHTML = `
    <div class="nav-container">
      <div class="nav-content">
        <!-- Left navigation -->
        <div class="nav-left">
          <a href="/VictoriaVolpi/nursing-guides" class="nav-link">Nursing Guides</a>
        </div>

        <!-- Center logo and name -->
        <div class="nav-center">
          <a href="/" class="logo-container">
            <div class="logo-initials">V V</div>
            <div class="logo-name">Victoria Volpi</div>
            <div class="logo-subtitle">Legal Nurse Consultant</div>
          </a>
        </div>

        <!-- Right navigation -->
        <div class="nav-right">
          <a href="/VictoriaVolpi/legal-nurse" class="nav-link">Legal Nurse Consulting</a>
        </div>

        <!-- Mobile menu button -->
        <button class="menu-button" id="menuToggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" id="mobileMenu">
      <a href="/VictoriaVolpi/nursing-guides">Nursing Guides</a>
      <a href="/VictoriaVolpi/legal-nurse">Legal Nurse Consulting</a>
    </div>
  `;
  
  document.body.insertBefore(navbarElement, document.body.firstChild);

  setupMobileMenu();
}

function setupMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      if (mobileMenu.classList.contains('active')) {
        menuToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      } else {
        menuToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  createNavbarStyles();
  createNavbar();
});