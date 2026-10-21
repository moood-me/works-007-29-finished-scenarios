"""Lays the copies of the lair scene's crags, boulders and grass into scenes/lair/scene.json.

Run from the world's root: python tools/lair_copies.py. Seeded: the same list every time. Crags stand round the pit's
far rim and on the slopes either side, a few fallen on its floor — never on the near rim before her; boulders and
grass about the path and the near ground, clear of where the people stand; the tall ones in the near corners frame
the picture.
"""
import json
import math
import random
from pathlib import Path

SCENE = Path(__file__).resolve().parent.parent / 'scenes' / 'lair' / 'scene.json'
PIT = (9, 22, 10)  # as the scene's lib.PIT: across, distance, radius
PEOPLE = ((0.3, 5.2), (-1.5, 6.9), (-2.5, 7.1), (-3.0, 6.5))


def pit_q(a, d):
    return math.hypot((a - PIT[0]) / PIT[2], (d - PIT[1]) / PIT[2])


def clear_of_people(a, d, gap):
    return all(math.hypot(a - pa, d - pd) > gap for pa, pd in PEOPLE)


def main():
    rng = random.Random(11)
    tints = ['#ffffff', '#f2eee8', '#e8e4de', '#f6f0ea']
    crags = []
    # round the far rim and the right side of the pit (angles measured from the pit's middle: 0 across to the right,
    # 90 away from the viewer)
    for deg in (-25, 0, 20, 40, 58, 75, 92, 108, 125, 142):
        t = math.radians(deg + rng.uniform(-6, 6))
        k = rng.uniform(1.04, 1.15)
        crags.append({'across': round(PIT[0] + math.cos(t) * PIT[2] * k, 2), 'distance': round(PIT[1] + math.sin(t) * PIT[2] * k, 2),
                      'scale': round(rng.uniform(0.8, 1.6), 2), 'flip': rng.random() < 0.5, 'tint': rng.choice(tints)})
    # fallen on the floor behind her
    for a, d, s in ((4.5, 26.5, 0.55), (13.5, 26, 0.7), (9.5, 28.5, 0.5)):
        crags.append({'across': a, 'distance': d, 'scale': s, 'flip': rng.random() < 0.5, 'tint': rng.choice(tints)})
    # up the slope on the left, beyond the path, and far up either side
    for _ in range(7):
        d = rng.uniform(11, 40)
        crags.append({'across': round(-9 - 0.25 * d - rng.uniform(0, 8), 2), 'distance': round(d, 2), 'scale': round(rng.uniform(0.7, 1.5), 2),
                      'flip': rng.random() < 0.5, 'tint': rng.choice(tints)})
    for _ in range(4):
        d = rng.uniform(40, 80)
        crags.append({'across': round(rng.uniform(-40, 50), 2), 'distance': round(d, 2), 'scale': round(rng.uniform(1.4, 2.6), 2),
                      'flip': rng.random() < 0.5, 'tint': rng.choice(tints)})
    boulders = [
        {'across': 3.0, 'distance': 2.5, 'scale': 1.1, 'flip': False, 'tint': '#f2eee8'},
        {'across': -2.7, 'distance': 2.4, 'scale': 0.45, 'flip': True, 'tint': '#ffffff'},
    ]
    while len(boulders) < 14:
        d, a = rng.uniform(3, 16), rng.uniform(-7, 5)
        if pit_q(a, d) < 1.1 or not clear_of_people(a, d, 1.2) or abs(a) < 1 and d < 5:
            continue
        boulders.append({'across': round(a, 2), 'distance': round(d, 2), 'scale': round(rng.uniform(0.25, 0.6), 2),
                         'flip': rng.random() < 0.5, 'tint': rng.choice(tints)})
    tufts = []
    while len(tufts) < 70:
        d, a = rng.uniform(1.5, 24), rng.uniform(-10, 7)
        if pit_q(a, d) < 1.08 or not clear_of_people(a, d, 0.8):
            continue
        tufts.append({'across': round(a, 2), 'distance': round(d, 2), 'scale': round(rng.uniform(0.6, 1.3), 2), 'flip': rng.random() < 0.5})
    for a, d, s in ((-2.3, 1.9, 1.9), (-2.9, 2.6, 1.6), (-1.9, 2.4, 1.3), (2.2, 1.8, 1.7), (3.6, 3.0, 1.5)):
        tufts.append({'across': a, 'distance': d, 'scale': s, 'flip': rng.random() < 0.5})
    spec = json.loads(SCENE.read_text(encoding='utf-8'))
    for o in spec['objects']:
        if o['id'] == 'crags':
            o['copies'] = crags
        if o['id'] == 'boulders':
            o['copies'] = boulders
        if o['id'] == 'tufts':
            o['copies'] = tufts
    SCENE.write_text(json.dumps(spec, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
