import './index.scss';
import { Link } from 'react-router-dom';


export default function Login(){
    return(
        <section class="secao-0">
        <img src="/public/assets/images/logo.png" alt="logo" style="height: 70px;">
          <div class="page">
            <form method="POST" class="formLogin">
                <label for="email">E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
                <label for="password">Senha</label>
                <input type="password" placeholder="Digite seu e-mail" />
                <a href="/">Esqueci minha senha</a>
                <input type="submit" value="Acessar" class="btn" />
            </form>
          </div>
        </div>
    </section>
    );
}
