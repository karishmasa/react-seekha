function WelcomeMessage({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
        {isLoggedIn && <button>Logout</button>}
      </div>
    );
  }
  
  export default WelcomeMessage;
  