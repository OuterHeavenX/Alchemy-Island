import fs from 'node:fs';

const path = new URL('../data/recipes.json', import.meta.url);
const existing = JSON.parse(fs.readFileSync(path, 'utf8'));
const base = existing.slice(0, 85);
if (base.length !== 85) throw new Error('Expected the 85-recipe handcrafted foundation.');

const adjectives = [
  'Amber','Ancient','Arcane','Ashen','Azure','Bright','Burnished','Celestial','Cerulean','Clouded',
  'Copper','Crystal','Dawn','Deep','Drifting','Dusky','Echoing','Ember','Emerald','Feral',
  'Flint','Flowing','Forest','Gilded','Glass','Golden','Hollow','Iridescent','Iron','Ivory',
  'Jade','Kindled','Luminous','Misted','Moonlit','Mossy','Obsidian','Opaline','Pearl','Primal',
  'Quiet','Rainwashed','Resonant','River','Rooted','Salt','Silver','Solar','Starry','Storm',
  'Sunlit','Tidal','Verdant','Violet','Warm','Whispering','Wild','Windborne','Winter','Woven','Zephyr'
];
const forms = [
  ['Bloom','Nature'],['Grove','Nature'],['Spore','Nature'],['Vine','Nature'],['Spring','Nature'],
  ['Alloy','Materials'],['Ceramic','Materials'],['Crystal','Materials'],['Fiber','Materials'],['Resin','Materials'],
  ['Beetle','Life'],['Finch','Life'],['Moth','Life'],['Newt','Life'],['Tortoise','Life'],
  ['Chisel','Tools'],['Compass','Tools'],['Lens','Tools'],['Pulley','Tools'],['Spindle','Tools'],
  ['Arch','Structures'],['Beacon','Structures'],['Causeway','Structures'],['Granary','Structures'],['Tower','Structures'],
  ['Capacitor','Technology'],['Coil','Technology'],['Dynamo','Technology'],['Relay','Technology'],['Turbine','Technology']
];
const descriptions = {
  Nature: n => `${n} takes root in the island's changing climate.`,
  Materials: n => `${n} gives patient hands a stronger substance to shape.`,
  Life: n => `${n} finds a place within the island's growing web of life.`,
  Tools: n => `${n} turns a difficult task into practiced craft.`,
  Structures: n => `${n} gives the settlement another lasting place in the world.`,
  Technology: n => `${n} reveals a new way to guide energy and motion.`
};

const usedResults = new Set(['Air','Earth','Fire','Water',...base.map(r => r.result)]);
const usedPairs = new Set(base.map(r => [r.a, r.b].sort().join('|')));
const available = ['Air','Earth','Fire','Water',...base.map(r => r.result)];
const expansion = [];
let nameIndex = 0;

for (let i = 0; expansion.length < 915; i++) {
  let result;
  let category;
  do {
    const adjective = adjectives[nameIndex % adjectives.length];
    const [form, cat] = forms[Math.floor(nameIndex / adjectives.length) % forms.length];
    result = `${adjective} ${form}`;
    category = cat;
    nameIndex++;
  } while (usedResults.has(result));

  let a = available[(i * 17 + Math.floor(i / 9)) % available.length];
  let b;
  let pair;
  for (let step = 0; step < available.length; step++) {
    b = available[(i * 31 + step * 7 + 3) % available.length];
    pair = [a, b].sort().join('|');
    if (!usedPairs.has(pair)) break;
  }
  if (usedPairs.has(pair)) throw new Error(`Unable to find a unique pair for ${result}.`);

  const recipe = {a, b, result, category, text: descriptions[category](result)};
  expansion.push(recipe);
  available.push(result);
  usedResults.add(result);
  usedPairs.add(pair);
}

const output = [...base, ...expansion];
fs.writeFileSync(path, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${output.length} recipes (${expansion.length} expansion recipes).`);
