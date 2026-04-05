export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Arjun Mehta',
    role: 'CEO & Co-Founder',
    bio: 'Ex-Google Engineering Lead. 15+ years in enterprise software. Scaled teams from 3 to 300+ engineers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Ex-AWS Principal Architect. PhD in Distributed Systems. Built infrastructure serving 200M+ users.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'James Wright',
    role: 'VP Engineering',
    bio: 'Built engineering teams at Scale AI and Stripe. Specialist in AI/ML infrastructure.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Maria Lopez',
    role: 'Head of Design',
    bio: 'Former design lead at Airbnb. 12+ years crafting award-winning digital experiences.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
]

export const TIMELINE = [
  { year: '2018', title: 'Founded in Gurugram', desc: 'Started with 3 engineers and a vision to build world-class software.' },
  { year: '2019', title: 'First Enterprise Client', desc: 'Signed our first Fortune 500 engagement — a $2M banking platform.' },
  { year: '2020', title: '100 Engineers', desc: 'Expanded to 100+ engineers across 5 countries during the pandemic.' },
  { year: '2022', title: 'Web3 Division Launch', desc: 'Launched dedicated blockchain division. Secured $500M+ in TVL for clients.' },
  { year: '2023', title: 'Global Expansion', desc: 'Opened offices in NYC, London, and Dubai. Reached 250+ engineers.' },
  { year: '2024', title: '#1 on Clutch', desc: 'Rated #1 App Development Company globally. 1000+ projects delivered.' },
]

export const STATS = [
  { value: 300, suffix: '+', label: 'Engineers' },
  { value: 50, suffix: '+', label: 'Countries' },
  { value: 1000, suffix: '+', label: 'Projects' },
  { value: 3.2, suffix: 'B+', label: 'Revenue Unlocked', prefix: '$' },
]
