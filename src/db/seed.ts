import { createClient, talks } from './index';

const initialTalks = [
  {
    time: "17:00 - 17:30",
    title: "Kapunyitás",
    speaker: "",
    iconName: "Users",
    iconColor: "text-gray-500",
    current: false,
  },
  {
    time: "17:30 - 18:00",
    title: "Keynote: Mastering Prompt Engineering for Smarter Interactions",
    speaker: "Kacper Dąbrowski, AWS",
    iconName: "Lightbulb",
    iconColor: "text-amber-500",
    current: false,
  },
  {
    time: "18:00 - 18:40",
    title: "GenAI security",
    speaker: "Czirok László, TC2",
    iconName: "Shield",
    iconColor: "text-emerald-500",
    current: false,
  },
  {
    time: "18:40 - 19:10",
    title: "AWS Amplify vs Vercel vs Cloudflare Pages / Workers",
    speaker: "Varga György, Shiwaforce",
    iconName: "Cloud",
    iconColor: "text-sky-500",
    current: true,
  },
  {
    time: "19:10",
    title: "Generative AI kvíz, nyereményekkel",
    speaker: "",
    iconName: "Gift",
    iconColor: "text-purple-500",
    current: false,
  },
];

export async function seed(db: D1Database) {
  const client = createClient(db);
  
  // Clear existing data
  await client.delete(talks);
  
  // Insert new data
  await client.insert(talks).values(initialTalks);
  
  console.log('Database seeded successfully!');
} 