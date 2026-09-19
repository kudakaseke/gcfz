const dropdownNavigation = {
  "about-gcfz.html": [
    ["Mission & Vision", "about-gcfz.html#mission"],
    ["Senior Leadership", "leadership.html"],
    ["GCFZ Organisation", "information.html?topic=organisation"],
    ["Governance & Funding", "information.html?topic=governance"],
    ["Careers", "information.html?topic=careers"]
  ],
  "about-cancer.html": [
    ["Understanding Cancer", "information.html?topic=understanding-cancer"],
    ["Causes & Prevention", "information.html?topic=causes-prevention"],
    ["Screening", "information.html?topic=screening"],
    ["Diagnosis & Staging", "information.html?topic=diagnosis-staging"],
    ["Treatment", "information.html?topic=treatment"],
    ["Coping", "information.html?topic=coping"],
    ["Managing Cancer Care", "information.html?topic=managing-care"]
  ],
  "news-events.html": [
    ["All News Releases", "news-events.html#news"],
    ["Events", "news-events.html#events"],
    ["Cancer Awareness Blog", "information.html?topic=cancer-blog"]
  ]
};

const cancerTypeSections = [
  {
    title: "Gynaecological Cancers",
    items: [
      ["Cervical Cancer", "information.html?topic=cervical-cancer"],
      ["Ovarian Cancer", "information.html?topic=ovarian-cancer"],
      ["Uterine (Endometrial) Cancer", "information.html?topic=uterine-cancer"],
      ["Vaginal Cancer", "information.html?topic=vaginal-cancer"],
      ["Vulvar Cancer", "information.html?topic=vulvar-cancer"]
    ]
  },
  {
    title: "Common Cancers",
    items: [
      ["Bladder Cancer", "information.html?topic=bladder-cancer"],
      ["Breast Cancer", "information.html?topic=breast-cancer"],
      ["Colorectal Cancer", "information.html?topic=colorectal-cancer"],
      ["Kidney Cancer", "information.html?topic=kidney-cancer"],
      ["Lung Cancer", "information.html?topic=lung-cancer"],
      ["Lymphoma", "information.html?topic=lymphoma"],
      ["Pancreatic Cancer", "information.html?topic=pancreatic-cancer"],
      ["Prostate Cancer", "information.html?topic=prostate-cancer"],
      ["Skin Cancer", "information.html?topic=skin-cancer"],
      ["Uterine Cancer", "information.html?topic=uterine-cancer"]
    ]
  },
  {
    title: "A-Z List of Cancer",
    href: "cancer-types.html#cancer-az"
  }
];

const siteHeader = document.querySelector(".site-header");
const existingNavLinks = siteHeader?.querySelector(".nav-links");

if (siteHeader && existingNavLinks && !siteHeader.classList.contains("home-header")) {
  siteHeader.classList.add("home-header");
  siteHeader.innerHTML = `
    <div class="brand-row">
      <a class="brand" href="index.html" aria-label="Gynaecological Cancer Foundation Zimbabwe home">
        <img src="Logo Icon PNG.png" alt="GCFZ logo">
        <span class="brand-text"><strong>Gynaecological Cancer Foundation</strong><small>Zimbabwe</small></span>
      </a>
      <a class="header-donate" href="contact.html">Donate</a>
      <form class="site-search" role="search">
        <label class="sr-only" for="site-search">Search this website</label>
        <input id="site-search" type="search" name="search">
        <button type="submit">Search</button>
      </form>
      <input class="nav-toggle" type="checkbox" id="nav-toggle" aria-label="Toggle navigation">
      <label class="menu-button" for="nav-toggle"><span></span><span></span><span></span></label>
    </div>
    <nav class="navbar" aria-label="Primary navigation"></nav>`;
  siteHeader.querySelector(".navbar").appendChild(existingNavLinks);
}

if (siteHeader && !siteHeader.querySelector(".header-contact-strip")) {
  siteHeader.insertAdjacentHTML("afterbegin", `
    <div class="header-contact-strip">
      <div class="header-contact-details">
        <a href="tel:+263242575928">+263 242 575928</a>
        <span class="header-contact-divider" aria-hidden="true"></span>
        <a href="mailto:info@gcfz.org">info@gcfz.org</a>
        <span class="header-contact-divider" aria-hidden="true"></span>
        <span>Awareness. Screening. Support.</span>
      </div>
      <a class="header-find-us" href="https://www.google.com/maps/search/?api=1&amp;query=Borrowdale+Racecourse%2C+Harare%2C+Zimbabwe" target="_blank" rel="noopener">Find Us</a>
    </div>`);
}

if (window.location.pathname.endsWith("news-events.html")) {
  const releasesContent = document.querySelector(".releases-content");
  if (releasesContent && !document.getElementById("events")) {
    releasesContent.insertAdjacentHTML("beforeend", `
      <section class="events-section" id="events">
        <p class="section-label">Upcoming event</p>
        <h2>Putts for Peaches</h2>
        <p class="events-intro">Join the Gynaecological Cancer Foundation Zimbabwe for a morning of golf, connection and fundraising during Uterine Cancer Awareness Month.</p>
        <div class="event-feature">
          <a class="event-poster" href="assets/images/putts-for-peaches-2027.jpg?v=20260918-1" target="_blank" aria-label="Open the Putts for Peaches event poster"><img src="assets/images/putts-for-peaches-2027.jpg?v=20260918-1" alt="Putts for Peaches ladies golf day poster"></a>
          <div class="event-details"><dl><div><dt>Date</dt><dd>12 June 2027</dd></div><div><dt>Time</dt><dd>Tee-off at 8:00am</dd></div><div><dt>Venue</dt><dd>Royal Harare Golf Club, Harare, Zimbabwe</dd></div><div><dt>Format</dt><dd>Four-ball teams</dd></div><div><dt>Entry</dt><dd>US$400 per team, including green fees, goodie bag and lunch</dd></div><div><dt>Dress code</dt><dd>A pop of peach</dd></div></dl><p>Golf, lunch, drinks, prizes and a girls' day out in support of uterine cancer awareness. Spaces are limited.</p><a class="button primary" href="mailto:info@gcfz.org?subject=Putts%20for%20Peaches%20registration">Register your team</a></div>
        </div>
      </section>`);
  }
}

const existingFooter = document.querySelector("body > footer:not(.home-footer)");
if (existingFooter) {
  const sharedFooter = document.createElement("footer");
  sharedFooter.className = "home-footer";
  sharedFooter.innerHTML = `
    <div class="footer-signup">
      <div class="signup-heading">
        <h2>Sign up for email updates</h2>
        <p>Receive GCFZ news, event notices and cancer awareness information.</p>
      </div>
      <form class="signup-form">
        <label>First name<input type="text" name="first_name" autocomplete="given-name" required></label>
        <label>Surname<input type="text" name="surname" autocomplete="family-name" required></label>
        <label>Email address<input type="email" name="email" autocomplete="email" required></label>
        <button type="submit">Sign up</button>
      </form>
    </div>
    <div class="footer-bottom">
      <div class="footer-policies">
        <a href="information.html?topic=governance">Privacy statement</a>
        <a href="contact.html">Website feedback</a>
        <p>&copy; 2026 Gynaecological Cancer Foundation Zimbabwe.</p>
      </div>
      <div class="footer-contact">
        <h2>Contact us</h2>
        <p><strong>Email:</strong> info@gcfz.org.zw</p>
        <p><strong>Phone:</strong> Contact details coming soon</p>
        <a href="contact.html">More contact details</a>
      </div>
      <div class="footer-social">
        <h2>Follow us</h2>
        <div class="social-links">
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M16 8.05A8 8 0 1 0 6.75 16v-5.62H4.72V8.05h2.03V6.27c0-2.02 1.2-3.13 3.02-3.13.87 0 1.78.16 1.78.16v1.96h-1c-.99 0-1.3.62-1.3 1.25v1.54h2.22l-.36 2.33H9.25V16A8 8 0 0 0 16 8.05Z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C5.83 0 5.56.01 4.71.05 3.86.09 3.28.22 2.77.42a3.9 3.9 0 0 0-1.42.92A3.9 3.9 0 0 0 .42 2.77C.22 3.28.09 3.86.05 4.71.01 5.56 0 5.83 0 8s.01 2.44.05 3.29c.04.85.17 1.43.37 1.94.21.53.49.98.92 1.42.44.43.89.71 1.42.92.51.2 1.09.33 1.94.37.85.04 1.12.05 3.29.05s2.44-.01 3.29-.05c.85-.04 1.43-.17 1.94-.37a3.9 3.9 0 0 0 1.42-.92c.43-.44.71-.89.92-1.42.2-.51.33-1.09.37-1.94.04-.85.05-1.12.05-3.29s-.01-2.44-.05-3.29c-.04-.85-.17-1.43-.37-1.94a3.9 3.9 0 0 0-.92-1.42A3.9 3.9 0 0 0 13.23.42c-.51-.2-1.09-.33-1.94-.37C10.44.01 10.17 0 8 0Zm0 1.44c2.13 0 2.38.01 3.22.05.78.04 1.2.17 1.48.28.37.14.64.32.92.6.28.28.46.55.6.92.11.28.24.7.28 1.48.04.84.05 1.09.05 3.22s-.01 2.38-.05 3.22c-.04.78-.17 1.2-.28 1.48-.14.37-.32.64-.6.92-.28.28-.55.46-.92.6-.28.11-.7.24-1.48.28-.84.04-1.09.05-3.22.05s-2.38-.01-3.22-.05c-.78-.04-1.2-.17-1.48-.28a2.46 2.46 0 0 1-.92-.6 2.46 2.46 0 0 1-.6-.92c-.11-.28-.24-.7-.28-1.48C1.45 10.38 1.44 10.13 1.44 8s.01-2.38.05-3.22c.04-.78.17-1.2.28-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.24 1.48-.28C5.62 1.45 5.87 1.44 8 1.44Zm0 2.45a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.78a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34Zm5.23-6.94a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0Z"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.15C0 .51.53 0 1.18 0h13.64C15.47 0 16 .51 16 1.15v13.7c0 .64-.53 1.15-1.18 1.15H1.18C.53 16 0 15.49 0 14.85V1.15Zm4.94 12.24V6.17H2.54v7.22h2.4ZM3.74 5.18c.84 0 1.36-.56 1.36-1.25-.02-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .69.52 1.25 1.31 1.25h.03Zm4.91 8.21V9.36c0-.22.02-.43.08-.59.17-.43.56-.88 1.21-.88.86 0 1.2.65 1.2 1.61v3.89h2.4V9.22c0-2.24-1.2-3.28-2.8-3.28-1.29 0-1.87.71-2.19 1.21v.03h-.02l.02-.03v-.98h-2.4c.03.65 0 7.22 0 7.22h2.4Z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M15.84 4.59a2 2 0 0 0-1.4-1.42C13.2 2.83 8 2.83 8 2.83s-5.2 0-6.44.34A2 2 0 0 0 .16 4.59C-.17 5.84-.17 8.45-.17 8.45s0 2.61.33 3.86a2 2 0 0 0 1.4 1.42c1.24.34 6.44.34 6.44.34s5.2 0 6.44-.34a2 2 0 0 0 1.4-1.42c.33-1.25.33-3.86.33-3.86s0-2.61-.33-3.86ZM6.36 10.82V6.08l4.35 2.37-4.35 2.37Z"/></svg></a>
        </div>
      </div>
    </div>`;
  existingFooter.replaceWith(sharedFooter);
}

for (const [page, items] of Object.entries(dropdownNavigation)) {
  const topLink = document.querySelector(`.nav-links > li > a[href="${page}"]`);
  if (!topLink || topLink.parentElement.querySelector(".dropdown-menu")) continue;

  const parent = topLink.parentElement;
  parent.classList.add("dropdown");
  const menu = document.createElement("ul");
  menu.className = `dropdown-menu${page === "cancer-types.html" ? " wide-menu" : ""}`;

  for (const [label, href] of items) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    item.appendChild(link);
    menu.appendChild(item);
  }

  parent.appendChild(menu);
}

const cancerTypesLink = document.querySelector('.nav-links > li > a[href="cancer-types.html"]');
if (cancerTypesLink && !cancerTypesLink.parentElement.querySelector(".dropdown-menu")) {
  const parent = cancerTypesLink.parentElement;
  parent.classList.add("dropdown");

  const menu = document.createElement("div");
  menu.className = "dropdown-menu cancer-types-menu";

  for (const section of cancerTypeSections) {
    const group = document.createElement("section");
    group.className = "cancer-menu-section";

    if (section.href) {
      const headingLink = document.createElement("a");
      headingLink.className = "cancer-menu-heading cancer-menu-heading-link";
      headingLink.href = section.href;
      headingLink.textContent = section.title;
      group.appendChild(headingLink);
    } else {
      const heading = document.createElement("h3");
      heading.className = "cancer-menu-heading";
      heading.textContent = section.title;
      group.appendChild(heading);

      const list = document.createElement("ul");
      for (const [label, href] of section.items) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = href;
        link.textContent = label;
        item.appendChild(link);
        list.appendChild(item);
      }
      group.appendChild(list);
    }

    menu.appendChild(group);
  }

  parent.appendChild(menu);
}
