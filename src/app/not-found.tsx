import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        fontFamily: 'Open Sans, sans-serif',
      }}
    >
      <h1 style={{ fontFamily: 'Unbounded, sans-serif', fontSize: '3rem', marginBottom: 16 }}>404</h1>
      <p style={{ marginBottom: 24, color: '#6B6B6B' }}>Página não encontrada</p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#2F5BFF',
          color: '#FFFFFF',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Voltar para a home
      </Link>
    </main>
  );
}
