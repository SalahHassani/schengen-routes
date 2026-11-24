# Travel Content Sources & Image Asset Inventory — SchengeN Routes

## 1. Source Hierarchy & Anti-Fabrication Rules

1. Official national tourism boards (`germany.travel`, `italia.it`, `france.fr`, `visithungary.com`, `holland.com`, `austria.info`, `visitczechia.com`).
2. Official city tourism portals (`parisjetaime.com`, `turismoroma.it`, `iamsterdam.com`, `wien.info`, `prague.eu`).
3. Official transport operators and EU passenger resources (`bahn.com`, `oebb.at`, `europa.eu/youreurope`).

### Anti-Fabrication Rules

- No invented ticket prices, opening hours, live schedules, seat/room availability, visa rules, safety statistics, or accommodation rates.
- Unverified budget figures are set to `null` (`estimatedBudgetNote: null`).
- All itineraries are explicitly labelled as suggested plans rather than guaranteed schedules.

---

## 2. Existing Image Inventory (`public/assets/images/`)

- `public/assets/images/hero/europe-hero.jpg` (16:9 hero editorial visual)
- `public/assets/images/countries/germany.jpg` (4:3 destination & country guide: Germany)
- `public/assets/images/countries/italy.jpg` (4:3 destination & country guide: Italy)
- `public/assets/images/countries/france.jpg` (4:3 destination & country guide: France)
- `public/assets/images/countries/hungary.jpg` (4:3 destination & country guide: Hungary)
- `public/assets/images/countries/netherlands.jpg` (4:3 destination & country guide: Netherlands)
- `public/assets/images/countries/austria.jpg` (4:3 destination & country guide: Austria)
- `public/assets/images/destinations/paris.jpg` (4:3 city guide & gallery: Paris)
- `public/assets/images/destinations/rome.jpg` (4:3 city guide & gallery: Rome)
- `public/assets/images/destinations/amsterdam.jpg` (4:3 city guide & gallery: Amsterdam)
- `public/assets/images/destinations/budapest.jpg` (4:3 city guide & gallery: Budapest)
- `public/assets/images/destinations/vienna.jpg` (4:3 city guide & gallery: Vienna)
- `public/assets/images/destinations/prague.jpg` (4:3 city guide & destination: Prague)

### Planned Future Image Assets (Not Yet Added — Do Not Use Placeholder/Mismatched Images)

When expanding to additional destinations/cities in future milestones, source or generate location-accurate assets at 4:3 (`1200x900`) or 16:9 (`1600x900`):

- `public/assets/images/countries/spain.jpg` & `public/assets/images/destinations/barcelona.jpg` (4:3, `1200x900`)
- `public/assets/images/countries/portugal.jpg` & `public/assets/images/destinations/lisbon.jpg` (4:3, `1200x900`)
- `public/assets/images/countries/switzerland.jpg` (4:3, `1200x900`)
- `public/assets/images/destinations/berlin.jpg` & `public/assets/images/destinations/munich.jpg` (4:3, `1200x900`)
