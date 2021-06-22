import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";

import { AuthContext } from "../contexts/AuthContext";

import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const history = useHistory();

  // const { user, signInWithGoogle } = useContext(AuthContext);
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="logo-google" />
            Crie sua sala com o google
          </button>
          <div className="separetor">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
