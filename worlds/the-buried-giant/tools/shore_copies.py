"""Lays the copies of the shore scene's rocks and bank grass into scenes/shore/scene.json.

Run from the world's root: python tools/shore_copies.py. Seeded: the same list every time. Rocks lie along the water's
edge either side (never between the people, the stone and the boat); the grass grows on the bank on the left.
"""
import json
import random
from pathlib import Path

SCENE = Path(__file__).resolve().parent.parent / 'scenes' / 'shore' / 'scene.json'


def land(a, d):  # as the scene's lib.land
    x = max(-40, d - 0.012 * a * a)
    bank = min(7, 0.05 * max(0, -a - 5) ** 1.6) * (1 - min(1, max(0, (d - 60) / 60)))
    return max(-1.5, -0.032 * x - 0.12 * max(0, x - 9.5) + bank)


def shore_at(a):
    lo, hi = -10.0, 400.0
    for _ in range(40):
        m = (lo + hi) / 2
        if land(a, m) > -0.3:
            lo = m
        else:
            hi = m
    return lo


def main():
    rng = random.Random(7)
    rocks = []
    for a, n in ((7.5, 3), (11, 3), (16, 3), (22, 2), (-9, 3), (-12, 2)):
        for _ in range(n):
            aa = a + rng.uniform(-1.5, 1.5)
            d = shore_at(aa) + rng.uniform(-1.4, 1.8)
            rocks.append({'across': round(aa, 2), 'distance': round(d, 2), 'scale': round(rng.uniform(0.5, 1.4), 2),
                          'flip': rng.random() < 0.5, 'tint': rng.choice(['#ffffff', '#f2eee8', '#e6e2dc'])})
    grass = []
    while len(grass) < 46:
        d = rng.uniform(-1, 16)
        a = -8.4 - 0.12 * d - rng.uniform(0, 8)
        grass.append({'across': round(a, 2), 'distance': round(d, 2), 'scale': round(rng.uniform(0.7, 1.4), 2), 'flip': rng.random() < 0.5})
    # a few smaller stones half sunk in the shingle near the viewer, in the corners
    for a, d, sc in ((-2.3, 2.2, 0.34), (-2.9, 3.1, 0.25), (2.4, 2.0, 0.4), (3.1, 2.9, 0.27), (1.7, 1.8, 0.25)):
        rocks.append({'across': a, 'distance': d, 'scale': sc, 'flip': rng.random() < 0.5, 'tint': '#f2eee8'})
    for a, d in ((-2.5, 2.5), (-3.2, 3.3), (-2.0, 1.9), (2.8, 2.3)):
        grass.append({'across': a, 'distance': d, 'scale': round(rng.uniform(0.8, 1.2), 2), 'flip': rng.random() < 0.5})
    spec = json.loads(SCENE.read_text(encoding='utf-8'))
    for o in spec['objects']:
        if o['id'] == 'rocks':
            o['copies'] = rocks
        if o['id'] == 'grass':
            o['copies'] = grass
    SCENE.write_text(json.dumps(spec, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
