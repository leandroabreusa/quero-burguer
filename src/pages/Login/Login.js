
import { useState } from 'react';
import logoIMG from '../../assets/logo.png';
import './styles.css';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
            <form className="login-form">
                <span className="login-form-title"><img src={logoIMG} alt="Logo Quero Burguer" /> <p>Quero Burguer</p></span>

                <div className="wrap-input">
                <input 
                    className={email !== "" ? 'has-val input' : 'input'} 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="E-mail"></span>
                </div>

                <div className="wrap-input">
                <input 
                    className={password !== "" ? 'has-val input' : 'input'} 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
                </div>

                <div className="container-login-form-btn">
                <button className="login-form-btn">Entrar</button>
                </div>

            </form>
        
            <div className="container-login-form-btn">
                <button className="login-form-btn">Entrar com Facebook</button>
            </div>
            <div className="text-center">
                <span className="txt1">Não possui conta?</span>
                <a href="#" className="txt2">Cadastre-se</a>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
