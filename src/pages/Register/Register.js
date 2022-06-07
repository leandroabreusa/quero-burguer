import { useState } from 'react';
import logoIMG from '../../assets/logo.png'
import PhoneInput from 'react-phone-number-input/input'

import './styles.css'

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <div className="container-register">
        <div className="wrap-register">
            <form className="register-form">
                <span className="register-form-title"><img src={logoIMG} alt="Logo Quero Burguer" /> <p>Quero Burguer</p></span>

                <div className="wrap-input">
                <input 
                    className={name !== "" ? 'has-val input' : 'input'} 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome"></span>
                </div>

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
                <PhoneInput
                    className={phone !== "" ? 'has-val input' : 'input'}
                    country="BR"
                    value={phone}
                    onChange={setPhone} 
                />
                <span className="focus-input" data-placeholder="Celular com DDD"></span>
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
                
                <div className="container-register-form-btn">
                <button className="register-form-btn">Cadastre-se</button>
                </div>

            </form>
        
            <div className="text-center">
                <span className="txt1">Já possui conta?</span>
                <a href="#" className="txt2">Entrar</a>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
