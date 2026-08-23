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
  initSampleRequestButtons();
  initImageLightbox();
});

/* ─── 1. Product Filter Logic ─────────────────────────────────────────────── */
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

/* ─── 2. Full Product Specification Data (18 Products — Verified Against Official Datasheets) ── */
const productSpecsData = {

  'commercial-plywood': {
    title: "Commercial Hardwood Plywood",
    subtitle: "Calibrated Interior Hardwood Core Panel — ISO 9001:2015",
    badge: "Selected Hardwood Core",
    image: "assets/images/plywood/plywood stack.jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8')" },
      { property: "Thickness Range", value: "3.6 mm, 6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm" },
      { property: "Core Material", value: "100% Selected Hardwood Core Veneers (Cross-Banded)" },
      { property: "Face Veneer", value: "A-Grade 0.6 mm Sanded Hardwood Face & Back" },
      { property: "Glue Type", value: "MR (Moisture Resistant) / Phenolic Resin (EN 314-2)" },
      { property: "Moisture Content", value: "8% – 12%" },
      { property: "Density", value: "650 – 720 kg/m³" },
      { property: "Formaldehyde Emission", value: "E1 Standard (EN 717-1)" },
      { property: "Preservative Treatment", value: "Vacuum Pressure Impregnation (Anti-Termite & Borer)" },
      { property: "Quality System", value: "ISO 9001:2015 Certified Production" }
    ],
    strength: [
      { property: "Modulus of Rupture (MOR) — Along Grain", value: "Avg. 50 N/mm² (Min. 45 N/mm²)" },
      { property: "Modulus of Elasticity (MOE) — Along Grain", value: "Avg. 6,800 N/mm² (Min. 6,400 N/mm²)" },
      { property: "Modulus of Rupture (MOR) — Across Grain", value: "Avg. 42 N/mm² (Min. 38 N/mm²)" },
      { property: "Modulus of Elasticity (MOE) — Across Grain", value: "Avg. 4,800 N/mm² (Min. 4,500 N/mm²)" },
      { property: "Face Screw Holding Capacity", value: "> 950 N" },
      { property: "Edge Screw Holding Capacity", value: "> 750 N" },
      { property: "Glue Adhesion (Knife Test)", value: "Pass — Excellent Bond Integrity" }
    ],
    features: [
      "100% selected tropical hardwood multi-laminate construction",
      "Calibrated thickness with micro-sanded 240-grit smooth face",
      "Deep vacuum-pressure treated against termites, borers, and fungal decay",
      "Superior screw and fastener retention capacity",
      "Ideal substrate for wood veneers, HPL laminates, PVC foils, and direct painting"
    ],
    applications: [
      "Custom joinery, architectural millwork & cabinetry carcasses",
      "Interior wall paneling & commercial furniture manufacturing",
      "GCC residential, hospitality & commercial fit-out projects",
      "Retail fixtures, shopfitting & display showcases"
    ]
  },

  plywood: {
    title: "Ahmed Marine Plywood (BS 1088)",
    subtitle: "BS 1088 & BSTI Approved High-Density Gurjan Hardwood Marine Panel",
    badge: "BS 1088 & BSTI Approved",
    image: "assets/images/plywood/marine plywood.jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8')" },
      { property: "Standard Thicknesses", value: "6 mm, 12 mm, 19 mm, 25 mm (up to 50 mm on request)" },
      { property: "Quality Grade", value: "A-Grade 0.6 mm Gurjan Veneer, Selected Hardwood Core" },
      { property: "Glue Formulation", value: "100% WBP (Water-Boil-Proof) Phenolic Formaldehyde Resin" },
      { property: "Standard Compliance", value: "BS 1088-1:2003 / BIS Standards / EN 314-2 Class 3" },
      { property: "Moisture Content", value: "8% – 12%" },
      { property: "Density", value: "650 – 720 kg/m³" },
      { property: "Preservative Retention", value: "11.39 kg/m³ (Vacuum-Pressure Impregnated)" },
      { property: "Certification", value: "BSTI Approved & ISO 9001 Certified" }
    ],
    strength: [
      { property: "MOR Along Grain (Bending)", value: "Avg. 59 N/mm² (Individual Min. 54 N/mm²)" },
      { property: "MOE Along Grain (Elasticity)", value: "Avg. 7,739 N/mm² (Individual Min. 7,425 N/mm²)" },
      { property: "MOR Across Grain (Bending)", value: "Avg. 48 N/mm² (Individual Min. 45 N/mm²)" },
      { property: "MOE Across Grain (Elasticity)", value: "Avg. 5,228 N/mm² (Individual Min. 4,973 N/mm²)" },
      { property: "Tensile Strength Along Grain", value: "5,430 N/mm²" },
      { property: "Tensile Strength Across Grain", value: "3,120 N/mm²" },
      { property: "Boiling Water Resistance", value: "72 Hours Continuous Boil Immersion (Zero Delamination)" },
      { property: "Glue Adhesion in Dry State", value: "Avg: 1398 N, Ind: 1296 N (Knife Test: Excellent)" },
      { property: "Glue Adhesion in Wet State", value: "Avg: 1103 N, Ind: 924 N (Knife Test: Moderately Good)" }
    ],
    features: [
      "Multi-laminate selected tropical hardwood core with A-grade Gurjan face veneer",
      "Bonded with 100% WBP (Water-Boil-Proof) phenolic resin",
      "Deep vacuum-pressure impregnated against termites, borers, and fungal rot",
      "High dimensional stability — resists cracking, breaking, shrinkage, twisting & warping",
      "Engineered for high-risk, persistently wet, and heavy loading applications"
    ],
    applications: [
      "Marine vessels, boatbuilding & offshore marine structures",
      "Transport vehicle flooring, containers & heavy-duty decking",
      "High-humidity interior joinery, luxury kitchen carcasses & vanity units",
      "Exterior porches, waterfront villas & architectural decking"
    ]
  },

  'film-face-plywood': {
    title: "Ahmed Film Face Shuttering Plywood",
    subtitle: "180 GSM DYNEA Phenolic Overlay Formwork Panel — BSTI Approved",
    badge: "180 GSM DYNEA Film",
    image: "assets/images/plywood/film face plywood.jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8')" },
      { property: "Standard Thicknesses", value: "12 mm, 19 mm (thickness up to 50 mm on client request)" },
      { property: "Surface Overlay", value: "180 GSM DYNEA Phenolic Film (Brick Red / Black)" },
      { property: "Core Material", value: "Best Selected Hardwood Core Veneers" },
      { property: "Glue Type", value: "Phenolic Glue (EN 314-2 / Class 3 Standard)" },
      { property: "Edge Treatment", value: "Sealed with Waterborne Acrylic Protective Paint" },
      { property: "Density", value: "700 – 750 kg/m³" },
      { property: "Moisture Content", value: "8% – 10%" },
      { property: "Emission Content", value: "E1 Standard" },
      { property: "Certification", value: "BSTI Approved & ISO 9001:2015" }
    ],
    strength: [
      { property: "MOR Along Grain (Bending)", value: "Avg. 59 N/mm² (Individual Min. 54 N/mm²)" },
      { property: "MOE Along Grain (Elasticity)", value: "Avg. 7,739 N/mm² (Individual Min. 7,425 N/mm²)" },
      { property: "MOR Across Grain (Bending)", value: "Avg. 48 N/mm² (Individual Min. 45 N/mm²)" },
      { property: "MOE Across Grain (Elasticity)", value: "Avg. 5,228 N/mm² (Individual Min. 4,973 N/mm²)" },
      { property: "Tensile Strength Along Grain", value: "5,430 N/mm²" },
      { property: "Tensile Strength Across Grain", value: "3,120 N/mm²" },
      { property: "Glue Adhesion (Dry State)", value: "Avg: 1,398 N, Ind: 1,296 N (Knife Test: Excellent)" },
      { property: "Glue Adhesion (Wet State)", value: "Avg: 1,103 N, Ind: 924 N (Knife Test: Moderately Good)" },
      { property: "Screw Holding Strength", value: "> 275 N" },
      { property: "Nail Holding Strength", value: "> 150 N" },
      { property: "Retention of Preservatives", value: "11.39 kg/m³" }
    ],
    features: [
      "180 GSM DYNEA phenolic surface gives high gloss and mirror-smooth concrete finish",
      "Superior resistance to corrosive action of wet cement, water & sunlight",
      "Maximizes cast repetition cycles — exceptional economic value per use",
      "Waterborne acrylic edge seal prevents moisture penetration and swelling",
      "High load-bearing capacity prevents deflection under heavy concrete pouring"
    ],
    applications: [
      "High-rise concrete slab, column, and beam formworks",
      "Bridge construction, flyovers, piers & retaining walls",
      "Precast concrete elements & civil infrastructure casting",
      "Industrial scaffolding platforms & heavy-duty temporary flooring"
    ]
  },

  'fr-plywood': {
    title: "Ahmed Fire-Resistant (FR) Hardwood Plywood",
    subtitle: "Civil Defense Approved Class B1 Flame Retardant Hardwood Panel",
    badge: "EN 13501-1 Class B-s1,d0",
    image: "assets/images/plywood/plywood1.jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8')" },
      { property: "Thickness Range", value: "6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm" },
      { property: "Fire Safety Standards", value: "EN 13501-1 Class B-s1,d0 / BS 476 Part 7 Class 1" },
      { property: "Flame Impregnation", value: "Deep-Vacuum Pressure Impregnated Flame-Retardant Mineral Salts" },
      { property: "Glue Line", value: "100% WBP Phenolic Weather & Boil Proof Resin" },
      { property: "Core Material", value: "100% Selected Hardwood Core Plies" },
      { property: "Density", value: "700 – 750 kg/m³" },
      { property: "Moisture Content", value: "8% – 12%" },
      { property: "Formaldehyde Emission", value: "E1 Standard (EN 717-1)" },
      { property: "Approvals", value: "UAE & KSA Civil Defense Compliant" }
    ],
    strength: [
      { property: "Flame Spread Index", value: "Class 1 / Class A (< 25)" },
      { property: "Smoke Density Index", value: "s1 / s2 (Low Smoke Propagation < 50)" },
      { property: "Flaming Droplets", value: "d0 (Zero Flaming Particles / Droplets)" },
      { property: "MOR Along Grain", value: "Avg. 59 N/mm² (Min. 54 N/mm²)" },
      { property: "MOE Along Grain", value: "Avg. 7,739 N/mm² (Min. 7,425 N/mm²)" },
      { property: "Preservative Retention", value: "11.39 kg/m³ (Anti-Termite & Borer)" }
    ],
    features: [
      "Pressure-impregnated with non-leaching mineral flame retardant salts",
      "Self-extinguishing core — actively inhibits ignition and suppresses smoke",
      "100% tropical hardwood construction with zero structural voids",
      "Vacuum treated against termites, wood borers, and fungal rotting",
      "Fully compatible with architectural veneering, HPL pressing, and lacquering"
    ],
    applications: [
      "High-rise commercial interiors, exit corridors & escape routes",
      "Hotel lobbies, guestroom entrance doors & public assembly halls",
      "Auditoriums, cinema halls, concert venues & theaters",
      "Airport terminals, government ministries & healthcare facilities",
      "Fire-rated doors, partition systems & acoustic wall cladding"
    ]
  },

  mrmdf: {
    title: "Moisture Resistant (MR) Green Core MDF",
    subtitle: "MUF Hydrophobic Resin Bonded Fiberboard — EN 622-5 (Option 1 V313)",
    badge: "Green Core MR Grade",
    image: "assets/images/MDF/MR MDF (moisture resistant).jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8') / 1830 × 2440 mm" },
      { property: "Thickness Range", value: "3, 6, 9, 12, 15, 18, 25 mm (up to 30 mm)" },
      { property: "Core Identifier", value: "Uniform Green Dye Marker (Moisture Resistant Indicator)" },
      { property: "Resin Binder", value: "Melamine-Urea-Formaldehyde (MUF) Hydrophobic Resin" },
      { property: "Standard Compliance", value: "EN 622-5 / EN 13986" },
      { property: "Density (EN 323)", value: "680 – 750 kg/m³" },
      { property: "Moisture Content (EN 322)", value: "6% – 10%" },
      { property: "Formaldehyde Emission", value: "E1 Grade (≤ 0.124 mg/m³ EN 717-1) / CARB Phase II / E0" }
    ],
    strength: [
      { property: "Modulus of Rupture (MOR — EN 310)", value: "≥ 28 N/mm² (18 mm)" },
      { property: "Modulus of Elasticity (MOE — EN 310)", value: "≥ 2,800 N/mm²" },
      { property: "Internal Bond Strength (IB — EN 319)", value: "≥ 0.60 N/mm²" },
      { property: "Thickness Swelling 24h (EN 317)", value: "≤ 8% (V313 Cyclic Humidity Test)" },
      { property: "Surface Soundness (EN 311)", value: "≥ 1.0 N/mm²" },
      { property: "Face Screw Holding Capacity", value: "> 1,000 N" }
    ],
    features: [
      "MUF resin matrix provides intrinsic moisture resistance throughout fiber core",
      "Green core marker for immediate on-site architectural verification",
      "Ultra-smooth 240-grit sanded surface suitable for veneering, painting, PVC wrapping & HPL",
      "Low thickness swelling and superior dimensional stability in GCC humid climates",
      "E1 / E0 low emission certified — safe for kitchens, bathrooms, and healthcare interiors"
    ],
    applications: [
      "Kitchen cabinets, counter carcasses & bathroom vanity units",
      "Architectural window sills, skirting boards & interior door linings",
      "High-humidity GCC interior joineries & laundry room cabinetry",
      "Wet area partitions & moisture-prone commercial fit-outs"
    ]
  },

  frmdf: {
    title: "Fire Retardant (FR) Red Core MDF",
    subtitle: "Euroclass B-s2,d0 Civil Defense Certified Flame-Inhibiting Fiberboard",
    badge: "Euroclass B-s2,d0",
    image: "assets/images/MDF/FR MDF(fire resistant).jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8') / 1830 × 2440 mm" },
      { property: "Thickness Range", value: "6, 9, 12, 15, 18, 25 mm (up to 30 mm)" },
      { property: "Core Identifier", value: "Red / Pink Core Marker (Fire Retardant Indicator)" },
      { property: "Fire Safety Standard", value: "EN 13501-1 Euroclass B-s2,d0 / Class B1" },
      { property: "Flame Treatment", value: "Uniformly Impregnated Ammonium Phosphate & Mineral Flame Salts" },
      { property: "Standard Compliance", value: "EN 622-5 / EN 13986" },
      { property: "Density (EN 323)", value: "680 – 750 kg/m³" },
      { property: "Moisture Content (EN 322)", value: "6% – 10%" },
      { property: "Approvals", value: "UAE & KSA Civil Defense Approved" }
    ],
    strength: [
      { property: "Combustibility Classification", value: "Euroclass B (Limited Contribution to Fire)" },
      { property: "Smoke Emission Index", value: "s2 (Low Smoke Generation Rating)" },
      { property: "Flaming Particles (Droplets)", value: "d0 (Zero Flaming Droplets)" },
      { property: "Modulus of Rupture (MOR — EN 310)", value: "≥ 26 N/mm²" },
      { property: "Internal Bond Strength (IB — EN 319)", value: "≥ 0.60 N/mm²" },
      { property: "Surface Soundness (EN 311)", value: "≥ 1.0 N/mm²" }
    ],
    features: [
      "Pressure-impregnated with non-leaching mineral flame retardants",
      "Red/pink core color coding for immediate Civil Defense inspection approval",
      "Significantly delays flashover and minimizes toxic smoke density generation",
      "Calibrated sanded face suitable for natural veneer, HPL, melamine, or PU painting",
      "Certified low formaldehyde emission (E1 Grade ≤ 0.124 mg/m³)"
    ],
    applications: [
      "Hotel corridors, emergency stairwells & elevator lobbies",
      "Public auditoriums, theaters, cinema complexes & conference centers",
      "Airport terminals, railway stations & government buildings",
      "Hospitals, medical centers & educational institutions"
    ]
  },

  plainmdf: {
    title: "Refined Standard Plain MDF",
    subtitle: "Precision Homogeneous Fiberboard — EN 622-5 / EN 13986",
    badge: "Precision CNC Grade",
    image: "assets/images/MDF/MDF plain.jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8') / 1830 × 2440 mm" },
      { property: "Thickness Range", value: "3, 6, 9, 12, 15, 18, 25 mm (up to 30 mm)" },
      { property: "Surface Quality", value: "Ultra-Smooth 240-Grit Sanded Both Sides" },
      { property: "Standard Compliance", value: "EN 622-5 (European MDF Standard) / EN 13986" },
      { property: "Density (EN 323)", value: "680 – 750 kg/m³" },
      { property: "Moisture Content (EN 322)", value: "6% – 10%" },
      { property: "Thickness Swelling 24h (EN 317)", value: "≤ 12%" },
      { property: "Formaldehyde Emission", value: "E1 Grade (≤ 0.124 mg/m³ EN 717-1) / CARB Phase II" }
    ],
    strength: [
      { property: "Modulus of Rupture (MOR — EN 310)", value: "≥ 20 N/mm²" },
      { property: "Modulus of Elasticity (MOE — EN 310)", value: "≥ 2,200 N/mm²" },
      { property: "Internal Bond Strength (IB — EN 319)", value: "≥ 0.60 N/mm²" },
      { property: "Surface Soundness (EN 311)", value: "≥ 1.0 N/mm²" },
      { property: "Thickness Tolerance", value: "± 0.2 mm" }
    ],
    features: [
      "Uniform fiber density profile with zero internal voids or grain knots",
      "Flawless surface engineered for deep 3D CNC routing, carving, and grooving",
      "Superior substrate for high-gloss lacquering, polyurethane painting, and PVC wrapping",
      "Consistent thickness tolerance (± 0.2 mm) for automated modular manufacturing",
      "Complies with European low-emission indoor environmental standards"
    ],
    applications: [
      "Architectural millwork, deep-profile CNC feature panels & moldings",
      "Furniture & cabinetry, wardrobes, shelving & non-structural door panels",
      "High-gloss lacquered kitchen shutter doors & retail shopfitting displays",
      "Decorative interior fit-outs & exhibition stands"
    ]
  },

  mfmdf: {
    title: "Melamine Faced MDF (MF MDF)",
    subtitle: "Thermally Fused Decor Melamine on Refined MDF Core — EN 14322",
    badge: "50+ Decor Patterns",
    image: "assets/images/MDF/MF mdf.jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8')" },
      { property: "Thicknesses", value: "9 mm, 12 mm, 15 mm, 18 mm, 25 mm" },
      { property: "Core Substrate", value: "High-Density MDF Core (680 – 750 kg/m³)" },
      { property: "Surface Finish", value: "Thermally Fused Melamine Impregnated Paper (Both Sides)" },
      { property: "Decor Range", value: "50+ Woodgrains, Solid Colors, Stone & Textile Decors" },
      { property: "Surface Textures", value: "Suede (SUD), Matte, High Gloss (HG), Synchronized Grain" },
      { property: "Formaldehyde Emission", value: "E1 Grade (≤ 0.124 mg/m³ EN 717-1) / E0" },
      { property: "Edge Banding", value: "Matching PVC / ABS Edge Band Supplied" }
    ],
    strength: [
      { property: "Surface Scratch Resistance", value: "EN 14323 — Class 3 / ≥ 1.5 N" },
      { property: "Surface Abrasion Resistance", value: "EN 14323 — ≥ 150 Revolutions" },
      { property: "Modulus of Rupture (MOR)", value: "≥ 20 N/mm² (EN 310)" },
      { property: "Modulus of Elasticity (MOE)", value: "≥ 2,200 N/mm² (EN 310)" },
      { property: "Internal Bond Strength (IB)", value: "≥ 0.60 N/mm² (EN 319)" },
      { property: "Surface Soundness (EN 311)", value: "≥ 1.0 N/mm²" }
    ],
    features: [
      "Pre-finished decorative surface requiring zero priming, painting, or veneering",
      "Supplied with color-matched PVC/ABS edge banding for seamless joinery finishing",
      "Stain, scratch, and chemical resistant melamine resin surface",
      "High screw holding and core density ideal for precision CNC cutting",
      "Certified low formaldehyde emission ensuring healthy indoor environments"
    ],
    applications: [
      "Custom wardrobes, walk-in closets & bedroom furniture",
      "Executive office desks, workstations & storage units",
      "Modular kitchen cabinets, display shelving & wall cladding",
      "Commercial hospitality & retail fixture interiors"
    ]
  },

  lvl: {
    title: "Ahmed LVL (Laminated Veneer Lumber) Door Frame & Beams",
    subtitle: "Engineered Parallel-Grain Structural Timber — Bending Strength 60–70 MPa",
    badge: "Bending 60–70 MPa",
    image: "assets/images/LVL/lvl stack.jpg",
    specifications: [
      { property: "Standard Sheet Dimensions", value: "1220 × 2440 mm (Height × Width) / Lengths up to 12 Meters" },
      { property: "Standard Thickness", value: "45 mm (Standard Door Frame)" },
      { property: "Material", value: "High-Quality Laminated Veneer Lumber (LVL)" },
      { property: "Grain Alignment", value: "Parallel Longitudinal Wood Veneer Orientation" },
      { property: "Moisture Content", value: "≤ 12%" },
      { property: "Surface Finish", value: "Smooth / Ready for Painting, Veneering, and Wrapping" },
      { property: "Fire Rating", value: "Class B, 30-Minute Integrity" },
      { property: "Eco Standard", value: "Fast-Growing Sustainable Plantation Veneers" }
    ],
    strength: [
      { property: "Bending Strength (MOR)", value: "60 – 70 MPa (N/mm²)" },
      { property: "Compressive Strength", value: "40 – 50 MPa (N/mm²)" },
      { property: "Modulus of Elasticity (MOE)", value: "11,000 – 14,000 N/mm²" },
      { property: "Warp & Twist Resistance", value: "100% Resistant to Warping, Twisting & Shrinking" },
      { property: "Load-Bearing Capacity", value: "Superior Strength vs. Conventional Solid Wood" }
    ],
    features: [
      "Engineered parallel-grain construction delivers extraordinary load-bearing capacity",
      "Zero warping, twisting, splitting, or shrinkage — perfect for humid GCC climates",
      "Uniform quality throughout — zero knots, splits, cavities, or weak spots",
      "Significantly more cost-effective and lighter than solid sawn timber with less wastage",
      "Precision-cut dimensions for fast, seamless on-site door frame installation"
    ],
    applications: [
      "Main entrance doors, internal doors & security door frames",
      "Heavy load-bearing door and window structural headers",
      "Concrete formwork primary beams, joists & scaffold planks",
      "Residential, commercial, and industrial architectural projects"
    ]
  },

  doorcore: {
    title: "Solid Core Chipboard (Door Shutter Core)",
    subtitle: "High-Density Engineered Particle Board Core — EN 312 Type P2/P3",
    badge: "Screw Hold ≥ 1100 N",
    image: "assets/images/door core/door core animated.jpg",
    specifications: [
      { property: "Standard Sheet Dimensions", value: "1220 × 2440 mm (Custom: 915×2135, 1050×2135, 1220×2135 mm)" },
      { property: "Standard Thicknesses", value: "33 mm, 35 mm, 38 mm, 44 mm, 54 mm" },
      { property: "Board Type", value: "Solid Engineered Particle Board / Chipboard (Raw or Sanded)" },
      { property: "Standard Compliance", value: "EN 312 / EN 323 / EN 310 / ISO 16934" },
      { property: "Density (EN 323)", value: "600 – 700 kg/m³" },
      { property: "Moisture Content (EN 322)", value: "6% – 10%" },
      { property: "Thickness Swelling 24h (EN 317)", value: "≤ 12% – 15%" },
      { property: "Formaldehyde Emission", value: "E1 Grade (≤ 0.124 mg/m³ EN 717-1) / CARB Phase II" }
    ],
    strength: [
      { property: "Screw Holding Capacity (Face — EN 320)", value: "≥ 1,100 N" },
      { property: "Screw Holding Capacity (Edge — EN 320)", value: "≥ 800 N" },
      { property: "Modulus of Rupture (MOR — EN 310)", value: "≥ 10 – 13 N/mm²" },
      { property: "Modulus of Elasticity (MOE — EN 310)", value: "1,500 – 1,800 N/mm²" },
      { property: "Internal Bond Strength (IB — EN 319)", value: "≥ 0.30 – 0.40 N/mm²" },
      { property: "Surface Bonding Strength", value: "≥ 0.90 N/mm²" }
    ],
    features: [
      "Engineered specifically for heavy-duty internal and commercial door assemblies",
      "Exceptional screw withdrawal strength (≥ 1100 N face / ≥ 800 N edge) for heavy hinges & locks",
      "Calibrated sanded faces ready for direct pressing of natural veneer, HPL, PVC & MDF skins",
      "Enhanced acoustic dampening and thermal insulation compared to hollow core doors",
      "High dimensional stability — resists warping under air-conditioned interior differentials"
    ],
    applications: [
      "Solid core internal flush doors & bedroom entry doors",
      "Hotel guestroom entry doors & commercial office doors",
      "Acoustic doors, fire-rated door assemblies & institutional entryways",
      "Heavy-traffic educational, hospital & government facility door leaves"
    ]
  },

  acoustic: {
    title: "Ahmed Slotted & Fluted Acoustic Wall Panels",
    subtitle: "21 mm Composite (12mm MDF + 9mm Recycled PET Felt) — NRC Up to 0.95",
    badge: "NRC 0.85 – 0.95",
    image: "assets/images/acoustic panel/acoustic panel 3d exploded.PNG",
    specifications: [
      { property: "Panel Dimensions", value: "2400 × 600 × 21 mm (also 600 × 600 mm, 128 × 2440 mm)" },
      { property: "Total Panel Thickness", value: "21 mm" },
      { property: "MDF Slat Core", value: "12 mm High-Density Precision MDF Slat" },
      { property: "Acoustic Backing", value: "9 mm High-Density Recycled PET Acoustic Sound Felt" },
      { property: "Slat Width & Spacing", value: "27 mm Slat Width / 13 mm Gap Between Slats" },
      { property: "Surface Finishes", value: "Natural Wood Veneer / Melamine / HPL / PU Painted" },
      { property: "Fire Safety Rating", value: "EN 13501-1 Class B-s1,d0 / B-s2,d0 / ASTM Class A" },
      { property: "Installation Methods", value: "Direct Adhesive, Screws, or Timber Batten System" }
    ],
    strength: [
      { property: "Noise Reduction Coefficient (NRC — Direct Mount)", value: "0.50 – 0.60" },
      { property: "NRC with Air Gap + Mineral Wool", value: "0.85 – 0.95 (Broadband Sound Absorption)" },
      { property: "Sound Absorption Range", value: "125 Hz – 4,000 Hz (Eliminates Flutter Echo)" },
      { property: "Environmental Standard", value: "E0 Formaldehyde Rating & Recycled Eco PET Backing" }
    ],
    features: [
      "Precision 27mm slats with 13mm channels trap and diffuse sound waves effectively",
      "9mm dense recycled PET felt converts incident acoustic energy into harmless heat",
      "Delivers warm organic timber aesthetics with certified acoustic performance",
      "Civil Defense Class B fire rating options for commercial public venues",
      "Easy modular installation on walls and ceilings using screws or adhesive"
    ],
    applications: [
      "Auditoriums, concert halls, performance spaces & cinema rooms",
      "Corporate boardrooms, conference centers & executive offices",
      "High-end luxury hospitality lobbies, restaurants & VIP lounges",
      "Home theaters, professional recording studios & podcast suites"
    ]
  },

  'natural-veneer': {
    title: "Ahmed Architectural Natural Wood Veneers",
    subtitle: "100% Authentic Sliced Hardwood Timber Veneers — 0.6 mm A-Grade",
    badge: "100% Authentic Timber",
    image: "assets/images/decorative veneer/natural veneer/natural veneer sheet.jpg",
    specifications: [
      { property: "Material Classification", value: "100% Authentic Sliced Hardwood Timber" },
      { property: "Wood Species Available", value: "American Walnut, White Oak, Teak, Ebony, Cherry, Wenge, Ash, Sapeli" },
      { property: "Slice Thickness", value: "0.5 mm – 2.0 mm (Standard A-Grade 0.6 mm)" },
      { property: "Standard Sheet Sizes", value: "1220 × 2440 mm, 1220 × 2800 mm, Custom Architectural Leaves" },
      { property: "Matching Techniques", value: "Book Matched, Slip Matched, Quarter Cut, Crown Cut, Rift Cut" },
      { property: "Backing Options", value: "High-Tensile Fleece / Kraft Paper Backed / Unbacked Leaves" },
      { property: "Substrate Pressing", value: "Supplied Pressed on Hardwood Plywood, MDF, or Particle Board" },
      { property: "Surface State", value: "Calibrated Sanded Raw (Ready for PU, UV Lacquer, or Natural Oil)" },
      { property: "Sustainability", value: "FSC Certified Responsible Timber Sourcing" }
    ],
    strength: [
      { property: "Adhesive Bond", value: "Cold Press PVA / Hot Press Thermosetting Adhesive (Pass EN 314-2)" },
      { property: "Bending Flexibility", value: "Fleece Backing Allows Curved Surface Application" },
      { property: "Visual Character", value: "Authentic Timber Grain Variation — Unique Natural Character" }
    ],
    features: [
      "Authentic natural wood grain — no two sheets are ever identical",
      "Wide choice of premium architectural timber species",
      "Fleece-backed leaves allow smooth application across curved columns and wall panels",
      "Supplied un-coated and pressed onto customer's choice of certified substrate",
      "FSC certified sustainable harvesting from responsibly managed forests"
    ],
    applications: [
      "Luxury hotel lobbies, presidential suites & feature wall paneling",
      "Bespoke high-end residential cabinetry & architectural millwork",
      "Executive boardroom tables, credenzas & wall paneling",
      "Premium door skins, elevator cab interiors & luxury retail fixtures"
    ]
  },

  'recon-veneer': {
    title: "Ahmed Reconstituted (Recon) Engineered Veneers",
    subtitle: "100% Grain-Consistent Engineered Wood Veneers — AV101–AV112 Series",
    badge: "100% Batch Consistency",
    image: "assets/images/decorative veneer/Recon veneer/Reconstituted veneer av101.jpeg",
    specifications: [
      { property: "Veneer Classification", value: "Reconstituted Engineered Veneer (Dye-Treated & Re-Composed)" },
      { property: "Architectural Swatch Series", value: "AV101 – AV112 (12 Curated Master Swatches)" },
      { property: "Standard Sheet Dimensions", value: "1220 × 2440 mm, 1220 × 2800 mm, 1220 × 3050 mm" },
      { property: "Slice Thickness", value: "0.5 mm – 1.0 mm (Standard 0.6 mm)" },
      { property: "Base Timber", value: "Fast-Growing Eco-Sustainable Plantation Hardwood" },
      { property: "Backing Construction", value: "High-Tensile Fleece / Paper Backed" },
      { property: "Surface Consistency", value: "100% Batch-to-Batch Color & Grain Repeatability" },
      { property: "Natural Defects", value: "Zero Knots, Splits, Wormholes, or Mineral Streaks" }
    ],
    strength: [
      { property: "Light Fastness (Xenon Arc)", value: "UV-Stable Dye Formulation (> 4 Grey Scale Rating)" },
      { property: "Adhesive Compatibility", value: "Cold Press PVA / Hot Press Resin Systems" },
      { property: "Batch Uniformity", value: "100% Identical Grain Match Across Large Volume Orders" }
    ],
    features: [
      "100% consistent grain and color tone across all sheets in large volume production",
      "Eliminates natural defects — zero knots, splits, or unwanted color streaks",
      "Reduces joinery fabrication labor by eliminating manual book-matching",
      "Eco-sustainable construction utilizing fast-growing plantation wood veneers",
      "Available in 12 curated architectural designs mimicking rare exotic timbers"
    ],
    applications: [
      "Multi-room hospitality projects & hotel guestroom entrance doors",
      "Corporate office towers requiring uniform wall paneling throughout",
      "Large-scale residential developments & modular wardrobe production",
      "Commercial retail chain interiors & branded display fit-outs"
    ]
  },

  hpl: {
    title: "Ahmed High-Pressure Laminates (HPL)",
    subtitle: "EN 438-3 Certified High-Pressure Laminate — 99.99% Pathogen Reduction",
    badge: "EN 438-3 / 99.99% Kill Rate",
    image: "assets/images/HPL/hpl layer diagram.jpeg",
    specifications: [
      { property: "Standard Sheet Size", value: "1220 × 2440 mm (4' × 8') / Compact up to 1300 × 3050 mm" },
      { property: "Thickness Options", value: "0.7 mm, 1.0 mm, 1.25 mm (Standard) | 2 mm – 25 mm (Compact)" },
      { property: "Surface Finishes", value: "High Gloss (HG), Matte, Suede (SUD), STN, Fluted, Soft Touch" },
      { property: "Surface Textures & Decors", value: "Solid Colors, Woodgrains, Metallic Stones, Pearlescent" },
      { property: "Thickness Maximum Variation", value: "≤ 0.10 mm (EN 438-2 Clause 5)" },
      { property: "Length & Width Tolerance", value: "+10 / -0.0 mm (EN 438-2 Clause 6)" },
      { property: "Density (EN ISO 1183)", value: "> 1.35 g/cm³" },
      { property: "Anti-Microbial / Anti-Viral", value: "Active Silver Ion Technology (SARS-CoV-2 Tested)" },
      { property: "Edge Banding", value: "Matching ABS / HPL Edge Banding Available" }
    ],
    strength: [
      { property: "Surface Wear Resistance (EN 438-2 Cl. 10)", value: "> 400 Revolutions (Min. Requirement ≥ 350)" },
      { property: "Resistance to Impact (EN 438-2 Cl. 20)", value: "> 20 N (Small Diameter Ball)" },
      { property: "Resistance to Scratching (EN 438-2 Cl. 25)", value: "≥ 3 Rating" },
      { property: "Dry Heat Resistance at 180°C (Cl. 16)", value: "> 3 / > 4 Grade (Withstands Hot Cookware)" },
      { property: "Boiling Water Immersion (Cl. 12)", value: "> 3 / > 4 Grade (Zero Blistering / Delamination)" },
      { property: "Resistance to Staining (Cl. 26)", value: "Group 1 & 2: Grade 5 | Group 3: ≥ Grade 4" },
      { property: "Dimensional Stability at Temp. (Cl. 17)", value: "< 0.45% Longitudinal / < 0.90% Cross-Direction" },
      { property: "Light Fastness (Xenon Arc — Cl. 27)", value: "> 4 Grey Scale Rating" },
      { property: "Resistance to Cigarette Burn (Cl. 30)", value: "> 3 Grade" },
      { property: "Resistance to Cracking Under Stress (Cl. 23)", value: "≥ 4 Grade" }
    ],
    features: [
      "Active silver ion surface kills 99.99% of bacteria and viruses including SARS-CoV-2",
      "Certified EN 438-3 compliance with superior abrasion, impact, and scratch resistance",
      "Withstands 180°C direct dry heat, boiling water, and harsh hospital-grade disinfectants",
      "Non-porous hygienic surface prevents stain penetration and bacterial colonization",
      "Available in over 500 decor designs: solid colors, woodgrains, metallic stones & fluted"
    ],
    applications: [
      "Hospital worktops, clinical countertops & operating room wall cladding",
      "Commercial kitchen countertops, restaurant tables & hotel reception desks",
      "High-traffic airport check-in counters & public institution furniture",
      "Laboratory benches, educational facility desks & restroom cubicles",
      "Fire-retardant public interior wall paneling & elevator cab linings"
    ]
  },

  mfc: {
    title: "Ahmed Melamine Faced Chipboard (MFC)",
    subtitle: "EN 14322 & EN 312 Particle Board with Dual-Sided Melamine Lamination",
    badge: "EN 14322 & EN 312",
    image: "assets/images/MFC/18mm MFC.jpg",
    specifications: [
      { property: "Standard Formats", value: "1220 × 2440 mm (4' × 8')" },
      { property: "Thickness Range", value: "9 mm, 12 mm, 15 mm, 18 mm, 25 mm" },
      { property: "Core Material", value: "High-Density Chipboard (Particle Board)" },
      { property: "Surface Finish", value: "Melamine Decorative Impregnated Paper (One Side / Both Sides)" },
      { property: "Surface Options", value: "Solid Colors, Wood Grain Finish, Matte / Glossy, Textured / Embossed" },
      { property: "Density (EN 323)", value: "650 – 750 kg/m³" },
      { property: "Moisture Content (EN 322)", value: "8% – 12%" },
      { property: "Thickness Tolerance", value: "± 0.3 mm | Length & Width Tolerance: ± 2 mm" },
      { property: "Formaldehyde Emission", value: "E1 Grade (≤ 0.124 mg/m³ EN 717-1)" },
      { property: "Standards & Compliance", value: "EN 14322, EN 312, EN 717-1, ISO 9001" }
    ],
    strength: [
      { property: "Modulus of Rupture (MOR — EN 310)", value: "≥ 11 N/mm²" },
      { property: "Modulus of Elasticity (MOE — EN 310)", value: "≥ 1,600 N/mm²" },
      { property: "Internal Bond Strength (IB — EN 319)", value: "≥ 0.35 N/mm²" },
      { property: "Screw Holding Capacity (Face — EN 320)", value: "≥ 1,000 N" },
      { property: "Surface Adhesion (EN 311)", value: "Pass — High Surface Bond Strength" }
    ],
    features: [
      "Pre-laminated decorative melamine surface — ready to use with zero painting required",
      "Cost-effective and dimensionally stable alternative to raw plywood & solid timber",
      "Supplied with color-matched PVC/ABS edge banding for clean joinery edges",
      "Certified E1 grade low formaldehyde emission for safe residential and office use",
      "High screw holding capacity (≥ 1000 N face) for robust hinge and fitting mounting"
    ],
    applications: [
      "Residential & commercial office furniture and workstation systems",
      "Fitted wardrobes, bedroom closets & storage shelving units",
      "Modular kitchen carcasses & utility cabinets",
      "Office partitions, desk dividers & interior fit-outs"
    ]
  },

  'acrylic-crystal': {
    title: "Ahmed Acrylic Crystal Board",
    subtitle: "1800TopX PMMA Super-Gloss Surface on 19mm Plywood — Shatterproof Glass Alternative",
    badge: "10x Glass Impact Rating",
    image: "assets/images/Acrylic panel/metallic finish acrylic panel.jpg",
    specifications: [
      { property: "Surface Coating", value: "Ahmed Acrylic 1800TopX (PMMA UV-Coated Layer)" },
      { property: "Board Dimensions", value: "1220 × 2440 mm (8' × 4')" },
      { property: "Core Substrate", value: "19 mm High-Density Hardwood Plywood" },
      { property: "Surface Options", value: "Single/Double Side Acrylic | Backing ABS (White/Black)" },
      { property: "Scratch Rating", value: "Up to 1.1 N Erichsen DIN 68861/t4, IHD-W-466 Class 1" },
      { property: "Available Finishes", value: "Super Gloss (90+ Gloss Units), Metallic, Pearl, Matte" },
      { property: "Weight Ratio", value: "2 – 3x Lighter than Real Glass" },
      { property: "Edge Treatment", value: "Matching Acrylic Edge Bands Available" }
    ],
    strength: [
      { property: "Impact Resistance", value: "10x More Impact Resistant than Real Glass" },
      { property: "Shatterproof Safety", value: "Does Not Shatter into Sharp Fragments" },
      { property: "Chemical Resistance", value: "Lab & Hospital Detergent Tested" },
      { property: "Moisture Resistance", value: "100% Water Resistant Front & Back Surfaces" }
    ],
    features: [
      "Superior mirror-like gloss (app. 90 gloss units) without orange-peel distortion",
      "Scratch resistant to nails and steel wool (up to 1.1 N Erichsen DIN 68861/t4)",
      "Chemical and stain resistant — ideal for healthcare and kitchen applications",
      "Lightweight shatterproof glass alternative at 2–3x lower weight",
      "Superior cost-effective luxury finish compared to traditional lacquered wood panels"
    ],
    applications: [
      "Luxury kitchen shutter fronts & vanity panels",
      "Interior architectural door skins",
      "High-end wall & ceiling paneling",
      "Premium retail display furniture"
    ]
  },

  pvc: {
    title: "Ahmed PVC Board & Wall Panels",
    subtitle: "100% Waterproof & Self-Extinguishing Plastic Foam Board — 9 Color Range",
    badge: "100% Waterproof",
    image: "assets/images/pvc panel/pvc panel.jpg",
    specifications: [
      { property: "Material Classification", value: "100% Plastic Sheet (Lightweight Expanded PVC)" },
      { property: "Standard Sheet Size", value: "1220 × 2440 mm (4' × 8')" },
      { property: "Thickness Range", value: "1.75 mm, 2.75 mm, 4.75 mm, 7.5 mm, 10 mm, 12 mm, 18 mm" },
      { property: "Surface Texture", value: "Plain and Laminated (Silky Matte Finish)" },
      { property: "Available Colors", value: "White, Wood, Red, Blue, Orange, Green, Brown, Black, Gray (9 Colors)" },
      { property: "Water Absorption", value: "Zero (0%) — Fully Waterproof Core and Surface" },
      { property: "Fire Safety", value: "Fire Retardant and Self-Extinguishing" },
      { property: "Environmental Standard", value: "Eco-Friendly, 100% Lead-Free & Non-Toxic" }
    ],
    strength: [
      { property: "Impact Strength", value: "Tough & Rigid with High Impact Resistance" },
      { property: "Corrosion & Weather Resistance", value: "100% Anti-Corrosion / Does Not Rot, Swell or Age" },
      { property: "Thermal & Acoustic Insulation", value: "Sound Insulation, Heat Insulation & Noise Absorption" },
      { property: "Termite & Pest Resistance", value: "100% Termite, Borer, and Fungal Rot Proof" },
      { property: "Workability", value: "Drilling, Sawing, Nailing, Planing, Heat Folding & Forming, Welding" }
    ],
    features: [
      "100% waterproof and moisture-proof — will never swell, rot, or delaminate in water",
      "Fire retardant and self-extinguishing for superior building fire safety",
      "Silky matte smooth surface is ideal for direct digital printing, laminating, and painting",
      "Versatile fabrication: easily cut, drilled, nailed, planed, welded, and heat folded",
      "100% lead-free and eco-friendly composition safe for residential and commercial use"
    ],
    applications: [
      "Bathroom vanity cabinets, wet area partitions & kitchen shutters",
      "Doors, door frames, door cladding & window surrounds",
      "Interior wall paneling, partitions & 100% waterproof false ceilings",
      "Advertising signage boards, exhibition booths & pop-up displays",
      "Air conditioning ducting, industrial control cabinets & packing panels"
    ]
  },

  mosaic: {
    title: "Ahmed 3D Reclaimed Teak Wood Mosaic Tiles",
    subtitle: "300 × 300 mm Handcrafted Multi-Depth Hardwood Acoustic Relief Panels",
    badge: "Reclaimed Hardwood",
    image: "assets/images/wood mosaic/wood mosaic.jpg",
    specifications: [
      { property: "Tile Module Dimensions", value: "300 × 300 mm per Mesh-Mounted Module" },
      { property: "Relief Depth Profile", value: "15 mm – 35 mm Variable Multi-Depth 3D Blocks" },
      { property: "Primary Timber", value: "100% Solid Reclaimed Teak & Selected Mixed Tropical Hardwoods" },
      { property: "Backing Matrix", value: "High-Strength Flexible Fiberglass Mesh (Interlocking Edge System)" },
      { property: "Surface Treatment", value: "Natural Matte Oil / Protective UV Clear Lacquer Coat" },
      { property: "Wood Sourcing", value: "100% Reclaimed & Upcycled Architectural Teak Wood" },
      { property: "Installation Method", value: "Polymer Adhesive / Direct Wall Mounting (Interlocking Alignment)" }
    ],
    strength: [
      { property: "Acoustic Diffusion", value: "Multi-Depth Relief Naturally Scatters Sound Wave Reverberation" },
      { property: "Adhesion Strength", value: "Individual Hardwood Blocks Adhered with High-Tack Industrial Resin" },
      { property: "Timber Durability", value: "Natural Teak Oil Content Resists Moisture & Insect Ingress in Dry Interiors" }
    ],
    features: [
      "Handcrafted from genuine reclaimed teak with authentic weathered grain textures",
      "Multi-depth 3D sculptural surface adds dramatic light, shadow, and tactile warmth",
      "Functions as a natural acoustic sound diffuser to reduce interior flutter echo",
      "Flexible fiberglass mesh backing ensures fast, seamless interlocking installation",
      "Eco-sustainable upcycled hardwood design for luxury architectural statements"
    ],
    applications: [
      "Luxury hotel lobbies, VIP reception lounges & elevator statement walls",
      "Fine dining restaurants, executive bars & coffee lounge backdrops",
      "High-end residential living rooms, master bedrooms & feature media walls",
      "Acoustic feature wall diffuser in recording studios, listening rooms & theaters"
    ]
  }
};

/* ─── 3. Spec Modal with Product Image Header ─────────────────────────────── */
function initProductSpecModal() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-sample-trigger')) return;
    const trigger = e.target.closest('[data-product]');
    if (trigger) {
      const productKey = trigger.getAttribute('data-product');
      if (productSpecsData[productKey]) {
        e.preventDefault();
        openProductSpecModal(productKey);
      }
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
      if (e.target === modal) closeSpecModal();
    });
  }

  const specRows = (data.specifications || []).map(item => `
    <tr>
      <td><strong>${item.property}</strong></td>
      <td>${item.value}</td>
    </tr>`).join('');

  const strengthRows = (data.strength || []).map(item => `
    <tr>
      <td><strong>${item.property}</strong></td>
      <td>${item.value}</td>
    </tr>`).join('');

  const featureItems = (data.features || []).map(f => `<li>${f}</li>`).join('');

  const imageHtml = data.image ? `
    <div class="modal-product-media-header">
      <div class="modal-product-img-box">
        <img src="${data.image}" alt="${data.title}" class="modal-product-img">
      </div>
    </div>` : '';

  modal.innerHTML = `
    <div class="modal-card spec-modal-card">
      <button class="modal-close" onclick="closeSpecModal()">&times;</button>

      ${imageHtml}

      <div class="modal-header">
        <span class="badge-red">${data.badge}</span>
        <h2>${data.title}</h2>
        <p class="modal-subtitle">${data.subtitle}</p>
      </div>

      <div class="spec-section">
        <h3>Technical Specifications</h3>
        <table class="spec-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>${specRows}</tbody>
        </table>
      </div>

      ${strengthRows ? `
      <div class="spec-section">
        <h3>Mechanical & Performance Data</h3>
        <table class="spec-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>${strengthRows}</tbody>
        </table>
      </div>` : ''}

      <div class="spec-section">
        <h3>Key Features & Advantages</h3>
        <ul class="spec-feature-list">${featureItems}</ul>
      </div>

      <div class="spec-section">
        <h3>Typical Applications</h3>
        <p class="spec-app-text">${(data.applications || []).join(' &bull; ')}</p>
      </div>

      <div class="modal-action-buttons">
        <a href="#rfq" class="btn btn-red btn-lg" onclick="closeSpecModal()">
          Request Quotation
        </a>
        <a href="https://wa.me/971507959535?text=Hi, I need a sample of ${encodeURIComponent(data.title)}"
           target="_blank" class="btn btn-whatsapp btn-lg">
          Request Sample
        </a>
      </div>
    </div>`;

  modal.classList.add('open');
}

function closeSpecModal() {
  const modal = document.getElementById('specModal');
  if (modal) modal.classList.remove('open');
}

/* ─── 4. Interactive Layer Inspector ─────────────────────────────────────── */
const inspectorData = {
  acoustic: {
    title: "Acoustic Wood Paneling (NRC 0.85 – 0.95)",
    subtitle: "Engineered 4-Stage Sound Dampening Assembly",
    description: "Designed for high-end auditoriums, conference rooms, and hospitality suites to eliminate echo while providing warm wood aesthetic.",
    layers: [
      { num: "01", name: "Decorative Face Veneer / Finish", desc: "0.6mm Natural American Walnut / Teak UV clear coat or Melamine finish" },
      { num: "02", name: "12mm High-Density MDF Slats", desc: "27mm wide precision CNC-machined MDF slats with 13mm spacing" },
      { num: "03", name: "9mm Recycled PET Acoustic Sound Felt", desc: "High-density recycled black acoustic felt backing converting sound waves to thermal energy" },
      { num: "04", name: "Cavity & Mounting Grid", desc: "Direct adhesive, screw mount or air gap batten system achieving up to NRC 0.95" }
    ],
    specs: [
      "Panel Size: 2400 × 600 × 21 mm (12mm MDF + 9mm PET)",
      "Noise Reduction Coefficient: NRC 0.50–0.60 direct; up to NRC 0.95 with cavity",
      "Fire Rating: EN 13501-1 Class B-s1,d0 / ASTM Class A (Civil Defense Approved)",
      "Eco Standard: E0 Formaldehyde Rating & Recycled PET Backing"
    ]
  },
  hpl: {
    title: "High-Pressure Compact Laminate (HPL)",
    subtitle: "EN 438-3 Anti-Virus & Anti-Bacterial Surface",
    description: "Multi-layer thermosetting resin construction engineered for extreme wear, chemical resistance, 180°C heat, and 99.99% viral elimination.",
    layers: [
      { num: "01", name: "Overlay Protection Sheet", desc: "Transparent melamine resin layer containing aluminium oxide for scratch resistance" },
      { num: "02", name: "Decorative Pattern Paper", desc: "UV-fast printed decor sheet (Woodgrain, Solid Color, Stone, or Fluted finish)" },
      { num: "03", name: "Impregnated Kraft Core Plies", desc: "Multiple layers of phenolic resin-soaked heavy kraft paper for structural rigidity" },
      { num: "04", name: "Balance Backing Film", desc: "Equalizing backing layer preventing panel warping under humidity shifts" }
    ],
    specs: [
      "Standard Compliance: EN 438-3 / ISO 4586 / Density > 1.35 g/cm³",
      "Surface Abrasion & Wear: > 400 Revolutions (EN 438-2 Cl. 10)",
      "Thermal Resistance: Heat resistant up to 180°C direct dry heat (EN 438-2 Cl. 16)",
      "Anti-Microbial: Silver ion technology with 99.99% pathogen elimination (SARS-CoV-2 tested)"
    ]
  },
  plywood: {
    title: "Ahmed Marine Plywood (BS 1088)",
    subtitle: "100% Selected Hardwood Core with WBP Phenolic Bonding",
    description: "The gold standard structural marine plywood engineered for marine vessels, waterfront villas, and heavy formwork.",
    layers: [
      { num: "01", name: "A-Grade 0.6mm Gurjan Face Veneer", desc: "Solid un-jointed A-Grade Gurjan face veneer calibrated smooth" },
      { num: "02", name: "Cross-Band Core Hardwood Veneers", desc: "Rot-resistant selected tropical hardwood veneers pressed at right angles" },
      { num: "03", name: "100% WBP Phenolic Resin Glue", desc: "Water-Boil-Proof (WBP) phenol-formaldehyde adhesive line conforming to EN 314-2 Class 3" },
      { num: "04", name: "Vacuum-Pressure Preservative Impregnation", desc: "Deep preservative retention (11.39 kg/m³) sealing against termites and borers" }
    ],
    specs: [
      "Certification: BS 1088-1:2003 & BSTI Approved / ISO 9001:2015",
      "Boil Test: 72 Hours continuous boiling water resistance without delamination",
      "Bending Strength (MOR): Along Grain Avg. 59 N/mm² | Tensile: 5,430 N/mm²",
      "Durability Class: Vacuum-pressure treated against termites, borers & fungal decay"
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
      "Smoke & Ignition: Low smoke density index (s1/s2) & zero flaming droplets (d0)",
      "Treatment: Deep-vacuum pressure impregnation with non-leaching mineral salts",
      "Durability: Termite, borer, and fungal rot resistant (Retention 11.39 kg/m³)"
    ]
  },
  lvl: {
    title: "Ahmed LVL Door Frame & Structural Beams",
    subtitle: "High-Strength Parallel-Grain Engineered Timber (Bending 60–70 MPa)",
    description: "Engineered wood product constructed by bonding thin wood veneers parallel to the grain under high temperature and hydraulic pressure for structural load-bearing applications.",
    layers: [
      { num: "01", name: "Calibrated Smooth Outer Ply", desc: "Precision smooth sanded surface ready for painting, veneering, or wrapping" },
      { num: "02", name: "Parallel Grain Core Plies", desc: "Multiple layers of longitudinal wood veneers oriented unidirectionally for maximum tensile strength" },
      { num: "03", name: "Structural Phenolic Adhesive", desc: "High-bond structural adhesive resistant to moisture, heat, and heavy load shear forces" },
      { num: "04", name: "Anti-Warping Dimensional Matrix", desc: "Engineered matrix that eliminates twisting, cupping, and shrinkage in GCC climates" }
    ],
    specs: [
      "Bending Strength (MOR): 60 – 70 MPa (N/mm²) | Compressive: 40 – 50 MPa",
      "Modulus of Elasticity (MOE): 11,000 – 14,000 N/mm²",
      "Standard Thicknesses: 45mm Door Frames ",
      "Fire Rating: Class B, 30-Minute structural integrity"
    ]
  },
  mrmdf: {
    title: "Moisture Resistant (MR)MDF",
    subtitle: "MUF Resin Bonded Hydrophobic Fiberboard — EN 622-5 (Option 1 V313)",
    description: "Engineered with Melamine-Urea-Formaldehyde (MUF) resin and green dye indicator to provide exceptional dimensional stability in high humidity environments.",
    layers: [
      { num: "01", name: "Micro-Sanded Outer Face", desc: "Flawless ultra-smooth surface for direct priming, veneering or lacquering" },
      { num: "02", name: "Green Color Indicator Layer", desc: "Green identification dye integrated into resin core for instant jobsite verification" },
      { num: "03", name: "MUF Hydrophobic Fiber Matrix", desc: "Refined wood fibers bonded with Melamine-Urea-Formaldehyde moisture barrier resin" },
      { num: "04", name: "Precision Calibrated Core", desc: "Tight density profile (680–750 kg/m³) minimizing thickness swelling to ≤ 8%" }
    ],
    specs: [
      "Moisture Resistance: EN 622-5 Option 1 V313 Cyclic Humidity Test (Swelling ≤ 8%)",
      "Core Color Marker: Uniform Green Core Identification",
      "Formaldehyde Emission: CARB Phase 2 / E1 (≤ 0.124 mg/m³) / E0 Compliant",
      "Ideal Uses: Kitchen cabinets, bathroom vanities, window sills & skirting"
    ]
  },
  frmdf: {
    title: "Fire Retardant (FR) MDF",
    subtitle: "Civil Defense Certified Flame Retardant Board (Euroclass B-s2,d0)",
    description: "Impregnated with flame-inhibiting mineral salts (red/pink core indicator) that inhibit flame spread and reduce smoke generation in high-occupancy commercial spaces.",
    layers: [
      { num: "01", name: "Sanded Dense Outer Face", desc: "Smooth calibrated surface suitable for HPL pressing, veneering or painting" },
      { num: "02", name: "Red/Pink FR Indicator Dye", desc: "Red/pink core color code confirming Civil Defense fire compliance" },
      { num: "03", name: "Flame-Retardant Salt Matrix", desc: "Uniformly distributed ammonium phosphate & mineral flame suppressants" },
      { num: "04", name: "High-Density Core Plies", desc: "Compact fiber structure (680–750 kg/m³) resisting structural collapse during thermal exposure" }
    ],
    specs: [
      "Fire Rating: Euroclass B-s2,d0 / Class B1 (UAE & KSA Civil Defense Approved)",
      "Smoke & Toxic Gas: Low smoke density index (s2) & zero flaming droplets (d0)",
      "Core Color Marker: Red / Pink Core Identification",
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

    const layersHTML = data.layers.map(l => `
      <div class="visual-layer">
        <div style="display:flex; align-items:center; gap:1rem;">
          <div class="layer-num">${l.num}</div>
          <div>
            <div class="layer-title">${l.name}</div>
            <div style="font-size:0.8rem; color:var(--color-text-muted);">${l.desc}</div>
          </div>
        </div>
      </div>`).join('');

    const specsHTML = data.specs.map(s => `<li>${s}</li>`).join('');

    display.innerHTML = `
      <div class="layer-view-container">
        <div class="layer-visual">${layersHTML}</div>
        <div class="layer-desc-text">
          <span class="section-tag">${data.subtitle}</span>
          <h3>${data.title}</h3>
          <p>${data.description}</p>
          <ul class="layer-spec-list">${specsHTML}</ul>
        </div>
      </div>`;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderInspector(tab.getAttribute('data-inspect'));
    });
  });

  renderInspector('acoustic');
}

/* ─── 5. Catalog Modal ────────────────────────────────────────────────────── */
function initCatalogModal() {
  const modal = document.getElementById('catalogModal');
  const openBtn = document.getElementById('btnDownloadCatalog');
  const closeBtn = document.getElementById('catalogModalClose');

  if (openBtn && modal) {
    openBtn.addEventListener('click', (e) => { e.preventDefault(); modal.classList.add('open'); });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
  }
}

/* ─── 6. Sample Modal ────────────────────────────────────────────────────── */
function initSampleModal() {
  const modal = document.getElementById('sampleModal');
  const closeBtn = document.getElementById('modalClose');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
  }
}

/* ─── 7. RFQ & Sample Form Handlers ─────────────────────────────────────── */
function handleRFQSubmit() {
  const name = document.getElementById('rfqName').value;
  const company = document.getElementById('rfqCompany').value;
  const phone = document.getElementById('rfqPhone').value;
  const material = document.getElementById('rfqMaterial').value;
  const quantity = document.getElementById('rfqQuantity').value;
  const notes = document.getElementById('rfqNotes').value;

  const text = `Hello Al Ahmed UAE Sales Team,\n\nQuotation Request:\n\n• Name: ${name}\n• Company: ${company}\n• Contact: ${phone}\n• Material: ${material}\n• Quantity: ${quantity}\n• Details: ${notes}`;
  window.open(`https://wa.me/971507959535?text=${encodeURIComponent(text)}`, '_blank');
}

function handleSampleSubmit() {
  const name = document.getElementById('sampleName').value;
  const studio = document.getElementById('sampleStudio').value;
  const address = document.getElementById('sampleAddress').value;
  alert(`Sample Dispatch Confirmed!\n\nRecipient: ${name} (${studio})\nAddress: ${address}\n\nOur UAE courier team will dispatch your Specifier Kit within 24 hours.`);
  const modal = document.getElementById('sampleModal');
  if (modal) modal.classList.remove('open');
}

/* ─── 8. Header Scroll Effect ────────────────────────────────────────────── */
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

/* ─── 9. Sample Request Buttons (WhatsApp) ───────────────────────────────── */
function initSampleRequestButtons() {
  document.querySelectorAll('.btn-sample-trigger').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const productCard = e.target.closest('.product-card');
      const productName = e.target.getAttribute('data-title') ||
        (productCard ? productCard.querySelector('.card-title').innerText : 'Product');
      const thickness = prompt(`Specify the required thickness (mm) for ${productName}:`, "18mm");
      if (thickness === null) return;
      const message = `Hello Al Ahmed UAE Team,\n\nSample Request:\n*Product:* ${productName}\n*Thickness:* ${thickness.trim() || 'Not specified'}\n\nPlease advise on sample availability.`;
      window.open(`https://wa.me/971507959535?text=${encodeURIComponent(message)}`, '_blank');
    });
  });
}

/* ─── 10. Mobile Navigation Toggle ──────────────────────────────────────── */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.querySelector('.main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  }
}

/* ─── 11. Fullscreen Image Lightbox Modal ────────────────────────────────── */
function initImageLightbox() {
  const modal = document.getElementById('imageLightboxModal');
  const lightboxImg = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const overlay = document.getElementById('lightboxOverlay');

  if (!modal || !lightboxImg) return;

  function openLightbox(imgSrc, imgCaption) {
    lightboxImg.src = imgSrc;
    if (caption) {
      caption.textContent = imgCaption || '';
      caption.style.display = imgCaption ? 'block' : 'none';
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImg.src = '';
    }, 300);
  }

  // Bind to cards with data-lightbox or images inside facility cards
  document.querySelectorAll('[data-lightbox]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const highRes = card.getAttribute('data-lightbox');
      const imgCap = card.getAttribute('data-caption') || (card.querySelector('img') ? card.querySelector('img').alt : '');
      openLightbox(highRes, imgCap);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay) overlay.addEventListener('click', closeLightbox);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }
  });
}
