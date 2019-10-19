from datetime import datetime
from pyorbital.orbital import Orbital
from pyorbital import tlefile
from numpy import interp
import matplotlib.pyplot as plt


# tle = tlefile.read('noaa 18', 'tle.txt')


def lonlatalt(llt):

    # print(llt[0])

    str1 = ""

    str1 += str(llt[0])
    str1 += (" ")
    str1 += str(llt[1])
    str1 += (" ")
    str1 += str(llt[2])
    return str1


fp = open('tle.txt', 'r')
wr = open('lonlatalt.txt', 'a')

# now = datetime(2019, 10, 19, 12, 0)
now = datetime.utcnow()

center_lat = 25
center_long = 25

lat_margin = 20
long_margin = 20

good_debris = []

width = 1000
height = 800

name = fp.readline()
line1_in = fp.readline()
line2_in = fp.readline()

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
        good_debris.append(params)

    # print(lonlatalt())
    # wr.write(lonlatalt(orb.get_lonlatalt(now)))

# print(good_debris)

# long_debris = (sorted(good_debris, key=lambda x: x[0]))
# lat_debris = (sorted(good_debris, key=lambda x: x[1]))

# print(long_debris)

screen_pos = []

for ll in good_debris:

    x = int(interp(ll[0], [center_long - long_margin,
                           center_long + long_margin], [0, width]))
    y = int(interp(ll[1], [center_lat - lat_margin,
                           center_lat + lat_margin], [0, height]))

    screen_pos.append((x, y))

    plt.plot(x, y)


plt.show()

print(screen_pos)
print(len(screen_pos))


fp.close()
wr.close()

# orb = Orbital("FENGYUN 1C",
#               line1="1 25730U 99025A   19291.58809499  .00000557  00000-0  30807-3 0  9994",
#               line2="2 25730  99.0715 292.7361 0014419 341.2350 166.3992 14.15590376 53079")
# now = datetime(2019, 1, 1, 1, 1)
# orb.get_position(now)
