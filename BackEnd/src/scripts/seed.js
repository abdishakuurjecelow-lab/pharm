import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import Product from "../models/Product.js";
import User from "../models/User.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendRoot = path.resolve(__dirname, "../..");

dotenv.config({ path: path.join(backendRoot, ".env") });

const products = [
  { name: "Tumcido", category: "Syrups", type: "Human", image: "1760168167980-Tumcido.jfif" },
  { name: "Cyper", category: "", type: "AGRO Bio Chemical", image: "1760168129686-cyper_10.jfif" },
  { name: "DEXA-0.5", category: "Tablets", type: "Human", image: "1760373963020-DEX.jfif" },
  { name: "ANTI PAIN CAPLET", category: "Tablets", type: "Human", image: "1760264985542-Anti-pain.jfif" },
  { name: "SUPER X TRA", category: "", type: "AGRO Bio Chemical", image: "1760265598230-SUPER-XTRA.jfif" },
  { name: "TOP ONE", category: "", type: "AGRO Bio Chemical", image: "1760267929001-Top-One.jfif" },
  { name: "MENDA-100", category: "Tablets", type: "Human", image: "1760268203731-mENDA-100.jfif" },
  { name: "RELIEF", category: "Tablets", type: "Human", image: "1760268937023-RELIEF_TAB.jfif" },
  { name: "GRASS UP", category: "", type: "AGRO Bio Chemical", image: "1760268510336-GRASS-UP.jfif" },
  { name: "Cold N Fev", category: "Tablets", type: "Human", image: "1760269105326-COLD-N-FAV.jfif" },
  { name: "AMPICILLIN 250mg", category: "Capsules", type: "Human", image: "1760372552443-AMPICILLIN.jfif" },
  { name: "AZYRON-500", category: "Tablets", type: "Human", image: "1760269583640-AZYRO-500.jfif" },
  { name: "ARTEMTHER", category: "Injections", type: "Human", image: "1760269887869-ARTEMETHER.jfif" },
  { name: "Cef-One", category: "Injections", type: "Human", image: "1760270362035-CEF-1g.jfif" },
  { name: "KITO", category: "Shampoo", type: "Human", image: "1760356723179-KITO1.jfif" },
  { name: "PETROZ-40", category: "Tablets", type: "Human", image: "1760356326344-PETROZ-400.jfif" },
  { name: "PROCAINE PENCILLIN", category: "Injections", type: "Veterinary", image: "1760356361174-Pencillin.jfif" },
  { name: "GYNOSOL", category: "Cream", type: "Human", image: "1760356397854-GNYSOL.jfif" },
  { name: "PLASIL", category: "Injections", type: "Human", image: "1760356446890-PLASIL.jfif" },
  { name: "Ampicillin 1G", category: "Injections", type: "Human", image: "1760356479007-AMPICILLING.jfif" },
  { name: "NOFALGIN", category: "Injections", type: "Human", image: "1760356526306-Novalgin.jfif" },
  { name: "Perlin", category: "Cream", type: "Human", image: "1775450524789-Perlin.jfif" },
  { name: "TYLOVET 20%", category: "Injections", type: "Veterinary", image: "1760363679404-Tylovet.jfif" },
  { name: "TETRACYCILLIN", category: "Tablets", type: "Human", image: "1760364042950-TETRACYCILLIN.jfif" },
  { name: "FANSI TAB", category: "Tablets", type: "Human", image: "1760372518590-FANSI_TAB.jfif" },
  { name: "ALMOX-CV", category: "Syrups", type: "Human", image: "1760372358276-ALMOX-CV.jfif" },
  { name: "Arte-Fast", category: "Injections", type: "Human", image: "1760372465036-ARTE-FAST.jfif" },
  { name: "DEXA-0.5", category: "Tablets", type: "Human", image: "1775450502975-DEX.jfif" },
  { name: "DISPOSABLE NEEDLE 23G", category: "Disposals", type: "Human", image: "1760374673750-DISPOSABLE.jfif" },
  { name: "Ampicillin 1g", category: "Injections", type: "Human", image: "1772453459948-AMPICILLING.jfif" },
  { name: "AGRONITE 90% powder", category: "", type: "AGRO Bio Chemical", image: "1774509260976-AGRONITE.jfif" },
  { name: "PROCAINE PENCILLIN injection", category: "Injections", type: "Veterinary", image: "1774509288886-Pencillin.jfif" },
  { name: "SUPER X TRA", category: "", type: "AGRO Bio Chemical", image: "1774509357463-SUPER-XTRA.jfif" },
  { name: "Pracetemol infusion", category: "Infusions", type: "Human", image: "1775299082144-Pracetamol_infusion.jpg" },
  { name: "UNOVERMET 1% injection", category: "Injections", type: "Veterinary", image: "1775452389645-unovertmet.jpg" },
  { name: "Vitamin B6 injection", category: "Injections", type: "Human", image: "1775452936179-Vitamin_B-Complex.jpg" },
  { name: "GENTAMYCINE Drops", category: "Drops", type: "Human", image: "1775453697442-GENTAMYCINE.jpg" },
  { name: "Tacef 1g injection", category: "Injections", type: "Human", image: "1775455543357-Tacef.jpg" },
  { name: "OXYTETRACYLINE 50ml injection", category: "Injections", type: "Veterinary", image: "1775457715048-OXYTER.jpg" },
  { name: "Menda-100", category: "Tablets", type: "Human", image: "1775472455921-mENDA-100.jfif" },
  { name: "cotexine", category: "Tablets", type: "Human", image: "1775731241453-cotexin.jfif" },
  { name: "DUEXAMINE 600 mg", category: "Tablets & Bollus", type: "Veterinary", image: "1776006458916-DUEXAMINE_tab.jpg" },
  { name: "TETRAMISOLE 600 mg", category: "Tablets & Bollus", type: "Veterinary", image: "1776003053198-TETRAMISOLE1.jpg" },
  { name: "Albendazole 300mg Bolus", category: "Tablets & Bollus", type: "Veterinary", image: "1776003038116-ALBENDAZOLE1.jpg" },
  { name: "Sulphadine", category: "Tablets & Bollus", type: "Veterinary", image: "1776010470378-Sulphadine.jpg" },
  { name: "Albendazole 150", category: "Tablets & Bollus", type: "Veterinary", image: "1776004967435-Albendazole_150_mg.jpg" },
  { name: "Albendazole 2500mg Bolus", category: "Tablets & Bollus", type: "Veterinary", image: "1776005006686-Albendazole_2500_mg.jpg" },
  { name: "INVERMECTIN 10MG Bolus", category: "Tablets & Bollus", type: "Veterinary", image: "1776006267065-INVERMECTIN_1OMG.jpg" },
  { name: "Albendazole 2.5% oral Solution", category: "Oral Syrups", type: "Veterinary", image: "1776010442109-Albendazole_Oral_Solution.jpg" },
  { name: "WORMOL 1G.", category: "Tablets & Bollus", type: "Veterinary", image: "1776010343565-wormol_1G_..jpg" },
  { name: "TETANUS ANTITOXIN", category: "Injections", type: "Human", image: "1778420435801-TETANUS.jpg" },
];

const admins = [
  { name: "alainpharma", email: "alainpharma@gmail.com" },
];

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/alain_pharma";
const dbName = process.env.MONGO_DB_NAME || "alain_pharma";
const adminPassword = process.env.SEED_ADMIN_PASSWORD;

async function seed() {
  await mongoose.connect(mongoUri, { dbName });

  for (const admin of admins) {
    const email = admin.email.toLowerCase();
    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      await User.updateOne(
        { email },
        {
          $set: {
            name: admin.name,
            email,
            role: "admin",
          },
        }
      );
      continue;
    }

    if (!adminPassword) {
      console.warn(`Skipped creating ${email}: SEED_ADMIN_PASSWORD is not set.`);
      continue;
    }

    const password = await bcrypt.hash(adminPassword, 10);
    await User.create({
      name: admin.name,
      email,
      password,
      role: "admin",
    });
  }

  await Promise.all(
    products.map((product) =>
      Product.updateOne(
        { name: product.name, image: product.image },
        { $set: product },
        { upsert: true }
      )
    )
  );

  console.log(`Seed complete: ${products.length} products and ${admins.length} admin user.`);
  console.log(`MongoDB database: ${dbName}`);
  console.log(`Admin login email: ${admins[0].email}`);
  if (adminPassword) {
    console.log("Admin login password: loaded from SEED_ADMIN_PASSWORD");
  }

  await mongoose.disconnect();
}

seed().catch(async (error) => {
  console.error("Seed failed:", error);
  await mongoose.disconnect();
  process.exit(1);
});


