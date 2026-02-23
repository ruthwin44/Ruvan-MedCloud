#!/bin/bash

python -m server_py.app &
FLASK_PID=$!

npx tsx server/index.ts &
NODE_PID=$!

trap "kill $FLASK_PID $NODE_PID 2>/dev/null" EXIT

wait
