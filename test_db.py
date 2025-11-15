import socket

print("Testing connection to Supabase...")
try:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(5)
    result = sock.connect_ex(('db.avuyleqwrkebkcsgufaf.supabase.co', 5432))
    if result == 0:
        print("✓ Port 5432 is open and accessible")
    else:
        print(f"✗ Port 5432 is closed or blocked (error code: {result})")
    sock.close()
except Exception as e:
    print(f"✗ Connection failed: {e}")

# Тепер спробуйте підключитися через psycopg2
import psycopg

try:
    conn = psycopg.connect(
        host="db.avuyleqwrkebkcsgufaf.supabase.co",
        port=5432,
        dbname="postgres",
        user="postgres",
        password="Videoproduction123Videoproduction",
        connect_timeout=10
    )
    print("✓ PostgreSQL connection successful!")
    conn.close()
except Exception as e:
    print(f"✗ PostgreSQL connection failed: {e}")
    import traceback
    traceback.print_exc()