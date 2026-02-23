from server_py.db import get_connection, get_dict_cursor


def get_products():
    conn = get_connection()
    try:
        cur = get_dict_cursor(conn)
        cur.execute("SELECT * FROM products")
        return cur.fetchall()
    finally:
        conn.close()


def get_products_by_category(category):
    conn = get_connection()
    try:
        cur = get_dict_cursor(conn)
        cur.execute("SELECT * FROM products WHERE category = %s", (category,))
        return cur.fetchall()
    finally:
        conn.close()


def get_product(product_id):
    conn = get_connection()
    try:
        cur = get_dict_cursor(conn)
        cur.execute("SELECT * FROM products WHERE id = %s", (product_id,))
        return cur.fetchone()
    finally:
        conn.close()


def create_contact_submission(data):
    conn = get_connection()
    try:
        cur = get_dict_cursor(conn)
        cur.execute(
            """INSERT INTO contact_submissions (name, email, phone, company, message)
               VALUES (%s, %s, %s, %s, %s)
               RETURNING *""",
            (data["name"], data["email"], data.get("phone"), data.get("company"), data["message"]),
        )
        result = cur.fetchone()
        conn.commit()
        return result
    finally:
        conn.close()


def get_contact_submissions():
    conn = get_connection()
    try:
        cur = get_dict_cursor(conn)
        cur.execute("SELECT * FROM contact_submissions ORDER BY created_at DESC")
        return cur.fetchall()
    finally:
        conn.close()
