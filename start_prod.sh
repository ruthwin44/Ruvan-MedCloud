#!/bin/bash
export NODE_ENV=production
exec gunicorn --bind "0.0.0.0:${PORT:-5000}" --workers 2 server_py.app:app
