/* ==========================================================================
   AL AHMED UAE - ARCHITECTURAL SITE INTERACTIVE CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initProductFilter();
  initLayerInspector();
  initSampleModal();
  initHeaderScroll();
  initProductSpecModal();
  initCatalogModal();
  initMobileMenu();
});

/* 1. Product Filter Logic */
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* 2. Detailed Product Specification Data & Modal Handler */
const productSpecsData = {
  plywood: {
    title: "Ahmed Marine Plywood",
    subtitle: "BS 1088 Marine Grade & BSTI Approved High-Density Hardwood",
    badge: "BS 1088 Certified",
    specifications: [
      { property: "Standard Formats", value: "1220 x 2440 mm (8' x 4')" },
      { property: "Thickness", value: "6, 12, 19, 25 mm" },
      { property: "Quality Grade", value: "A grade 0.6 mm veneer, selected hardwood core veneer use" },
      { property: "Glue", value: "Water proof resin" },
      { property: "Emission Content", value: "E1 standard EN 314-2 / Class 3" },
      { property: "Moisture Content", value: "8% - 12%" },
      { property: "Density", value: "650-700 kg/m³" },
      { property: "Water Resistance", value: "Higher" },
      { property: "Certificate", value: "BSTI Approved" }
    ],
    strength: [
      { property: "Static Bending Strength (MOE & MOR) N/mm² — Along the Grain", value: "MOR Avg. 59, Ind. 54; MOE Avg 7739, Ind. 7425" },
      { property: "Static Bending Strength — Across the Grain", value: "MOR Avg. 48, Ind. 45; MOE Avg 5228, Ind. 4973" },
      { property: "Tensile Strength — Along the Grain", value: "5430 N/mm²" },
      { property: "Tensile Strength — Across the Grain", value: "3120 N/mm²" },
      { property: "Retention of Preservatives", value: "11.39 Kg/m³" },
      { property: "Certificate", value: "BSTI Approved" }
    ],
    features: [
      "100% hardwood timber construction",
      "Bonded with waterproof resin",
      "Treated against termite and borer",
      "Extra layer glue line for extra strength",
      "High nail holding capacity"
    ],
    applications: [
      "Marine industries & boatbuilding",
      "Transport vehicles & truck flooring",
      "Custom furniture & joinery",
      "Kitchen cabinets & wet area carcass",
      "Decking & porches (interior & exterior finish)"
    ]
  },
  "fr-plywood": {
    title: "Ahmed Fire-Resistant (FR) Plywood",
    subtitle: "Civil Defense Approved Flame-Retardant Hardwood Panel",
    badge: "Class B1 Fire Rated",
    specifications: [
      { property: "Standard Formats", value: "1220 x 2440 mm (8' x 4')" },
      { property: "Thickness", value: "6, 9, 12, 16, 19, 25 mm" },
      { property: "Fire Resistance Standard", value: "EN 13501-1 Class B-s1, d0 / BS 476 Part 7 Class 1" },
      { property: "Glue Line", value: "Water & Weather Proof WBP Phenolic Glue" },
      { property: "Moisture Content", value: "8% - 12%" },
      { property: "Density", value: "680-720 kg/m³" },
      { property: "Certification", value: "UAE & KSA Civil Defense Approved" }
    ],
    strength: [
      { property: "Flame Spread Index", value: "Class A / Class 1 (< 25)" },
      { property: "Smoke Developed Index", value: "Low Smoke Generation (< 50)" },
      { property: "Static Bending Strength (Along)", value: "Avg. 55 N/mm²" },
      { property: "Retention of Chemical Treatment", value: "Pressure Impregnated Deep Core" }
    ],
    features: [
      "Pressure-impregnated flame-retardant chemicals",
      "Self-extinguishing core properties",
      "100% hardwood timber construction",
      "Termite, borer, and fungal rot resistant",
      "Compatible with melamine, HPL, and veneer lamination"
    ],
    applications: [
      "High-rise building interiors",
      "Hotel corridors and lobbies",
      "Auditoriums & theaters",
      "Airport terminals & public institutions",
      "Fire-rated door cores and wall cladding"
    ]
  }
};

function initProductSpecModal() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-product="plywood"], [data-product="fr-plywood"], [data-title="Marine Plywood"], [data-title="Fire-Resistant Plywood"]');
    if (trigger) {
      e.preventDefault();
      const productKey = trigger.getAttribute('data-product') || (trigger.getAttribute('data-title') === 'Fire-Resistant Plywood' ? 'fr-plywood' : 'plywood');
      openProductSpecModal(productKey);
    }
  });
}

function openProductSpecModal(productKey) {
  const data = productSpecsData[productKey];
  if (!data) return;

  let modal = document.getElementById('specModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'specModal';
    modal.className = 'modal-backdrop';
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeSpecModal();
      }
    });
  }

  const specRows = data.specifications.map(item => `
    <tr>
      <td><strong>${item.property}</strong></td>
      <td>${item.value}</td>
    </tr>
  `).join('');

  const strengthRows = data.strength.map(item => `
    <tr>
      <td><strong>${item.property}</strong></td>
      <td>${item.value}</td>
    </tr>
  `).join('');

  const featureItems = data.features.map(feat => `<li>${feat}</li>`).join('');

  modal.innerHTML = `
    <div class="modal-card spec-modal-card">
      <button class="modal-close" onclick="closeSpecModal()">&times;</button>
      
      <div class="modal-header">
        <span class="badge-red">${data.badge}</span>
        <h2>${data.title}</h2>
        <p>${data.subtitle}</p>
      </div>

      <div class="spec-section">
        <h3>Specifications</h3>
        <table class="spec-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            ${specRows}
          </tbody>
        </table>
      </div>

      <div class="spec-section">
        <h3>Strength Specification</h3>
        <table class="spec-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            ${strengthRows}
          </tbody>
        </table>
      </div>

      <div class="spec-section">
        <h3>Key Features</h3>
        <ul class="spec-feature-list">
          ${featureItems}
        </ul>
      </div>

      <div class="spec-section">
        <h3>Applications</h3>
        <p class="spec-app-text">${data.applications.join(' • ')}</p>
      </div>

      <div class="spec-modal-footer">
        <a href="#rfq" class="btn btn-red btn-block btn-lg" onclick="closeSpecModal()">
          Request Quotation for ${data.title}
        </a>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeSpecModal() {
  const modal = document.getElementById('specModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

/* 3. Interactive Layer Inspector Data & Logic */
const inspectorData = {
  acoustic: {
    title: "Acoustic Wood Paneling (NRC 0.85)",
    subtitle: "Engineered 4-Stage Sound Dampening Assembly",
    description: "Designed for high-end auditoriums, conference rooms, and hospitality suites to eliminate echo while providing warm wood aesthetic.",
    layers: [
      { num: "01", name: "Decorative Face Veneer", desc: "0.6mm Natural American Walnut / Teak UV clear coat finish" },
      { num: "02", name: "High-Density MDF Core", desc: "16mm Class B1 Fire-retardant carb-compliant MDF board" },
      { num: "03", name: "Precision Perforated Grooves", desc: "CNC 8mm/16mm acoustic channels for targeted soundwave trapping" },
      { num: "04", name: "PET Acoustical Fleece Backing", desc: "High-density recycled black acoustic felt backing for sound energy conversion" }
    ],
    specs: [
      "Noise Reduction Coefficient (NRC): 0.85",
      "Fire Rating: EN 13501-1 Class B-s1,d0 (Civil Defense Approved)",
      "Standard Sheet Size: 600mm x 600mm / 128mm x 2440mm",
      "Eco Standard: E0 Formaldehyde Rating & FSC Certified Core"
    ]
  },
  hpl: {
    title: "High-Pressure Compact Laminate (HPL)",
    subtitle: "Extreme Durability & Chemical-Resistant Cladding",
    description: "Multi-layer thermosetting resin construction engineered for extreme wear, chemical resistance, and heavy public foot-traffic.",
    layers: [
      { num: "01", name: "Overlay Protection Sheet", desc: "Transparent melamine resin layer containing aluminium oxide for scratch resistance" },
      { num: "02", name: "Decorative Pattern Paper", desc: "UV-fast printed decor sheet (Woodgrain, Solid Color, or Stone finish)" },
      { num: "03", name: "Impregnated Kraft Core Plies", desc: "Multiple layers of phenolic resin-soaked heavy kraft paper for structural rigidity" },
      { num: "04", name: "Balance Backing Film", desc: "Equalizing backing layer preventing panel warping under humidity shifts" }
    ],
    specs: [
      "Standard Compliance: EN 438-4 / ISO 4586",
      "Impact Resistance: High Impact Structural Rating",
      "Thermal Resistance: Heat resistant up to 180°C direct dry heat",
      "Hygiene Rating: Non-porous antibacterial & anti-microbial surface"
    ]
  },
  plywood: {
    title: "Ahmed Marine Plywood (BS 1088)",
    subtitle: "100% Hardwood Core with WBP Phenolic Bonding",
    description: "The gold standard structural marine plywood engineered for marine vessels, waterfront villas, and heavy formwork.",
    layers: [
      { num: "01", name: "Face & Back Hardwood Veneer", desc: "1.4mm solid un-jointed Grade A Gurjan / Hardwood face veneer" },
      { num: "02", name: "Cross-Band Core Veneers", desc: "Rot-resistant selected tropical hardwood veneers pressed at right angles" },
      { num: "03", name: "WBP Phenolic Resin Glue", desc: "100% Water-Boil-Proof (WBP) phenol-formaldehyde adhesive line" },
      { num: "04", name: "Edge Seal Phenolic Coating", desc: "Water-repellent protective edge coating against moisture ingress" }
    ],
    specs: [
      "Certification: BS 1088-1:2003 Lloyds Registered Standard & BSTI Approved",
      "Boil Test: 72 Hours continuous boiling water resistance",
      "Density & Moisture: 650-700 kg/m³ | 8% - 12% moisture content",
      "Durability Class: Class 1 exterior exposure rating (Termite & Borer treated)"
    ]
  },
  frplywood: {
    title: "Ahmed Fire-Resistant (FR) Hardwood Plywood",
    subtitle: "Civil Defense Class B1 Certified Flame Suppressant",
    description: "Pressure-impregnated flame-retardant hardwood plywood engineered to delay ignition and suppress smoke propagation in commercial interiors.",
    layers: [
      { num: "01", name: "Flame-Retardant Face Veneer", desc: "Pressure-impregnated hardwood face veneer treated with fire-retardant salts" },
      { num: "02", name: "Incombustible Phenolic Glue Line", desc: "Thermosetting adhesive formulation mixed with flame-suppressing additives" },
      { num: "03", name: "Pressure-Treated Core Plies", desc: "Deep-vacuum impregnated hardwood plies engineered to retard flame spread" },
      { num: "04", name: "Fire-Barrier Back Veneer", desc: "Certified backing layer engineered to limit thermal heat transmission" }
    ],
    specs: [
      "Fire Rating: Class B1 Approved (EN 13501-1 Class B-s1,d0)",
      "Smoke & Ignition: Low smoke density & non-toxic emission index",
      "Treatment: Deep-vacuum pressure impregnation",
      "Durability: Termite, borer, and fungal rot resistant"
    ]
  },
  lvl: {
    title: "Laminated Veneer Lumber (LVL) Structural Beams",
    subtitle: "High-Strength Parallel-Grain Engineered Timber",
    description: "Engineered wood product constructed by bonding thin wood veneers parallel to the grain under high temperature and hydraulic pressure for structural load-bearing applications.",
    layers: [
      { num: "01", name: "Outer Structural Veneer Ply", desc: "Un-jointed softwood/hardwood veneer sealed with weather barrier coating" },
      { num: "02", name: "Parallel Grain Core Plies", desc: "Multiple layers of longitudinal wood veneers oriented unidirectionally for high tensile strength" },
      { num: "03", name: "Structural Phenolic Adhesive", desc: "High-bond structural adhesive resistant to moisture, heat, and heavy load shear forces" },
      { num: "04", name: "Edge Preservative Sealer", desc: "Anti-fungal and termite resistant chemical impregnation sealing all cut faces" }
    ],
    specs: [
      "Grain Alignment: Parallel grain orientation for uniform mechanical properties",
      "Bending Strength (MOE/MOR): Exceptional load-bearing capacity with zero twisting or cupping",
      "Standard Thicknesses: 38mm, 45mm, 75mm, 90mm | Lengths up to 12 Meters",
      "Applications: Concrete formwork beams, roof joists, structural headers & scaffold planking"
    ]
  },
  mrmdf: {
    title: "Moisture Resistant (MR) Green Core MDF",
    subtitle: "MUF Resin Bonded Humidity Resistant Fiberboard",
    description: "Engineered with Melamine-Urea-Formaldehyde (MUF) resin and green dye indicator to provide exceptional dimensional stability in high humidity environments.",
    layers: [
      { num: "01", name: "Micro-Sanded Outer Face", desc: "Flawless ultra-smooth surface for direct priming, veneering or lacquering" },
      { num: "02", name: "Green Color Indicator Layer", desc: "Green identification dye integrated into resin core for instant jobsite verification" },
      { num: "03", name: "MUF Hydrophobic Fiber Matrix", desc: "Refined wood fibers bonded with Melamine-Urea-Formaldehyde moisture barrier resin" },
      { num: "04", name: "Precision Calibrated Core", desc: "Tight density profile minimizing thickness swelling upon water contact" }
    ],
    specs: [
      "Moisture Resistance: EN 622-5 Option 1 V313 Cyclic Humidity Test",
      "Core Color Marker: Green Core Identification",
      "Formaldehyde Emission: CARB Phase 2 / E0 Compliant",
      "Ideal Uses: Kitchen cabinets, bathroom vanities, window sills & skirting"
    ]
  },
  frmdf: {
    title: "Fire Retardant (FR) Red Core MDF",
    subtitle: "Civil Defense Certified Flame Retardant Board",
    description: "Impregnated with flame-inhibiting mineral salts (red/pink core indicator) that inhibit flame spread and reduce smoke generation in high-occupancy commercial spaces.",
    layers: [
      { num: "01", name: "Sanded Dense Outer Face", desc: "Smooth calibrated surface suitable for HPL pressing, veneering or painting" },
      { num: "02", name: "Red/Pink FR Indicator Dye", desc: "Red/pink core color code confirming Civil Defense fire compliance" },
      { num: "03", name: "Flame-Retardant Salt Matrix", desc: "Uniformly distributed ammonium phosphate & mineral flame suppressants" },
      { num: "04", name: "High-Density Core Plies", desc: "Compact fiber structure resisting structural collapse during thermal exposure" }
    ],
    specs: [
      "Fire Rating: Euroclass B-s2,d0 / Class B1 (UAE Civil Defense Approved)",
      "Smoke & Toxic Gas: Low smoke density index (s2) & zero flaming droplets (d0)",
      "Core Color Marker: Red/Pink Core Identification",
      "Applications: Hotel escape corridors, public auditoriums, airports & hospitals"
    ]
  }
};

function initLayerInspector() {
  const tabs = document.querySelectorAll('.inspector-tab');
  const display = document.getElementById('inspectorDisplay');

  function renderInspector(key) {
    const data = inspectorData[key];
    if (!data || !display) return;

    let layersHTML = data.layers.map(l => `
      <div class="visual-layer">
        <div style="display:flex; align-items:center; gap:1rem;">
          <div class="layer-num">${l.num}</div>
          <div>
            <div class="layer-title">${l.name}</div>
            <div style="font-size:0.8rem; color:var(--color-text-muted);">${l.desc}</div>
          </div>
        </div>
      </div>
    `).join('');

    let specsHTML = data.specs.map(s => `<li>${s}</li>`).join('');

    display.innerHTML = `
      <div class="layer-view-container">
        <div class="layer-visual">
          ${layersHTML}
        </div>
        <div class="layer-desc-text">
          <span class="section-tag">${data.subtitle}</span>
          <h3>${data.title}</h3>
          <p>${data.description}</p>
          <ul class="layer-spec-list">
            ${specsHTML}
          </ul>
        </div>
      </div>
    `;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const inspectKey = tab.getAttribute('data-inspect');
      renderInspector(inspectKey);
    });
  });

  // Render initial tab
  renderInspector('acoustic');
}

/* 4. Catalog Modal Logic */
function initCatalogModal() {
  const modal = document.getElementById('catalogModal');
  const openBtn = document.getElementById('btnDownloadCatalog');
  const closeBtn = document.getElementById('catalogModalClose');

  if (openBtn && modal) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      modal.style.display = 'flex';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      modal.style.display = 'none';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        modal.style.display = 'none';
      }
    });
  }
}

/* 5. Sample Kit Modal Logic */
function initSampleModal() {
  const modal = document.getElementById('sampleModal');
  const closeBtn = document.getElementById('modalClose');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }
}

/* 6. Form Handlers */
function handleRFQSubmit() {
  const name = document.getElementById('rfqName').value;
  const company = document.getElementById('rfqCompany').value;
  const phone = document.getElementById('rfqPhone').value;
  const material = document.getElementById('rfqMaterial').value;
  const quantity = document.getElementById('rfqQuantity').value;
  const notes = document.getElementById('rfqNotes').value;

  const text = `Hello Al Ahmed UAE Sales Team,\n\nI would like to request a formal quotation:\n\n• Name: ${name}\n• Company: ${company}\n• Contact: ${phone}\n• Material Required: ${material}\n• Quantity: ${quantity}\n• Project Details: ${notes}`;

  const encoded = encodeURIComponent(text);
  const waUrl = `https://wa.me/971507959535?text=${encoded}`;

  alert(`Thank you, ${name}! Your quote request has been generated. Opening WhatsApp to connect with your dedicated estimator...`);
  window.open(waUrl, '_blank');
}

function handleSampleSubmit() {
  const name = document.getElementById('sampleName').value;
  const studio = document.getElementById('sampleStudio').value;
  const address = document.getElementById('sampleAddress').value;

  alert(`Sample Dispatch Confirmed!\n\nRecipient: ${name} (${studio})\nAddress: ${address}\n\nOur UAE courier team will dispatch your Specifier Kit Box within 24 hours.`);

  const modal = document.getElementById('sampleModal');
  if (modal) modal.classList.remove('open');
}

/* 7. Header Scroll Effect */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '0.5rem 0';
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
    } else {
      header.style.padding = '0.9rem 0';
      header.style.boxShadow = 'none';
    }
  });
}

/* 8. Mobile Navigation Toggle */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }
}