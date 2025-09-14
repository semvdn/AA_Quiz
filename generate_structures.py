import os
from rdkit import Chem
from rdkit.Chem import Draw, rdDepictor
from rdkit.Chem.AllChem import Compute2DCoords

# --- Configuration ---
OUTPUT_DIR = "assets/amino_acid_structures"
IMG_SIZE = (500, 500)

# Prefer RDKit's CoordGen for cleaner 2D layouts
rdDepictor.SetPreferCoordGen(True)

# --- Amino Acid Data (zwitterionic backbone; sensible side-chain states) ---
# File names MUST match your app's script.js references: e.g. "alanine.png", "aspartic_acid.png", etc.
AMINO_ACIDS = [
    {"name": "Alanine",         "smiles": "[NH3+][C@@H](C)C(=O)[O-]"},
    {"name": "Arginine",        "smiles": "[NH3+][C@@H](CCCNC(=N)N)C(=O)[O-]"},  # guanidino shown neutral (depicts fine)
    {"name": "Asparagine",      "smiles": "[NH3+][C@@H](CC(=O)N)C(=O)[O-]"},
    {"name": "Aspartic Acid",   "smiles": "[NH3+][C@@H](CC(=O)[O-])C(=O)[O-]"},
    {"name": "Cysteine",        "smiles": "[NH3+][C@@H](CS)C(=O)[O-]"},
    {"name": "Glutamic Acid",   "smiles": "[NH3+][C@@H](CCC(=O)[O-])C(=O)[O-]"},
    {"name": "Glutamine",       "smiles": "[NH3+][C@@H](CCC(=O)N)C(=O)[O-]"},
    {"name": "Glycine",         "smiles": "[NH3+]CC(=O)[O-]"},
    {"name": "Histidine",       "smiles": "[NH3+][C@@H](Cc1c[nH]cn1)C(=O)[O-]"},  # neutral imidazole
    {"name": "Isoleucine",      "smiles": "CC[C@H](C)[C@@H]([NH3+])C(=O)[O-]"},
    {"name": "Leucine",         "smiles": "CC(C)C[C@@H]([NH3+])C(=O)[O-]"},
    {"name": "Lysine",          "smiles": "[NH3+][C@@H](CCCC[NH3+])C(=O)[O-]"},
    {"name": "Methionine",      "smiles": "[NH3+][C@@H](CCSC)C(=O)[O-]"},
    {"name": "Phenylalanine",   "smiles": "[NH3+][C@@H](Cc1ccccc1)C(=O)[O-]"},
    {"name": "Proline",         "smiles": "[NH2+]1CCCC[C@H]1C(=O)[O-]"},
    {"name": "Serine",          "smiles": "[NH3+][C@@H](CO)C(=O)[O-]"},
    {"name": "Threonine",       "smiles": "C[C@H](O)[C@@H]([NH3+])C(=O)[O-]"},
    {"name": "Tryptophan",      "smiles": "[NH3+][C@@H](Cc1c[nH]c2ccccc12)C(=O)[O-]"},
    {"name": "Tyrosine",        "smiles": "[NH3+][C@@H](Cc1ccc(O)cc1)C(=O)[O-]"},
    {"name": "Valine",          "smiles": "CC(C)[C@@H]([NH3+])C(=O)[O-]"},
]

# Expected file names used by your app (sanity check after generation)
EXPECTED_FILES = {
    "Alanine": "alanine.png",
    "Arginine": "arginine.png",
    "Asparagine": "asparagine.png",
    "Aspartic Acid": "aspartic_acid.png",
    "Cysteine": "cysteine.png",
    "Glutamic Acid": "glutamic_acid.png",
    "Glutamine": "glutamine.png",
    "Glycine": "glycine.png",
    "Histidine": "histidine.png",
    "Isoleucine": "isoleucine.png",
    "Leucine": "leucine.png",
    "Lysine": "lysine.png",
    "Methionine": "methionine.png",
    "Phenylalanine": "phenylalanine.png",
    "Proline": "proline.png",
    "Serine": "serine.png",
    "Threonine": "threonine.png",
    "Tryptophan": "tryptophan.png",
    "Tyrosine": "tyrosine.png",
    "Valine": "valine.png",
}

def safe_parse_smiles(name: str, smiles: str):
    """Parse SMILES and sanitize; return None if it fails."""
    try:
        mol = Chem.MolFromSmiles(smiles, sanitize=True)
        if mol is None:
            print(f"✗ RDKit could not parse SMILES for {name}")
            return None
        return mol
    except Exception as e:
        print(f"✗ Error parsing {name}: {e}")
        return None

def draw_png(mol, path: str):
    """Draw a molecule PNG with transparent background and kekulization."""
    try:
        Compute2DCoords(mol)
        opts = Draw.MolDrawOptions()
        opts.clearBackground = True
        # Slightly thicker bonds / larger font help at 500×500
        opts.bondLineWidth = 2
        img = Draw.MolToImage(mol, size=IMG_SIZE, options=opts, kekulize=True)
        img.save(path)
        return True
    except Exception as e:
        print(f"✗ Drawing failed for {os.path.basename(path)}: {e}")
        return False

def generate_structures():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"📁 Output directory ready: {OUTPUT_DIR}")

    made = []
    for aa in AMINO_ACIDS:
        name = aa["name"]
        smiles = aa["smiles"]

        filename = EXPECTED_FILES.get(name, f"{name.lower().replace(' ', '_')}.png")
        outpath = os.path.join(OUTPUT_DIR, filename)

        mol = safe_parse_smiles(name, smiles)
        if mol is None:
            continue

        if draw_png(mol, outpath):
            print(f"✅ {name:15s} → {outpath}")
            made.append(filename)
        else:
            print(f"❌ Failed to render {name}")

    # --- Validation report ---
    print("\n— Validation —")
    expected = set(EXPECTED_FILES.values())
    made_set = set(made)
    missing = sorted(expected - made_set)
    extras = sorted(made_set - expected)

    if missing:
        print("⚠ Missing files:", ", ".join(missing))
    else:
        print("🎉 All expected files generated.")

    if extras:
        print("ℹ Extra files generated (not referenced by app):", ", ".join(extras))

    print("\nDone.")

if __name__ == "__main__":
    generate_structures()
