import style from "./Footer.module.css"

const Footer = () => {
 return (
    <div>
         <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Juan Manuel.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Acerca de este sitio web:</span> construido con
        React y Next.js (App Router y Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, alojado en Vercel.
      </p>
    </footer>
    </div>
 )   
}

export default Footer