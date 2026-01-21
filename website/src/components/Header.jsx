function Header() {
  return (
    <div style={{ 
      backgroundColor: '3f3f4f6',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '16px',
      width: '100%'
    }}>
      <div>
        <a href="/home" style={{ color: 'black', fontSize: '18px', fontWeight: '500' }}>
          FlakeMate
        </a>
      </div>
      
      <div style={{ display: 'flex', gap: '40px' }}>
        <a href="/dashboard" >
          Dashboard
        </a>
        <a href="/profile" style={{ color: 'black' }}>
          My Profile
        </a>
      </div>
    </div>
  );
}

export default Header;