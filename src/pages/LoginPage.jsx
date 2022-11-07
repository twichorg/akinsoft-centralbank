import React from 'react'

const LoginPage = () => {
  const [email, setEmail] = React.useState(""); // Email değişkeni

  const [password, setPassword] = React.useState("");   // Password değişkeni

  const auth = () => {
    if (email === "admin" && password === "admin") {   // Email ve Password kontrolü
    
      window.location.href = "/home";   // Eğer doğruysa HomePage'e yönlendiriyoruz.
    } else {
      alert("Hatalı Giriş, lütfen email kısmına admin şifre kısmına admin giriniz");   // Eğer yanlışsa uyarı veriyoruz.
    }
  };

  return (
      <div className='login-form'>
        <h1>LOGIN</h1>
        <input className='input-login' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input-login" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={auth}>Login</button>
    </div>
  )
}

export default LoginPage