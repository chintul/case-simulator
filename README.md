# 🎮 CS2-Style Life Upgrade Case Opening Simulator

A dopamine-maximizing web app that simulates CS2 case openings but reveals everyday "life items" with affiliate links. Experience gambling-like excitement without actual gambling!

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0088)

## 🌟 Features

### Core Mechanics
- **🎰 CS2-Style Case Opening**: Authentic horizontal conveyor animation with gradual slowdown
- **✨ Rarity System**: 5 rarity tiers (Common, Uncommon, Rare, Epic, Legendary) with realistic drop rates
- **😈 Near-Miss Psychology**: Strategic placement of higher-rarity items to increase engagement
- **🔥 Daily Streak System**: Bonuses for returning daily (up to guaranteed epic drops)
- **📊 Dopamine Bar**: Real-time visual feedback of your excitement level
- **💬 Funny Commentary**: Witty messages based on what you unbox

### 200+ Life Upgrade Items
Items across 5 categories:
- **🛋️ Comfort**: Pillows, blankets, ergonomic chairs
- **💪 Wellness**: Fitness equipment, health products
- **🎨 Aesthetic**: Lighting, decor, smart home devices
- **⚡ Productivity**: Desk accessories, organizers, tools
- **💻 Tech**: Keyboards, monitors, gadgets

### Rarity Distribution
- **Common**: 60% drop rate (80 items)
- **Uncommon**: 25% drop rate (60 items)
- **Rare**: 10% drop rate (40 items)
- **Epic**: 4% drop rate (15 items)
- **Legendary**: 1% drop rate (5 items)

### Advanced Features
- **🎵 Procedural Sound**: Web Audio API generates tick sounds and reveal effects
- **🌈 Cyberpunk Aesthetics**: Neon glows, particle effects, screen shake
- **📱 Fully Responsive**: Desktop conveyor, mobile-friendly layout
- **💾 Persistent State**: LocalStorage for streaks, inventory, progress
- **🔗 Affiliate Integration**: Amazon affiliate links (placeholder URLs included)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd case-simulator

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
case-simulator/
├── app/
│   ├── components/
│   │   ├── CaseDisplay.tsx           # 3D glowing case with open button
│   │   ├── CaseOpeningAnimation.tsx  # Horizontal conveyor scroll
│   │   ├── ItemReveal.tsx            # Item card with particles
│   │   ├── DopamineBar.tsx           # Vertical bar with fill animation
│   │   ├── DailyStreak.tsx           # Streak counter with bonuses
│   │   ├── NearMissIndicator.tsx     # "So close!" overlay
│   │   └── ItemInspector.tsx         # Modal with affiliate link
│   ├── globals.css                    # Cyberpunk theme + animations
│   ├── layout.tsx                     # Root layout with metadata
│   └── page.tsx                       # Main case opening logic
├── lib/
│   ├── items.ts                       # 200+ item database
│   ├── rarity.ts                      # Probability logic + near-miss
│   ├── sound.ts                       # Web Audio API sound manager
│   └── store.ts                       # Zustand state management
└── public/
    └── sounds/                        # (Optional) Audio files
```

## 🎨 Customization

### Adding New Items

Edit `lib/items.ts`:

```typescript
{
  id: "your_item_id",
  name: "Your Item Name",
  description: "Funny micro-need copy here",
  rarity: "rare",
  affiliateLink: "https://amzn.to/your-link",
  category: "tech",
  image: "🎮"
}
```

### Adjusting Drop Rates

Edit `lib/rarity.ts`:

```typescript
export const RARITY_CHANCES = {
  common: 60,    // Adjust these percentages
  uncommon: 25,
  rare: 10,
  epic: 4,
  legendary: 1
};
```

### Changing Colors

Edit `lib/rarity.ts`:

```typescript
export const RARITY_COLORS = {
  common: '#808080',
  uncommon: '#4169E1',
  rare: '#9370DB',
  epic: '#FF1493',
  legendary: '#FFD700'
};
```

## 🎯 Key Mechanics

### Case Opening Flow

1. **Idle State**: Glowing case + "Open Case" button
2. **Spinning (8s)**:
   - 0-2s: Fast blur scroll
   - 2-5s: Gradual slowdown
   - 5-7s: Dramatic near-miss
   - 7-8s: Final stop with shake (rare+)
3. **Reveal**: Item card flip-in with particles
4. **Inspect**: Modal with affiliate link

### Daily Streak Bonuses

- **Day 1**: 3 free cases
- **Day 3**: +10% rare drop chance
- **Day 7**: Guaranteed epic drop

### Near-Miss System

When you roll common/uncommon:
- Epic items placed 1-2 slots before winning item
- Conveyor stops just before epic, slides to your item
- "SO CLOSE!" message triggers retry psychology

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: Zustand with persist middleware
- **Sound**: Web Audio API (procedural generation)

## 📊 Performance

- **60fps animations** using CSS transforms
- **RequestAnimationFrame** for smooth conveyor
- **Will-change optimizations** for GPU acceleration
- **Lazy loading** for components
- **Memoized** item components

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_AFFILIATE_TAG=your-affiliate-id
```

Update affiliate links in `lib/items.ts` to use your tag.

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎮 Usage Tips

### For Users
1. Open 3 free cases daily
2. Build a 7-day streak for guaranteed epic
3. Click items to view affiliate links
4. Toggle sound in footer

### For Developers
- All items use placeholder Amazon links (`https://amzn.to/...`)
- Replace with real affiliate links before production
- Inventory system tracks all opened items (check Zustand store)
- Sound can be disabled via toggle

## 🔧 Troubleshooting

### Animations Not Smooth
- Check if `prefers-reduced-motion` is enabled
- Ensure hardware acceleration is on
- Clear browser cache

### Sound Not Playing
- Click anywhere on page first (browser autoplay policy)
- Check console for Web Audio API errors
- Use the "Toggle Sound" button

### State Not Persisting
- Check browser LocalStorage is enabled
- Clear storage: `localStorage.clear()` in console

## 📈 Analytics Integration

Add to `app/page.tsx`:

```typescript
// Track case openings
useEffect(() => {
  if (currentItem) {
    // Your analytics here
    gtag('event', 'case_opened', {
      rarity: currentItem.rarity,
      item_id: currentItem.id
    });
  }
}, [currentItem]);
```

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- More items in the database
- Additional case themes (Gamer Case, Fitness Case, etc.)
- Real sound files (replace Web Audio API)
- Inventory management UI
- Social sharing features
- Leaderboards

## 📄 License

MIT License - feel free to use for commercial projects!

## 🎯 Roadmap

- [ ] Inventory page to view all items
- [ ] Multiple case types (themed collections)
- [ ] Social sharing ("I got a legendary!")
- [ ] Konami code easter egg
- [ ] Animation speed controls
- [ ] Dark/light mode toggle
- [ ] Real sound effects library
- [ ] Backend for tracking global stats

## 💡 Credits

Inspired by CS2/CSGO case opening mechanics. Built with modern web technologies for maximum dopamine delivery.

---

**⚠️ Disclaimer**: This is a simulator for entertainment/affiliate marketing. No real gambling involved. All affiliate links are clearly disclosed.

**Made with 💀 by capitalism enthusiasts**
