📂 Phase 1: Golang WireGuard Backend Scaffold

guard-vpn/
└── core-vpn-engine/
    ├── cmd/
    │   ├── vpn-server/
    │   │   └── main.go              # Server binary entry point
    │   └── vpn-client/
    │       └── main.go              # Client binary entry point
    │
    ├── pkg/
    │   ├── wireguard/
    │   │   ├── config.go            # Load/generate WG config
    │   │   ├── keys.go              # Key generation & storage
    │   │   ├── server.go            # Server-side setup
    │   │   └── client.go            # Client-side setup
    │   │
    │   ├── networking/
    │   │   ├── tun.go               # TUN device handling
    │   │   ├── routing.go           # Add/remove routes
    │   │   ├── firewall_linux.go    # Kill switch via iptables
    │   │   ├── firewall_windows.go  # Kill switch via netsh
    │   │   └── firewall_darwin.go   # Kill switch via pfctl
    │   │
    │   ├── killswitch/
    │   │   └── killswitch.go        # Monitor tunnel & block traffic if down
    │   │
    │   ├── splittunneling/
    │   │   ├── apps.go              # App-based rules
    │   │   └── routing.go           # Domain/IP rules
    │   │
    │   ├── dnsprotection/
    │   │   └── dns.go               # Force DNS via VPN
    │   │
    │   ├── aiserverselect/
    │   │   ├── ping.go              # Ping servers
    │   │   └── selector.go          # Pick best server
    │   │
    │   ├── config/
    │   │   └── config.go            # Load from YAML/ENV
    │   │
    │   └── logging/
    │       └── logging.go           # Centralized logger
    │
    ├── internal/
    │   ├── utils/
    │   │   └── exec.go              # Run shell commands
    │   └── platform/
    │       └── osdetect.go          # OS detection helpers
    │
    ├── test/
    │   ├── server_test.go           # Test server setup
    │   └── client_test.go           # Test client connection
    │
    └── Makefile                     # Build & run shortcuts

