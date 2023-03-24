from tqdm import tqdm
import subprocess
import matplotlib.pyplot as plt
import numpy as np
from sklearn.preprocessing import LabelEncoder
# Récupération des versions (tags Git)
versions = subprocess.run(["git", "tag"], capture_output=True, text=True).stdout.splitlines()

# Initialisation de la matrice
matrix = {v: {} for v in versions}

# Récupération des fichiers dans chaque version
for v in tqdm(versions, desc="Processing versions"):
    files = subprocess.run(["git", "ls-files"], capture_output=True, text=True).stdout.splitlines()


    # Pour chaque fichier, récupération de la dernière personne qui a fait une modification
    for f in tqdm(files, desc="Processing files", leave=False):
        output = subprocess.run(["git", "log", "-1", "--pretty=%an", v+"..HEAD", "--", f], capture_output=True, text=True).stdout
        author = output.strip()

        matrix[v][f] = author

# Affichage de la matrice
with open("matrix.txt", "w") as file:
    for v in matrix:
        file.write(v + "\n")
        for f in matrix[v]:
            file.write("  " + f + ":" + str(matrix[v][f]) + "\n")
