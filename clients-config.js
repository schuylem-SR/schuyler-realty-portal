// ============================================================
// SCHUYLER REALTY - CLIENT CONFIGURATION
// ============================================================
// Client types: "newconstruction", "buyer", "seller"
// ============================================================

const CLIENTS = {

  // ── John Birrer — New Construction Buyer ─────────────────
  "birrer2026": {
    type: "newconstruction",
    name: "John",
    full_name: "John Birrer",
    property: "2088 Darilyn Drive, Lot #8",
    community: "The Courtyards at Mulberry Run",
    city: "Grove City, OH",
    builder: "Epcon Communities",
    agent_note: "Your agent is Mark Schuyler. Call or text anytime: (740) 953-1769",
    closing_window: "September 19-29, 2026",
    action_item: "",
    milestones: [
      { name: "Contract Signed",       date: "April 22, 2026",    status: "done" },
      { name: "Design Studio",         date: "May 2026",          status: "done" },
      { name: "Pre-Con Meeting",       date: "May 28, 2026",      status: "done" },
      { name: "Guardian Addendum",     date: "Signed",            status: "done" },
      { name: "Utilities In",          date: "June 8, 2026",      status: "upcoming" },
      { name: "Pre-Drywall Stage",     date: "End of July 2026",  status: "upcoming" },
      { name: "New Home Orientation",  date: "TBD - Epcon to set",status: "upcoming" },
      { name: "Closing",               date: "Sept 19-29, 2026",  status: "upcoming" }
    ],
    hoa_rules: "THE COURTYARDS AT MULBERRY RUN - COMMUNITY POLICIES AND GUIDELINES (Dated: October 9, 2023)\n\nI. PERSONAL PROPERTY\nAll personal property must be kept inside the garage. Nothing may be hung or displayed, nor may signs, awnings, canopies, shutters, antennae or satellite dishes be affixed to exterior walls, doors, fences, or roof without prior written approval of the Board.\n\nII. DECORATIVE ITEMS\nHoliday Decorations: Christmas lights permitted from Thanksgiving through January 7. No flashing lights or music. Other holidays: max 4 weeks before, 1 week after. Flag Display: One black two-position flag holder on front porch post. One flag only (American or Collegiate) in good condition. Wreaths: Front door only, max 30 inches diameter. Prohibited outside courtyard: Bird feeders, garden hose containers, stepping stones, wall plaques, windsocks, wind chimes, decorative flags.\n\nIII. FLOWERS AND LANDSCAPE PLANTS\nInside courtyard fence: annuals and perennials that won't exceed fence height. Outside courtyard fence: annual flowers only in existing mulched areas. Max 3 flower pots on concrete pad at front door. New shrubs outside courtyard require Board approval.\n\nIV. PROHIBITED ITEMS in lawn or common areas\nYard signs, statues, lawn ornaments, artificial flowers, ornamental rocks, cypress mulch, swing sets, mounted hose reels, laundry poles, clotheslines. Nothing hung over courtyard fence.\n\nV. EXTERIOR ALTERATIONS\nNo fences, walls, patios, decks, or alterations to exterior without Board approval. Storm doors need approved design and color and Board approval.\n\nVI. WINDOWS\nWindow coverings must be white, off-white, light beige, or light gray on the exterior side.\n\nVIII. ANIMALS\nMax 2 household pets (dogs and cats only). Leash max 8 feet outdoors. No tethering outside or to fence. Fines possible for violations.\n\nIX. COURTYARD PATIO AREA\nPersonal property must not be visible above fence except patio furniture, umbrellas, and grills. Nothing affixed to fence or neighboring home. Reasonable noise only. Firepits: clean/seasoned wood or propane/natural gas. Water features allowed if not taller than fence. Hot tubs require Board approval, earth-tone colors, solid foundation, liability insurance.\n\nX. PARKING\nNo boats, trailers, motorhomes, trucks over 3/4 ton, or commercial vehicles overnight. No parking on driveway concrete apron. Common spaces max 4 nights/month, 48 hours max before towing risk.\n\nXI. SWIMMING POOL\nNo lifeguard. Children under 18 need adult resident. Max 3 guests per household. No animals, glass, alcohol, smoking, diving, rafts. Open dawn to dusk.\n\nXII. CLUBHOUSE\n$200 deposit + $50 rental fee. No children/teen parties. No smoking. No pool/fitness access for guests.\n\nXIII. FITNESS CENTER\nOpen 24/7. Age 18+ only. Headphones required. No smoking or alcohol.\n\nXV. TRASH AND RECYCLING\nSet out after 5 PM day before collection. Bring in by 9 PM day of collection. Set out at main street curb. Store bins in garage otherwise.\n\nXIX. VIDEO SURVEILLANCE\nDoorbell cameras require Board approval. Must match trim color. Must fit flat against trim surface.\n\nXX. IRRIGATION\nRequires Board approval and Neighbor Consent Form. Must be installed by certified contractor. Cannot install until Epcon confirms sod complete on all adjacent lots. Owner responsible for winterizing Nov-March.\n\nXXII. POD STORAGE\nOn driveway only. Not until after closing. Remove within 5 days. Driveway must be cured first.\n\nXXIII. HOT TUBS\nCourtyard patio only. Board approval required. Earth-tone colors. Solid foundation. Lid locked when not in use. No draining onto lawn. 80 decibel noise limit.",
    contract_notes: "JOHN BIRRER - KEY CONTRACT AND BUILD SUMMARY\n\nProperty: 2088 Darilyn Drive, Lot 8, The Courtyards at Mulberry Run, Grove City OH\nBuilder: Epcon Communities\nFloor Plan: PD6 Portico, Elevation D Ranch, Garage Right\nContract Signed: April 22, 2026\nFinancing: Mortgage (in place)\nSuperintendent: Eric Gordon - egordon@epconcommunities.com\nSales Consultant: Jennifer Scheel-Patton - (614) 601-0191 - jscheel@epconcommunities.com\nContracts Coordinator: Donna Kobella - (614) 652-3570 - dkobella@epconcommunities.com\nDesign Consultant: Kelli Joyce - (614) 784-3259 - kjoyce@epconcommunities.com\nTitle Company: Unity Title - bmorgan@unitytitle.net\n\nWARRANTIES: 1-Year workmanship, 30-Year structural\n\nBUILD TIMELINE:\n- Utilities in: June 8, 2026 (scheduled)\n- Pre-drywall: End of July 2026\n- Closing window: September 19-29, 2026\n\nCOMMUNICATION:\n- Every other Monday phone call with Eric Gordon\n- After drywall: weekly calls\n\nKEY DESIGN SELECTIONS:\n- Interior Paint: Sherwin Williams Agreeable Gray SW7029\n- Kitchen Cabinets: 42 inch Grant, Cannon Grey Stain\n- Kitchen Countertops: Quartz Calacatta Prado\n- Kitchen Backsplash: Florida Tile Emotive 3x12 Envy Green, Grout Snow White\n- Master Bath Countertops: Quartz Carrara Breve\n- Master Shower: Zero Threshold Universal Design, Tile to Ceiling\n- Flooring (main): Mohawk Rustic Moor 7.5 inch Knotted Chestnut Laminate\n- Flooring (bedrooms): Mohawk Country Walk Aurora Carpet Level 4 with 8lb pad\n- Fireplace: 36 inch Gas Level 2, Ceramic Tile Surround Scrapbook Cherished Greige\n- Appliances: GE Stainless - Refrigerator, Dishwasher, 30 inch Gas Cooktop, Double Wall Oven\n- Exterior: CFN-7 Hillsborough, Front Door Web Gray SW7075\n- Front Fence: 4 Ft Black Aluminum Picket, Rear Fence: 6 Ft Vinyl Privacy\n- Home Technology: Guardian package (signed)\n\nIMPORTANT NOTES:\n- Design Studio selections are FINAL\n- Builder does internal inspections - buyer does not receive the inspection report\n- HOA window coverings must be white, off-white, light beige, or light gray on exterior\n- Any courtyard additions require Board approval first\n- Wire Fraud Warning: Never wire money by email without calling first",
    contacts: [
      { role: "Your Agent",        name: "Mark Schuyler",          phone: "(740) 953-1769", email: "markschuyler@kw.com",          initials: "MS" },
      { role: "Sales Consultant",  name: "Jennifer Scheel-Patton", phone: "(614) 601-0191", email: "jscheel@epconcommunities.com", initials: "JS" },
      { role: "Superintendent",    name: "Eric Gordon",            phone: "",              email: "egordon@epconcommunities.com", initials: "EG" },
      { role: "Contracts Coord.",  name: "Donna Kobella",          phone: "(614) 652-3570",email: "dkobella@epconcommunities.com",initials: "DK" },
      { role: "Design Consultant", name: "Kelli Joyce",            phone: "(614) 784-3259",email: "kjoyce@epconcommunities.com",  initials: "KJ" },
      { role: "Title Company",     name: "Unity Title",            phone: "",              email: "bmorgan@unitytitle.net",        initials: "UT" }
    ]
  },

  // ── TEST BUYER — Resale Home Buyer ───────────────────────
  "testbuyer2026": {
    type: "buyer",
    name: "Sarah",
    full_name: "Sarah Test",
    property: "4521 Maple Grove Lane",
    community: "Maple Grove Estates",
    city: "Grove City, OH",
    agent_note: "Your agent is Mark Schuyler. Call or text anytime: (740) 953-1769",
    closing_date: "July 15, 2026",
    action_item: "Action needed: Review and respond to inspection findings by June 12.",
    has_hoa: true,
    milestones: [
      { name: "Offer Accepted",      date: "June 1, 2026",   status: "done" },
      { name: "Earnest Money Paid",  date: "June 3, 2026",   status: "done" },
      { name: "Inspection",          date: "June 8, 2026",   status: "done" },
      { name: "Inspection Response", date: "June 12, 2026",  status: "pending" },
      { name: "Appraisal",           date: "June 20, 2026",  status: "upcoming" },
      { name: "Loan Approval",       date: "July 1, 2026",   status: "upcoming" },
      { name: "Final Walkthrough",   date: "July 14, 2026",  status: "upcoming" },
      { name: "Closing",             date: "July 15, 2026",  status: "upcoming" }
    ],
    hoa_rules: "Paste the HOA rules for this client's community here. The AI assistant will answer questions based on this text.",
    contract_notes: "SARAH TEST - BUYER CONTRACT SUMMARY\n\nProperty: 4521 Maple Grove Lane, Grove City OH\nOffer Price: $395,000\nEarnest Money: $5,000\nFinancing: Conventional 20% down\nClosing Date: July 15, 2026\nTitle Company: Unity Title\n\nKEY DATES:\n- Inspection contingency deadline: June 12, 2026\n- Appraisal contingency deadline: June 25, 2026\n- Financing contingency deadline: July 5, 2026\n- Possession: Day of closing\n\nNEIGHBORHOOD INFO:\n- School District: South-Western City Schools\n- Elementary: Buckeye Woods\n- Middle: Grove City Middle School\n- High School: Grove City High School\n- Nearby: Kroger (1.2 mi), CVS (0.8 mi), Restaurants on Broadway (2 mi)\n- Parks: Quarry Trails Metro Park (3 mi), Fryers Park (0.5 mi)\n\nWIRE FRAUD WARNING: Never wire funds by email without calling first.",
    documents: [
      { name: "Purchase Agreement",    status: "signed",   note: "Fully executed June 1, 2026" },
      { name: "HOA Disclosure",        status: "signed",   note: "Received and acknowledged" },
      { name: "Lead Paint Disclosure", status: "signed",   note: "Completed" },
      { name: "Inspection Report",     status: "ready",    note: "Available - review now" },
      { name: "Inspection Response",   status: "pending",  note: "Due June 12 - awaiting seller response" },
      { name: "Appraisal Report",      status: "pending",  note: "Ordered - estimated 10-14 days" },
      { name: "Closing Disclosure",    status: "upcoming", note: "Provided 3 business days before closing" }
    ],
    contacts: [
      { role: "Your Agent",    name: "Mark Schuyler",  phone: "(740) 953-1769", email: "markschuyler@kw.com",   initials: "MS" },
      { role: "Lender",        name: "Your Lender",    phone: "TBD",           email: "lender@example.com",    initials: "LN" },
      { role: "Title Company", name: "Unity Title",    phone: "",              email: "bmorgan@unitytitle.net", initials: "UT" },
      { role: "Inspector",     name: "Home Inspector", phone: "TBD",           email: "inspector@example.com", initials: "HI" }
    ]
  },

  // ── TEST SELLER — Existing Home Seller ───────────────────
  "testseller2026": {
    type: "seller",
    name: "Mike",
    full_name: "Mike Test",
    property: "7892 Willow Creek Drive",
    community: "Willow Creek",
    city: "Grove City, OH",
    list_price: "$425,000",
    agent_note: "Your agent is Mark Schuyler. Call or text anytime: (740) 953-1769",
    action_item: "",
    milestones: [
      { name: "Listing Agreement Signed", date: "May 20, 2026", status: "done" },
      { name: "Pre-Listing Photos",       date: "May 24, 2026", status: "done" },
      { name: "Active on Market",         date: "May 28, 2026", status: "done" },
      { name: "Open House",               date: "June 1, 2026", status: "done" },
      { name: "Offer Review",             date: "June 8, 2026", status: "pending" },
      { name: "Under Contract",           date: "TBD",          status: "upcoming" },
      { name: "Inspection Period",        date: "TBD",          status: "upcoming" },
      { name: "Closing",                  date: "TBD",          status: "upcoming" }
    ],
    market_activity: {
      days_on_market: 10,
      showings: 14,
      open_house_visitors: 22,
      online_views: 847,
      saves: 38,
      feedback_summary: "Buyers love the updated kitchen and backyard. Most common feedback: would like a 3rd garage bay. Pricing feedback has been positive - most consider it fairly priced for the area.",
      kw_command_note: "Connect KW Command to sync live showing data automatically"
    },
    net_sheet: {
      list_price: 425000,
      estimated_sale_price: 420000,
      mortgage_payoff: 210000,
      agent_commission: 0.06,
      title_fees: 1200,
      transfer_tax: 0.004,
      home_warranty: 500,
      misc_closing: 800
    },
    documents: [
      { name: "Listing Agreement",   status: "signed",   note: "Signed May 20, 2026" },
      { name: "Seller Disclosure",   status: "signed",   note: "Completed" },
      { name: "Lead Paint Disclosure",status: "signed",  note: "Completed" },
      { name: "Purchase Agreement",  status: "upcoming", note: "Added when offer is accepted" },
      { name: "Closing Documents",   status: "upcoming", note: "Provided before closing date" }
    ],
    contract_notes: "MIKE TEST - SELLER SUMMARY\n\nProperty: 7892 Willow Creek Drive, Grove City OH\nList Price: $425,000\nList Date: May 28, 2026\n\nSHOWING INSTRUCTIONS:\n- Minimum 1 hour notice required\n- Pets will be secured\n- Please remove shoes\n- Leave all lights on after showing\n\nPROPERTY HIGHLIGHTS:\n- 4 bed / 2.5 bath / 2,340 sq ft\n- Updated kitchen 2023 - quartz countertops, new appliances\n- Fenced backyard with deck\n- 2-car garage\n- New HVAC 2022, Roof 2019\n\nWIRE FRAUD WARNING: Never wire funds by email without calling first.",
    contacts: [
      { role: "Your Agent",    name: "Mark Schuyler", phone: "(740) 953-1769", email: "markschuyler@kw.com",   initials: "MS" },
      { role: "Title Company", name: "Unity Title",   phone: "",              email: "bmorgan@unitytitle.net", initials: "UT" },
      { role: "Buyer Agent",   name: "TBD at offer",  phone: "",              email: "",                      initials: "BA" }
    ]
  }

};