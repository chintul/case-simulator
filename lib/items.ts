export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type Category = 'comfort' | 'productivity' | 'aesthetic' | 'wellness' | 'tech';

export interface Item {
  id: string;
  name: string;
  description: string;
  rarity: Rarity;
  affiliateLink: string;
  category: Category;
  image: string;
}

export const ITEMS: Item[] = [
  // ==================== COMMON ITEMS (80) ====================
  // Comfort
  {
    id: "pillow_001",
    name: "Basic Memory Foam Pillow",
    description: "Your neck pain is real. This probably won't fix it, but at least you tried.",
    rarity: "common",
    affiliateLink: "https://amzn.to/pillow-001",
    category: "comfort",
    image: "🛏️"
  },
  {
    id: "blanket_001",
    name: "Cozy Throw Blanket",
    description: "Room temperature is a social construct. Reject it.",
    rarity: "common",
    affiliateLink: "https://amzn.to/blanket-001",
    category: "comfort",
    image: "🧣"
  },
  {
    id: "socks_001",
    name: "Fuzzy House Socks",
    description: "Cold feet are the #1 cause of not vibing.",
    rarity: "common",
    affiliateLink: "https://amzn.to/socks-001",
    category: "comfort",
    image: "🧦"
  },
  {
    id: "cushion_001",
    name: "Chair Cushion",
    description: "Your butt deserves better than this, but this is a start.",
    rarity: "common",
    affiliateLink: "https://amzn.to/cushion-001",
    category: "comfort",
    image: "💺"
  },
  {
    id: "slippers_001",
    name: "Basic Slippers",
    description: "Walking barefoot on cold floors is peak self-sabotage.",
    rarity: "common",
    affiliateLink: "https://amzn.to/slippers-001",
    category: "comfort",
    image: "🥿"
  },
  {
    id: "eyemask_001",
    name: "Sleep Eye Mask",
    description: "Light is keeping you poor. Science says so.",
    rarity: "common",
    affiliateLink: "https://amzn.to/eyemask-001",
    category: "comfort",
    image: "😴"
  },
  {
    id: "earplugs_001",
    name: "Foam Earplugs (50 Pack)",
    description: "Your neighbors don't care about your sleep. You must adapt.",
    rarity: "common",
    affiliateLink: "https://amzn.to/earplugs-001",
    category: "comfort",
    image: "👂"
  },
  {
    id: "backrest_001",
    name: "Lumbar Support Pillow",
    description: "Your spine is screaming. Are you listening?",
    rarity: "common",
    affiliateLink: "https://amzn.to/backrest-001",
    category: "comfort",
    image: "🪑"
  },
  {
    id: "footrest_001",
    name: "Under-Desk Footrest",
    description: "Dangling feet = sad brain. True story.",
    rarity: "common",
    affiliateLink: "https://amzn.to/footrest-001",
    category: "comfort",
    image: "🦶"
  },
  {
    id: "heating_pad_001",
    name: "Electric Heating Pad",
    description: "This will fix 0.3% of your problems. Worth it.",
    rarity: "common",
    affiliateLink: "https://amzn.to/heating-pad",
    category: "comfort",
    image: "🔥"
  },

  // Productivity
  {
    id: "notebook_001",
    name: "Lined Notebook",
    description: "Your thoughts are chaos. Trap them here.",
    rarity: "common",
    affiliateLink: "https://amzn.to/notebook-001",
    category: "productivity",
    image: "📓"
  },
  {
    id: "pens_001",
    name: "Black Gel Pens (12 Pack)",
    description: "Peak performance starts with the right pen. This is that pen.",
    rarity: "common",
    affiliateLink: "https://amzn.to/pens-001",
    category: "productivity",
    image: "🖊️"
  },
  {
    id: "sticky_notes_001",
    name: "Sticky Notes Pack",
    description: "Your memory is unreliable. Post-its are forever.",
    rarity: "common",
    affiliateLink: "https://amzn.to/sticky-notes",
    category: "productivity",
    image: "📝"
  },
  {
    id: "desk_organizer_001",
    name: "Basic Desk Organizer",
    description: "Chaos on your desk = chaos in your life. Probably.",
    rarity: "common",
    affiliateLink: "https://amzn.to/organizer-001",
    category: "productivity",
    image: "🗂️"
  },
  {
    id: "cable_clips_001",
    name: "Cable Management Clips",
    description: "Your cables are judging you. Fix this.",
    rarity: "common",
    affiliateLink: "https://amzn.to/cable-clips",
    category: "productivity",
    image: "🔌"
  },
  {
    id: "mousepad_001",
    name: "Basic Mouse Pad",
    description: "Using your desk as a mousepad? Bold strategy.",
    rarity: "common",
    affiliateLink: "https://amzn.to/mousepad-001",
    category: "productivity",
    image: "🖱️"
  },
  {
    id: "timer_001",
    name: "Kitchen Timer",
    description: "Pomodoro technique or bust. This is your accountability buddy.",
    rarity: "common",
    affiliateLink: "https://amzn.to/timer-001",
    category: "productivity",
    image: "⏲️"
  },
  {
    id: "calendar_001",
    name: "Wall Calendar",
    description: "Time is an illusion. But you still need to track it.",
    rarity: "common",
    affiliateLink: "https://amzn.to/calendar-001",
    category: "productivity",
    image: "📅"
  },
  {
    id: "book_light_001",
    name: "Clip-on Book Light",
    description: "Reading in the dark like a goblin? This helps.",
    rarity: "common",
    affiliateLink: "https://amzn.to/book-light",
    category: "productivity",
    image: "💡"
  },
  {
    id: "bookmark_001",
    name: "Metal Bookmarks (5 Pack)",
    description: "Dog-earing pages is a crime. Don't be that person.",
    rarity: "common",
    affiliateLink: "https://amzn.to/bookmark-001",
    category: "productivity",
    image: "🔖"
  },

  // Aesthetic
  {
    id: "lamp_001",
    name: "Desk Lamp of Clarity",
    description: "Your room is 2% sadder because of bad lighting. Science says so.",
    rarity: "common",
    affiliateLink: "https://amzn.to/desk-lamp",
    category: "aesthetic",
    image: "💡"
  },
  {
    id: "plant_001",
    name: "Fake Succulent Plant",
    description: "Real plants die. This one judges you forever.",
    rarity: "common",
    affiliateLink: "https://amzn.to/fake-plant",
    category: "aesthetic",
    image: "🌵"
  },
  {
    id: "poster_001",
    name: "Motivational Poster",
    description: "Walls are for inspiration, not for staring blankly.",
    rarity: "common",
    affiliateLink: "https://amzn.to/poster-001",
    category: "aesthetic",
    image: "🖼️"
  },
  {
    id: "candle_001",
    name: "Scented Candle",
    description: "Your room smells like nothing. That's not a flex.",
    rarity: "common",
    affiliateLink: "https://amzn.to/candle-001",
    category: "aesthetic",
    image: "🕯️"
  },
  {
    id: "frames_001",
    name: "Picture Frames (3 Pack)",
    description: "Memories on your phone don't count. Print them.",
    rarity: "common",
    affiliateLink: "https://amzn.to/frames-001",
    category: "aesthetic",
    image: "🖼️"
  },
  {
    id: "fairy_lights_001",
    name: "String Fairy Lights",
    description: "Overhead lighting is violence. This is the way.",
    rarity: "common",
    affiliateLink: "https://amzn.to/fairy-lights",
    category: "aesthetic",
    image: "✨"
  },
  {
    id: "rug_001",
    name: "Small Area Rug",
    description: "Cold floors are stealing your joy. Reclaim it.",
    rarity: "common",
    affiliateLink: "https://amzn.to/rug-001",
    category: "aesthetic",
    image: "🧶"
  },
  {
    id: "mirror_001",
    name: "Wall Mirror",
    description: "Self-awareness starts with seeing yourself. Literally.",
    rarity: "common",
    affiliateLink: "https://amzn.to/mirror-001",
    category: "aesthetic",
    image: "🪞"
  },
  {
    id: "curtains_001",
    name: "Blackout Curtains",
    description: "The sun doesn't respect your sleep schedule. This does.",
    rarity: "common",
    affiliateLink: "https://amzn.to/curtains-001",
    category: "aesthetic",
    image: "🪟"
  },
  {
    id: "vase_001",
    name: "Ceramic Vase",
    description: "Flowers are temporary. This vase is eternal.",
    rarity: "common",
    affiliateLink: "https://amzn.to/vase-001",
    category: "aesthetic",
    image: "🏺"
  },

  // Wellness
  {
    id: "water_bottle_001",
    name: "Reusable Water Bottle",
    description: "You're dehydrated. Don't argue with me.",
    rarity: "common",
    affiliateLink: "https://amzn.to/water-bottle",
    category: "wellness",
    image: "💧"
  },
  {
    id: "vitamins_001",
    name: "Multivitamin Gummies",
    description: "Your diet is mid. These won't fix it, but they help.",
    rarity: "common",
    affiliateLink: "https://amzn.to/vitamins-001",
    category: "wellness",
    image: "💊"
  },
  {
    id: "floss_001",
    name: "Dental Floss (6 Pack)",
    description: "Your dentist is disappointed. Fix this before your next visit.",
    rarity: "common",
    affiliateLink: "https://amzn.to/floss-001",
    category: "wellness",
    image: "🦷"
  },
  {
    id: "hand_cream_001",
    name: "Hand Moisturizer",
    description: "Dry hands are the enemy of productivity.",
    rarity: "common",
    affiliateLink: "https://amzn.to/hand-cream",
    category: "wellness",
    image: "🧴"
  },
  {
    id: "tea_001",
    name: "Herbal Tea Variety Pack",
    description: "Stress is real. This tea pretends to help.",
    rarity: "common",
    affiliateLink: "https://amzn.to/tea-001",
    category: "wellness",
    image: "🍵"
  },
  {
    id: "lip_balm_001",
    name: "Lip Balm (3 Pack)",
    description: "Chapped lips are a choice. Choose better.",
    rarity: "common",
    affiliateLink: "https://amzn.to/lip-balm",
    category: "wellness",
    image: "💋"
  },
  {
    id: "sunscreen_001",
    name: "Daily Sunscreen SPF 50",
    description: "Sun damage is permanent. This item is literally anti-aging.",
    rarity: "common",
    affiliateLink: "https://amzn.to/sunscreen",
    category: "wellness",
    image: "☀️"
  },
  {
    id: "band_aids_001",
    name: "Band-Aids Variety Pack",
    description: "Injuries happen. Be prepared.",
    rarity: "common",
    affiliateLink: "https://amzn.to/band-aids",
    category: "wellness",
    image: "🩹"
  },
  {
    id: "face_mask_001",
    name: "Sheet Face Masks (10 Pack)",
    description: "Self-care isn't selfish. It's strategic.",
    rarity: "common",
    affiliateLink: "https://amzn.to/face-mask",
    category: "wellness",
    image: "😌"
  },
  {
    id: "nail_clipper_001",
    name: "Nail Clipper Set",
    description: "Long nails in a Zoom call? Unacceptable.",
    rarity: "common",
    affiliateLink: "https://amzn.to/nail-clipper",
    category: "wellness",
    image: "✂️"
  },

  // Tech
  {
    id: "usb_cable_001",
    name: "USB-C Cable (3ft)",
    description: "You can never have enough cables. This is fact.",
    rarity: "common",
    affiliateLink: "https://amzn.to/usb-cable",
    category: "tech",
    image: "🔌"
  },
  {
    id: "phone_stand_001",
    name: "Phone Stand",
    description: "Neck strain is not aesthetic. Raise your screen.",
    rarity: "common",
    affiliateLink: "https://amzn.to/phone-stand",
    category: "tech",
    image: "📱"
  },
  {
    id: "screen_cleaner_001",
    name: "Screen Cleaning Kit",
    description: "Smudges on your screen = smudges on your soul.",
    rarity: "common",
    affiliateLink: "https://amzn.to/screen-cleaner",
    category: "tech",
    image: "🧹"
  },
  {
    id: "laptop_sleeve_001",
    name: "Laptop Sleeve",
    description: "Scratches on your laptop scream 'I don't have my life together.'",
    rarity: "common",
    affiliateLink: "https://amzn.to/laptop-sleeve",
    category: "tech",
    image: "💼"
  },
  {
    id: "wall_charger_001",
    name: "Dual USB Wall Charger",
    description: "Low battery anxiety is real. Multiply your charging ports.",
    rarity: "common",
    affiliateLink: "https://amzn.to/wall-charger",
    category: "tech",
    image: "🔋"
  },
  {
    id: "webcam_cover_001",
    name: "Webcam Privacy Cover",
    description: "Someone is watching. Probably.",
    rarity: "common",
    affiliateLink: "https://amzn.to/webcam-cover",
    category: "tech",
    image: "👁️"
  },
  {
    id: "cable_organizer_001",
    name: "Cable Organizer Box",
    description: "Cable spaghetti is not a personality trait.",
    rarity: "common",
    affiliateLink: "https://amzn.to/cable-box",
    category: "tech",
    image: "📦"
  },
  {
    id: "stylus_001",
    name: "Universal Stylus Pen",
    description: "Fingerprints on your tablet? Disgusting.",
    rarity: "common",
    affiliateLink: "https://amzn.to/stylus-001",
    category: "tech",
    image: "✍️"
  },
  {
    id: "pop_socket_001",
    name: "Phone Pop Socket",
    description: "Dropping your phone is expensive. This is cheap insurance.",
    rarity: "common",
    affiliateLink: "https://amzn.to/pop-socket",
    category: "tech",
    image: "📲"
  },
  {
    id: "aux_cable_001",
    name: "AUX Cable (6ft)",
    description: "Bluetooth lag is the enemy of vibes.",
    rarity: "common",
    affiliateLink: "https://amzn.to/aux-cable",
    category: "tech",
    image: "🎵"
  },

  // More Common Items (continuing to reach 80)
  {
    id: "mug_001",
    name: "Ceramic Coffee Mug",
    description: "Your morning coffee deserves better than a chipped mug.",
    rarity: "common",
    affiliateLink: "https://amzn.to/mug-001",
    category: "comfort",
    image: "☕"
  },
  {
    id: "coasters_001",
    name: "Cork Coasters (6 Pack)",
    description: "Water rings on your desk are a cry for help.",
    rarity: "common",
    affiliateLink: "https://amzn.to/coasters-001",
    category: "aesthetic",
    image: "🥤"
  },
  {
    id: "scissors_001",
    name: "Desk Scissors",
    description: "Tearing things with your hands? Are you an animal?",
    rarity: "common",
    affiliateLink: "https://amzn.to/scissors-001",
    category: "productivity",
    image: "✂️"
  },
  {
    id: "tape_001",
    name: "Scotch Tape Dispenser",
    description: "You need tape more than you think you do.",
    rarity: "common",
    affiliateLink: "https://amzn.to/tape-001",
    category: "productivity",
    image: "📏"
  },
  {
    id: "stapler_001",
    name: "Desktop Stapler",
    description: "Paperclips are for quitters.",
    rarity: "common",
    affiliateLink: "https://amzn.to/stapler-001",
    category: "productivity",
    image: "📎"
  },
  {
    id: "trash_can_001",
    name: "Small Desk Trash Can",
    description: "Pile of wrappers on your desk? This is your intervention.",
    rarity: "common",
    affiliateLink: "https://amzn.to/trash-can",
    category: "aesthetic",
    image: "🗑️"
  },
  {
    id: "tissues_001",
    name: "Tissue Box",
    description: "Sniffles are unprofessional. Be prepared.",
    rarity: "common",
    affiliateLink: "https://amzn.to/tissues-001",
    category: "wellness",
    image: "🤧"
  },
  {
    id: "hand_sanitizer_001",
    name: "Hand Sanitizer (3 Pack)",
    description: "Germs are everywhere. Fight back.",
    rarity: "common",
    affiliateLink: "https://amzn.to/hand-sanitizer",
    category: "wellness",
    image: "🧴"
  },
  {
    id: "clips_001",
    name: "Binder Clips Assorted",
    description: "Organization is a journey. Start here.",
    rarity: "common",
    affiliateLink: "https://amzn.to/clips-001",
    category: "productivity",
    image: "📎"
  },
  {
    id: "magnets_001",
    name: "Fridge Magnets (20 Pack)",
    description: "Your fridge is boring. Add some chaos.",
    rarity: "common",
    affiliateLink: "https://amzn.to/magnets-001",
    category: "aesthetic",
    image: "🧲"
  },
  {
    id: "batteries_001",
    name: "AA Batteries (24 Pack)",
    description: "Dead batteries at the worst moment? Not anymore.",
    rarity: "common",
    affiliateLink: "https://amzn.to/batteries-aa",
    category: "tech",
    image: "🔋"
  },
  {
    id: "extension_cord_001",
    name: "6-Outlet Extension Cord",
    description: "Outlets are a finite resource. Multiply them.",
    rarity: "common",
    affiliateLink: "https://amzn.to/extension-cord",
    category: "tech",
    image: "🔌"
  },
  {
    id: "bag_clips_001",
    name: "Chip Bag Clips (10 Pack)",
    description: "Stale chips are a tragedy. Prevent this.",
    rarity: "common",
    affiliateLink: "https://amzn.to/bag-clips",
    category: "comfort",
    image: "🥨"
  },
  {
    id: "door_stopper_001",
    name: "Door Stopper",
    description: "Slamming doors at 3am? Fix your life.",
    rarity: "common",
    affiliateLink: "https://amzn.to/door-stopper",
    category: "comfort",
    image: "🚪"
  },
  {
    id: "shower_cap_001",
    name: "Shower Cap",
    description: "Wet hair is a choice. Choose dry.",
    rarity: "common",
    affiliateLink: "https://amzn.to/shower-cap",
    category: "wellness",
    image: "🚿"
  },
  {
    id: "soap_dispenser_001",
    name: "Automatic Soap Dispenser",
    description: "Touch-free is the future. Your hands agree.",
    rarity: "common",
    affiliateLink: "https://amzn.to/soap-dispenser",
    category: "wellness",
    image: "🧼"
  },
  {
    id: "toothbrush_holder_001",
    name: "Toothbrush Holder",
    description: "Your toothbrush is sitting in bacteria soup. Elevate it.",
    rarity: "common",
    affiliateLink: "https://amzn.to/toothbrush-holder",
    category: "wellness",
    image: "🪥"
  },
  {
    id: "drawer_dividers_001",
    name: "Drawer Organizer Dividers",
    description: "Messy drawers = messy mind. Fix both.",
    rarity: "common",
    affiliateLink: "https://amzn.to/drawer-dividers",
    category: "productivity",
    image: "🗄️"
  },
  {
    id: "lint_roller_001",
    name: "Lint Roller",
    description: "Pet hair on your clothes? Unacceptable.",
    rarity: "common",
    affiliateLink: "https://amzn.to/lint-roller",
    category: "aesthetic",
    image: "🧹"
  },
  {
    id: "ice_cube_tray_001",
    name: "Silicone Ice Cube Tray",
    description: "Warm drinks are a crime against taste buds.",
    rarity: "common",
    affiliateLink: "https://amzn.to/ice-tray",
    category: "comfort",
    image: "🧊"
  },
  {
    id: "knife_sharpener_001",
    name: "Knife Sharpener",
    description: "Dull knives are dangerous. Also annoying.",
    rarity: "common",
    affiliateLink: "https://amzn.to/knife-sharpener",
    category: "productivity",
    image: "🔪"
  },
  {
    id: "measuring_cups_001",
    name: "Measuring Cups Set",
    description: "Eyeballing measurements? Bold strategy, chef.",
    rarity: "common",
    affiliateLink: "https://amzn.to/measuring-cups",
    category: "productivity",
    image: "🥄"
  },
  {
    id: "oven_mitts_001",
    name: "Oven Mitts (2 Pack)",
    description: "Burnt hands are not a flex.",
    rarity: "common",
    affiliateLink: "https://amzn.to/oven-mitts",
    category: "comfort",
    image: "🧤"
  },
  {
    id: "sponges_001",
    name: "Kitchen Sponges (12 Pack)",
    description: "Dishes don't wash themselves. Yet.",
    rarity: "common",
    affiliateLink: "https://amzn.to/sponges-001",
    category: "productivity",
    image: "🧽"
  },
  {
    id: "towels_001",
    name: "Microfiber Towels (6 Pack)",
    description: "Wet surfaces are slip hazards. Be smart.",
    rarity: "common",
    affiliateLink: "https://amzn.to/towels-001",
    category: "wellness",
    image: "🧻"
  },
  {
    id: "shoe_rack_001",
    name: "Stackable Shoe Rack",
    description: "Shoes on the floor? You're better than this.",
    rarity: "common",
    affiliateLink: "https://amzn.to/shoe-rack",
    category: "aesthetic",
    image: "👟"
  },
  {
    id: "hangers_001",
    name: "Velvet Hangers (20 Pack)",
    description: "Clothes on the floor are a red flag.",
    rarity: "common",
    affiliateLink: "https://amzn.to/hangers-001",
    category: "aesthetic",
    image: "👔"
  },
  {
    id: "laundry_bag_001",
    name: "Mesh Laundry Bag",
    description: "Protect your delicates. They deserve it.",
    rarity: "common",
    affiliateLink: "https://amzn.to/laundry-bag",
    category: "comfort",
    image: "👕"
  },
  {
    id: "alarm_clock_001",
    name: "Digital Alarm Clock",
    description: "Your phone alarm isn't cutting it. Upgrade.",
    rarity: "common",
    affiliateLink: "https://amzn.to/alarm-clock",
    category: "productivity",
    image: "⏰"
  },
  {
    id: "flashlight_001",
    name: "LED Flashlight",
    description: "Darkness is temporary. This flashlight is forever.",
    rarity: "common",
    affiliateLink: "https://amzn.to/flashlight-001",
    category: "tech",
    image: "🔦"
  },

  // ==================== UNCOMMON ITEMS (60) ====================
  {
    id: "keyboard_002",
    name: "Mechanical Keyboard (Budget)",
    description: "Typing on a membrane keyboard? Your words deserve better.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/keyboard-mech",
    category: "tech",
    image: "⌨️"
  },
  {
    id: "mouse_002",
    name: "Ergonomic Wireless Mouse",
    description: "Wrist pain is not a personality trait. Fix it.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/ergo-mouse",
    category: "tech",
    image: "🖱️"
  },
  {
    id: "monitor_stand_002",
    name: "Monitor Stand with Storage",
    description: "Eye level = peak performance. Science backs this.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/monitor-stand",
    category: "productivity",
    image: "🖥️"
  },
  {
    id: "desk_mat_002",
    name: "Extended RGB Desk Mat",
    description: "Your desk space is sacred. Treat it right.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/desk-mat-rgb",
    category: "aesthetic",
    image: "🎨"
  },
  {
    id: "headphones_002",
    name: "Over-Ear Headphones",
    description: "Your music deserves more than phone speakers.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/headphones-002",
    category: "tech",
    image: "🎧"
  },
  {
    id: "webcam_002",
    name: "1080p Webcam",
    description: "Potato quality video calls? It's 2024, friend.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/webcam-1080p",
    category: "tech",
    image: "📹"
  },
  {
    id: "usb_hub_002",
    name: "7-Port USB Hub",
    description: "USB poverty is over. Welcome to abundance.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/usb-hub-7",
    category: "tech",
    image: "🔌"
  },
  {
    id: "portable_charger_002",
    name: "20000mAh Power Bank",
    description: "Dead phone anxiety? Not on this watch.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/power-bank-20k",
    category: "tech",
    image: "🔋"
  },
  {
    id: "smart_bulb_002",
    name: "Smart LED Bulbs (4 Pack)",
    description: "Voice-controlled lighting is peak civilization.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/smart-bulbs",
    category: "aesthetic",
    image: "💡"
  },
  {
    id: "desk_lamp_002",
    name: "LED Desk Lamp with USB Port",
    description: "Task lighting + charging? That's efficiency.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/led-desk-lamp",
    category: "aesthetic",
    image: "🕯️"
  },
  {
    id: "chair_002",
    name: "Ergonomic Office Chair",
    description: "Your spine is begging you to upgrade from that kitchen chair.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/ergo-chair",
    category: "comfort",
    image: "🪑"
  },
  {
    id: "standing_mat_002",
    name: "Anti-Fatigue Standing Mat",
    description: "Standing desk without this? You're doing it wrong.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/standing-mat",
    category: "wellness",
    image: "🧘"
  },
  {
    id: "yoga_mat_002",
    name: "Premium Yoga Mat",
    description: "Stretching on carpet? Your joints deserve better.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/yoga-mat-premium",
    category: "wellness",
    image: "🧘‍♀️"
  },
  {
    id: "foam_roller_002",
    name: "Foam Roller for Muscles",
    description: "Self-massage is underrated. Start here.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/foam-roller",
    category: "wellness",
    image: "🎯"
  },
  {
    id: "resistance_bands_002",
    name: "Resistance Bands Set",
    description: "Home gym on a budget? These are your foundation.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/resistance-bands",
    category: "wellness",
    image: "💪"
  },
  {
    id: "water_filter_002",
    name: "Water Filter Pitcher",
    description: "Tap water skepticism is valid. Filter it.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/water-filter",
    category: "wellness",
    image: "💧"
  },
  {
    id: "blender_002",
    name: "Personal Blender",
    description: "Smoothies are liquid productivity. Blend them.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/blender-personal",
    category: "wellness",
    image: "🥤"
  },
  {
    id: "air_purifier_002",
    name: "HEPA Air Purifier",
    description: "Breathing dirty air? Your lungs are judging you.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/air-purifier",
    category: "wellness",
    image: "🌬️"
  },
  {
    id: "humidifier_002",
    name: "Cool Mist Humidifier",
    description: "Dry air is the silent killer of productivity.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/humidifier-002",
    category: "wellness",
    image: "💨"
  },
  {
    id: "essential_oils_002",
    name: "Essential Oil Diffuser Set",
    description: "Aromatherapy isn't pseudoscience. Well, mostly.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/essential-oils",
    category: "wellness",
    image: "🌸"
  },
  {
    id: "weighted_blanket_002",
    name: "Weighted Blanket (15lbs)",
    description: "Anxiety is real. This blanket gets it.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/weighted-blanket",
    category: "comfort",
    image: "🛏️"
  },
  {
    id: "memory_foam_mat_002",
    name: "Memory Foam Bath Mat",
    description: "Stepping on cold bathroom floors? Upgrade this.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/bath-mat-foam",
    category: "comfort",
    image: "🛁"
  },
  {
    id: "robe_002",
    name: "Plush Bathrobe",
    description: "Walking around wrapped in a towel? You deserve better.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/bathrobe-plush",
    category: "comfort",
    image: "🧥"
  },
  {
    id: "slippers_002",
    name: "Memory Foam Slippers",
    description: "Your feet work hard. Give them this.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/slippers-foam",
    category: "comfort",
    image: "🥿"
  },
  {
    id: "neck_pillow_002",
    name: "Cervical Memory Foam Pillow",
    description: "Neck pain is optional. Choose wisely.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/neck-pillow",
    category: "comfort",
    image: "😴"
  },
  {
    id: "white_noise_002",
    name: "White Noise Machine",
    description: "Silence is overrated. Controlled noise is king.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/white-noise",
    category: "wellness",
    image: "🔊"
  },
  {
    id: "sunrise_alarm_002",
    name: "Sunrise Simulation Alarm Clock",
    description: "Waking up to blaring alarms? There's a better way.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/sunrise-alarm",
    category: "wellness",
    image: "🌅"
  },
  {
    id: "book_stand_002",
    name: "Adjustable Book Stand",
    description: "Reading with sore wrists? This is your hero.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/book-stand",
    category: "productivity",
    image: "📚"
  },
  {
    id: "tablet_stand_002",
    name: "Adjustable Tablet Stand",
    description: "Holding your tablet like a peasant? Elevate it.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/tablet-stand",
    category: "tech",
    image: "📱"
  },
  {
    id: "laptop_stand_002",
    name: "Aluminum Laptop Stand",
    description: "Neck strain from laptop hunch? This fixes it.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/laptop-stand-aluminum",
    category: "tech",
    image: "💻"
  },
  {
    id: "bluetooth_speaker_002",
    name: "Portable Bluetooth Speaker",
    description: "Your music deserves to travel. Take it anywhere.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/bt-speaker-portable",
    category: "tech",
    image: "🔊"
  },
  {
    id: "smart_plug_002",
    name: "Smart Plugs (4 Pack)",
    description: "Voice control everything. Yes, everything.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/smart-plugs",
    category: "tech",
    image: "🔌"
  },
  {
    id: "cable_sleeve_002",
    name: "Cable Management Sleeve",
    description: "Cable chaos is visual pollution. Clean it up.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/cable-sleeve",
    category: "aesthetic",
    image: "🧵"
  },
  {
    id: "monitor_light_002",
    name: "Monitor Light Bar",
    description: "No screen glare + ambient lighting = perfection.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/monitor-light",
    category: "aesthetic",
    image: "💡"
  },
  {
    id: "wall_shelves_002",
    name: "Floating Wall Shelves (3 Pack)",
    description: "Vertical space is free real estate. Use it.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/floating-shelves",
    category: "aesthetic",
    image: "📚"
  },
  {
    id: "pegboard_002",
    name: "Wall Pegboard Organizer",
    description: "Everything visible, everything accessible. Peak efficiency.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/pegboard-wall",
    category: "productivity",
    image: "🔧"
  },
  {
    id: "filing_cabinet_002",
    name: "2-Drawer Filing Cabinet",
    description: "Important papers in a pile? You're one spill away from disaster.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/filing-cabinet",
    category: "productivity",
    image: "🗄️"
  },
  {
    id: "label_maker_002",
    name: "Label Maker",
    description: "Organization without labels is just guessing.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/label-maker",
    category: "productivity",
    image: "🏷️"
  },
  {
    id: "shredder_002",
    name: "Paper Shredder",
    description: "Identity theft is real. Shred responsibly.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/paper-shredder",
    category: "productivity",
    image: "📄"
  },
  {
    id: "projector_002",
    name: "Mini Projector",
    description: "Movie nights on a 15-inch screen? Think bigger.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/mini-projector",
    category: "aesthetic",
    image: "📽️"
  },
  {
    id: "sound_bar_002",
    name: "TV Sound Bar",
    description: "TV speakers are a crime against audio.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/sound-bar",
    category: "tech",
    image: "🔊"
  },
  {
    id: "streaming_webcam_002",
    name: "Streaming Webcam 1080p 60fps",
    description: "Your stream quality reflects your dedication. Upgrade.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/streaming-webcam",
    category: "tech",
    image: "📹"
  },
  {
    id: "ring_light_002",
    name: "LED Ring Light",
    description: "Bad lighting in video calls? Not anymore.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/ring-light",
    category: "aesthetic",
    image: "💍"
  },
  {
    id: "green_screen_002",
    name: "Collapsible Green Screen",
    description: "Background chaos in calls? Erase it.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/green-screen",
    category: "tech",
    image: "🎬"
  },
  {
    id: "microphone_arm_002",
    name: "Boom Arm Mic Stand",
    description: "Desk space is precious. Free it up.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/mic-boom-arm",
    category: "tech",
    image: "🎙️"
  },
  {
    id: "midi_keyboard_002",
    name: "25-Key MIDI Keyboard",
    description: "Music production starts somewhere. This is that somewhere.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/midi-keyboard-25",
    category: "tech",
    image: "🎹"
  },
  {
    id: "drawing_tablet_002",
    name: "Graphics Drawing Tablet",
    description: "Digital art with a mouse? You're stronger than me.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/drawing-tablet",
    category: "tech",
    image: "🎨"
  },
  {
    id: "electric_kettle_002",
    name: "Electric Kettle",
    description: "Waiting for water to boil? Time is money.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/electric-kettle",
    category: "productivity",
    image: "☕"
  },
  {
    id: "coffee_grinder_002",
    name: "Burr Coffee Grinder",
    description: "Pre-ground coffee? You deserve fresh.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/coffee-grinder",
    category: "wellness",
    image: "☕"
  },
  {
    id: "french_press_002",
    name: "French Press Coffee Maker",
    description: "Instant coffee is fine. But you're not fine. You're great.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/french-press",
    category: "wellness",
    image: "☕"
  },
  {
    id: "spice_rack_002",
    name: "Rotating Spice Rack",
    description: "Digging through a pile of spices? Peak inefficiency.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/spice-rack",
    category: "productivity",
    image: "🧂"
  },
  {
    id: "knife_set_002",
    name: "Kitchen Knife Set (6 Pieces)",
    description: "One dull knife? That's your whole kitchen, isn't it?",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/knife-set",
    category: "productivity",
    image: "🔪"
  },
  {
    id: "cutting_board_002",
    name: "Bamboo Cutting Board Set",
    description: "Cutting on your counter? Your landlord is crying.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/cutting-board",
    category: "productivity",
    image: "🥗"
  },
  {
    id: "storage_containers_002",
    name: "Glass Food Storage (10 Pieces)",
    description: "Plastic containers are so 2015.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/glass-storage",
    category: "productivity",
    image: "📦"
  },
  {
    id: "vacuum_sealer_002",
    name: "Vacuum Food Sealer",
    description: "Food waste is money waste. Seal it.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/vacuum-sealer",
    category: "productivity",
    image: "🍱"
  },
  {
    id: "instant_pot_002",
    name: "6-Quart Instant Pot",
    description: "This will change your meal prep game. Trust.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/instant-pot",
    category: "productivity",
    image: "🍲"
  },
  {
    id: "air_fryer_002",
    name: "Air Fryer (4 Quart)",
    description: "Fried food without the guilt. Science is wild.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/air-fryer",
    category: "wellness",
    image: "🍟"
  },
  {
    id: "sous_vide_002",
    name: "Sous Vide Precision Cooker",
    description: "Restaurant-quality cooking at home. Yes, really.",
    rarity: "uncommon",
    affiliateLink: "https://amzn.to/sous-vide",
    category: "wellness",
    image: "👨‍🍳"
  },

  // ==================== RARE ITEMS (40) ====================
  {
    id: "ultrawide_monitor_003",
    name: "34\" Ultrawide Monitor",
    description: "Dual monitors are for people who haven't discovered ultrawide.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/ultrawide-34",
    category: "tech",
    image: "🖥️"
  },
  {
    id: "mechanical_keyboard_premium_003",
    name: "Custom Mechanical Keyboard",
    description: "Your words are art. They deserve this canvas.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/keyboard-custom",
    category: "tech",
    image: "⌨️"
  },
  {
    id: "gaming_mouse_003",
    name: "High-End Gaming Mouse",
    description: "Precision matters. In games. In life. Everywhere.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/gaming-mouse-premium",
    category: "tech",
    image: "🖱️"
  },
  {
    id: "standing_desk_003",
    name: "Electric Standing Desk",
    description: "Sitting is the new smoking. Stand for your health.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/standing-desk-electric",
    category: "productivity",
    image: "🪑"
  },
  {
    id: "herman_miller_003",
    name: "Ergonomic Task Chair (High-End)",
    description: "Your back will thank you every single day. Worth it.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/task-chair-premium",
    category: "comfort",
    image: "🪑"
  },
  {
    id: "noise_cancelling_003",
    name: "Premium Noise Cancelling Headphones",
    description: "Silence is golden. This is your golden ticket.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/headphones-nc-premium",
    category: "tech",
    image: "🎧"
  },
  {
    id: "studio_mic_003",
    name: "Studio-Quality USB Microphone",
    description: "Your voice deserves broadcast quality.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/mic-studio-usb",
    category: "tech",
    image: "🎙️"
  },
  {
    id: "elgato_stream_deck_003",
    name: "Stream Deck (15 Keys)",
    description: "Productivity shortcuts for literally everything.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/stream-deck-15",
    category: "productivity",
    image: "🎛️"
  },
  {
    id: "4k_webcam_003",
    name: "4K Pro Webcam",
    description: "You in 4K? Everyone will notice the upgrade.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/webcam-4k-pro",
    category: "tech",
    image: "📹"
  },
  {
    id: "dual_monitor_arm_003",
    name: "Dual Monitor Arm Mount",
    description: "Desk space is sacred. Free it all up.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/monitor-arm-dual",
    category: "productivity",
    image: "🖥️"
  },
  {
    id: "thunderbolt_dock_003",
    name: "Thunderbolt 4 Docking Station",
    description: "One cable to rule them all. All ports, all power.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/thunderbolt-dock",
    category: "tech",
    image: "🔌"
  },
  {
    id: "nas_drive_003",
    name: "4-Bay NAS Storage",
    description: "Cloud storage fees forever? No thanks. Own your data.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/nas-4bay",
    category: "tech",
    image: "💾"
  },
  {
    id: "graphics_tablet_pro_003",
    name: "Professional Graphics Tablet",
    description: "Digital art at professional level. This is the tool.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/graphics-tablet-pro",
    category: "tech",
    image: "🎨"
  },
  {
    id: "3d_printer_003",
    name: "3D Printer (FDM)",
    description: "Manufacture anything, anytime. Welcome to the future.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/3d-printer-fdm",
    category: "tech",
    image: "🖨️"
  },
  {
    id: "espresso_machine_003",
    name: "Semi-Automatic Espresso Machine",
    description: "Barista-quality coffee at home. Your mornings will never be the same.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/espresso-semi-auto",
    category: "wellness",
    image: "☕"
  },
  {
    id: "adjustable_dumbbells_003",
    name: "Adjustable Dumbbell Set (50lbs)",
    description: "Home gym is real. This is your foundation.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/dumbbells-adjustable",
    category: "wellness",
    image: "🏋️"
  },
  {
    id: "massage_gun_003",
    name: "Percussion Massage Gun",
    description: "Deep tissue massage on demand. Recovery unlocked.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/massage-gun",
    category: "wellness",
    image: "💆"
  },
  {
    id: "smart_scale_003",
    name: "Smart Body Composition Scale",
    description: "Track everything: weight, muscle, fat, hydration. Knowledge is power.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/smart-scale-body",
    category: "wellness",
    image: "⚖️"
  },
  {
    id: "rowing_machine_003",
    name: "Magnetic Rowing Machine",
    description: "Full-body workout at home. Cardio + strength in one.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/rowing-machine",
    category: "wellness",
    image: "🚣"
  },
  {
    id: "smart_mirror_003",
    name: "Smart Fitness Mirror",
    description: "Personal trainer in your mirror. The future is wild.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/smart-mirror-fitness",
    category: "wellness",
    image: "🪞"
  },
  {
    id: "ice_bath_003",
    name: "Portable Ice Bath Tub",
    description: "Cold therapy at home. Biohack your recovery.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/ice-bath-portable",
    category: "wellness",
    image: "🧊"
  },
  {
    id: "red_light_therapy_003",
    name: "Red Light Therapy Panel",
    description: "NASA-inspired recovery. Your cells will thank you.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/red-light-panel",
    category: "wellness",
    image: "🔴"
  },
  {
    id: "emf_meter_003",
    name: "EMF Meter & Shielding Kit",
    description: "Measure and reduce electromagnetic fields. Biohack mode: activated.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/emf-meter",
    category: "wellness",
    image: "📡"
  },
  {
    id: "smart_mattress_003",
    name: "Smart Mattress Topper",
    description: "Sleep tracking + temperature control. Rest optimized.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/smart-mattress-topper",
    category: "comfort",
    image: "🛏️"
  },
  {
    id: "aromatherapy_nebulizer_003",
    name: "Nebulizing Diffuser",
    description: "True aromatherapy without water dilution. Pure essential oils.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/nebulizing-diffuser",
    category: "wellness",
    image: "🌺"
  },
  {
    id: "bidet_attachment_003",
    name: "Electric Bidet Toilet Seat",
    description: "Once you bidet, you'll never go back. Life-changing.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/bidet-electric",
    category: "wellness",
    image: "🚽"
  },
  {
    id: "heated_blanket_003",
    name: "Smart Heated Blanket",
    description: "App-controlled warmth. Cozy maximized.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/heated-blanket-smart",
    category: "comfort",
    image: "🔥"
  },
  {
    id: "smart_thermostat_003",
    name: "Learning Smart Thermostat",
    description: "AI learns your schedule. Perfect temperature, always.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/smart-thermostat",
    category: "tech",
    image: "🌡️"
  },
  {
    id: "robot_vacuum_003",
    name: "Robot Vacuum with Mapping",
    description: "Vacuuming is for robots now. You're welcome.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/robot-vacuum-mapping",
    category: "productivity",
    image: "🤖"
  },
  {
    id: "smart_lock_003",
    name: "Smart Door Lock",
    description: "Keys are so 2010. Your phone is your key now.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/smart-lock-door",
    category: "tech",
    image: "🔐"
  },
  {
    id: "video_doorbell_003",
    name: "Video Doorbell Pro",
    description: "See who's at your door from anywhere. Security level up.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/video-doorbell-pro",
    category: "tech",
    image: "🚪"
  },
  {
    id: "security_camera_003",
    name: "4K Security Camera System",
    description: "Peace of mind in 4K resolution. Sleep better.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/security-4k-system",
    category: "tech",
    image: "📹"
  },
  {
    id: "smart_blinds_003",
    name: "Automated Smart Blinds",
    description: "Wake up to gradual sunlight. Sleep optimization unlocked.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/smart-blinds",
    category: "aesthetic",
    image: "🪟"
  },
  {
    id: "sous_vide_premium_003",
    name: "WiFi Sous Vide Circulator",
    description: "Control your cooking from anywhere. Chef mode: remote.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/sous-vide-wifi",
    category: "wellness",
    image: "👨‍🍳"
  },
  {
    id: "bread_maker_003",
    name: "Automatic Bread Maker",
    description: "Fresh bread whenever you want. Your kitchen will smell amazing.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/bread-maker-auto",
    category: "wellness",
    image: "🍞"
  },
  {
    id: "wine_fridge_003",
    name: "Wine Cooler Fridge",
    description: "Perfect temperature for every bottle. Sommelier approved.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/wine-fridge",
    category: "aesthetic",
    image: "🍷"
  },
  {
    id: "portable_ac_003",
    name: "Portable Air Conditioner",
    description: "Climate control anywhere. Summer defeated.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/portable-ac",
    category: "comfort",
    image: "❄️"
  },
  {
    id: "infrared_heater_003",
    name: "Infrared Space Heater",
    description: "Efficient heating that actually works. Winter solved.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/infrared-heater",
    category: "comfort",
    image: "🔥"
  },
  {
    id: "electric_bike_003",
    name: "Electric Bike Conversion Kit",
    description: "Turn any bike into an e-bike. Commute upgraded.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/ebike-conversion",
    category: "wellness",
    image: "🚴"
  },
  {
    id: "car_dash_cam_003",
    name: "4K Dash Cam with Parking Mode",
    description: "Evidence for everything. Accidents, road rage, aliens.",
    rarity: "rare",
    affiliateLink: "https://amzn.to/dash-cam-4k",
    category: "tech",
    image: "📹"
  },

  // ==================== EPIC ITEMS (15) ====================
  {
    id: "gaming_pc_004",
    name: "High-Performance Gaming PC",
    description: "This changes everything. Lag is now just a bad memory.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/gaming-pc-highend",
    category: "tech",
    image: "🖥️"
  },
  {
    id: "macbook_pro_004",
    name: "MacBook Pro M3 Max",
    description: "Creative work at light speed. Your productivity just 10x'd.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/macbook-pro-m3",
    category: "tech",
    image: "💻"
  },
  {
    id: "oled_tv_004",
    name: "65\" OLED 4K TV",
    description: "Black levels so deep, you'll cry. Cinema at home.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/oled-65-4k",
    category: "aesthetic",
    image: "📺"
  },
  {
    id: "full_home_gym_004",
    name: "Complete Home Gym Setup",
    description: "Power rack, weights, everything. Gym membership cancelled.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/home-gym-complete",
    category: "wellness",
    image: "🏋️"
  },
  {
    id: "espresso_machine_pro_004",
    name: "Professional Espresso Machine",
    description: "Cafe-quality shots at home. Your kitchen is a coffee shop now.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/espresso-professional",
    category: "wellness",
    image: "☕"
  },
  {
    id: "smart_home_hub_004",
    name: "Complete Smart Home System",
    description: "Entire home automated. Living in the future starts now.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/smart-home-complete",
    category: "tech",
    image: "🏠"
  },
  {
    id: "vr_headset_004",
    name: "Premium VR Headset",
    description: "Reality is overrated. Welcome to the metaverse.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/vr-headset-premium",
    category: "tech",
    image: "🥽"
  },
  {
    id: "cinema_projector_004",
    name: "4K Home Cinema Projector",
    description: "120-inch screen in your living room. Movies transcended.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/projector-4k-cinema",
    category: "aesthetic",
    image: "📽️"
  },
  {
    id: "soundproof_panels_004",
    name: "Complete Room Soundproofing Kit",
    description: "Your own isolated universe. Sound pollution eliminated.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/soundproof-room-kit",
    category: "productivity",
    image: "🔇"
  },
  {
    id: "professional_lighting_004",
    name: "Studio Lighting Kit (Pro)",
    description: "Hollywood-grade lighting. Your content looks expensive now.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/lighting-studio-pro",
    category: "aesthetic",
    image: "💡"
  },
  {
    id: "laser_engraver_004",
    name: "Desktop Laser Engraver",
    description: "Create anything. Engrave everything. Possibilities: infinite.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/laser-engraver-desktop",
    category: "tech",
    image: "⚡"
  },
  {
    id: "sauna_004",
    name: "Infrared Home Sauna",
    description: "Recovery room in your house. Biohacking maximized.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/infrared-sauna-home",
    category: "wellness",
    image: "🧖"
  },
  {
    id: "cold_plunge_004",
    name: "Premium Cold Plunge Pool",
    description: "Elite recovery method. Your inflammation is over.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/cold-plunge-premium",
    category: "wellness",
    image: "🥶"
  },
  {
    id: "sit_stand_desk_004",
    name: "L-Shaped Standing Desk (Electric)",
    description: "Command center activated. Maximum workspace, maximum ergonomics.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/standing-desk-l-shape",
    category: "productivity",
    image: "🖥️"
  },
  {
    id: "meditation_pod_004",
    name: "Meditation & Sensory Deprivation Pod",
    description: "Float in silence. Your mind will expand.",
    rarity: "epic",
    affiliateLink: "https://amzn.to/meditation-pod",
    category: "wellness",
    image: "🧘"
  },

  // ==================== LEGENDARY ITEMS (5) ====================
  {
    id: "airpods_legendary",
    name: "Wireless Earbuds of Ascension",
    description: "This changes everything. Your commute will never be the same.",
    rarity: "legendary",
    affiliateLink: "https://amzn.to/airpods-pro",
    category: "tech",
    image: "🎧"
  },
  {
    id: "gaming_chair_legendary",
    name: "Ultimate Gaming Chair Throne",
    description: "You're not sitting anymore. You're ruling. Your posture is saved.",
    rarity: "legendary",
    affiliateLink: "https://amzn.to/gaming-chair-ultimate",
    category: "comfort",
    image: "👑"
  },
  {
    id: "ultra_monitor_legendary",
    name: "49\" Super Ultrawide Monitor",
    description: "This isn't a monitor. It's a life upgrade. Reality expanded.",
    rarity: "legendary",
    affiliateLink: "https://amzn.to/ultrawide-49-super",
    category: "tech",
    image: "🖥️"
  },
  {
    id: "peloton_legendary",
    name: "Premium Smart Exercise Bike",
    description: "Your fitness journey just went from 0 to 100. No excuses left.",
    rarity: "legendary",
    affiliateLink: "https://amzn.to/smart-bike-premium",
    category: "wellness",
    image: "🚴"
  },
  {
    id: "home_theater_legendary",
    name: "Complete Dolby Atmos Home Theater",
    description: "7.2.4 surround sound. Your living room is a cinema now. Legendary.",
    rarity: "legendary",
    affiliateLink: "https://amzn.to/home-theater-atmos",
    category: "aesthetic",
    image: "🎬"
  },
];

export const getItemsByRarity = (rarity: Rarity): Item[] => {
  return ITEMS.filter(item => item.rarity === rarity);
};

export const getRandomItem = (): Item => {
  return ITEMS[Math.floor(Math.random() * ITEMS.length)];
};

export const getItemById = (id: string): Item | undefined => {
  return ITEMS.find(item => item.id === id);
};
