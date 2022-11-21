Kiosk - Documentation

Original Guide && Thanks
https://pimylifeup.com/raspberry-pi-kiosk/

---

- Main Service
/lib/systemd/system/kiosk.service

---

- Main script
~/kiosk/scripts/kiosk.sh

---
# Start kiosk service
sudo systemctl start kiosk.service
# Start kiosk service
sudo systemctl stop kiosk.service
# Restart kiosk service - 
# CAUTION: Mostly is better to do STOP & START.
sudo systemctl restart kiosk.service
