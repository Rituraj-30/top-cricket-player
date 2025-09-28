import ViratKohliImg from './img/Virat.jpg';
import SteveSmithImg from './img/Steve Smith.jpg';
import JoeRootImg from './img/Joe Root.jpg';
import KaneWilliamsonImg from './img/Kane Williamson.jpg';
import TravisHeadImg from './img/Travis Head.jpg';

import JaspritBumrahImg from './img/Jasprit Bumrah.jpg';
import MitchellStarcImg from './img/Mitchell Starc.jpg';
import RashidKhanImg from './img/Rashid Khan.jpg';
import TrentBoultImg from './img/Trent Boult.jpg';
import DaleSteynImg from './img/Dale Steyn.jpg';

import BenStokesImg from './img/Ben Stokes.jpg';
import ShakibAlHasanImg from './img/Shakib Al Hasan.jpg';
import HardikPandyaImg from './img/Hardik Pandya.jpg';
import GlennMaxwellImg from './img/Glenn Maxwell.jpg';
import RavindraJadejaImg from './img/Ravindra Jadeja.jpg';

import MSDhoniImg from './img/MS Dhoni.jpg';
import ABdeVilliersImg from './img/AB de Villiers.jpg';
import KumarSangakkaraImg from './img/Kumar Sangakkara.jpg';
import QuintondeKockImg from './img/Quinton de Kock.jpg';
import RishabhPantImg from './img/Rishabh Pant.jpg';

export const filterData = [
  { id: "1", title: "All" },
  { id: "2", title: "Batsman" },
  { id: "3", title: "Bowler" },
  { id: "4", title: "All-Rounder" },
  { id: "5", title: "Wicket-Keeper" },
];

export const playersData = {
  Batsman: [
    {
      id: "1",
      name: "Virat Kohli",
      country: "India",
      role: "Batsman",
      image: ViratKohliImg,
      description: "Modern batting legend, known as the 'Chase Master'.",
      stats: {
        odiRuns: 14181,
        t20Runs: 4188,
        testRuns: 9230,
        centuries: 82, // Approx 51 ODI + 30 Test + 1 T20I (Total International)
      },
    },
    {
      id: "2",
      name: "Steve Smith",
      country: "Australia",
      role: "Batsman",
      image: SteveSmithImg,
      description: "One of the best Test batsmen of this era.",
      stats: {
        odiRuns: 5800,
        t20Runs: 1094,
        testRuns: 10477,
        centuries: 48, // Approx 12 ODI + 36 Test (Total International)
      },
    },
    {
      id: "3",
      name: "Joe Root",
      country: "England",
      role: "Batsman",
      image: JoeRootImg,
      description: "England’s most consistent Test run scorer.",
      stats: {
        odiRuns: 7301,
        t20Runs: 893, // Last played T20I in 2019, but keeping the T20I focus
        testRuns: 13543,
        centuries: 58, // Approx 19 ODI + 39 Test (Total International)
      },
    },
    {
      id: "4",
      name: "Kane Williamson",
      country: "New Zealand",
      role: "Batsman",
      image: KaneWilliamsonImg,
      description: "Calm leader and consistent run machine.",
      stats: {
        odiRuns: 7235,
        t20Runs: 2575,
        testRuns: 9276,
        centuries: 48, // Approx 15 ODI + 33 Test (Total International)
      },
    },
    {
      id: "5",
      name: "Travis Head",
      country: "Australia",
      role: "Batsman",
      image: TravisHeadImg,
      description: "Explosive Australian left-handed opener, match-winner in big finals.",
      stats: {
        odiRuns: 2942,
        t20Runs: 1119,
        testRuns: 3963,
        centuries: 16, // Approx 7 ODI + 9 Test (Total International)
      },
    },
  ],

  Bowler: [
    {
      id: "6",
      name: "Jasprit Bumrah",
      country: "India",
      role: "Bowler",
      image: JaspritBumrahImg,
      description: "Deadly yorker specialist.",
      stats: {
        odiWickets: 149,
        t20Wickets: 94, // Using T20I Wickets
        testWickets: 149,
        bestBowling: "6/19 (ODI)",
      },
    },
    {
      id: "7",
      name: "Mitchell Starc",
      country: "Australia",
      role: "Bowler",
      image: MitchellStarcImg,
      description: "Fast left-arm bowler, lethal in World Cups.",
      stats: {
        odiWickets: 220, // Approx.
        t20Wickets: 69, // Approx.
        testWickets: 342, // Approx.
        bestBowling: "6/28 (ODI)", // Approx.
      },
    },
    {
      id: "8",
      name: "Rashid Khan",
      country: "Afghanistan",
      role: "Bowler",
      image: RashidKhanImg,
      description: "T20 magician with leg-spin.",
      stats: {
        odiWickets: 199,
        t20Wickets: 161,
        testWickets: 45,
        bestBowling: "7/18 (ODI)",
      },
    },
    {
      id: "9",
      name: "Trent Boult",
      country: "New Zealand",
      role: "Bowler",
      image: TrentBoultImg,
      description: "Left-arm swing bowler, deadly in ODIs.",
      stats: {
        odiWickets: 211, // Approx.
        t20Wickets: 68, // Approx.
        testWickets: 317,
        bestBowling: "6/30 (Test)", // Best in ODI is 7/34, but 6/30 is common representation
      },
    },
    {
      id: "10",
      name: "Dale Steyn",
      country: "South Africa",
      role: "Bowler",
      image: DaleSteynImg,
      description: "Legendary South African fast bowler, feared for his pace and swing.",
      stats: {
        odiWickets: 196,
        t20Wickets: 64,
        testWickets: 439,
        bestBowling: "7/51 (Test)",
      },
    },
  ],

  "All-Rounder": [
    {
      id: "11",
      name: "Ben Stokes",
      country: "England",
      role: "All-Rounder",
      image: BenStokesImg,
      description: "Match-winner with both bat and ball.",
      stats: {
        odiRuns: 3463,
        t20Runs: 585,
        testRuns: 7032,
        odiWickets: 80, // Approx.
        t20Wickets: 28, // Approx.
        testWickets: 197, // Approx.
      },
    },
    {
      id: "12",
      name: "Shakib Al Hasan",
      country: "Bangladesh",
      role: "All-Rounder",
      image: ShakibAlHasanImg,
      description: "World’s top-ranked all-rounder.",
      stats: {
        odiRuns: 7570,
        t20Runs: 2551,
        testRuns: 4609,
        odiWickets: 317,
        t20Wickets: 149,
        testWickets: 246,
      },
    },
    {
      id: "13",
      name: "Hardik Pandya",
      country: "India",
      role: "All-Rounder",
      image: HardikPandyaImg,
      description: "Dynamic Indian all-rounder.",
      stats: {
        odiRuns: 1904,
        t20Runs: 1812,
        testRuns: 532,
        odiWickets: 91,
        t20Wickets: 94,
        testWickets: 17,
      },
    },
    {
      id: "14",
      name: "Glenn Maxwell",
      country: "Australia",
      role: "All-Rounder",
      image: GlennMaxwellImg,
      description: "Explosive batsman, handy spinner.",
      stats: {
        odiRuns: 3990,
        t20Runs: 2500, // Approx.
        testRuns: 339, // Approx.
        odiWickets: 77,
        t20Wickets: 45, // Approx.
        testWickets: 8, // Approx.
      },
    },
    {
      id: "15",
      name: "Ravindra Jadeja",
      country: "India",
      role: "All-Rounder",
      image: RavindraJadejaImg,
      description: "3D player: Bat, Ball & Fielding.",
      stats: {
        odiRuns: 2806,
        t20Runs: 515,
        testRuns: 3886,
        odiWickets: 231,
        t20Wickets: 54,
        testWickets: 330,
      },
    },
  ],

  "Wicket-Keeper": [
    {
      id: "16",
      name: "MS Dhoni",
      country: "India",
      role: "Wicket-Keeper",
      image: MSDhoniImg,
      description: "Captain Cool, greatest finisher.",
      stats: {
        odiRuns: 10773,
        t20Runs: 1617,
        testRuns: 4876,
        dismissals: 829, // Total international dismissals (Catches + Stumpings)
      },
    },
    {
      id: "17",
      name: "AB de Villiers",
      country: "South Africa",
      role: "Wicket-Keeper",
      image: ABdeVilliersImg,
      description: "Mr. 360, innovator of shots.",
      stats: {
        odiRuns: 9577, // Approx.
        t20Runs: 1672, // Approx.
        testRuns: 8765,
        dismissals: 462, // Total international dismissals (mostly catches, as he wasn't always the primary WK)
      },
    },
    {
      id: "18",
      name: "Kumar Sangakkara",
      country: "Sri Lanka",
      role: "Wicket-Keeper",
      image: KumarSangakkaraImg,
      description: "Elegant left-hander, Sri Lankan legend.",
      stats: {
        odiRuns: 14234,
        t20Runs: 1382,
        testRuns: 12400,
        dismissals: 678, // Total international dismissals (Catches + Stumpings)
      },
    },
    {
      id: "19",
      name: "Quinton de Kock",
      country: "South Africa",
      role: "Wicket-Keeper",
      image: QuintondeKockImg,
      description: "Aggressive left-hand opener.",
      stats: {
        odiRuns: 6770,
        t20Runs: 2584,
        testRuns: 3300,
        dismissals: 542, // Total international dismissals (Catches + Stumpings)
      },
    },
    {
      id: "20",
      name: "Rishabh Pant",
      country: "India",
      role: "Wicket-Keeper",
      image: RishabhPantImg,
      description: "Fearless young Indian wicket-keeper batsman.",
      stats: {
        odiRuns: 1500, // Approx.
        t20Runs: 1000, // Approx.
        testRuns: 2271, // Approx.
        dismissals: 200, // Approx. total international dismissals
      },
    },
  ],
};