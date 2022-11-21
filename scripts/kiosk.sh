#!/bin/bash

xset s noblank
xset s off
xset -dpms

unclutter -idle 0.5 -root &

sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/$USER/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/$USER/.config/chromium/Default/Preferences

/usr/bin/chromium-browser --disable-javascript-harmony-shipping --disable-web-security --cors-exempt-headers --noerrdialogs --disable-infobars --user-data-dir="/tmp/chrome_dev_kiosk" --kiosk file:///home/manager/kiosk/index.html &

while true; do
# Enable  or disable  Ctrl+Next keystroke if does/not neceessary
#          xdotool keydown ctrl+Next; xdotool keyup ctrl+Next; xdotool key ctrl+r;
      xdotool key ctrl+r;
      sleep 30
done


