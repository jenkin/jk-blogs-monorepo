---
title: 'Networking'
description: 'Modem, routers, switches, and access points'
order: 2
---

My house is connected to the Internet via two connections and two different ISPs:
via FTTH at 1 Gbps and via 5G at an average of 300 Mbps.

## FTTH

The fiber enters the house on the ground floor and is connected to an [ONT](https://hack-gpon.org/ont-zte-f6005v3/) and then to the [modem](https://www.tim.it/prodotti/tablet-pc-modem/modem-tim-hub-plus) with 1 Gbps WAN and LAN ports only. Both are under an [uninterruptible power supply](https://www.se.com/it/it/product/BE850G2-IT/apc-backups-850-va-230-v-porte-di-ricarica-usb-typec-e-a-8-prese-schuko-cee-7-2-sovratensioni/) by APC.

## Multi-WAN router

A Cat8 LAN cable carries the signal to the second floor where I have my lab. Here it's connected to the WAN port of a [1 Gbps multi-WAN router](https://www.cudy.com/it-it/products/r700-1-0) by Cudy.

## 5G

On the roof I installed a [5G antenna](https://www.kaserstore.com/collections/mondo-4g-5g-lte/products/kaser-antenna-5g-4g-lte-pannello-esterno-mimo-698-2700-3300-3800-mhz-guadagno-fino-12-dbi-cavi-da-10m-v3) by Kaser that amplifies the input signal to a [5G modem](https://www.tp-link.com/it/home-networking/5g-4g-router/deco-x3000-5g/) by TP-Link. It's powered by an [APC UPS](https://www.se.com/it/it/product/BE400-IT/apc-backups-400-230-v-italia/) and it's connected to the multi-WAN router as backup connection via a Cat6 cable.

## Access point

Finally the multi-WAN router carries the signal to an [ASUS ZenWifi](https://www.asus.com/it/networking-iot-servers/whole-home-mesh-wifi-system/zenwifi-wifi-systems/asus-zenwifi-xd6/) router and access point to which my [server](/lab/infrastructure/server) is connected via a Cat6 cable. Routers and server are powered by another [APC UPS](https://www.se.com/it/it/product/BR1600SI/apc-backups-pro-1600-va-960-w-tower-230-v-8-prese-iec-c13-onda-sinusoidale-avr-porte-usb-tipo-a-+-c-lcd-batteria-sostituibile-dallutente/).
