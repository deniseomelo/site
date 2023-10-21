import './index.scss';
import { Link } from 'react-router-dom';


export default function Login(){
    return(
      <section className='pagina-Login'>
      
          <img src="./assets/images/logo.png" alt="logo" />

          <form method="POST" className="formLogin">
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" autoFocus={true} />
              <label htmlFor="password">Senha</label>
              <input type="password" placeholder="Digite sua senha" />
              
              <input type="submit" value="Acessar" className="btn" />
              <Link to='/' className="link-voltar">Voltar para página inicial</Link>
          </form>
    
  </section>
);
}