"""When run, this app automatically redirects to the Guardian Quick Crossword or Observer Speedy Crossword published that day.
"""


import datetime
import webbrowser


today = datetime.date.today()
reference_date = datetime.date(2018, 6, 5)
day_difference = (today - reference_date).days

if day_difference % 7 == 0:
    x = int(day_difference / 7.0 + 1191)
    webbrowser.open('https://www.theguardian.com/crosswords/speedy/'+str(x))
else:
    x = int(day_difference % 7 + ((day_difference - day_difference%7) / 7.0) * 6 + 15000)
    webbrowser.open('https://www.theguardian.com/crosswords/quick/'+str(x))









