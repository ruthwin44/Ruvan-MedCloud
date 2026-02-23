import os
from flask import Flask, send_from_directory
from server_py.db import init_tables
from server_py.seed import seed_database
from server_py.routes import api

app = Flask(__name__, static_folder=None)

app.register_blueprint(api)

init_tables()
seed_database()

dist_path = os.path.join(os.path.dirname(__file__), "..", "dist", "public")

if os.path.exists(dist_path):
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_static(path):
        full_path = os.path.join(dist_path, path)
        if path and os.path.isfile(full_path):
            return send_from_directory(dist_path, path)
        return send_from_directory(dist_path, "index.html")

public_path = os.path.join(os.path.dirname(__file__), "..", "client", "public")

@app.route("/images/<path:filename>")
def serve_images(filename):
    return send_from_directory(os.path.join(public_path, "images"), filename)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    is_dev = os.environ.get("NODE_ENV") != "production"
    app.run(host="0.0.0.0", port=port, debug=is_dev, use_reloader=is_dev)
