from flask import Blueprint, jsonify, request
from server_py import storage

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/products", methods=["GET"])
def list_products():
    products = storage.get_products()
    result = []
    for p in products:
        result.append({
            "id": p["id"],
            "name": p["name"],
            "description": p["description"],
            "category": p["category"],
            "image": p["image"],
            "features": list(p["features"]) if p["features"] else [],
        })
    return jsonify(result)


@api.route("/products/<int:product_id>", methods=["GET"])
def get_product(product_id):
    product = storage.get_product(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404
    return jsonify({
        "id": product["id"],
        "name": product["name"],
        "description": product["description"],
        "category": product["category"],
        "image": product["image"],
        "features": list(product["features"]) if product["features"] else [],
    })


@api.route("/contact", methods=["POST"])
def submit_contact():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid request body"}), 400

    errors = []
    if not data.get("name"):
        errors.append("Name is required")
    if not data.get("email"):
        errors.append("Email is required")
    if not data.get("message"):
        errors.append("Message is required")

    if errors:
        return jsonify({"error": "Invalid contact form data", "details": errors}), 400

    submission = storage.create_contact_submission(data)
    result = {
        "id": submission["id"],
        "name": submission["name"],
        "email": submission["email"],
        "phone": submission["phone"],
        "company": submission["company"],
        "message": submission["message"],
        "createdAt": submission["created_at"].isoformat() if submission["created_at"] else None,
    }
    return jsonify(result), 201
