// ============================================================
// SCHUYLER REALTY - CLIENT CONFIGURATION
// ============================================================
// To add a new client:
// 1. Create a unique access code (e.g. "smith2026")
// 2. Fill in their name, property, and agent notes
// 3. Paste their HOA document text into hoa_rules
// 4. Paste any contract/document highlights into contract_notes
// 5. Update milestones array as the build progresses
// 6. Save and redeploy to Netlify
// ============================================================

const CLIENTS = {

"birrer2026": {
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
{ name: "Contract Signed", date: "April 22, 2026", status: "done" },
{ name: "Design Studio", date: "May 2026", status: "done" },
{ name: "Pre-Con Meeting", date: "May 28, 2026", status: "done" },
{ name: "Guardian Addendum", date: "Signed", status: "done" },
{ name: "Utilities In", date: "June 8, 2026", status: "upcoming" },
{ name: "Pre-Drywall Stage", date: "End of July 2026", status: "upcoming" },
{ name: "New Home Orientation", date: "TBD - Epcon to set", status: "upcoming" },
{ name: "Closing", date: "Sept 19-29, 2026", status: "upcoming" }
],

hoa_rules: "THE COURTYARDS AT MULBERRY RUN - COMMUNITY POLICIES AND GUIDELINES (Dated: October 9, 2023)\n\nI. PERSONAL PROPERTY\nAll personal property must be kept inside the garage. Nothing may be hung or displayed, nor may signs, awnings, canopies, shutters, antennae or satellite dishes be affixed to exterior walls, doors, fences, or roof without prior written approval of the Board.\n\nII. DECORATIVE ITEMS\nHoliday Decorations: Christmas lights permitted from Thanksgiving through January 7. No flashing lights or music. Other holidays: max 4 weeks before, 1 week after. Flag Display: One black two-position flag holder on front porch post. One flag only (American or Collegiate) in good condition. Wreaths: Front door only, max 30 inches diameter. Prohibited outside courtyard: Bird feeders, garden hose containers, stepping stones, wall plaques, windsocks, wind chimes, decorative flags.\n\nIII. FLOWERS AND LANDSCAPE PLANTS\nInside courtyard fence: annuals and perennials that won't exceed fence height. Outside courtyard fence: annual flowers only in existing mulched areas. Max 3 flower pots on concrete pad at front door. New shrubs outside courtyard require Board approval.\n\nIV. PROHIBITED ITEMS in lawn or common areas\nYard signs, statues, lawn ornaments, artificial flowers, ornamental rocks, cypress mulch, swing sets, mounted hose reels, laundry poles, clotheslines. Nothing hung over courtyard fence.\n\nV. EXTERIOR ALTERATIONS\nNo fences, walls, patios, decks, or alterations to exterior without Board approval. Storm doors need approved design and color and Board approval.\n\nVI. WINDOWS\nWindow coverings must be white, off-white, light beige, or light gray on the exterior side.\n\nVIII. ANIMALS\nMax 2 household pets (dogs and cats only). Leash max 8 feet outdoors. No tethering outside or to fence. Fines possible for violations.\n\nIX. COURTYARD PATIO AREA\nPersonal property must not be visible above fence except patio furniture, umbrellas, and grills. Nothing affixed to fence or neighboring home. Reasonable noise only. Firepits: clean/seasoned wood or propane/natural gas. Water features allowed if not taller than fence. Hot tubs require Board approval, earth-tone colors, solid foundation, liability insurance.\n\nX. PARKING\nNo boats, trailers, motorhomes, trucks over 3/4 ton, or commercial vehicles overnight. No parking on driveway concrete apron. Common spaces max 4 nights/month, 48 hours max before towing risk.\n\nXI. SWIMMING POOL\nNo lifeguard. Children under 18 need adult resident. Max 3 guests per household. No animals, glass, alcohol, smoking, diving, rafts. Open dawn to dusk.\n\nXII. CLUBHOUSE\n$200 deposit + $50 rental fee. No children/teen parties. No smoking. No pool/fitness access for guests.\n\nXIII. FITNESS CENTER\nOpen 24/7. Age 18+ only. Headphones required. No smoking or alcohol.\n\nXV. TRASH AND RECYCLING\nSet out after 5 PM day before collection. Bring in by 9 PM day of collection. Set out at main street curb. Store bins in garage otherwise.\n\nXIX. VIDEO SURVEILLANCE\nDoorbell cameras require Board approval. Must match trim color. Must fit flat against trim surface.\n\nXX. IRRIGATION\nRequires Board approval and Neighbor Consent Form. Must be installed by certified contractor. Cannot install until Epcon confirms sod complete on all adjacent lots. Owner responsible for winterizing Nov-March.\n\nXXII. POD STORAGE\nOn driveway only. Not until after closing. Remove within 5 days. Driveway must be cured first.\n\nXXIII. HOT TUBS\nCourtyard patio only. Board approval required. Earth-tone colors. Solid foundation. Lid locked when not in use. No draining onto lawn. 80 decibel noise limit.",

contract_notes: "JOHN BIRRER - KEY CONTRACT AND BUILD SUMMARY\n\nProperty: 2088 Darilyn Drive, Lot 8, The Courtyards at Mulberry Run, Grove City OH\nBuilder: Epcon Communities\nFloor Plan: PD6 Portico, Elevation D Ranch, Garage Right\nContract Signed: April 22, 2026\nFinancing: Mortgage (in place)\nSuperintendent: Eric Gordon - egordon@epconcommunities.com\nSales Consultant: Jennifer Scheel-Patton - (614) 601-0191 - jscheel@epconcommunities.com\nContracts Coordinator: Donna Kobella - (614) 652-3570 - dkobella@epconcommunities.com\nDesign Consultant: Kelli Joyce - (614) 784-3259 - kjoyce@epconcommunities.com\nTitle Company: Unity Title - bmorgan@unitytitle.net\n\nWARRANTIES: 1-Year workmanship, 30-Year structural\n\nBUILD TIMELINE:\n- Utilities in: June 8, 2026 (scheduled)\n- Pre-drywall: End of July 2026\n- Closing window: September 19-29, 2026\n\nCOMMUNICATION:\n- Every other Monday phone call with Eric Gordon\n- After drywall: weekly calls\n\nKEY DESIGN SELECTIONS:\n- Interior Paint: Sherwin Williams Agreeable Gray SW7029\n- Kitchen Cabinets: 42 inch Grant, Cannon Grey Stain\n- Kitchen Countertops: Quartz Calacatta Prado\n- Kitchen Backsplash: Florida Tile Emotive 3x12 Envy Green, Grout Snow White\n- Master Bath Countertops: Quartz Carrara Breve\n- Master Shower: Zero Threshold Universal Design, Tile to Ceiling\n- Flooring (main): Mohawk Rustic Moor 7.5 inch Knotted Chestnut Laminate\n- Flooring (bedrooms): Mohawk Country Walk Aurora Carpet Level 4 with 8lb pad\n- Fireplace: 36 inch Gas Level 2, Ceramic Tile Surround Scrapbook Cherished Greige\n- Appliances: GE Stainless - Refrigerator, Dishwasher, 30 inch Gas Cooktop, Double Wall Oven\n- Exterior: CFN-7 Hillsborough, Front Door Web Gray SW7075\n- Front Fence: 4 Ft Black Aluminum Picket, Rear Fence: 6 Ft Vinyl Privacy\n- Home Technology: Guardian package (signed)\n\nIMPORTANT NOTES:\n- Design Studio selections are FINAL\n- Builder does internal inspections - buyer does not receive the inspection report\n- HOA window coverings must be white, off-white, light beige, or light gray on exterior\n- Any courtyard additions require Board approval first\n- Wire Fraud Warning: Never wire money by email without calling first"
}

};
