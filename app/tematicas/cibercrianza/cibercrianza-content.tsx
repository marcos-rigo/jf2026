"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import {
  ArrowDown, ArrowRight, ArrowUpRight, RefreshCw, CheckCircle2, ChevronDown,
  Brain, Heart, ShoppingBag, Scan,
  Zap, ThumbsUp, Target, Unlock,
  UserX, MessageSquareWarning, Camera, EyeOff, Smartphone, AlertTriangle,
  Home, School, Users, HeartPulse, Globe, Landmark,
  Search, Handshake, MessageCircle, Link, Eye, Sparkles
} from "lucide-react"

// ─── Styles ───
// Applying a highly legible "Light Cyberpunk" / "Neo-Pop" aesthetic with massive typography,
// high-contrast dark text on clean light backgrounds, and extra spacing for readability on all devices.
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  :root {
    --neon-blue: #00F0FF;
    --neon-pink: #FF007F;
    --neon-purple: #9D00FF;
    --neon-blue-glow: rgba(0, 240, 255, 0.45);
    --neon-pink-glow: rgba(255, 0, 127, 0.45);
    --neon-purple-glow: rgba(157, 0, 255, 0.4);
    --cyber-bg: #FFFFFF;
    --brand-navy: #003257;
    --brand-light-blue: #EEF4FB;
  }

  /* ── Typography ── */
  .lc-fraunces {
    font-family: 'Fraunces', Georgia, serif;
    font-optical-sizing: auto;
  }
  .lc-mono {
    font-family: 'JetBrains Mono', 'Courier New', monospace;
  }

  /* ── Animations ── */
  @keyframes lcF1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40% { transform: translate(60px, -80px) scale(1.15); }
    75% { transform: translate(-40px, 40px) scale(0.92); }
  }
  @keyframes lcF2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    35% { transform: translate(-70px, -45px) scale(1.2); }
    70% { transform: translate(45px, 55px) scale(0.88); }
  }
  @keyframes lcF3 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(35px, 45px) scale(1.08); }
  }
  @keyframes lcOrbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes lcOrbitR {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  @keyframes lcPing {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  @keyframes lcScan {
    0% { top: -2px; opacity: 0; }
    5% { opacity: .6; }
    95% { opacity: .6; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes lcFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-16px) rotate(1.5deg); }
  }
  @keyframes cyberGridShift {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
  }
  @keyframes gradientTextShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .lc-f1 { animation: lcF1 20s ease-in-out infinite; }
  .lc-f2 { animation: lcF2 25s ease-in-out infinite; }
  .lc-f3 { animation: lcF3 18s ease-in-out infinite; }
  .lc-orbit { animation: lcOrbit 35s linear infinite; transform-origin: center; }
  .lc-orbitr { animation: lcOrbitR 25s linear infinite; transform-origin: center; }
  .lc-ping-blue { animation: lcPing 2s ease-out infinite; }
  .lc-scan { animation: lcScan 10s linear infinite; position: absolute; left: 0; right: 0; height: 2px; pointer-events: none; }
  .lc-float { animation: lcFloat 7s ease-in-out infinite; }
  .lc-float-d1 { animation: lcFloat 7s ease-in-out infinite; animation-delay: .6s; }
  .lc-float-d2 { animation: lcFloat 7s ease-in-out infinite; animation-delay: 1.2s; }
  .lc-float-d3 { animation: lcFloat 7s ease-in-out infinite; animation-delay: 1.8s; }

  /* ── Backgrounds ── */
  .lc-dots-cyber {
    background-image: radial-gradient(circle, rgba(0, 240, 255, 0.15) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
  }
  .lc-grid-cyber {
    background-image: 
      linear-gradient(rgba(0, 240, 255, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 240, 255, 0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: cyberGridShift 60s linear infinite;
  }

  /* ── Cyber Glassmorphism on Light backgrounds ── */
  .lc-cyber-glass {
    background: rgba(255, 255, 255, 0.75);
    border: 2px solid rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 12px 45px rgba(0, 50, 87, 0.04), 0 1px 4px rgba(0, 0, 0, 0.01);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* ── High-Contrast Bento / Interactive Cards ── */
  .lc-cyber-card {
    background: #FFFFFF;
    border: 2px solid rgba(0, 240, 255, 0.16);
    border-radius: 32px;
    box-shadow: 0 10px 35px rgba(0, 240, 255, 0.04);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .lc-cyber-card:hover {
    border-color: var(--neon-blue);
    transform: translateY(-10px) scale(1.012);
    box-shadow: 
      0 25px 55px rgba(0, 240, 255, 0.14),
      0 0 20px var(--neon-blue-glow);
  }

  /* Bento Highlight Card */
  .lc-cyber-card-highlight {
    background: #FFFFFF;
    border: 2px solid rgba(255, 0, 127, 0.22);
    box-shadow: 0 10px 35px rgba(255, 0, 127, 0.05);
  }
  .lc-cyber-card-highlight:hover {
    border-color: var(--neon-pink);
    transform: translateY(-10px) scale(1.012);
    box-shadow: 
      0 25px 55px rgba(255, 0, 127, 0.16),
      0 0 24px var(--neon-pink-glow);
  }

  /* ── Editorial Asymmetric Split Card for "Lo que vemos... y lo que pasa" ── */
  .lc-editorial-split-card {
    display: grid;
    grid-template-cols: 1fr;
    border-radius: 36px;
    background: transparent;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    margin-bottom: 3.5rem;
    position: relative;
    z-index: 10;
  }
  @media (min-width: 992px) {
    .lc-editorial-split-card {
      grid-template-cols: 1fr 1.2fr;
    }
  }

  .lc-split-left {
    background: #FFFFFF;
    border: 2px solid rgba(0, 50, 87, 0.09);
    border-radius: 36px;
    padding: 3rem;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.02);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    z-index: 2;
  }
  .lc-split-right {
    background: rgba(255, 255, 255, 0.85);
    border: 2.5px solid rgba(255, 0, 127, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 36px;
    padding: 3rem;
    box-shadow: 0 18px 45px rgba(255, 0, 127, 0.05);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    z-index: 3;
    margin-top: -1.5rem;
  }
  @media (min-width: 992px) {
    .lc-split-right {
      margin-top: 0;
      margin-left: -3rem;
      transform: scale(1.025);
    }
  }

  .lc-editorial-split-card:hover .lc-split-left {
    border-color: var(--neon-blue);
    transform: translateY(-6px) rotate(-0.5deg);
    box-shadow: 0 20px 45px rgba(0, 240, 255, 0.1), 0 0 15px rgba(0, 240, 255, 0.2);
  }
  .lc-editorial-split-card:hover .lc-split-right {
    border-color: var(--neon-pink);
    transform: translateY(-8px) scale(1.05) rotate(0.5deg);
    box-shadow: 0 30px 60px rgba(255, 0, 127, 0.16), 0 0 20px var(--neon-pink-glow);
  }

  /* ── Interactive Quiz Options with Neon Glow ── */
  .lc-quiz-option {
    border: 2px solid rgba(0, 240, 255, 0.16);
    background: #FFFFFF;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
  }
  .lc-quiz-option:hover {
    border-color: var(--neon-blue);
    background: rgba(238, 244, 251, 0.85);
    transform: translateY(-4px) translateX(6px);
    box-shadow: 0 10px 30px rgba(0, 240, 255, 0.12), 0 0 12px var(--neon-blue-glow);
  }
  .lc-quiz-option::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: var(--neon-blue);
    transform: scaleY(0);
    transition: transform 0.25s ease;
  }
  .lc-quiz-option:hover::after {
    transform: scaleY(1);
  }

  .lc-quiz-option-pink {
    border: 2px solid rgba(255, 0, 127, 0.16);
    background: #FFFFFF;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
  }
  .lc-quiz-option-pink:hover {
    border-color: var(--neon-pink);
    background: rgba(253, 242, 248, 0.85);
    transform: translateY(-4px) translateX(6px);
    box-shadow: 0 10px 30px rgba(255, 0, 127, 0.12), 0 0 12px var(--neon-pink-glow);
  }
  .lc-quiz-option-pink::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: var(--neon-pink);
    transform: scaleY(0);
    transition: transform 0.25s ease;
  }
  .lc-quiz-option-pink:hover::after {
    transform: scaleY(1);
  }

  /* ── Vibrant Neon Buttons ── */
  .lc-cyber-btn {
    background: linear-gradient(135deg, var(--neon-blue), var(--neon-pink));
    color: #FFFFFF;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 6px 25px rgba(255, 0, 127, 0.28), 0 0 6px var(--neon-pink-glow);
    font-weight: 800;
  }
  .lc-cyber-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 
      0 16px 36px rgba(255, 0, 127, 0.45),
      0 0 25px var(--neon-pink-glow),
      0 0 12px var(--neon-blue-glow);
  }

  .lc-cyber-btn-outline {
    border: 3px solid var(--neon-blue);
    color: var(--brand-navy);
    background: transparent;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 15px rgba(0, 240, 255, 0.05);
    font-weight: 800;
  }
  .lc-cyber-btn-outline:hover {
    background: rgba(0, 240, 255, 0.06);
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 12px 30px rgba(0, 240, 255, 0.22), 0 0 14px var(--neon-blue-glow);
  }

  /* ── Dynamic Gradient Text Animation ── */
  .lc-grad-cyber-text {
    background: linear-gradient(90deg, #4272BB, #FF007F, #00F0FF, #4272BB);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientTextShift 6s linear infinite;
  }

  /* ── Custom UI Badges ── */
  .lc-cyber-badge {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid rgba(0, 240, 255, 0.35);
    color: var(--brand-navy);
    box-shadow: 0 6px 15px rgba(0, 240, 255, 0.1), 0 0 6px var(--neon-blue-glow);
  }

  .lc-cyber-badge-pink {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid rgba(255, 0, 127, 0.35);
    color: var(--brand-navy);
    box-shadow: 0 6px 15px rgba(255, 0, 127, 0.1), 0 0 6px var(--neon-pink-glow);
  }

  /* ── Territory styles ── */
  .lc-terr-phys {
    background: linear-gradient(160deg, #FEF9C3 0%, #FEF08A 40%, #D1FAE5 100%);
  }
  .lc-terr-dig {
    background: linear-gradient(160deg, #EEF4FB 0%, #DBEAFE 50%, #E0F2FE 100%);
  }
`

// ─── Motion variants ───
const fadeUp   = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const spring   = { type: "spring" as const, stiffness: 260, damping: 20 }
const qVar     = {
  enter: (d: number) => ({ opacity: 0, x: d * 60, filter: "blur(10px)" }),
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit:  (d: number) => ({ opacity: 0, x: d * -60, filter: "blur(10px)" }),
}

// ─── Types ───
type Stat          = { numero: string; unidad: string; descripcion: string }
type Opcion        = { texto: string; puntos: number }
type Pregunta      = { id: number; texto: string; opciones: Opcion[] }
type Perfil        = { rango: [number, number]; color: string; bg: string; nombre: string; descripcion: string }
type DisenioCard   = { icono: React.ElementType; titulo: string; descripcion: string }
type TablaRow      = { adulto: string; realidad: string }
type Desafio       = { icono: React.ElementType; titulo: string; descripcion: string; ac: string; bg: string }
type Riesgo        = { icono: React.ElementType; titulo: string; descripcion: string; senales: string; dato: string; ac: string; bg: string }
type OpcionLimite  = { texto: string; tipo: "permisivo" | "acompanante" | "restrictivo" }
type PreguntaLimite= { id: number; situacion: string; opciones: OpcionLimite[] }
type Ecosistema    = { icono: React.ElementType; actor: string; rol: string }
type Compromiso    = { numero: string; icono: React.ElementType; accion: string; detalle: string }

// ─── Data ───
const stats: Stat[] = [
  { numero: "9,6", unidad: "años", descripcion: "Edad promedio en que los chicos argentinos reciben su primer celular con internet" },
  { numero: "95%", unidad: "",     descripcion: "De los chicos de 9 a 17 años ya tiene celular propio. El 88% lo usa todos o casi todos los días" },
  { numero: "80%", unidad: "",     descripcion: "Usa redes sociales casi todos los días. TikTok, YouTube e Instagram son las más usadas" },
  { numero: "1 de cada 2", unidad: "", descripcion: "Adolescentes percibe tener un uso problemático de internet, celulares o videojuegos" },
]

const disenioDigital: DisenioCard[] = [
  { icono: Brain,        titulo: "Algoritmos que perfilan",       descripcion: "Los algoritmos aprenden en minutos qué tipo de contenido genera más reacción en cada usuario y amplifican ese perfil, sin importar si el contenido es beneficioso o dañino." },
  { icono: Scan,         titulo: "Scroll infinito",                 descripcion: "Los videos cortos (Reels, TikToks, Shorts) crean scroll infinito: cada uno es una mini-recompensa que activa el sistema dopaminérgico e invita al siguiente." },
  { icono: Heart,        titulo: "Sistemas de validación",          descripcion: "Los 'me gusta', notificaciones y contadores de visitas son sistemas de retroalimentación variable que generan búsqueda compulsiva de aprobación." },
  { icono: ShoppingBag,  titulo: "Influencers con agenda comercial", descripcion: "Los creadores de contenido operan dentro de lógicas comerciales encubiertas: venden estilos de vida, estéticas corporales, productos e ideologías." },
  { icono: AlertTriangle,titulo: "IA que borra lo real",            descripcion: "La IA generativa produce imágenes, voces y videos falsos cada vez más indistinguibles de lo real, dificultando la lectura crítica del entorno." },
]

const preguntas: Pregunta[] = [
  { id:1,  texto:"¿Sabés en qué redes sociales tiene cuenta tu hijo/a?", opciones:[{texto:"Sí, conozco todas",puntos:10},{texto:"Algunas, no todas",puntos:5},{texto:"No tengo idea",puntos:0}] },
  { id:2,  texto:"¿Sabés con quién habla tu hijo/a por WhatsApp, chats o juegos online?", opciones:[{texto:"Conozco a sus contactos principales",puntos:10},{texto:"Solo a algunos",puntos:5},{texto:"No lo sé",puntos:0}] },
  { id:3,  texto:"¿Alguna vez hablaron en familia sobre lo que se puede y no se puede compartir en internet?", opciones:[{texto:"Sí, lo conversamos seguido",puntos:10},{texto:"Una o dos veces",puntos:5},{texto:"Nunca lo hablamos",puntos:0}] },
  { id:4,  texto:"¿Tu hijo/a sabe que puede contarte si algo lo incomoda o asusta en internet?", opciones:[{texto:"Sí, tiene confianza para hacerlo",puntos:10},{texto:"Creo que sí, pero no estoy seguro/a",puntos:5},{texto:"Probablemente no me lo diría",puntos:0}] },
  { id:5,  texto:"¿Conocés qué tipo de contenido consumen habitualmente (videos, juegos, influencers)?", opciones:[{texto:"Sí, tengo bastante idea",puntos:10},{texto:"Algo, pero no en detalle",puntos:5},{texto:"No tengo idea",puntos:0}] },
  { id:6,  texto:"¿Tienen acuerdos en casa sobre el uso del celular (horarios, espacios, límites)?", opciones:[{texto:"Sí, acordamos reglas juntos con nuestros hijos",puntos:10},{texto:"Hay algunas reglas pero no siempre se cumplen",puntos:5},{texto:"No hay acuerdos establecidos",puntos:0}] },
  { id:7,  texto:"¿Sabés qué son los algoritmos y cómo pueden influir en lo que ven tus hijos?", opciones:[{texto:"Sí, lo entiendo bien",puntos:10},{texto:"Tengo una idea básica",puntos:5},{texto:"No sé qué son",puntos:0}] },
  { id:8,  texto:"Si tu hijo/a recibiera un mensaje de un desconocido en un juego o red social, ¿sabés cómo reaccionaría?", opciones:[{texto:"Sí, lo hemos hablado y sabe qué hacer",puntos:10},{texto:"Creo que bien, pero no lo hemos hablado",puntos:5},{texto:"No lo sé",puntos:0}] },
  { id:9,  texto:"¿Sabés qué es el grooming o el ciberbullying?", opciones:[{texto:"Sí, conozco ambos conceptos",puntos:10},{texto:"Escuché algo, pero no en detalle",puntos:5},{texto:"No los conozco",puntos:0}] },
  { id:10, texto:"¿Participás activamente del mundo digital de tu hijo/a (le preguntás, te interesás, a veces compartís)?", opciones:[{texto:"Sí, me intereso activamente",puntos:10},{texto:"A veces, no siempre",puntos:5},{texto:"Casi nunca",puntos:0}] },
]

const perfiles: Perfil[] = [
  { rango:[80,100], color:"#059669", bg:"rgba(5,150,105,.08)",   nombre:"🟢 Guía digital presente",      descripcion:"Tenés una presencia activa en el entorno digital de tus hijos. Seguí construyendo esa confianza: el vínculo es el mejor factor de protección." },
  { rango:[60,79],  color:"#D97706", bg:"rgba(217,119,6,.08)",   nombre:"🟡 Guía digital en camino",      descripcion:"Estás en el camino correcto. Hay áreas donde podés profundizar el acompañamiento. Empezá por abrir una conversación sin agenda de control." },
  { rango:[40,59],  color:"#EA580C", bg:"rgba(234,88,12,.08)",   nombre:"🟠 Guía digital en alerta",      descripcion:"Es momento de empezar a conocer mejor el territorio digital donde viven tus hijos. No necesitás ser experto/a en tecnología: necesitás estar presente." },
  { rango:[0,39],   color:"#DC2626", bg:"rgba(220,38,38,.08)",   nombre:"🔴 Guía digital desconectado/a", descripcion:"El territorio digital de tus hijos te es mayormente desconocido. No es tarde para empezar. Un primer paso: esta semana pedile que te muestre qué hace cuando agarra el teléfono." },
]

const tabla: TablaRow[] = [
  { adulto:"Está todo el tiempo mirando el teléfono",          realidad:"Gestiona activamente su vida social y su imagen entre pares" },
  { adulto:"Le importa mucho cuántos likes tiene",             realidad:"Busca validación y reconocimiento, necesidades propias de su etapa de desarrollo" },
  { adulto:"Se enoja muchísimo si le sacamos el celular",      realidad:"Siente que lo alejamos de su espacio de pertenencia y vínculos más cercanos" },
  { adulto:"Habla con personas que no conocemos",              realidad:"Puede estar construyendo comunidades de interés o buscando apoyo emocional" },
  { adulto:"Se queda hasta tarde con el teléfono",             realidad:"El tiempo nocturno es cuando tiene más privacidad digital para socializar" },
  { adulto:"No quiere mostrarnos lo que hace",                 realidad:"Necesita un espacio propio; la falta de visibilidad también puede ser señal de riesgo" },
]

const desafios: Desafio[] = [
  { icono:Zap,      titulo:"La velocidad del cambio",      ac:"#00F0FF", bg:"rgba(0,240,255,.07)",   descripcion:"Los cambios tecnológicos son más rápidos que los procesos educativos. Cuando los adultos aprenden a usar una plataforma, los chicos ya migraron a otra." },
  { icono:ThumbsUp, titulo:"La validación social digital", ac:"#9D00FF", bg:"rgba(157,0,255,.07)",  descripcion:"Antes la aprobación venía de círculos reducidos. Hoy puede venir —o no venir— de cientos o miles de personas. El impacto emocional es proporcional." },
  { icono:Target,   titulo:"La batalla por la atención",   ac:"#D97706", bg:"rgba(217,119,6,.07)",   descripcion:"Las plataformas están diseñadas por equipos de ingenieros para maximizar el tiempo de uso. No compiten con nosotros: compiten con todo." },
  { icono:Unlock,   titulo:"La autonomía prematura",       ac:"#FF007F", bg:"rgba(255,0,127,.07)",   descripcion:"El 46% de los adolescentes argentinos reconoce que el tiempo frente a las pantallas le genera problemas como menor rendimiento escolar. Muchos acceden a experiencias para las que aún no tienen herramientas emocionales. (UNICEF, 2025)" },
]

const riesgos: Riesgo[] = [
  { icono:UserX,               titulo:"Grooming",                     ac:"#9D00FF", bg:"rgba(157,0,255,.06)", descripcion:"Adulto que se hace pasar por par para ganar confianza y acceder al NNA con fines de abuso o explotación. Comienza frecuentemente en los chats de videojuegos como Roblox y Minecraft.",  senales:"Amistad con adulto desconocido en línea, secrecía, regalos o dinero sin origen claro.", dato:"El 55% de los menores argentinos no sabe qué es el grooming. (Grooming LATAM, 2024)" },
  { icono:MessageSquareWarning, titulo:"Ciberbullying",                ac:"#FF007F", bg:"rgba(255,0,127,.06)",  descripcion:"Hostigamiento, humillación o exclusión entre pares mediada por tecnología. Puede incluir difusión de imágenes o rumores.",                                                                   senales:"No quiere ir a la escuela, llora con el teléfono, evita hablar de sus compañeros.", dato:"Argentina ocupa el 5° lugar mundial en casos de acoso escolar y digital. Entre mayo 2024 y mayo 2025 se registraron más de 140.000 casos graves. (Bullying Sin Fronteras, 2025)" },
  { icono:Camera,               titulo:"Sextorsión",                   ac:"#D97706", bg:"rgba(217,119,6,.06)",  descripcion:"Presión para compartir imágenes íntimas, luego usadas como chantaje. Puede afectar a cualquier edad.",                                                                                     senales:"Angustia extrema, pide dinero sin explicar por qué, cierra el teléfono bruscamente.", dato:"1 de cada 3 adolescentes argentinos afirmó haberse encontrado en persona con alguien que conoció por internet. (Kids Online Argentina 2025, UNICEF/UNESCO)" },
  { icono:EyeOff,               titulo:"Contenidos nocivos",           ac:"#0891B2", bg:"rgba(8,145,178,.06)",  descripcion:"Exposición a violencia, pornografía, autolesión, trastornos alimentarios, ideologías extremas.",                                                                                          senales:"Cambios en vocabulario, conducta o intereses; referencias a temas preocupantes.", dato:"Los algoritmos amplifican el contenido que genera reacción, sin importar si es dañino para el usuario." },
  { icono:Smartphone,           titulo:"Uso problemático de pantallas",ac:"#059669", bg:"rgba(5,150,105,.06)",  descripcion:"Uso compulsivo que interfiere con el sueño, el estudio y los vínculos presenciales.",                                                                                                    senales:"Dificultad para dejar el dispositivo, irritabilidad intensa cuando se limita el acceso, pérdida de intereses previos.", dato:"El 46% de los adolescentes argentinos percibe que las pantallas le generan problemas como menor rendimiento escolar. (UNICEF, 2025)" },
  { icono:AlertTriangle,        titulo:"Desinformación",               ac:"#DB2777", bg:"rgba(219,39,119,.06)", descripcion:"Consumo y difusión de contenidos falsos, teorías conspirativas o información manipulada.",                                                                                               senales:"Creencias inusuales, rechazo de fuentes confiables, citas frecuentes de influencers sin verificación.", dato:"La IA generativa produce imágenes y videos falsos cada vez más indistinguibles de lo real." },
]

const preguntasLimites: PreguntaLimite[] = [
  { id:1, situacion:"Tu hijo/a de 13 años quiere instalarse TikTok. ¿Qué hacés?", opciones:[
    { texto:"Se lo permito y confío en que va a usarlo bien", tipo:"permisivo" },
    { texto:"Lo hablamos, revisamos juntos la configuración de privacidad y acordamos un tiempo de uso", tipo:"acompanante" },
    { texto:"Se lo prohíbo directamente", tipo:"restrictivo" },
  ]},
  { id:2, situacion:"Notás que tu hijo/a se queda hasta la madrugada con el celular. ¿Qué hacés?", opciones:[
    { texto:"Le digo que lo apague, pero al día siguiente vuelve a pasar lo mismo", tipo:"permisivo" },
    { texto:"Propongo en familia que los celulares se carguen fuera del cuarto por la noche", tipo:"acompanante" },
    { texto:"Le saco el celular sin más explicaciones", tipo:"restrictivo" },
  ]},
  { id:3, situacion:"Tu hijo/a llega angustiado/a a casa por algo que pasó en un grupo de WhatsApp. ¿Qué hacés?", opciones:[
    { texto:"Le explico que le reste importancia y que busque una alternativa constructiva", tipo:"permisivo" },
    { texto:"Lo escucho sin juzgar, le pregunto qué necesita y pensamos juntos qué hacer", tipo:"acompanante" },
    { texto:"Le pido que me muestre el teléfono para ver qué pasó", tipo:"restrictivo" },
  ]},
  { id:4, situacion:"Descubrís que tu hijo/a tiene una cuenta en una red social con una edad falsa. ¿Qué hacés?", opciones:[
    { texto:"Lo dejo pasar, total todos los chicos lo hacen", tipo:"permisivo" },
    { texto:"Lo hablo con calma, explico el por qué de los límites de edad y buscamos una alternativa juntos", tipo:"acompanante" },
    { texto:"Le borro la cuenta inmediatamente y le quito el teléfono una semana", tipo:"restrictivo" },
  ]},
  { id:5, situacion:"Tu hijo/a menciona que tiene un 'amigo/a de internet' que no conoce en persona. ¿Qué hacés?", opciones:[
    { texto:"No le doy importancia, tiene amigos en todos lados", tipo:"permisivo" },
    { texto:"Le pregunto con curiosidad genuina: ¿Cómo se conocieron? ¿De qué hablan? ¿Sabés quién es realmente?", tipo:"acompanante" },
    { texto:"Le digo que corte el contacto de inmediato", tipo:"restrictivo" },
  ]},
]

const estilos = {
  acompanante: { nombre:"✅ Acompañante",   color:"#059669", bg:"rgba(5,150,105,.08)",  border:"rgba(5,150,105,.25)",  descripcion:"Priorizás el diálogo y la construcción de confianza. Ese vínculo es el factor de protección más poderoso que existe." },
  permisivo:   { nombre:"🔓 Permisivo/a",   color:"#D97706", bg:"rgba(217,119,6,.08)",  border:"rgba(217,119,6,.25)",  descripcion:"Confiás en tus hijos, pero puede faltarle estructura al acompañamiento. Los límites construidos juntos no limitan: protegen." },
  restrictivo: { nombre:"🔒 Restrictivo/a", color:"#EA580C", bg:"rgba(234,88,12,.08)",  border:"rgba(234,88,12,.25)",  descripcion:"Priorizás el control, pero eso puede llevar al uso clandestino. La prohibición sin diálogo no cierra el territorio digital: solo lo vuelve invisible para vos." },
}

const senalesAlerta = [
  "Cambios abruptos de humor vinculados al uso del dispositivo",
  "Secretismo inusual o angustia si alguien se acerca mientras usa el teléfono",
  "Pérdida del sueño sistemática por uso nocturno",
  "Aislamiento progresivo: prefiere la interacción digital y evita encuentros presenciales",
  "Mención de personas adultas desconocidas con quienes tiene 'amistad' en línea",
  "Recepción de regalos o dinero de personas no identificadas",
  "No quiere ir a la escuela, tristeza sin causa aparente, rechazo del grupo",
  "Consumo de contenidos vinculados a autolesión, trastornos alimentarios o ideologías extremas",
  "Irritabilidad intensa o colapso emocional cuando se limita el acceso al dispositivo",
]

const preguntasDialogo = [
  "¿Qué es lo que más te gusta hacer cuando agarrás el teléfono?",
  "¿Hubo alguna vez algo en internet que te hizo sentir mal? ¿Qué hiciste?",
  "¿Seguís a alguien que te parece muy interesante? ¿Qué te gusta de lo que hace?",
  "¿Cuándo sentís que usás demasiado el teléfono? ¿Qué lo provoca?",
  "Si alguien te molestara o te hiciera sentir incómodo en línea, ¿me lo contarías? ¿Por qué sí o por qué no?",
  "¿Qué diferencias notás entre cómo sos en persona y cómo te mostrás en redes?",
  "¿Cuándo creés que nosotros, los adultos, usamos demasiado el teléfono?",
]

const ecosistema: Ecosistema[] = [
  { icono:Home,      actor:"Familia",                       rol:"Primera línea: establece acuerdos, observa, dialoga, interviene ante señales de riesgo" },
  { icono:School,    actor:"Institución educativa",         rol:"Formación en ciudadanía digital, detección de riesgos, protocolo de intervención" },
  { icono:Users,     actor:"Equipo de orientación escolar", rol:"Intervención especializada ante situaciones de vulnerabilidad o crisis" },
  { icono:HeartPulse,actor:"Servicios de salud",            rol:"Abordaje de impactos en salud mental: ansiedad, uso problemático, depresión vinculada a lo digital" },
  { icono:Globe,     actor:"Comunidad",                     rol:"Espacios presenciales de pertenencia: alternativa al territorio digital como único espacio de vida social" },
  { icono:Landmark,  actor:"Políticas públicas",            rol:"Regulación, formación docente, alfabetización digital familiar" },
]

const compromisos: Compromiso[] = [
  { numero:"1", icono:Search,       accion:"CONOCER",   detalle:"Esta semana le pregunto si podemos compartir juntos la actividad vinculada al dispositivo." },
  { numero:"2", icono:Handshake,    accion:"ACORDAR",   detalle:"Propongo en familia revisar juntos los acuerdos digitales que tenemos — o construir los que no tenemos aún." },
  { numero:"3", icono:MessageCircle,accion:"DIALOGAR",  detalle:"Incorporo una pregunta sobre lo digital en alguna conversación cotidiana, sin que sea un interrogatorio." },
  { numero:"4", icono:Link,         accion:"COORDINAR", detalle:"Me comunico con la escuela para saber qué espacios existen para hablar sobre lo digital y cómo podemos articular." },
  { numero:"5", icono:Smartphone,   accion:"CUIDARME",  detalle:"Reviso mi propio uso del teléfono. Los adultos también somos parte del ecosistema digital de nuestros hijos. Somos un ejemplo." },
]

// ─── useCountUp ───
function useCountUp(target: number, duration = 1.5, start = false) {
  const [value, setValue] = useState(0)
  const raf = useRef<number>(0)
  useEffect(() => {
    if (!start) return
    let t0: number | null = null
    const tick = (now: number) => {
      if (!t0) t0 = now
      const p = Math.min((now - t0) / 1000 / duration, 1)
      setValue(Math.round((1 - (1 - p) ** 3) * target))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [target, duration, start])
  return value
}

// ─── ScrollProgress ───
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-[6px] z-[60] origin-left"
      style={{ scaleX, background:"linear-gradient(90deg, var(--neon-blue) 0%, var(--neon-pink) 50%, var(--neon-purple) 100%)", boxShadow: "0 0 12px var(--neon-pink-glow)" }} />
  )
}

// ─── Ecosistema & Stats colors ───
const ECO_AC    = ["#00F0FF","#0891B2","#9D00FF","#FF007F","#059669","#D97706"]
const COMP_AC   = ["#00F0FF","#9D00FF","#0891B2","#059669","#D5247A"]

// ═══════════════════════════════════════════════════════════════════════════════
export function CibercrianzaContent() {
  // Quiz 1
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [puntajeTotal,   setPuntajeTotal]   = useState(0)
  const [terminado,      setTerminado]      = useState(false)
  const [dir,            setDir]            = useState(1)
  const [countStart,     setCountStart]     = useState(false)
  // Quiz 2
  const [preguntaLimite,    setPreguntaLimite]    = useState(0)
  const [respuestasLimite,  setRespuestasLimite]  = useState<string[]>([])
  const [terminadoLimite,   setTerminadoLimite]   = useState(false)
  const [dirLimite,         setDirLimite]         = useState(1)
  // Risks accordion
  const [openRiesgos, setOpenRiesgos] = useState<Set<number>>(new Set())

  const porcentaje = puntajeTotal
  const countValue = useCountUp(porcentaje, 1.5, countStart)
  const R = 68; const circ = 2 * Math.PI * R

  useEffect(() => {
    if (!terminado) return
    const t = setTimeout(() => setCountStart(true), 350)
    return () => clearTimeout(t)
  }, [terminado])

  const handleRespuesta = (puntos: number) => {
    const nuevo = puntajeTotal + puntos
    if (preguntaActual === preguntas.length - 1) { setPuntajeTotal(nuevo); setTerminado(true) }
    else { setPuntajeTotal(nuevo); setDir(1); setPreguntaActual(p => p + 1) }
  }
  const resetQuiz = () => { setPreguntaActual(0); setPuntajeTotal(0); setTerminado(false); setDir(1); setCountStart(false) }

  const handleRespuestaLimite = (tipo: string) => {
    const nuevas = [...respuestasLimite, tipo]
    if (preguntaLimite === preguntasLimites.length - 1) { setRespuestasLimite(nuevas); setTerminadoLimite(true) }
    else { setRespuestasLimite(nuevas); setDirLimite(1); setPreguntaLimite(p => p + 1) }
  }
  const resetQuizLimite = () => { setPreguntaLimite(0); setRespuestasLimite([]); setTerminadoLimite(false); setDirLimite(1) }

  const getEstiloPredominante = () => {
    const c = { permisivo:0, acompanante:0, restrictivo:0 }
    respuestasLimite.forEach(r => { if (r in c) c[r as keyof typeof c]++ })
    const max = Math.max(...Object.values(c))
    if (c.acompanante === max) return "acompanante"
    if (c.permisivo > c.restrictivo) return "permisivo"
    return "restrictivo"
  }

  const toggleRiesgo = (i: number) => {
    setOpenRiesgos(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n })
  }

  const scrollToQuiz = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); document.getElementById("quiz")?.scrollIntoView({ behavior:"smooth" })
  }

  const perfil     = perfiles.find(p => porcentaje >= p.rango[0] && porcentaje <= p.rango[1]) ?? perfiles[perfiles.length-1]
  const pregunta   = preguntas[preguntaActual]
  const pregLimite = preguntasLimites[preguntaLimite]

  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroSY } = useScroll({ target:heroRef, offset:["start start","end start"] })
  const heroY  = useTransform(heroSY, [0,1], [0,30])
  const heroOp = useTransform(heroSY, [0,0.7], [1,0])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Navbar />
      <ScrollProgress />
      {/* Set large readable global text-slate-800 for high accessibility and large legibility */}
      <main className="relative w-full font-sans overflow-hidden bg-white text-slate-800 text-lg">

        {/* ══ 1 HERO ══ */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-white py-28 md:py-36">
          
          {/* Cyber grid animated backgrounds */}
          <div className="absolute inset-0 lc-dots-cyber opacity-70 pointer-events-none" />
          <div className="absolute inset-0 lc-grid-cyber opacity-25 pointer-events-none" />
          <div className="lc-scan" style={{ background:"linear-gradient(90deg,transparent,rgba(255,0,127,.35),transparent)", boxShadow: "0 0 15px var(--neon-pink)" }} />

          {/* Glowing neon blobs shifting in the light background */}
          <div className="absolute lc-f1 pointer-events-none" style={{ top:"-10%", right:"-5%", width:900, height:900, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,240,255,.24) 0%,transparent 65%)", filter:"blur(95px)" }} />
          <div className="absolute lc-f2 pointer-events-none" style={{ bottom:"-15%", left:"-8%", width:750, height:750, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,0,127,.18) 0%,transparent 65%)", filter:"blur(110px)" }} />
          <div className="absolute lc-f3 pointer-events-none" style={{ top:"30%", left:"35%", width:650, height:650, borderRadius:"50%", background:"radial-gradient(circle,rgba(157,0,255,.14) 0%,transparent 65%)", filter:"blur(85px)" }} />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Neon Cyber Text & Actions - Extra Large Fonts */}
              <motion.div style={{ y:heroY, opacity:heroOp }} className="lg:col-span-7 text-left" initial="hidden" animate="visible" variants={stagger}>
                
                <motion.div variants={fadeUp} transition={spring} className="mb-8">
                  <div className="lc-mono lc-cyber-badge inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-extrabold tracking-wider uppercase">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inset-0 rounded-full lc-ping-blue" style={{ background:"var(--neon-blue)" }} />
                      <span className="relative rounded-full h-2.5 w-2.5" style={{ background:"var(--neon-blue)" }} />
                    </span>
                    Cibercrianza
                  </div>
                </motion.div>

                {/* Majestic Huge Header */}
                <motion.h1 variants={fadeUp} transition={spring}
                  className="lc-fraunces font-black leading-[1.02] tracking-tight mb-8 text-brand-navy"
                  style={{ fontSize:"clamp(3.2rem, 7.8vw, 6.2rem)" }}>
                  ¿Sabés dónde <br />
                  <span className="lc-grad-cyber-text pb-1 block lg:inline">interactúan</span> <br className="hidden lg:inline" />
                  tus hijos?
                </motion.h1>

                {/* Large Readable Paragraph */}
                <motion.p variants={fadeUp} transition={spring}
                  className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed text-slate-800 font-extrabold max-w-2xl">
                  El territorio digital ya no es opcional.{" "}
                  <span className="font-black border-b-3 border-brand-pink/30 pb-0.5 text-brand-pink" style={{ textShadow: "0 0 12px rgba(255,0,127,0.18)" }}>Es el espacio donde viven.</span>
                </motion.p>

                {/* Elegant Accessible Blockquote */}
                <motion.blockquote variants={fadeUp} transition={spring}
                  className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed text-slate-600 italic font-medium"
                  style={{ borderLeft:"5px solid var(--neon-blue)", paddingLeft:"1.5rem" }}>
                  "El problema no es el celular. El problema —y la oportunidad— es que nuestros hijos e hijas ya no viven solo en el mundo físico. Viven también en un territorio digital donde todo es igual de real: las amistades, los miedos, la identidad." — <span className="font-extrabold text-brand-navy">José Farhat</span>
                </motion.blockquote>

                <motion.div variants={fadeUp} transition={spring} className="flex flex-wrap gap-5 items-center">
                  <a href="#quiz" onClick={scrollToQuiz}
                    className="lc-cyber-btn inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-lg transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-white" />
                    Descubrí tu perfil
                  </a>
                  <a href="#datos"
                    onClick={(e) => { e.preventDefault(); document.getElementById("datos")?.scrollIntoView({ behavior:"smooth" }) }}
                    className="lc-cyber-btn-outline inline-flex items-center gap-2 px-9 py-5 rounded-full font-black text-lg">
                    Ver estadísticas <ArrowDown className="w-5 h-5 text-brand-blue" />
                  </a>
                </motion.div>

              </motion.div>

              {/* Right Column: Floating Cyber-Image */}
              <motion.div className="lg:col-span-5 relative flex justify-center items-center"
                initial={{ opacity:0, scale:0.93 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.9, delay:0.25, ease:[0.16, 1, 0.3, 1] }}>
                
                {/* Neon Floating Badges */}
                <div className="absolute -left-8 top-8 hidden xl:block lc-float-d1 pointer-events-none z-20">
                  <div className="px-5 py-3.5 rounded-2xl text-sm font-black shadow-xl bg-white border-2 border-cyan-200 text-brand-blue" style={{ boxShadow: "0 10px 35px rgba(0,240,255,0.18), 0 0 12px var(--neon-blue-glow)" }}>
                    ⚡ 95% tiene celular propio
                  </div>
                </div>
                <div className="absolute -right-6 top-[55%] hidden xl:block lc-float-d2 pointer-events-none z-20">
                  <div className="px-5 py-3.5 rounded-2xl text-sm font-black shadow-xl bg-white border-2 border-pink-200 text-brand-pink" style={{ boxShadow: "0 10px 35px rgba(255,0,127,0.18), 0 0 12px var(--neon-pink-glow)" }}>
                    💖 80% en redes diario
                  </div>
                </div>
                <div className="absolute left-1/4 -bottom-6 hidden xl:block lc-float-d3 pointer-events-none z-20">
                  <div className="px-5 py-3.5 rounded-2xl text-sm font-black shadow-xl bg-white border-2 border-violet-200 text-violet-600" style={{ boxShadow: "0 10px 35px rgba(157,0,255,0.15), 0 0 12px var(--neon-purple-glow)" }}>
                    ✨ 9,6 años: 1er celular
                  </div>
                </div>

                {/* Overlapping Bento Tech Frame */}
                <div className="relative p-4 bg-white rounded-[44px] shadow-2xl border border-cyan-200/50 max-w-sm sm:max-w-md" style={{ boxShadow: "0 25px 70px rgba(0,240,255,0.12), 0 0 30px rgba(0,240,255,0.06)" }}>
                  <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] w-full">
                    <Image
                      src="/img/tematicas/cibercrianza_hero.png"
                      alt="Cibercrianza Familiar"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-108"
                    />
                  </div>
                </div>

              </motion.div>

            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none" style={{ background:"linear-gradient(to top,#FFFFFF,transparent)" }} />
        </section>

        {/* ══ 2 DATOS QUE IMPACTAN ══ */}
        <section id="datos" className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 lc-grid-cyber opacity-15 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-24">
                <span className="lc-mono lc-cyber-badge inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">
                  Argentina — UNICEF / UNESCO · Kids Online
                </span>
                <h2 className="lc-fraunces font-black text-brand-navy" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  La realidad en números
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-4 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {stats.map((s, i) => {
                  const isFirst = i === 0
                  const isLast = i === 3
                  const colSpan = isFirst ? "md:col-span-8" : isLast ? "md:col-span-12 lg:col-span-4" : "md:col-span-6 lg:col-span-4"
                  
                  return (
                    <motion.div key={i} variants={fadeUp} transition={spring}
                      whileHover={{ y:-10 }}
                      className={`relative overflow-hidden cursor-default ${colSpan} ${
                        isFirst ? 'lc-cyber-card-highlight' : 'lc-cyber-card'
                      } p-8 sm:p-10 flex flex-col justify-between`}
                      style={{ borderRadius: "36px" }}>
                      
                      {/* Accent glow corner */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none opacity-45 blur-2xl" 
                        style={{ background: isFirst ? 'var(--neon-pink)' : 'var(--neon-blue)' }} />
                      
                      <div>
                        <div className="lc-mono font-black leading-none mb-6 flex items-baseline" 
                          style={{ 
                            fontSize: isFirst ? "clamp(3.5rem,7vw,5.5rem)" : "clamp(2.6rem,5vw,3.8rem)", 
                            color: isFirst ? "var(--neon-pink)" : "var(--brand-navy)",
                            textShadow: isFirst ? "0 0 20px var(--neon-pink-glow)" : "none"
                          }}>
                          {s.numero}
                          {s.unidad && <span className="text-2xl ml-2 font-black text-slate-500">{s.unidad}</span>}
                        </div>
                        
                        <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-extrabold mt-3">{s.descripcion}</p>
                      </div>

                      <p className="lc-mono text-xs mt-10 pt-4 border-t uppercase tracking-wider font-extrabold" style={{ color:"#94A3B8", borderColor:"rgba(0, 240, 255, .25)" }}>
                        Kids Online — UNICEF/UNESCO
                      </p>
                    </motion.div>
                  )
                })}
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══ 3 DOS TERRITORIOS ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-slate-50/50">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-20">
                <span className="lc-mono lc-cyber-badge-pink inline-block text-xs uppercase tracking-widest mb-5 px-4 py-1.5 rounded-full font-bold">El mapa real</span>
                <h2 className="lc-fraunces font-black text-brand-navy mb-4" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  Tus hijos ya viven en dos territorios
                </h2>
                <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-extrabold">
                  No entran y salen de internet: habitan simultáneamente en ambos espacios.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">

                {/* ── TERRITORIO FÍSICO ── */}
                <motion.div variants={fadeUp} transition={spring}
                  whileHover={{ y:-10, boxShadow:"0 25px 65px rgba(217,119,6,.15)", transition:{ type:"spring", stiffness:280 } }}
                  className="overflow-hidden bg-white border-4 border-amber-100 hover:border-amber-400/60 transition-all duration-300 shadow-[0_15px_45px_rgba(217,119,6,0.04)]" style={{ borderRadius:"44px" }}>

                  {/* Imagen de IA */}
                  <div className="relative overflow-hidden w-full h-[280px] bg-slate-50 border-b border-slate-100">
                    <Image
                      src="/img/tematicas/territorio_fisico.png"
                      alt="Territorio Físico"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-sm shadow-md bg-white/95 border border-amber-200" style={{ color:"#92400E" }}>
                      🏘️ Territorio Físico
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-10">
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {["Escuela y aula","Club y deporte","Barrio y amigos","Hogar y familia"].map(item=>(
                        <span key={item} className="px-4 py-1.5 rounded-full text-xs font-black" style={{ background:"rgba(217,119,6,.08)", border:"2px solid rgba(217,119,6,.22)", color:"#92400E" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-bold">
                      El mundo presencial tradicional: relaciones directas, reglas sociales claras, presencia y supervisión adulta visible de manera cotidiana.
                    </p>
                  </div>
                </motion.div>

                {/* ── TERRITORIO DIGITAL ── */}
                <motion.div variants={fadeUp} transition={{ ...spring, delay:.15 }}
                  whileHover={{ y:-10, boxShadow:"0 25px 65px var(--neon-blue-glow)", transition:{ type:"spring", stiffness:280 } }}
                  className="overflow-hidden bg-white border-4 border-cyan-100 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_15px_45px_rgba(0,240,255,0.04)]" style={{ borderRadius:"44px" }}>

                  {/* Imagen de IA */}
                  <div className="relative overflow-hidden w-full h-[280px] bg-slate-50 border-b border-slate-100">
                    <Image
                      src="/img/tematicas/territorio_digital.png"
                      alt="Territorio Digital"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-sm shadow-md bg-white/95 border border-cyan-200" style={{ color:"#005B94" }}>
                      🌐 Territorio Digital
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-10">
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {["Redes sociales","Videojuegos online","Algoritmos","Mensajería instantánea"].map(item=>(
                        <span key={item} className="px-4 py-1.5 rounded-full text-xs font-black" style={{ background:"rgba(0, 240, 255,.08)", border:"2px solid rgba(0, 240, 255,.25)", color:"#005B94" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-bold">
                      El mundo digital interactivo: socialización sin barreras físicas, recompensa inmediata, influencia algorítmica y falta de visibilidad ante la mirada adulta.
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ 4 DISEÑO DIGITAL REDISEÑADO ── ¿Cómo funciona el territorio digital? (3 Premium Blocks) ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 lc-grid-cyber opacity-15 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-24">
                <span className="lc-mono lc-cyber-badge inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">Arquitectura persuasiva</span>
                
                {/* Title */}
                <h2 className="lc-fraunces font-black text-brand-navy mb-6" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  ¿Cómo funciona el territorio digital?
                </h2>
                
                <p className="text-slate-700 text-xl md:text-2xl max-w-3xl mx-auto font-extrabold leading-relaxed">
                  Las plataformas no son neutras: están diseñadas científicamente para capturar y retener la atención.
                </p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-6 rounded-full" />
              </motion.div>

              {/* Redesigned 3 Large Cyberpunk Blocks with AI Images */}
              <div className="space-y-24">
                
                {/* Bloque 1: La Captura de la Atención (Algoritmos + Scroll Infinito) */}
                <motion.div variants={fadeUp} transition={spring}
                  whileHover={{ y:-10 }}
                  className="bg-white border-4 border-[#00F0FF]/30 hover:border-[#00F0FF] rounded-[48px] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,240,255,0.06)] hover:shadow-[0_30px_70px_rgba(0,240,255,0.22),0_0_24px_rgba(0,240,255,0.45)] overflow-hidden transition-all duration-500 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left: AI Image with Premium Bezel */}
                    <div className="lg:col-span-5 p-2.5 bg-slate-50 border-2 border-slate-100 rounded-[38px] shadow-inner w-full">
                      <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] w-full border border-slate-200">
                        <Image
                          src="/img/tematicas/territorio_atencion.png"
                          alt="La Captura de la Atención"
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          priority
                        />
                      </div>
                    </div>
                    
                    {/* Right: Content */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-full text-xs font-black bg-cyan-50 text-[#008BBF] uppercase tracking-widest border border-cyan-200" style={{ boxShadow: "0 0 10px rgba(0, 240, 255, 0.25)" }}>
                          ⚡ BLOQUE 1: CAPTURA DE ATENCIÓN
                        </span>
                      </div>
                      
                      <h3 className="lc-fraunces font-black text-3xl md:text-4xl text-brand-navy mb-8 leading-tight">
                        La Batalla por la Atención
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-8">
                        {/* Sub-item 1 */}
                        <div className="group bg-slate-50 border-l-4 border-l-[#00F0FF] border border-slate-100 p-6 md:p-8 rounded-r-[24px] rounded-l-[4px] hover:bg-white hover:shadow-lg transition-all duration-350">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-cyan-50 border-2 border-[#00F0FF] shadow-sm transition-transform duration-300 group-hover:rotate-12">
                              <Brain className="w-6 h-6 text-[#008BBF]" />
                            </div>
                            <h4 className="lc-fraunces font-bold text-xl md:text-2xl text-brand-navy">{disenioDigital[0].titulo}</h4>
                          </div>
                          <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                            {disenioDigital[0].descripcion}
                          </p>
                        </div>
                        
                        {/* Sub-item 2 */}
                        <div className="group bg-slate-50 border-l-4 border-l-[#00F0FF] border border-slate-100 p-6 md:p-8 rounded-r-[24px] rounded-l-[4px] hover:bg-white hover:shadow-lg transition-all duration-350">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-cyan-50 border-2 border-[#00F0FF] shadow-sm transition-transform duration-300 group-hover:scale-110">
                              <Scan className="w-6 h-6 text-[#008BBF]" />
                            </div>
                            <h4 className="lc-fraunces font-bold text-xl md:text-2xl text-brand-navy">{disenioDigital[1].titulo}</h4>
                          </div>
                          <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                            {disenioDigital[1].descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
                
                {/* Bloque 2: Validación Social y Lógica Comercial (Validación + Influencers) */}
                <motion.div variants={fadeUp} transition={spring}
                  whileHover={{ y:-10 }}
                  className="bg-white border-4 border-[#FF007F]/30 hover:border-[#FF007F] rounded-[48px] p-8 md:p-14 shadow-[0_20px_50px_rgba(255,0,127,0.06)] hover:shadow-[0_30px_70px_rgba(255,0,127,0.22),0_0_24px_rgba(255,0,127,0.45)] overflow-hidden transition-all duration-500 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left: Content (Order first on desktop to make it asymmetric) */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-full text-xs font-black bg-pink-50 text-brand-pink uppercase tracking-widest border border-pink-200" style={{ boxShadow: "0 0 10px rgba(255, 0, 127, 0.25)" }}>
                          💖 BLOQUE 2: APROBACIÓN Y COMERCIO
                        </span>
                      </div>
                      
                      <h3 className="lc-fraunces font-black text-3xl md:text-4xl text-brand-navy mb-8 leading-tight">
                        La Búsqueda de Validación Social
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-8">
                        {/* Sub-item 3 */}
                        <div className="group bg-slate-50 border-l-4 border-l-[#FF007F] border border-slate-100 p-6 md:p-8 rounded-r-[24px] rounded-l-[4px] hover:bg-white hover:shadow-lg transition-all duration-350">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-pink-50 border-2 border-[#FF007F] shadow-sm transition-transform duration-300 group-hover:rotate-12">
                              <Heart className="w-6 h-6 text-brand-pink fill-brand-pink/20" />
                            </div>
                            <h4 className="lc-fraunces font-bold text-xl md:text-2xl text-brand-navy">{disenioDigital[2].titulo}</h4>
                          </div>
                          <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                            {disenioDigital[2].descripcion}
                          </p>
                        </div>
                        
                        {/* Sub-item 4 */}
                        <div className="group bg-slate-50 border-l-4 border-l-[#FF007F] border border-slate-100 p-6 md:p-8 rounded-r-[24px] rounded-l-[4px] hover:bg-white hover:shadow-lg transition-all duration-350">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-pink-50 border-2 border-[#FF007F] shadow-sm transition-transform duration-300 group-hover:scale-110">
                              <ShoppingBag className="w-6 h-6 text-brand-pink" />
                            </div>
                            <h4 className="lc-fraunces font-bold text-xl md:text-2xl text-brand-navy">{disenioDigital[3].titulo}</h4>
                          </div>
                          <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                            {disenioDigital[3].descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right: AI Image with Premium Bezel (Order second on desktop, first on mobile) */}
                    <div className="lg:col-span-5 order-1 lg:order-2 p-2.5 bg-slate-50 border-2 border-slate-100 rounded-[38px] shadow-inner w-full">
                      <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] w-full border border-slate-200">
                        <Image
                          src="/img/tematicas/territorio_validacion.png"
                          alt="Validación Social y Lógica Comercial"
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
                
                {/* Bloque 3: Realidad Sintética e Inteligencia Artificial */}
                <motion.div variants={fadeUp} transition={spring}
                  whileHover={{ y:-10 }}
                  className="bg-white border-4 border-[#9D00FF]/30 hover:border-[#9D00FF] rounded-[48px] p-8 md:p-14 shadow-[0_20px_50px_rgba(157,0,255,0.06)] hover:shadow-[0_30px_70px_rgba(157,0,255,0.22),0_0_24px_rgba(157,0,255,0.45)] overflow-hidden transition-all duration-500 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left: AI Image with Premium Bezel */}
                    <div className="lg:col-span-5 p-2.5 bg-slate-50 border-2 border-slate-100 rounded-[38px] shadow-inner w-full">
                      <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] w-full border border-slate-200">
                        <Image
                          src="/img/tematicas/territorio_ia.png"
                          alt="Inteligencia Artificial"
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                    </div>
                    
                    {/* Right: Content */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-full text-xs font-black bg-violet-50 text-violet-600 uppercase tracking-widest border border-violet-200" style={{ boxShadow: "0 0 10px rgba(157, 0, 255, 0.25)" }}>
                          🔮 BLOQUE 3: REALIDAD SINTÉTICA
                        </span>
                      </div>
                      
                      <h3 className="lc-fraunces font-black text-3xl md:text-4xl text-brand-navy mb-8 leading-tight">
                        La Difuminación de lo Real
                      </h3>
                      
                      <div className="group bg-slate-50 border-l-4 border-l-[#9D00FF] border border-slate-100 p-6 md:p-8 rounded-r-[24px] rounded-l-[4px] hover:bg-white hover:shadow-lg transition-all duration-350">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-violet-50 border-2 border-[#9D00FF] shadow-sm transition-transform duration-300 group-hover:scale-110">
                            <AlertTriangle className="w-6 h-6 text-violet-600" />
                          </div>
                          <h4 className="lc-fraunces font-bold text-xl md:text-2xl text-brand-navy">{disenioDigital[4].titulo}</h4>
                        </div>
                        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                          {disenioDigital[4].descripcion}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
                
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══ 5 QUIZ 1 ── Test de Presencia ══ */}
        <section id="quiz" className="relative px-6 py-28 lg:py-36 overflow-hidden bg-slate-50">
          <div className="absolute pointer-events-none" style={{ top:"-15%", left:"50%", transform:"translateX(-50%)", width:750, height:450, background:"radial-gradient(ellipse,rgba(0,240,255,.12),transparent 70%)", filter:"blur(80px)" }} />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-16">
                <span className="lc-mono lc-cyber-badge inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">Autoevaluación · 10 preguntas</span>
                <h2 className="lc-fraunces font-black text-brand-navy mb-4" style={{ fontSize:"clamp(2.5rem, 5.5vw, 3.8rem)" }}>
                  ¿Qué tan presente estás en su vida digital?
                </h2>
                <p className="text-slate-700 font-extrabold text-base md:text-lg">Respondé con sinceridad para conocer tu perfil actual y recibir recomendaciones.</p>
              </motion.div>

              <motion.div variants={fadeUp} transition={spring}>
                <div className="rounded-[40px] overflow-hidden bg-white/95"
                  style={{ border:"2.5px solid rgba(0, 240, 255, 0.28)", boxShadow:"0 20px 70px rgba(0, 240, 255, 0.12), 0 0 30px rgba(0, 240, 255, 0.05)" }}>

                  {/* Progress Line */}
                  <div className="h-2.5 w-full bg-slate-100 relative">
                    <motion.div className="h-full rounded-full" 
                      animate={{ width:`${((terminado ? 10 : preguntaActual) / preguntas.length) * 100}%` }} 
                      transition={{ duration:.35 }}
                      style={{ background:"linear-gradient(90deg, var(--neon-blue), var(--neon-pink))", boxShadow: "0 0 12px var(--neon-blue)" }} />
                  </div>

                  <AnimatePresence mode="wait" custom={dir}>
                    {!terminado ? (
                      <motion.div key={`q-${preguntaActual}`} custom={dir} variants={qVar} initial="enter" animate="center" exit="exit" transition={{ duration:.35, ease:[0.16, 1, 0.3, 1] }} className="p-8 sm:p-12 md:p-16">
                        <div className="flex items-center justify-between mb-10">
                          <div className="flex gap-2">
                            {preguntas.map((_,i)=>(
                              <motion.div key={i} 
                                animate={{ 
                                  width: i===preguntaActual ? 30 : 8, 
                                  background: i<preguntaActual ? "var(--neon-blue)" : i===preguntaActual ? "var(--neon-blue)" : "#E2E8F0" 
                                }}
                                className="h-2 rounded-full" />
                            ))}
                          </div>
                          <span className="lc-mono text-sm font-extrabold text-slate-400">{preguntaActual+1} / {preguntas.length}</span>
                        </div>

                        {/* Extremely Large Readable Question Text */}
                        <h3 className="font-display font-black mb-10 leading-snug text-brand-navy" style={{ fontSize:"clamp(1.4rem, 3.2vw, 2rem)" }}>
                          {pregunta.texto}
                        </h3>

                        {/* Spacious Options */}
                        <div className="flex flex-col gap-4">
                          {pregunta.opciones.map((op,i)=>(
                            <motion.button key={i} onClick={()=>handleRespuesta(op.puntos)}
                              whileHover={{ scale: 1.015 }} whileTap={{ scale:.98 }}
                              className="lc-quiz-option w-full text-left px-8 py-5.5 flex items-center gap-5 cursor-pointer">
                              <div className="lc-mono w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-black"
                                style={{ background:"rgba(0, 240, 255, .08)", color:"var(--brand-navy)", border:"2px solid rgba(0, 240, 255, .28)" }}>
                                {String.fromCharCode(65+i)}
                              </div>
                              <span className="text-slate-800 text-base sm:text-lg md:text-xl font-extrabold leading-normal">{op.texto}</span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div key="result" custom={1} variants={qVar} initial="enter" animate="center" exit="exit" transition={{ duration:.4 }} className="p-8 sm:p-12 md:p-16 text-center">
                        <div className="flex justify-center mb-8">
                          <div className="relative">
                            <svg width="200" height="200" viewBox="0 0 180 180">
                              <circle cx="90" cy="90" r={R} fill="none" stroke="#F1F5F9" strokeWidth="10" />
                              <motion.circle cx="90" cy="90" r={R} fill="none"
                                stroke={perfil.color} strokeWidth="10" strokeLinecap="round"
                                strokeDasharray={circ}
                                strokeDashoffset={circ - (countValue / 100) * circ}
                                transform="rotate(-90 90 90)"
                                style={{ filter:`drop-shadow(0 0 14px ${perfil.color}70)`, transition:"stroke-dashoffset .05s linear" }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="lc-mono font-black text-5xl" style={{ color:perfil.color }}>{countValue}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-block px-7 py-3 rounded-2xl mb-6 bg-slate-50 border-2" style={{ borderColor: `${perfil.color}35`, background: perfil.bg }}>
                          <h3 className="font-display font-black text-2xl md:text-3xl" style={{ color:perfil.color }}>{perfil.nombre}</h3>
                        </div>
                        <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto text-slate-700 font-bold">{perfil.descripcion}</p>
                        
                        <button onClick={resetQuiz} className="lc-cyber-btn-outline inline-flex items-center gap-3 px-8 py-4.5 rounded-full font-black text-base cursor-pointer">
                          <RefreshCw className="w-5 h-5 text-brand-blue" />
                          Volver a hacer el quiz
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ 6 TABLA REDISEÑADA — "Lo que vemos... y lo que puede estar pasando" ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 lc-grid-cyber opacity-15 pointer-events-none" />
          <div className="absolute -left-20 top-20 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl bg-cyan-400" />
          <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full pointer-events-none opacity-25 blur-3xl bg-pink-500" />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-24">
                <span className="lc-mono lc-cyber-badge-pink inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">
                  Perspectiva del Entorno
                </span>
                
                <h2 className="lc-fraunces font-black leading-[1.02] text-brand-navy" style={{ fontSize:"clamp(3rem, 7.8vw, 6.2rem)" }}>
                  Lo que vemos <span className="text-slate-400 font-normal italic">los adultos</span>... <br />
                  <span className="lc-grad-cyber-text font-black italic block mt-1" style={{ textShadow: "0 0 20px rgba(0,240,255,0.06)" }}>
                    y lo que puede estar pasando
                  </span>
                </h2>
                
                <p className="text-slate-800 font-extrabold text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mt-6">
                  Detrás de cada comportamiento en pantallas hay una necesidad real. <br />
                  Hacé scroll y explorá la verdad subyacente de manera sumamente clara.
                </p>
                <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto mt-8 rounded-full" />
              </motion.div>

              {/* Comparison split cards */}
              <div className="relative space-y-16">
                {tabla.map((row, i) => (
                  <motion.div key={i}
                    initial={{ opacity:0, y:30 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true, margin: "-100px" }}
                    transition={{ delay: i*0.06, ...spring }}
                    className="lc-editorial-split-card">
                    
                    {/* Left Panel: The Adult Observation */}
                    <div className="lc-split-left border-2">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-slate-100 text-slate-600 uppercase tracking-widest border border-slate-200">
                          👁️ LO QUE OBSERVAMOS
                        </span>
                      </div>
                      
                      <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-800 leading-snug">
                        "{row.adulto}"
                      </h3>
                      
                      <div className="mt-8 flex items-center gap-2.5 text-sm font-black text-slate-400 uppercase tracking-wider">
                        <Eye className="w-5 h-5 text-cyan-400 animate-pulse" /> Comportamiento visible
                      </div>
                    </div>

                    {/* Right Panel: The Teen Reality */}
                    <div className="lc-split-right border-3">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-pink-50 text-brand-pink uppercase tracking-widest border border-pink-100" style={{ boxShadow: "0 0 8px var(--neon-pink-glow)" }}>
                          💡 REALIDAD ADOLESCENTE
                        </span>
                      </div>
                      
                      <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy leading-snug" style={{ textShadow: "0 2px 10px rgba(0,50,87,0.02)" }}>
                        {row.realidad}
                      </h3>
                      
                      <div className="mt-8 flex items-center gap-2.5 text-sm font-extrabold text-brand-pink uppercase tracking-wider">
                        <Heart className="w-5 h-5 text-brand-pink fill-brand-pink/20" /> Necesidad de desarrollo
                      </div>
                    </div>

                    {/* Connecting wire decor on desktop */}
                    <div className="absolute top-1/2 left-[43%] -translate-y-1/2 hidden lg:block w-12 h-[3px] bg-gradient-to-r from-cyan-400 to-pink-500 z-10 opacity-70 pointer-events-none" />

                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══ 7 DESAFÍOS ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-slate-50">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-20">
                <span className="lc-mono lc-cyber-badge inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">El escenario actual</span>
                <h2 className="lc-fraunces font-black text-brand-navy" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  Los desafíos de criar en la era digital
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-4 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {desafios.map((d,i)=>{
                  const Icon = d.icono
                  return (
                    <motion.div key={i} variants={fadeUp} transition={{ ...spring, delay:i*0.07 }}
                      whileHover={{ y:-10, borderColor: d.ac, boxShadow:`0 20px 45px ${d.ac}15, 0 0 15px ${d.ac}30` }}
                      className="lc-cyber-card p-10 relative overflow-hidden cursor-default bg-white border-2 border-slate-100"
                      style={{ transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)', borderRadius: "36px" }}>
                      <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl" style={{ background:`linear-gradient(90deg,${d.ac},transparent)` }} />
                      <div className="absolute top-5 right-5 lc-mono font-black select-none opacity-10" style={{ fontSize:"6rem", color:d.ac, lineHeight:1 }}>
                        {String(i+1).padStart(2,"0")}
                      </div>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8" style={{ background:d.bg, border:`2px solid ${d.ac}28` }}>
                        <Icon className="w-7 h-7" style={{ color:d.ac }} />
                      </div>
                      <h3 className="font-display font-black text-2xl mb-4 text-brand-navy">{d.titulo}</h3>
                      <p className="text-slate-700 leading-relaxed text-base md:text-lg font-bold">{d.descripcion}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ 8 RIESGOS (ACORDEÓN) ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-20">
                <span className="lc-mono lc-cyber-badge-pink inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">Riesgos reales · Argentina</span>
                <h2 className="lc-fraunces font-black text-brand-navy mb-4" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  Conocer los riesgos es estar informados para acompañar
                </h2>
                <div className="w-24 h-1.5 bg-pink-500 mx-auto mt-4 rounded-full" />
              </motion.div>

              <div className="flex flex-col gap-6 relative z-10">
                {riesgos.map((r, i) => {
                  const Icon = r.icono
                  const isOpen = openRiesgos.has(i)
                  return (
                    <motion.div key={i} variants={fadeUp} transition={{ ...spring, delay:i*0.05 }}
                      className="rounded-[32px] overflow-hidden bg-white" 
                      style={{ 
                        border:`2.5px solid ${isOpen ? r.ac : "rgba(0, 50, 87, 0.12)"}`, 
                        boxShadow: isOpen ? `0 18px 45px ${r.ac}10, 0 0 20px ${r.ac}25` : "0 4px 15px rgba(0,0,0,.01)", 
                        transition:"all 0.35s cubic-bezier(0.16, 1, 0.3, 1)" 
                      }}>
                      
                      <button onClick={()=>toggleRiesgo(i)} className="w-full text-left p-7 flex items-center gap-6 transition-colors duration-300 hover:bg-slate-50/40 cursor-pointer">
                        <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background:r.bg, border:`2px solid ${r.ac}28` }}>
                          <Icon className="w-7 h-7" style={{ color:r.ac }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-black text-xl text-brand-navy">{r.titulo}</h3>
                          <p className="text-sm mt-1 text-slate-400 font-extrabold truncate">{r.descripcion}</p>
                        </div>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration:.25 }}>
                          <ChevronDown className="w-6 h-6 flex-shrink-0 text-slate-400" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:.3, ease:[0.16, 1, 0.3, 1] }} style={{ overflow:"hidden" }}>
                            <div className="px-8 pb-8 border-t border-slate-100">
                              <p className="text-base sm:text-lg leading-relaxed mt-6 mb-6 text-slate-700 font-bold">{r.descripcion}</p>
                              
                              <div className="rounded-[24px] p-6 mb-6" style={{ background:r.bg, border:`2px solid ${r.ac}25` }}>
                                <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color:r.ac }}>🔍 Señales posibles</p>
                                <p className="text-base text-slate-800 font-extrabold">{r.senales}</p>
                              </div>

                              <p className="lc-mono text-sm font-extrabold" style={{ color:r.ac }}>{r.dato}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ 9 QUIZ 2 ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-slate-50">
          <div className="absolute pointer-events-none" style={{ top:"-15%", left:"50%", transform:"translateX(-50%)", width:750, height:450, background:"radial-gradient(ellipse,rgba(157,0,255,.12),transparent 70%)", filter:"blur(80px)" }} />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-16">
                <span className="lc-mono lc-cyber-badge inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">Quiz interactivo · 5 situaciones</span>
                <h2 className="lc-fraunces font-black text-brand-navy mb-4" style={{ fontSize:"clamp(2.5rem, 5.5vw, 3.8rem)" }}>
                  ¿Cómo manejás los límites digitales en casa?
                </h2>
                <p className="text-slate-700 font-extrabold text-base md:text-lg">5 situaciones cotidianas. ¿Cómo reaccionarías?</p>
              </motion.div>

              <motion.div variants={fadeUp} transition={spring}>
                <div className="rounded-[40px] overflow-hidden bg-white/95"
                  style={{ border:"2.5px solid rgba(157, 0, 255, 0.28)", boxShadow:"0 20px 70px rgba(157, 0, 255, 0.12), 0 0 30px rgba(157, 0, 255, 0.05)" }}>

                  <div className="h-2.5 w-full bg-slate-100 relative">
                    <motion.div className="h-full rounded-full" 
                      animate={{ width:`${((terminadoLimite ? 5 : preguntaLimite) / preguntasLimites.length) * 100}%` }} 
                      transition={{ duration:.35 }}
                      style={{ background:"linear-gradient(90deg, var(--neon-purple), var(--neon-pink))", boxShadow: "0 0 12px var(--neon-purple)" }} />
                  </div>

                  <AnimatePresence mode="wait" custom={dirLimite}>
                    {!terminadoLimite ? (
                      <motion.div key={`ql-${preguntaLimite}`} custom={dirLimite} variants={qVar} initial="enter" animate="center" exit="exit" transition={{ duration:.35, ease:[0.16, 1, 0.3, 1] }} className="p-8 sm:p-12 md:p-16">
                        <div className="flex items-center justify-between mb-10">
                          <div className="flex gap-2">
                            {preguntasLimites.map((_,i)=>(
                              <motion.div key={i} animate={{ width: i===preguntaLimite ? 30 : 8, background: i<preguntaLimite ? "var(--neon-purple)" : i===preguntaLimite ? "var(--neon-purple)" : "#E2E8F0" }}
                                className="h-2 rounded-full" />
                            ))}
                          </div>
                          <span className="lc-mono text-sm font-extrabold text-slate-400">{preguntaLimite+1} / {preguntasLimites.length}</span>
                        </div>

                        <div className="mb-8 px-6 py-5.5 rounded-[24px] bg-slate-50 border-2 border-slate-100">
                          <p className="lc-mono text-xs uppercase tracking-wider mb-2.5 font-black text-[#9D00FF]">Situación cotidiana</p>
                          <p className="font-display font-black leading-snug text-brand-navy" style={{ fontSize:"clamp(1.2rem,2.8vw,1.65rem)" }}>
                            {pregLimite.situacion}
                          </p>
                        </div>

                        <div className="flex flex-col gap-4">
                          {pregLimite.opciones.map((op,i)=>(
                            <motion.button key={i} onClick={()=>handleRespuestaLimite(op.tipo)}
                              whileHover={{ scale: 1.015 }} whileTap={{ scale:.98 }}
                              className="lc-quiz-option-pink w-full text-left px-8 py-5.5 flex items-center gap-5 cursor-pointer">
                              <div className="lc-mono w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-black"
                                style={{ background:"rgba(255, 0, 127, .06)", color:"var(--brand-navy)", border:"2px solid rgba(255, 0, 127, .25)" }}>
                                {String.fromCharCode(65+i)}
                              </div>
                              <span className="text-slate-800 text-base sm:text-lg md:text-xl font-extrabold leading-normal">{op.texto}</span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div key="result2" custom={1} variants={qVar} initial="enter" animate="center" exit="exit" transition={{ duration:.4 }} className="p-8 sm:p-12 md:p-16 text-center">
                        {(() => {
                          const tipo = getEstiloPredominante()
                          const estilo = estilos[tipo]
                          return (
                            <>
                              <motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:"spring", stiffness:240, delay:.1 }}
                                className="w-24 h-24 rounded-[24px] flex items-center justify-center mx-auto mb-8 bg-white border-2"
                                style={{ borderColor: estilo.border, background: estilo.bg, boxShadow:`0 0 35px ${estilo.color}25` }}>
                                <span className="text-4xl">{tipo==="acompanante"?"✅":tipo==="permisivo"?"🔓":"🔒"}</span>
                              </motion.div>
                              <h3 className="font-display font-black text-3xl mb-4" style={{ color:estilo.color }}>{estilo.nombre}</h3>
                              <p className="text-lg leading-relaxed mb-10 max-w-md mx-auto text-slate-700 font-bold">{estilo.descripcion}</p>
                              <button onClick={resetQuizLimite} className="lc-cyber-btn-outline inline-flex items-center gap-3 px-8 py-4.5 rounded-full font-bold cursor-pointer">
                                <RefreshCw className="w-5 h-5 text-brand-purple" />
                                Volver a hacer el quiz
                              </button>
                            </>
                          )
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ 10 CONTROL VS PRESENCIA ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-16">
                <h2 className="lc-fraunces font-black text-brand-navy" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  Control vs. Presencia
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-4 rounded-full" />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {/* Lógica del control */}
                <motion.div variants={fadeUp} transition={spring} className="lc-card-red rounded-[36px] p-10 relative overflow-hidden border-2" style={{ boxShadow:"0 10px 40px rgba(220,38,38,.03)", borderColor: "rgba(220,38,38,.16)" }}>
                  <div className="absolute top-0 inset-x-0 h-2.5 bg-red-500" />
                  <h3 className="font-display font-black text-2xl mb-8 flex items-center gap-3" style={{ color:"#B91C1C" }}>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base font-black" style={{ background:"rgba(220,38,38,.12)" }}>✕</span>
                    Lógica del control
                  </h3>
                  <ul className="space-y-5">
                    {["Prohibir apps sin explicación","Espiar el teléfono de manera encubierta","Quitar el dispositivo como castigo","\"Porque lo digo yo\"","Adulto que ignora el territorio digital"].map(item=>(
                      <li key={item} className="flex items-start gap-3.5">
                        <div className="w-6 h-6 rounded flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background:"rgba(220,38,38,.1)", border:"1.5px solid rgba(220,38,38,.2)" }}>
                          <span className="text-xs font-black" style={{ color:"#DC2626" }}>—</span>
                        </div>
                        <span className="text-base sm:text-lg text-slate-500 font-extrabold leading-normal" style={{ textDecoration:"line-through", textDecorationColor:"rgba(220,38,38,.3)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Lógica del acompañamiento */}
                <motion.div variants={fadeUp} transition={{ ...spring, delay:.08 }} className="lc-card-green rounded-[36px] p-10 relative overflow-hidden border-2" style={{ boxShadow:"0 10px 40px rgba(5,150,105,.03)", borderColor: "rgba(5,150,105,.16)" }}>
                  <div className="absolute top-0 inset-x-0 h-2.5 bg-emerald-500" />
                  <h3 className="font-display font-black text-2xl mb-8 flex items-center gap-3" style={{ color:"#047857" }}>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base font-black" style={{ background:"rgba(5,150,105,.12)" }}>✓</span>
                    Lógica del acompañamiento
                  </h3>
                  <ul className="space-y-5">
                    {["Explicar por qué ciertos contenidos no son apropiados para su edad","Acordar transparencia: \"si hay algo que me preocupa, lo hablamos\"","Establecer consecuencias relacionadas con el uso","\"Porque me importa que estés bien en todos los espacios donde vivís\"","Adulto que se interesa, pregunta, explora junto al adolescente"].map(item=>(
                      <li key={item} className="flex items-start gap-3.5">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-emerald-600" />
                        <span className="text-base sm:text-lg text-emerald-850 font-black leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ 11 SEÑALES DE ALERTA ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-slate-50">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-20">
                <span className="lc-mono lc-cyber-badge-pink inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">Señales de alerta</span>
                <h2 className="lc-fraunces font-black text-brand-navy mb-4" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  ¿Cuándo prestar más atención?
                </h2>
                <p className="text-slate-700 font-extrabold text-base md:text-lg">No para vigilar. Para comprender y acompañar a tiempo de manera clara.</p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto mt-4 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {senalesAlerta.map((senal, i) => (
                  <motion.div key={i} variants={fadeUp} transition={{ ...spring, delay:i*0.04 }}
                    whileHover={{ y:-5, borderColor: "var(--neon-pink)", boxShadow:"0 12px 30px rgba(255, 0, 127, 0.06), 0 0 8px var(--neon-pink-glow)" }}
                    className="lc-cyber-card rounded-[24px] p-7 flex items-start gap-4 cursor-default bg-white border border-slate-200"
                    style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5 bg-pink-50 border border-pink-100">
                      <AlertTriangle className="w-5.5 h-5.5 text-brand-pink" />
                    </div>
                    <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-extrabold">{senal}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ 12 PREGUNTAS PARA EL DIÁLOGO ── Split Layout with Second AI Image ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/10 via-white to-pink-50/10 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* Dialogue questions (Left) */}
                <div className="lg:col-span-7">
                  <motion.div variants={fadeUp} transition={spring} className="mb-12">
                    <span className="lc-mono lc-cyber-badge inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">Herramientas prácticas</span>
                    <h2 className="lc-fraunces font-black text-brand-navy" style={{ fontSize:"clamp(2.4rem,5.5vw,3.8rem)" }}>
                      Preguntas para abrir el diálogo sin interrogar
                    </h2>
                    <p className="text-slate-700 font-extrabold mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
                      La mejor protección es la confianza. Estas preguntas ayudan a abrir la conversación desde la curiosidad y el respeto mutuo.
                    </p>
                  </motion.div>

                  <div className="space-y-6">
                    {preguntasDialogo.map((p, i) => (
                      <motion.div key={i} variants={fadeUp} transition={{ ...spring, delay:i*0.06 }}
                        whileHover={{ x:8, scale:1.01, borderLeftColor:"var(--neon-pink)", boxShadow: "0 10px 30px rgba(255,0,127,0.06)" }}
                        className="group bg-white border border-slate-200/80 rounded-[24px] p-6 flex items-start gap-5 cursor-default relative overflow-hidden transition-all duration-300" 
                        style={{ borderLeft:"6px solid var(--neon-blue)" }}>
                        <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-cyan-50 border border-cyan-100 text-[#008BBF] transition-transform duration-300 group-hover:scale-110">
                          <MessageCircle className="w-5.5 h-5.5" />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed font-bold">{p}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right side: Image + Tips Box to balance height */}
                <div className="lg:col-span-5 space-y-10">
                  {/* High-End Illustrated Frame */}
                  <motion.div className="relative p-3 bg-white rounded-[48px] shadow-2xl border border-violet-100 w-full animate-lc-float"
                    initial={{ opacity:0, scale:0.95 }}
                    whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }}
                    transition={{ duration:0.75 }}
                    style={{ boxShadow: "0 25px 60px rgba(157,0,255,0.08), 0 0 30px rgba(157,0,255,0.03)" }}>
                    
                    <div className="relative rounded-[36px] overflow-hidden aspect-square w-full border border-slate-100">
                      <Image
                        src="/img/tematicas/cibercrianza_dialogue.png"
                        alt="Diálogo Familiar sobre Tecnología"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                    </div>
                  </motion.div>

                  {/* Buenas Prácticas Bento Box */}
                  <motion.div variants={fadeUp} transition={spring}
                    whileHover={{ y:-5 }}
                    className="bg-slate-50/80 border-2 border-violet-100 hover:border-[#9D00FF]/40 rounded-[36px] p-8 md:p-10 shadow-lg relative overflow-hidden transition-all duration-350"
                    style={{ boxShadow: "0 15px 35px rgba(157,0,255,0.03)" }}>
                    
                    <div className="absolute top-0 right-0 w-24 h-24 bg-violet-100/30 rounded-full blur-xl pointer-events-none" />
                    
                    <h3 className="lc-fraunces font-black text-xl md:text-2xl text-brand-navy mb-6 flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-[#9D00FF]" />
                      Claves para conversar mejor
                    </h3>
                    
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] flex-shrink-0 mt-2.5 shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
                        <div>
                          <strong className="text-slate-800 text-base md:text-lg block font-bold">Escucha activa y sin juicios</strong>
                          <span className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                            Recordá que el objetivo es que sientan la seguridad de contarte cualquier cosa, no recriminarlos.
                          </span>
                        </div>
                      </li>
                      
                      <li className="flex gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF007F] flex-shrink-0 mt-2.5 shadow-[0_0_8px_rgba(255,0,127,0.4)]" />
                        <div>
                          <strong className="text-slate-800 text-base md:text-lg block font-bold">Elegí momentos relajados</strong>
                          <span className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                            Los trayectos en auto, la cena o momentos libres espontáneos suelen fluir mejor que las citas formales.
                          </span>
                        </div>
                      </li>
                      
                      <li className="flex gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#9D00FF] flex-shrink-0 mt-2.5 shadow-[0_0_8px_rgba(157,0,255,0.4)]" />
                        <div>
                          <strong className="text-slate-800 text-base md:text-lg block font-bold">Hablá desde la empatía</strong>
                          <span className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                            Compartí tus propias dudas o desafíos digitales. Esto nivela el terreno y los anima a abrirse.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </div>

              </div>

            </motion.div>
          </div>
        </section>

        {/* ══ 13 ECOSISTEMA ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-slate-50">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-20">
                <h2 className="lc-fraunces font-black text-brand-navy mb-4" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  Ninguna familia puede sola
                </h2>
                <blockquote className="max-w-2xl mx-auto text-lg md:text-xl italic text-slate-700 font-extrabold leading-relaxed">
                  "Un ecosistema de cuidado no es un conjunto de adultos preocupados. Es un conjunto de adultos, instituciones y recursos coordinados." — <span className="font-black text-brand-navy">José Farhat</span>
                </blockquote>
                <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-6 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ecosistema.map((e, i) => {
                  const Icon = e.icono
                  const ac = ECO_AC[i]
                  return (
                    <motion.div key={i} variants={fadeUp} transition={{ ...spring, delay:i*0.07 }}
                      whileHover={{ y:-8, borderColor: ac, boxShadow:`0 18px 35px ${ac}10, 0 0 10px ${ac}25` }}
                      className="lc-cyber-card rounded-[32px] p-8 relative overflow-hidden cursor-default bg-white border border-slate-200"
                      style={{ transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                      <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl" style={{ background:`linear-gradient(90deg,${ac},transparent)` }} />
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background:`${ac}08`, border:`2px solid ${ac}22` }}>
                        <Icon className="w-6.5 h-6.5" style={{ color:ac }} />
                      </div>
                      <h3 className="font-display font-black text-xl mb-3 text-brand-navy">{e.actor}</h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">{e.rol}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ 14 COMPROMISOS ══ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 lc-dots-cyber opacity-30 pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-20">
                <span className="lc-mono lc-cyber-badge inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">Práctica cotidiana</span>
                <h2 className="lc-fraunces font-black text-brand-navy mb-4" style={{ fontSize:"clamp(2.8rem, 6.2vw, 4.2rem)" }}>
                  5 compromisos para asumir hoy
                </h2>
                <p className="text-slate-700 font-extrabold text-base md:text-lg">No hace falta cambiar todo de golpe. Lo importante es dar el primer paso.</p>
                <div className="w-24 h-1.5 bg-pink-500 mx-auto mt-4 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {compromisos.map((c, i) => {
                  const Icon = c.icono
                  const ac = COMP_AC[i]
                  return (
                    <motion.div key={i} variants={fadeUp} transition={{ ...spring, delay:i*0.07 }}
                      whileHover={{ y:-8, scale:1.015, borderColor: ac, boxShadow:`0 18px 35px ${ac}10, 0 0 10px ${ac}25` }}
                      className="lc-cyber-card rounded-[32px] p-8 relative overflow-hidden cursor-default bg-white border border-slate-200"
                      style={{ transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                      <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl" style={{ background:`linear-gradient(90deg,${ac},transparent)` }} />
                      <div className="absolute top-3 right-5 lc-mono font-black select-none opacity-20" style={{ fontSize:"5rem", color:`${ac}`, lineHeight:1 }}>{c.numero}</div>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background:`${ac}08`, border:`2px solid ${ac}22` }}>
                        <Icon className="w-6.5 h-6.5" style={{ color:ac }} />
                      </div>
                      <p className="lc-mono text-xs font-black uppercase tracking-widest mb-2" style={{ color:ac }}>{c.accion}</p>
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-bold">{c.detalle}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ 15 FRASE DE CIERRE ══ */}
        <section className="relative px-6 py-32 lg:py-40 overflow-hidden bg-slate-50/50">
          <div className="absolute inset-0 lc-dots-cyber opacity-20 pointer-events-none" />
          <div className="absolute lc-f1 pointer-events-none" style={{ top:"-20%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,240,255,.08),transparent 70%)", filter:"blur(75px)" }} />
          <div className="absolute lc-f2 pointer-events-none" style={{ bottom:"-15%", left:"-8%", width:450, height:450, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,0,127,.05),transparent 70%)", filter:"blur(75px)" }} />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.8 }}>
              <div className="w-18 h-18 rounded-2xl flex items-center justify-center mx-auto mb-10 bg-white border-2 border-cyan-155 shadow-sm">
                <Users className="w-8 h-8 text-brand-blue" />
              </div>

              <blockquote className="lc-fraunces font-bold italic leading-[1.3] mb-10 text-brand-navy" style={{ fontSize:"clamp(1.8rem, 4.5vw, 3.2rem)" }}>
                <span className="block font-display text-[5rem] not-italic leading-none mb-1 opacity-15 text-cyan-400">"</span>
                La infancia siempre necesitó adultos que conocieran el territorio donde los chicos jugaban y crecían. Hoy ese territorio también es digital. La tarea es la misma: estar presentes.
              </blockquote>
              <p className="lc-mono text-xs font-bold text-slate-400 mb-12">
                — José Farhat · 2.º Congreso Provincial de Alfabetización, Innovación y Vínculos
              </p>

              <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                <a href="#quiz" onClick={scrollToQuiz}
                  className="lc-cyber-btn inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-lg transition-all duration-300">
                  <ArrowDown className="w-5 h-5 text-white" /> Hacer el test
                </a>
                <a href="/tematicas"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold transition-all duration-300 hover:bg-slate-100 border-2 border-slate-200 bg-white text-slate-700">
                  Ver temáticas <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ TEMAS RELACIONADOS ══ */}
        <section className="relative px-6 py-24 overflow-hidden bg-white border-t border-slate-150">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              <motion.div variants={fadeUp} transition={spring} className="flex items-end justify-between mb-12">
                <div>
                  <h2 className="font-display font-black text-2xl md:text-3xl text-brand-navy mb-2">Temas relacionados</h2>
                  <p className="text-sm text-slate-400 font-extrabold">Continuá explorando guías de ciudadanía digital y prevención</p>
                </div>
                <a href="/tematicas" className="hidden sm:flex items-center gap-1.5 text-xs font-extrabold text-brand-blue hover:text-brand-pink transition-colors">
                  Ver todas <ArrowUpRight className="w-5 h-5" />
                </a>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { label:"NNyA y el Entorno Digital",      href:"/nnya-entorno-digital",       desc:"Cómo perciben los chicos y chicas el mundo conectado.",  ac:"#9D00FF", icon:Users },
                  { label:"Violencia Digital en Infancias", href:"/violencia-digital-infancias", desc:"Detección temprana y señales de grooming o acoso.",          ac:"#FF007F", icon:MessageSquareWarning },
                  { label:"Hiperconectividad Digital",      href:"/hiperconectividad-digital",   desc:"El impacto de las pantallas y el uso reflexivo.",  ac:"#00F0FF", icon:Zap },
                ].map((t,i)=>{
                  const Icon = t.icon
                  return (
                    <motion.a key={i} href={t.href} variants={fadeUp} transition={{ ...spring, delay:i*0.07 }}
                      whileHover={{ y:-8, borderColor: t.ac, boxShadow:`0 16px 40px ${t.ac}08, 0 0 12px ${t.ac}20`, transition:{ type:"spring", stiffness:300 } }}
                      className="lc-cyber-card rounded-2xl p-7 relative overflow-hidden block bg-white border border-slate-200"
                      style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                      <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-2xl" style={{ background:`linear-gradient(90deg,${t.ac},transparent)` }} />
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background:`${t.ac}08`, border:`2px solid ${t.ac}22` }}>
                        <Icon className="w-6 h-6" style={{ color:t.ac }} />
                      </div>
                      <h3 className="font-display font-black text-lg mb-2 text-brand-navy leading-snug">{t.label}</h3>
                      <p className="text-xs leading-relaxed mb-4 text-slate-500 font-extrabold">{t.desc}</p>
                      <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color:t.ac }}>
                        Explorar <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
