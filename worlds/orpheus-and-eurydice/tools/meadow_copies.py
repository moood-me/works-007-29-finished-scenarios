# Where the meadow's asphodels and its near tufts of grass stand (scenes/meadow: the copies of `asphodels` and
# `grass`): scattered at random (seeded), kept off the stream of forgetting (its path as stream.js has it), off the
# people and out of the line of sight from the viewer to Eurydice and Orpheus. Prints the two lists of copies.
import json, math, random
P = [(-14, 3.4), (-6, 4.2), (-2, 4.6), (1.5, 5.0), (4, 6.0), (6, 8), (8, 12), (12, 20), (20, 35), (32, 60), (50, 100), (75, 150)]


def dist(a, d):
    best = 1e9
    for (x0, y0), (x1, y1) in zip(P, P[1:]):
        vx, vy = x1 - x0, y1 - y0
        t = max(0, min(1, ((a - x0) * vx + (d - y0) * vy) / (vx * vx + vy * vy)))
        best = min(best, math.hypot(a - x0 - t * vx, d - y0 - t * vy))
    return best


random.seed(7)
people = [(-1.6, 5.75), (0.4, 6.4), (-6, 11), (-9.5, 16), (3.5, 14), (-3, 22), (6, 26), (-14, 28)]


def sight(a, d):
    return any(d < pd + 0.3 and abs(a - px * d / pd) < 0.8 for px, pd in people[:2])

fl = []
while len(fl) < 46:
    d = 3.2 + 38 * random.random() ** 1.8
    a = (random.random() - 0.5) * d * 2.0
    if abs(a / d) > 1.1: continue
    if dist(a, d) < 1.3: continue
    if any(math.hypot(a - x, d - y) < 0.9 for x, y in people) or sight(a, d): continue
    if any(math.hypot(a - x, d - y) < 0.8 for x, y, *_ in fl): continue
    c = {"across": round(a, 2), "distance": round(d, 2), "scale": round(0.8 + 0.45 * random.random(), 2)}
    if random.random() < 0.5: c["flip"] = True
    fl.append((a, d, c))
fl.sort(key=lambda t: -t[1])
print(json.dumps([c for *_, c in fl]))

gr = []
while len(gr) < 26:
    d = 2.8 + 6 * random.random()
    a = (random.random() - 0.5) * d * 2.1
    if dist(a, d) < 0.95: continue
    if any(math.hypot(a - x, d - y) < 0.7 for x, y in people) or sight(a, d): continue
    c = {"across": round(a, 2), "distance": round(d, 2), "scale": round(0.7 + 0.6 * random.random(), 2)}
    if random.random() < 0.5: c["flip"] = True
    gr.append((a, d, c))
gr.sort(key=lambda t: -t[1])
print(json.dumps([c for *_, c in gr]))
