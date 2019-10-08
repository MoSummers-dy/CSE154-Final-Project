/**
 * Author: Diana Dai
 * Date: Aug 10, 2019
 * Section: CSE 154AB
 * TA: Tal Wolman
 * LOL store database for storing items, messages and users in e-commerce store
 */

CREATE DATABASE IF NOT EXISTS store;

USE store;

-- Items for keeping track of all the items in the store.
CREATE TABLE IF NOT EXISTS items (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  shortname VARCHAR(2) NOT NULL,
  cost INT NOT NULL,
  type VARCHAR(80) NOT NULL,
  effect VARCHAR(500) NOT NULL
);

-- Message for keeping track of all feedback, questions, and concerns from customers.
CREATE TABLE IF NOT EXISTS message (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(50),
  message VARCHAR(400) NOT NULL
);

-- Users for keeping track of the loyal members of the store.
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  join_time DATETIME DEFAULT NOW()
);

-- Inserts the items into the items table
INSERT INTO items VALUES
  (1,'Abyssal Mask','am',3000,'health, mana, magic resist, cooldown reduction','UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.'),
  (2,'Adaptive Helm','ah',2800,'health, magic resist, health regen, cooldown reduction','UNIQUE Passive: Taking magic damage from a spell or effect reduces all subsequent magic damage from that same spell or effect by 20% for 4 seconds.'),
  (3,'Archangel''s Staff','as',3200,'ability power, mana, cooldown reduction','UNIQUE Passive - Haste: This item gains an additional 10% Cooldown Reduction. UNIQUE Passive - Awe: Grants Ability Power equal to 1% of maximum Mana. Refunds 25% of Mana spent. UNIQUE Passive - Mana Charge: Grants +8 maximum Mana (max +750 Mana) for each Mana expenditure (occurs up to 3 times every 12 seconds).'),
  (4,'Ardent Censer','ac',2300,'ability power, cooldown reduction, mana regen','UNIQUE Passive: +10% Heal and Shield Power UNIQUE Passive: +8% Movement Speed UNIQUE Passive: Whenever you heal or shield an ally, you and your ally gain 10% - 30% Attack Speed and your attacks deal an additional 5 - 20 on-hit magic damage for 6 seconds.'),
  (5,'Dervish Blade','db',2700,'attack speed, magic resist, cooldown reduction','UNIQUE Active - Quicksilver: Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).'),
  (6,'Essence Reaver','er',3300,'attack damage, critical strike','UNIQUE Passive: +20% Cooldown Reduction. UNIQUE Passive: Basic attacks refund 1.5% of your missing mana.'),
  (7,'Frozen Heart','fh',2700,'armor, cooldown reduction, mana','UNIQUE Aura: Reduces the Attack Speed of nearby enemies by 15%.'),
  (8,'Frozen Mallet','fm',3100,'health, attack damage','UNIQUE Passive - Icy: Basic attacks slow the target''s Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 20% slow for ranged attacks).'),
  (9,'Guardian Angel','ga',2800,'attack damage, armor','UNIQUE Passive: Upon taking lethal damage, restores 50% of base Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).'),
  (10,'Guinsoo''s Rageblade','gr',3100,'attack damage, ability power, attack speed','UNIQUE Passive - Last Whisper: Gain 15% Armor Penetration. UNIQUE Passive - Dissolve: Gain 15% Magic Penetration. UNIQUE Passive: Basic attacks grant +8% Attack Speed for 5 seconds (up to 6 stacks). At max stacks, gain Guinsoo''s Rage.'),
  (11,'Hextech Gunblade','hg',3400,'attack damage, ability power','UNIQUE Passive: Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage. UNIQUE Active - Lightning Bolt: Deals 175 - 253 (+30% of Ability Power) magic damage and slows the target champion''s Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other Hextech items).'),
  (12,'Iceborn Gauntlet','ig',2700,'armor, cooldown reduction, mana','UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).'),
  (13,'Infinity Edge','ie',3400,'attack damage, critical strike','UNIQUE Passive: Critical strikes deal 225% damage instead of 200%.'),
  (14,'Knight''s Vow','kv',2200,'health, armor, cooldown reduction','UNIQUE Active: Designate an allied champion as your Partner (90 second cooldown). UNIQUE Passive: If your Partner is nearby, gain +20 additional Armor and +15% Movement Speed towards them. UNIQUE Passive: If your Partner is nearby, heal for 12% of the damage your Partner deals to champions and redirect 12% of the damage your Partner takes from champions to you as true damage (healing and damage redirection are reduced by 50% if you are ranged).'),
  (15,'Liandry''s Torment','lt',3100,'ability power, health','UNIQUE Passive - Madness: Deal 2% more damage for each second in combat with champions (10% maximum). UNIQUE Passive - Torment: Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 1.5% of their maximum Health per second. Burn damage is increased to 2.5% against movement-impaired units.'),
  (16,'Lich Bane','lb',3200,'ability power, movement speed, cooldown reduction, mana','UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).'),
  (17,'Luden''s Echo','le',3200,'ability power, mana, cooldown reduction','UNIQUE Passive - Haste: This item gains an additional 10% Cooldown Reduction. UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.'),
  (18,'Mercurial Scimitar','ms',3400,'attack damage, magic resist, life steal','UNIQUE Active - Quicksilver: Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).'),
  (19,'Nashor''s Tooth','nt',3000,'attack speed, ability power','UNIQUE Passive: +20% Cooldown Reduction. UNIQUE Passive: Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.'),
  (20,'Phantom Dancer','pd',2600,'attack speed, critical strike','UNIQUE Passive - Spectral Waltz: Basic attacking a champion grants ghosting and 7% Movement Speed for 2 seconds. UNIQUE Passive - Lifeline: If you would take damage that would reduce your Health below 30%, gain a shield that absorbs up to 240 - 600 damage for 2 seconds. (90 second cooldown)'),
  (21,'Rabadon''s Deathcap','rd',3600,'ability power','UNIQUE Passive: Increases Ability Power by 40%.'),
  (22,'Rapid Firecannon','rf',2600,'attack speed, critical strike','UNIQUE Passive - Energized: Moving and attacking will make an attack Energized. Your Energized attacks deal 60~140 bonus magic damage (based on level) on hit. UNIQUE Passive: Energized attacks gain 35% bonus Range (+150 range maximum).'),
  (23,'Ravenous Hydra','rh',3500,'attack damage, health regen, life steal','UNIQUE Passive - Cleave: Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage). UNIQUE Active - Crescent: Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).'),
  (24,'Space Bloodthirster','sb',3300,'attack damage','UNIQUE Passive: +5% Life Steal. UNIQUE Passive: Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.'),
  (25,'Spirit Visage','sv',2800,'health, magic resist, health regen, cooldown reduction','UNIQUE Passive: Increases all healing received by 30%.'),
  (26,'Statikk Shiv','ss',2600,'attack speed, critical strike','UNIQUE Passive - Energized: Moving and attacking will make an attack Energized. Your Energized attacks deal 60~140 bonus magic damage (based on level) on hit. UNIQUE Passive: Energized damage bounces to 5 targets and can critically strike.'),
  (27,'Trinity Force','tf',3733,'health, mana, attack damage, attack speed, cooldown reduction','UNIQUE Passive - Rage: Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions. UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).'),
  (28,'Warmog''s Armor','wa',2850,'health, health regen','UNIQUE Passive: +10% Cooldown Reduction. UNIQUE Passive: Grants Warmog''s Heart if you have at least 3000 maximum Health.'),
  (29,'Youmuu''s Ghostblade','yg',2900,'attack damage, cooldown reduction','UNIQUE Passive: +18 Lethality. UNIQUE Passive: +40 Movement Speed out of Combat. UNIQUE Active: Grants +20% Movement Speed for 6 seconds (45 second cooldown).'),
  (30,'Zhonya''s Hourglass','zh',2900,'ability power, armor, cooldown reduction','UNIQUE Active - Stasis: Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).');
