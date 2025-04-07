-- Clear existing data
DELETE FROM talks;

-- Insert initial data
INSERT INTO talks (time, title, speaker, icon_name, icon_color, current)
VALUES 
  ('17:00 - 17:30', 'Kapunyitás', '', 'Users', 'text-gray-500', 0),
  ('17:30 - 18:00', 'Keynote: Mastering Prompt Engineering for Smarter Interactions', 'Kacper Dąbrowski, AWS', 'Lightbulb', 'text-amber-500', 0),
  ('18:00 - 18:40', 'GenAI security', 'Czirok László, TC2', 'Shield', 'text-emerald-500', 0),
  ('18:40 - 19:10', 'AWS Amplify vs Vercel vs Cloudflare Pages / Workers', 'Varga György, Shiwaforce', 'Cloud', 'text-sky-500', 1),
  ('19:10', 'Generative AI kvíz, nyereményekkel', '', 'Gift', 'text-purple-500', 0); 