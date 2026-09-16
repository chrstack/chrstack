"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Contato pelo chrstack — ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`);
    setSent(true);
    window.location.href = `mailto:chrstack.dev@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Nome<input required name="name" autoComplete="name" placeholder="Seu nome" /></label>
        <label>E-mail<input required name="email" type="email" autoComplete="email" placeholder="voce@email.com" /></label>
      </div>
      <label>Mensagem<textarea required name="message" rows={5} placeholder="Conte um pouco sobre sua ideia ou projeto" /></label>
      <button className="button primary" type="submit">Preparar mensagem <Send size={17}/></button>
      <p className="form-note" aria-live="polite">{sent ? "Mensagem preparada no seu aplicativo de e-mail." : "Ao enviar, a mensagem será aberta no seu aplicativo de e-mail."}</p>
    </form>
  );
}
