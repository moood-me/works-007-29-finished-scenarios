"""Lays the copies of the cairn scene's boulders, heather and grass tufts into scenes/cairn/scene.json.

Run from the world's root: python tools/cairn_copies.py. Seeded: the same list every time. Keeps the places clear
where the people stand, the path runs, the cairn and the shelter are.
"""
import json
import math
import random
from pathlib import Path

SCENE = Path(__file__).resolve().parent.parent / 'scenes' / 'cairn' / 'scene.json'
CLEAR = [  # (across, distance, radius): nothing grows there
    (-0.9, 4.6, 1.1), (1.2, 4.1, 0.8), (-4.6, 10.2, 2.4), (2.8, 10.5, 3.4), (-7.4, 12.5, 3.6), (-2.6, 2.6, 1.0), (-3.4, 3.4, 0.8), (2.5, 2.3, 1.0),
]


def path_across(d):
    # the path's line (land.js), roughly
    pts = [(-8, 0.6), (2, 0.3), (6, -0.2), (9.5, -0.6), (14, -0.4), (22, 0.6), (34, -1.4), (52, -4), (75, -3), (110, -6)]
    for (d0, a0), (d1, a1) in zip(pts, pts[1:]):
        if d0 <= d <= d1:
            return a0 + (a1 - a0) * (d - d0) / (d1 - d0)
    return -6


def free(a, d, pad):
    if abs(a - path_across(d)) < 0.9 + pad:
        return False
    return all(math.hypot(a - x, d - y) > r + pad for x, y, r in CLEAR)


def lay(rng, n, dmin, dmax, spread, pad, scale, tints):
    out = []
    while len(out) < n:
        d = dmin + (dmax - dmin) * rng.random() ** 1.4
        a = (rng.random() - 0.5) * (spread + d * 0.9)
        if not free(a, d, pad):
            continue
        c = {'across': round(a, 2), 'distance': round(d, 2), 'scale': round(scale[0] + (scale[1] - scale[0]) * rng.random(), 2)}
        if rng.random() < 0.5:
            c['flip'] = True
        c['tint'] = rng.choice(tints)
        out.append(c)
    return out


def main():
    rng = random.Random(1)
    spec = json.loads(SCENE.read_text(encoding='utf-8'))
    copies = {
        'boulders': lay(rng, 14, 8, 60, 14, 1.2, (0.5, 1.5), ['#ffffff', '#f2f0ea', '#e8e8e4']),
        'heather': lay(rng, 45, 3, 40, 10, 0.4, (0.5, 1.0), ['#ffffff', '#f4eeee', '#ebe6e2']),
        'tufts': lay(rng, 110, 2.5, 30, 8, 0.3, (0.7, 1.4), ['#ffffff', '#f3f1e6', '#e9ebe0']),
    }
    for o in spec['objects']:
        if o['id'] in copies:
            o['copies'] = copies[o['id']]
    SCENE.write_text(json.dumps(spec, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
