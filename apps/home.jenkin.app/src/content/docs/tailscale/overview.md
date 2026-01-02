---
title: 'Overview'
description: 'A Zero Trust identity-based connectivity platform'
order: 1
---

[Tailscale](https://tailscale.com/) is a full-featured solution for peer-to-peer networks powered by [WireGuard](https://www.wireguard.com/) tunnels.

I have two stringent requirements that a solution like Tailscale meets very well:
1. I don't want that remote servers know my real IP when I send requests from a service hosted by my home server
2. I want that a service running on my home server is publicly (and securely) reachable from outside without opening my router ports

Tailscale Inc. offers a full-managed cloud-based solution, but [client-side](https://github.com/tailscale/tailscale) and [server-side](https://github.com/juanfont/headscale) code is open,
so I managed to self-host my own solution.
