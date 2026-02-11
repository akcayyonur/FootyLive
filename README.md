# ⚽ FootyLive

A modern, real-time football (soccer) live scores and news application built with Next.js 14, TypeScript, and Tailwind CSS.

![FootyLive Banner](public/footylive.png)

## 🌟 Features

- **Live Match Scores**: Real-time updates for ongoing football matches
- **Multiple League Support**: 
  - Premier League (England)
  - La Liga (Spain)
  - Serie A (Italy)
  - Championship (England)
  - Brazilian Série A
  - UEFA Champions League
  - Eredivisie (Netherlands)
- **League Standings**: Up-to-date league tables with team statistics
- **Football News**: Latest football news headlines with images
- **Responsive Design**: Fully responsive interface for mobile and desktop
- **Smooth Animations**: Page transitions using Framer Motion
- **Match Filtering**: View today's matches or weekly results

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Source**: 
  - [Football-Data.org API](https://www.football-data.org/) for match data
  - [News API](https://newsapi.org/) for football news
- **Image Optimization**: Next.js Image component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17.0 or higher
- npm, yarn, pnpm, or bun package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/footyylivee.git
   cd footyylivee
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   API_TOKEN=your_football_data_api_token
   API_TOKEN_NEWS=your_news_api_token
   ```

   Get your API tokens from:
   - [Football-Data.org](https://www.football-data.org/client/register)
   - [News API](https://newsapi.org/register)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
footyylivee/
├── public/
│   ├── img/
│   │   └── leagues/          # League logos
│   ├── footylive.png         # App logo
│   └── ghost-img.png         # 404 page image
├── src/
│   ├── app/
│   │   ├── (Leagues)/        # League-specific pages
│   │   │   ├── premier-league/
│   │   │   ├── la-liga/
│   │   │   ├── serie-a/
│   │   │   ├── championship/
│   │   │   ├── brazilian-serie-a/
│   │   │   ├── champions-league/
│   │   │   └── eredivisie/
│   │   ├── components/       # React components
│   │   │   ├── ClientLayout.tsx
│   │   │   ├── Competition.tsx
│   │   │   ├── Fixture.tsx
│   │   │   ├── LinkSide.tsx
│   │   │   ├── Matches.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── News.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── StandingsLayout.tsx
│   │   │   └── Status.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   ├── library/
│   │   └── index.ts          # API functions
│   ├── styles/
│   │   └── floaty.css        # Custom animations
│   └── types.ts              # TypeScript type definitions
├── .env.local                # Environment variables (create this)
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Features Breakdown

### Match Display
- Shows live, upcoming, and finished matches
- Match status indicators (TIMED, FINISHED, etc.)
- Team crests and names
- Match scores and times
- Competition logos

### League Pages
Each league page displays:
- Current matchweek fixtures
- Full league standings table
- Team statistics (played, won, drawn, lost, goals, points)

### News Section
- Top 10 football news headlines
- Featured images
- Direct links to full articles
- Auto-refresh every 20 seconds

## 🔄 Data Refresh

- Match data: Revalidates every 30 seconds
- News data: Revalidates every 20 seconds
- Automatic data fetching with Next.js App Router

## 🎯 API Endpoints Used

### Football-Data.org
- `GET /v4/matches` - Today's matches
- `GET /v4/matches?dateFrom={date}&dateTo={date}` - Weekly matches
- `GET /v4/competitions/{code}/standings` - League standings

### News API
- `GET /v2/everything?q=soccer&pageSize=10` - Football news

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🛠️ Build for Production

```bash
npm run build
npm run start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Leagues

1. Add league info to `Sidebar.tsx`:
   ```typescript
   { id: 8, name: "Your League", href: "/your-league", emblem: "/img/leagues/your_league.webp" }
   ```

2. Create a new page in `src/app/(Leagues)/your-league/page.tsx`

3. Add corresponding API function in `src/library/index.ts`

### Styling

The app uses Tailwind CSS with a custom color scheme:
- Background: `#222831`
- Primary accent: Teal (`#14b8a6`)
- Component background: `rgb(40,46,58)`

Modify `tailwind.config.ts` and `globals.css` to customize the theme.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Onur Akçay**

## 🙏 Acknowledgments

- [Football-Data.org](https://www.football-data.org/) for providing football data API
- [News API](https://newsapi.org/) for news data
- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting

## 📧 Support

For support, email your-email@example.com or open an issue in the GitHub repository.

---

Made with ⚽ and ❤️
