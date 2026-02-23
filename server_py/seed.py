from server_py.db import get_connection, get_dict_cursor

SEED_PRODUCTS = [
    {
        "name": "Anatomograph",
        "description": "Advanced AI-powered anatomical visualization platform featuring 3D anatomical atlas, DICOM-based 3D model generation, AI segmentation and analysis, and interactive quiz system for medical education and clinical research.",
        "category": "Digital Health",
        "image": "/images/product-anatomograph.png",
        "features": ["3D Anatomical Atlas", "DICOM Viewer", "AI Segmentation", "Medical Education"],
    },
    {
        "name": "Staan OT Table Glory",
        "description": "Premium hydraulic surgical operating table with electro-hydraulic positioning, radiolucent tabletop, and modular accessories. Designed for multi-specialty surgical procedures with precise height and tilt adjustments.",
        "category": "Surgical Equipment",
        "image": "/images/product-ot-table.png",
        "features": ["Electro-Hydraulic", "Radiolucent Top", "Multi-Specialty", "Modular Design"],
    },
    {
        "name": "Staan Discover LED",
        "description": "High-performance surgical LED ceiling light with shadowless illumination, adjustable color temperature, and endoscope mode. Features unique focus technology and ergonomic sterilizable handle for optimal surgical visibility.",
        "category": "Surgical Equipment",
        "image": "/images/product-ot-lights.png",
        "features": ["Shadowless LED", "Color Temperature Control", "Endoscope Mode", "Sterilizable Handle"],
    },
    {
        "name": "Origin Ventilator",
        "description": "Portable life support ventilator for adult and pediatric patients with both invasive and non-invasive ventilation modes. Features intuitive touchscreen interface, comprehensive alarm management, and extended battery life for transport use.",
        "category": "Respiratory Care",
        "image": "/images/product-ventilator.png",
        "features": ["Invasive & Non-Invasive", "Touchscreen Display", "Portable Design", "Extended Battery"],
    },
]


def seed_database():
    conn = get_connection()
    try:
        cur = get_dict_cursor(conn)
        cur.execute("SELECT COUNT(*) as count FROM products")
        result = cur.fetchone()
        if result["count"] == 0:
            for p in SEED_PRODUCTS:
                cur.execute(
                    "INSERT INTO products (name, description, category, image, features) VALUES (%s, %s, %s, %s, %s)",
                    (p["name"], p["description"], p["category"], p["image"], p["features"]),
                )
            conn.commit()
            print(f"Database seeded with {len(SEED_PRODUCTS)} products")
        else:
            print(f"Database already has {result['count']} products, skipping seed")
    finally:
        conn.close()
