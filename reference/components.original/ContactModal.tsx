import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

/* ─────────────────────────────────────────────────────────────────
   EMAILJS CONFIGURATION
   Siga o passo-a-passo para ativar o envio de emails.
   ──────────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = "service_217gkmc";
const EMAILJS_TEMPLATE_ID = "template_xjzepn2";
const EMAILJS_PUBLIC_KEY  = "tZviGVf_UoyJgWFa0";
/* ─────────────────────────────────────────────────────────────────*/

const Fnt = { heading: "'Unbounded', sans-serif", body: "'Open Sans', sans-serif" };
const Clr = {
  blue: "#2F5BFF", green: "#43E58E", black: "#000000",
  medGray: "#6B6B6B", darkGray: "#2A2A2A", lightGray: "#F5F5F5", white: "#FFFFFF",
};

type Lang = "en" | "pt" | "es";

const L = {
  en: {
    title: "Start a conversation",
    sub: "Tell us about your challenge and we'll get back to you shortly.",
    name: "Full Name", email: "Email", phone: "Phone Number",
    company: "Company", message: "Message",
    namePh: "Your full name", emailPh: "your@email.com",
    phonePh: "+1 (555) 000-0000", companyPh: "Your company name",
    msgPh: "Tell us about your project or challenge...",
    required: "Required field", emailInvalid: "Enter a valid email.",
    send: "Send message", sending: "Sending…",
    successTitle: "Message sent!", successSub: "We'll get back to you soon.",
    errorMsg: "Something went wrong. Please try again or email us directly.",
    close: "Close",
    privacyBefore: "The personal data provided in this form will be used exclusively to identify you and enable our communication with you. For more details on how we process your data, please see our ",
    privacyLink: "Privacy Policy",
    privacyAfter: ".",
    privacyHref: "/en/privacy-policy",
  },
  pt: {
    title: "Comece uma conversa",
    sub: "Conte-nos sobre seu desafio e entraremos em contato em breve.",
    name: "Nome completo", email: "Email", phone: "Telefone",
    company: "Empresa", message: "Mensagem",
    namePh: "Seu nome completo", emailPh: "seu@email.com",
    phonePh: "+55 11 99999-9999", companyPh: "Nome da sua empresa",
    msgPh: "Conte-nos sobre seu projeto ou desafio…",
    required: "Campo obrigatório", emailInvalid: "Insira um email válido.",
    send: "Enviar mensagem", sending: "Enviando…",
    successTitle: "Mensagem enviada!", successSub: "Entraremos em contato em breve.",
    errorMsg: "Algo deu errado. Tente novamente ou envie-nos um email.",
    close: "Fechar",
    privacyBefore: "Os dados pessoais informados neste formulário serão utilizados exclusivamente para sua identificação e para viabilizar nossa comunicação com você. Para mais detalhes sobre como tratamos seus dados, consulte nosso ",
    privacyLink: "Aviso de Privacidade",
    privacyAfter: ".",
    privacyHref: "/privacy-policy",
  },
  es: {
    title: "Inicia una conversación",
    sub: "Cuéntanos sobre tu desafío y nos pondremos en contacto pronto.",
    name: "Nombre completo", email: "Email", phone: "Teléfono",
    company: "Empresa", message: "Mensaje",
    namePh: "Tu nombre completo", emailPh: "tu@email.com",
    phonePh: "+1 (555) 000-0000", companyPh: "Nombre de tu empresa",
    msgPh: "Cuéntanos sobre tu proyecto o desafío…",
    required: "Campo obligatorio", emailInvalid: "Ingresa un email válido.",
    send: "Enviar mensaje", sending: "Enviando…",
    successTitle: "¡Mensaje enviado!", successSub: "Nos pondremos en contacto pronto.",
    errorMsg: "Algo salió mal. Inténtalo de nuevo o envíanos un email.",
    close: "Cerrar",
    privacyBefore: "Los datos personales proporcionados en este formulario se utilizarán exclusivamente para identificarle y permitir nuestra comunicación con usted. Para más detalles sobre cómo tratamos sus datos, consulte nuestra ",
    privacyLink: "Política de Privacidad",
    privacyAfter: ".",
    privacyHref: "/es/privacy-policy",
  },
};

interface FormData {
  name: string; email: string; phone: string; company: string; message: string;
}

const inputBase: React.CSSProperties = {
  width: "100%", display: "block", boxSizing: "border-box",
  fontFamily: Fnt.body, fontSize: 14, color: Clr.darkGray,
  backgroundColor: Clr.lightGray, border: "1.5px solid #E5E5E5",
  borderRadius: 8, padding: "12px 16px", outline: "none",
};
const labelBase: React.CSSProperties = {
  display: "block", fontFamily: Fnt.body, fontSize: 11, fontWeight: 600,
  color: Clr.medGray, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6,
};
const errBase: React.CSSProperties = {
  display: "block", fontFamily: Fnt.body, fontSize: 11, color: "#E53E3E", marginTop: 4,
};

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  lang: Lang;
}

export function ContactModal({ open, onClose, lang }: ContactModalProps) {
  const l = L[lang];
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => { reset(); setStatus("idle"); }, 300);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, reset]);

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,           // {{name}} → From Name
          email: data.email,         // {{email}} → Reply To
          title: data.name + " — " + data.company, // {{title}} → Subject
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "—",
          company: data.company,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.78)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <div style={{
        backgroundColor: Clr.white, borderRadius: 20, position: "relative",
        maxWidth: 560, width: "100%", maxHeight: "90vh", overflowY: "auto",
        padding: "48px 40px", boxShadow: "0 32px 96px rgba(0,0,0,0.35)",
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 18, right: 18, width: 32, height: 32,
            borderRadius: "50%", border: "1.5px solid #E5E5E5", background: "none",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            color: Clr.medGray, fontSize: 18, lineHeight: 1,
          }}
        >×</button>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%", backgroundColor: "#EDFAF4",
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={Clr.green} strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "1.3rem", color: Clr.black, marginBottom: 10 }}>
              {l.successTitle}
            </h3>
            <p style={{ fontFamily: Fnt.body, color: Clr.medGray, lineHeight: 1.7, marginBottom: 32 }}>
              {l.successSub}
            </p>
            <button
              onClick={onClose}
              style={{
                backgroundColor: Clr.black, color: Clr.white, border: "none",
                borderRadius: 8, padding: "12px 32px", fontFamily: Fnt.body,
                fontWeight: 700, fontSize: 14, cursor: "pointer",
              }}
            >{l.close}</button>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "1.35rem", color: Clr.black, marginBottom: 8 }}>
              {l.title}
            </h3>
            <p style={{ fontFamily: Fnt.body, color: Clr.medGray, fontSize: 14, lineHeight: 1.65, marginBottom: 28 }}>
              {l.sub}
            </p>

            {status === "error" && (
              <div style={{ backgroundColor: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 8, padding: "12px 16px", marginBottom: 20 }}>
                <p style={{ fontFamily: Fnt.body, fontSize: 13, color: "#C53030", margin: 0 }}>{l.errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                {/* Name */}
                <div>
                  <label style={labelBase}>{l.name} <span style={{ color: Clr.blue }}>*</span></label>
                  <input
                    {...register("name", { required: l.required })}
                    placeholder={l.namePh}
                    style={{ ...inputBase, borderColor: errors.name ? "#E53E3E" : "#E5E5E5" }}
                  />
                  {errors.name && <span style={errBase}>{errors.name.message}</span>}
                </div>
                {/* Email */}
                <div>
                  <label style={labelBase}>{l.email} <span style={{ color: Clr.blue }}>*</span></label>
                  <input
                    {...register("email", {
                      required: l.required,
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: l.emailInvalid },
                    })}
                    type="email"
                    placeholder={l.emailPh}
                    style={{ ...inputBase, borderColor: errors.email ? "#E53E3E" : "#E5E5E5" }}
                  />
                  {errors.email && <span style={errBase}>{errors.email.message}</span>}
                </div>
                {/* Phone */}
                <div>
                  <label style={labelBase}>{l.phone}</label>
                  <input
                    {...register("phone")}
                    placeholder={l.phonePh}
                    style={inputBase}
                  />
                </div>
                {/* Company */}
                <div>
                  <label style={labelBase}>{l.company} <span style={{ color: Clr.blue }}>*</span></label>
                  <input
                    {...register("company", { required: l.required })}
                    placeholder={l.companyPh}
                    style={{ ...inputBase, borderColor: errors.company ? "#E53E3E" : "#E5E5E5" }}
                  />
                  {errors.company && <span style={errBase}>{errors.company.message}</span>}
                </div>
              </div>
              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelBase}>{l.message} <span style={{ color: Clr.blue }}>*</span></label>
                <textarea
                  {...register("message", { required: l.required })}
                  placeholder={l.msgPh}
                  rows={4}
                  style={{
                    ...inputBase, resize: "vertical", minHeight: 110,
                    borderColor: errors.message ? "#E53E3E" : "#E5E5E5",
                  }}
                />
                {errors.message && <span style={errBase}>{errors.message.message}</span>}
              </div>
              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%", border: "none", borderRadius: 8, padding: "14px 32px",
                  fontFamily: Fnt.body, fontWeight: 700, fontSize: 15, cursor: status === "sending" ? "not-allowed" : "pointer",
                  backgroundColor: status === "sending" ? "#AAAAAA" : Clr.blue,
                  color: Clr.white, transition: "background-color 0.2s",
                }}
              >
                {status === "sending" ? l.sending : l.send}
              </button>
              <p
                className="privacy-notice"
                style={{ fontFamily: Fnt.body, fontSize: 14, lineHeight: 1.5, color: Clr.medGray, textAlign: "center", marginTop: 16 }}
              >
                {l.privacyBefore}
                <a
                  href={l.privacyHref}
                  style={{ color: Clr.blue, textDecoration: "underline" }}
                >
                  {l.privacyLink}
                </a>
                {l.privacyAfter}
              </p>
              <p style={{ fontFamily: Fnt.body, fontSize: 12, color: Clr.medGray, textAlign: "center", marginTop: 16 }}>
                contato@sensoramadesign.com
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}