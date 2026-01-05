---
title: 'Regular nodes'
description: 'Join the tailnet'
order: 3
---

Every node that want to join your tailscale network must have [Tailscale Client](https://tailscale.com/download) installed.

## Installation

Supposing a GNU/Linux Debian 13 Trixie operating system, you can install it with `curl -fsSL https://tailscale.com/install.sh | sh`.

## Configuration

Then you need to join the network using a running [headscale server](/lab/tailscale/headscale).

```shell
tailscale up \
    --login-server=https://hs.yourdomain.app \
    --accept-dns=true \
    --hostname=your-node-name
```

The first time you need to accept the new node following the instructions shown.

Then you can check the list of registered nodes on headscale server with `headscale nodes list`.

### Using an exit node

If you want to forward all outgoing traffic through another node configured as [exit node](/lab/tailscale/exit-nodes), you need to set it up.

```shell
tailscale set \
    --exit-node=100.64.0.X \
    --exit-node-allow-lan-access
```

### Firewall setup

If your node is exposed to Internet (ie. a VPS with a public IP) and you want to control open ports, you can allow udp traffic on port 41641. Using ufw: `ufw allow 41641/udp`.
