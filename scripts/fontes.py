"""Gera a fonte de display do site (instância estática da Archivo).

A Archivo variável (latin, eixos de largura e peso) tem ~100 kB. O site só usa um ponto desse espaço:
largura 62 (a mais condensada) e peso 800. Este script fixa esses valores e grava um woff2 estático
pequeno em src/assets/fonts/, que o Astro serve com hash e cache longo.

Uso (precisa de fontTools e brotli: pip install fonttools brotli):
    python scripts/fontes.py
"""
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

raiz = Path(__file__).resolve().parent.parent
origem = raiz / "node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2"
destino = raiz / "src/assets/fonts/archivo-condensada-800.woff2"
destino.parent.mkdir(parents=True, exist_ok=True)

fonte = TTFont(origem)
estatica = instantiateVariableFont(fonte, {"wght": 800, "wdth": 62}, updateFontNames=False)
estatica.flavor = "woff2"
estatica.save(destino)
print(f"{destino.relative_to(raiz)}  {destino.stat().st_size // 1024} kB")
