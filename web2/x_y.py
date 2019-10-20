from datetime import datetime
from pyorbital.orbital import Orbital
# from pyorbital import tlefile
from numpy import interp
import http.server
import socketserver

PORT = 8001

Handler = http.server.SimpleHTTPRequestHandler


poi = []
poi.append((40, -100, 20))  # north america
poi.append((-11, -59, 20))  # south america
poi.append((0, 21, 25))  # africa
poi.append((0, -160, 60))  # pacific
poi.append((10, -32, 30))  # atlantic
poi.append((50, 14, 25))  # europa
poi.append((40, 85, 35))  # asia
poi.append((-28, 76, 40))  # indian
poi.append((-90, 180, 20))  # antarctica
poi.append((90, 0, 20))  # north pole


def get_coords(lat_in, long_in, margins, height, width, out_file):

    fp = open('tle.txt', 'r')
    wr = open(out_file, 'a')
    now = datetime.utcnow()

# now = datetime(2019, 10, 19, 12, 0)

    center_lat = lat_in
    center_long = long_in

    lat_margin = margins
    long_margin = margins

    good_debris = []

    name = fp.readline()
    line1_in = fp.readline()
    line2_in = fp.readline()
    screen_pos = []

    while name:
        name = fp.readline()
        if not name:
            break
        line1_in = fp.readline()
        line2_in = fp.readline()
        orb = Orbital(name, line1=line1_in, line2=line2_in)

        params = orb.get_lonlatalt(now)

        # print(params)

        if (params[0] >= center_long - long_margin and params[0] <= center_long + long_margin and params[1] >= center_lat - lat_margin and params[1] <= center_lat + lat_margin):
            # good_debris.append(params)
            x = int(interp(params[0], [center_long - long_margin,
                                       center_long + long_margin], [0, width]))
            y = int(interp(params[1], [center_lat - lat_margin,
                                       center_lat + lat_margin], [0, height]))

            screen_pos.append((x, y))

            wr.write(str(x) + " " + str(y) + "\n")

    print(screen_pos)
    print(len(screen_pos))

    fp.close()
    wr.close()


regions = ["namerica.txt", "samerica.txt", "africa.txt", "pacific.txt", "atlantic.txt",
           "europa.txt", "asia.txt", "indian.txt", "antarctica.txt", "npole.txt"]

i = 0
for p in poi:
    get_coords(p[0], p[1], p[2], 900, 1200, regions[i])
    i += 1

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
