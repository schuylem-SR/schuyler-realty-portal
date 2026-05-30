// ============================================================
// SCHUYLER REALTY — CLIENT CONFIGURATION
// ============================================================
// To add a new client:
//   1. Create a unique access code (e.g. "smith2026")
//   2. Fill in their name, property, and agent notes
//   3. Paste their HOA document text into hoa_rules
//   4. Paste any contract/document highlights into contract_notes
//   5. Save and redeploy to Netlify
// ============================================================

const CLIENTS = {

  "birrer2026": {
    name: "John",
    full_name: "John Birrer",
    property: "2088 Darilyn Drive, Lot #8",
    community: "The Courtyards at Mulberry Run",
    city: "Grove City, OH",
    builder: "Epcon Communities",
    agent_note: "Your agent is Mark Schuyler. Call or text anytime: (614) 555-0100",
    closing_window: "September 19-29, 2026",
    action_item: "",

    hoa_rules: `THE COURTYARDS AT MULBERRY RUN - COMMUNITY POLICIES AND GUIDELINES (Dated: October 9, 2023)

I. PERSONAL PROPERTY
All personal property must be kept inside the garage. Nothing may be hung or displayed, nor may signs, awnings, canopies, shutters, antennae or satellite dishes be affixed to exterior walls, doors, fences, or roof without prior written approval of the Board.

II. DECORATIVE ITEMS
Holiday Decorations: Christmas lights permitted from Thanksgiving through January 7. No flashing lights or music. Other holidays: max 4 weeks before, 1 week after. Flag Display: One black two-position flag holder on front porch post. One flag only (American or Collegiate) in good condition. Wreaths: Front door only, max 30 inches diameter. Prohibited outside courtyard: Bird feeders, garden hose containers, stepping stones, wall plaques, windsocks, wind chimes, decorative flags.

III. FLOWERS AND LANDSCAPE PLANTS
Inside courtyard fence: annuals and perennials that won't exceed fence height. Outside courtyard fence: annual flowers only in existing mulched areas. Max 3 flower pots on concrete pad at front door. New shrubs outside courtyard require Board approval.

IV. PROHIBITED ITEMS in lawn or common areas
Yard signs, statues, lawn ornaments, artificial flowers, ornamental rocks, cypress mulch, swing sets, mounted hose reels, laundry poles, clotheslines. Nothing hung over courtyard fence.

V. EXTERIOR ALTERATIONS
No fences, walls, patios, decks, or alterations to exterior without Board approval. Storm doors need approved design/color and Board approval.

VI. WINDOWS
Window coverings must be white, off-white, light beige, or light gray on the exterior side.

VIII. ANIMALS
Max 2 household pets (dogs and cats only). Leash max 8 feet outdoors. No tethering outside or to fence. Fines possible for violations.

IX. COURTYARD PATIO AREA
Personal property must not be visible above fence except patio furniture, umbrellas, and grills. Nothing affixed to fence or neighboring home. Reasonable noise only. Firepits: clean/seasoned wood or propane/natural gas. Water features allowed if not taller than fence. Hot tubs require Board approval, earth-tone colors, solid foundation, liability insurance.

X. PARKING
No boats, trailers, motorhomes, trucks over 3/4 ton, or commercial vehicles overnight. No parking on driveway concrete apron. Common spaces max 4 nights/month, 48 hours max before towing risk.

XI. SWIMMING POOL
No lifeguard. Children under 18 need adult resident. Max 3 guests per household. No animals, glass, alcohol, smoking, diving, rafts. Open dawn to dusk.

XII. CLUBHOUSE
$200 deposit + $50 rental fee. No children/teen parties. No smoking. No pool/fitness access for guests.

XIII. FITNESS CENTER
Open 24/7. Age 18+ only. Headphones required. No smoking or alcohol.

XV. TRASH AND RECYCLING
Set out after 5 PM day before collection. Bring in by 9 PM day of collection. Set out at main street curb. Store bins in garage otherwise.

XIX. VIDEO SURVEILLANCE
Doorbell cameras require Board approval. Must match trim color. Must fit flat against trim surface.

XX. IRRIGATION
Requires Board approval and Neighbor Consent Form. Must be installed by certified contractor. Cannot install until Epcon confirms sod complete on all adjacent lots. Owner responsible for winterizing Nov-March.

XXII. POD STORAGE
On driveway only. Not until after closing. Remove within 5 days. Driveway must be cured first.

XXIII. HOT TUBS
Courtyard patio only. Board approval required. Earth-tone colors. Solid foundation. Lid locked when not in use. No draining onto lawn. 80 decibel noise limit.`,

    contract_notes: `JOHN BIRRER - KEY CONTRACT AND BUILD SUMMARY

Property: 2088 Darilyn Drive, Lot 8, The Courtyards at Mulberry Run, Grove City OH
Builder: Epcon Communities
Floor Plan: PD6 Portico, Elevation D Ranch, Garage Right
Contract Signed: April 22, 2026
Financing: Mortgage (in place)
Superintendent: Eric Gordon - egordon@epconcommunities.com
Sales Consultant: Jennifer Scheel-Patton - (614) 601-0191 - jscheel@epconcommunities.com
Contracts Coordinator: Donna Kobella - (614) 652-3570 - dkobella@epconcommunities.com
Design Consultant: Kelli Joyce - (614) 784-3259 - kjoyce@epconcommunities.com
Title Company: Unity Title - bmorgan@unitytitle.net

WARRANTIES: 1-Year workmanship, 30-Year structural

BUILD TIMELINE:
- Utilities in: June 8, 2026 (complete)
- Pre-drywall: End of July 2026
- Closing window: September 19-29, 2026

COMMUNICATION:
- Every other Monday phone call with Eric Gordon
- After drywall: weekly calls

KEY DESIGN SELECTIONS:
- Interior Paint: Sherwin Williams Agreeable Gray SW7029
- Kitchen Cabinets: 42 inch Grant, Cannon Grey Stain
- Kitchen Countertops: Quartz Calacatta Prado
- Kitchen Backsplash: Florida Tile Emotive 3x12 Envy Green, Grout Snow White
- Master Bath Countertops: Quartz Carrara Breve
- Master Shower: Zero Threshold Universal Design, Tile to Ceiling
- Flooring (main): Mohawk Rustic Moor 7.5 inch Knotted Chestnut Laminate
- Flooring (bedrooms): Mohawk Country Walk Aurora Carpet Level 4 with 8lb pad
- Fireplace: 36 inch Gas Level 2, Ceramic Tile Surround Scrapbook Cherished Greige
- Appliances: GE Stainless - Refrigerator, Dishwasher, 30 inch Gas Cooktop, Double Wall Oven
- Exterior: CFN-7 Hillsborough, Front Door Web Gray SW7075
- Front Fence: 4 Ft Black Aluminum Picket, Rear Fence: 6 Ft Vinyl Privacy
- Home Technology: Guardian package (addendum pending signature)

IMPORTANT NOTES:
- Design Studio selections are FINAL
- Builder does internal inspections - buyer does not receive the inspection report
- HOA window coverings must be white, off-white, light beige, or light gray on exterior
- Any courtyard additions require Board approval first
- Wire Fraud Warning: Never wire money by email without calling first

PENDING ACTION: Sign the Guardian Technology addendum via DocuSign from Donna Kobella`
  }

  // To add a new client, copy the block above and fill in their details

};
