# snowflake-cli

An npm module to run [Snowflake](https://snowflake.torproject.org/) in
a headless browser to help censored users connect to the Tor network.

Note: depending on your environment, it may be simpler to run Snowflake using
[Docker/Ansible or compiling the golang
source](https://community.torproject.org/relay/setup/snowflake/standalone/).
You can also consider running an [obfs4
bridge](https://community.torproject.org/relay/setup/bridge/).

## installation

```
npm install snowflake-cli
```

then run `snowflake-cli` to start the proxy.

on linux, you may need to install the following prerequisites:

```
sudo apt install npm libatk1.0-0 libatk-bridge2.0-0 libcups2 libxkbcommon0
libxdamage1 libgbm1 libpango-1.0-0 libcairo2
```
