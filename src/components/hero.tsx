import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

import { NewsletterForm } from './newsletter-form'

type ScrollRevealRefElement =
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLDivElement

export function Hero({
  content,
  illustration,
  title,
}: {
  content: string
  illustration?: ReactNode
  title: string
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref, index) =>
        ScrollReveal().reveal(scrollRevealRef.current[index], {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  function onNewsletterSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ values })
      }, 1000)
    })
  }

  return (
    <section className="text-center lg:w-full lg:py-20 lg:text-left">
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div
            className="hero-copy bg-white pt-10 pb-16 lg:pt-16 lg:pr-20"
            style={{ minWidth: '600px' }}
          >
            <div className="mx-auto w-full max-w-3xl">
              <h1
                ref={(el: ScrollRevealRefElement) =>
                  scrollRevealRef.current.push(el)
                }
                className="mt-0 mb-4 text-4xl font-bold md:text-5xl "
              >
                {title}
              </h1>
              <p
                ref={(el: ScrollRevealRefElement) =>
                  scrollRevealRef.current.push(el)
                }
                className="prose prose-xl px-16 text-gray-500 md:px-0"
              >
                {content}
              </p>
            </div>

            <div
              ref={(el: ScrollRevealRefElement) =>
                scrollRevealRef.current.push(el)
              }
            >
              
             <iframe src="https://www.youtube.com/embed/lARMsh5q514" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  width="100%" height="315" ></iframe>
             <div >
<div >

<div ><p ><span >¿Cuáles Son las Posturas de Yoga que Debes Conocer?</span></p><p ><span >2023.02.08 17:24</span></p><p ><span ></span></p><p ><span >Compra 2100 asanas; todas las posturas del yoga de URANO en Falabella.com. Descubre sus características principales y adquiere la mejor opción para ti.</span></p><p></p><p ><span><a href="p9.html" target="_self" >Read More</a></span></p></div>
<br/><h1 style={{fontSize:"35px", color:"rgb(5, 163, 187)", width:"bold"}}>BLOG</h1>
<br/>
<h2 style={{width:"bold", fontSize:"25px"}}>1. Posturas de yoga: 12 asanas de pie - Lucía Liencres</h2>
<p style={{width:"bold", fontSize:"15px"}}>Pranayama es una de las ocho ramas del yoga que son mencionadas en los Yoga Sutras de Patanjali, y es el próximo paso luego de la práctica de āsanas posturas ...</p>
<button style={{width:"bold", fontSize:"10px"}}>More info...</button>
<br/><br/>
<h2 style={{width:"bold", fontSize:"25px"}}>2. beneficios archivos – Vinyasa Yoga Chile</h2>
<p style={{width:"bold", fontSize:"15px"}}>Consiste en una secuencia de 26 asanas (posturas) que vienen del Hatha yoga y trabajan el cuerpo en su totalidad, e incorpora además dos ejercicios de ... </p>
<button style={{width:"bold", fontSize:"10px"}}>More info...</button>
<br/><br/>
<h2 style={{width:"bold", fontSize:"25px"}}>3. Blog EIY - Cuando las Posturas se Convierten en Asanas</h2>
<p style={{width:"bold", fontSize:"15px"}}>Las asanas de pie son un tipo de posturas de yoga fundamentales en la práctica, aportan fuerza, equilibrio y conciencia corporal. Suelen ser de las.</p>
<button style={{width:"bold", fontSize:"10px"}}>More info...</button>
<br/><br/>
<h2 style={{width:"bold", fontSize:"25px"}}>4. 9 posturas de yoga que te ayudarán a dormir mejor - La Tercera</h2>
<p style={{width:"bold", fontSize:"15px"}}>2.100 asanas es la colección más completa de asanas de yoga que se ha fotografiado hasta la fecha, y la primera en clasificar unas asombrosas 2.100 posturas .</p>
<button style={{width:"bold", fontSize:"10px"}}>More info...</button>
<br/><br/>
<h1  style={{width:"bold", fontSize:"40px"}}>¿Cuáles Son las Posturas de Yoga que Debes Conocer?</h1>
<h2 style={{width:"bold", fontSize:"25px"}}>Compra 2100 asanas; todas las posturas del yoga de URANO en Falabella.com. Descubre sus características principales y adquiere la mejor opción para ti.</h2>
<button style={{width:"bold", fontSize:"30px", backgroundColor:"ActiveBorder", color:"blue"}} color="primary">READ MORE...</button>
<details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            2100 ASANAS TODAS LAS POSTURAS DEL YOGA
            </summary>
            <p>
            Con ello trabajarás, además, la seguridad y la confianza. Practica estas asanas con respiración consciente y entrégate con devoción a la práctica. Excelente fin ...
            </p>
           
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            beneficios archivos – Vinyasa Yoga Chile
            </summary>
            <p>
            Consiste en una secuencia de 26 asanas (posturas) que vienen del Hatha yoga y trabajan el cuerpo en su totalidad, e incorpora además dos ejercicios de ...
            
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            Posturas de yoga: 12 asanas de pie - Lucía Liencres
            </summary>
            <p>
            Pranayama es una de las ocho ramas del yoga que son mencionadas en los Yoga Sutras de Patanjali, y es el próximo paso luego de la práctica de āsanas (posturas ...
            
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            9 posturas de yoga que te ayudarán a dormir mejor - La Tercera
            </summary>
            <p>
            2.100 asanas es la colección más completa de asanas de yoga que se ha fotografiado hasta la fecha, y la primera en clasificar unas asombrosas 2.100 posturas ...
            
            </p>
          </details>
</div>
</div>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
<form>  
          <label>First Name: </label>  <br/>
          <input type="text" placeholder="enter first name" />  <br/>
          <label>Last Name: </label>  <br/>
          <input type="text" placeholder="enter last name" />  <br/>
          <label>Country: </label>  <br/>
				  <option value="Chile">Chile</option>
          <textarea id="subject" name="subject" placeholder="Write something.." ></textarea><br/>
          <a href="./thanks.php"><button style={{width:"bold", fontSize:"30px", backgroundColor:"ActiveBorder", color:"blue"}} color="primary">Entrar</button></a>
        </form> 
       
        </div> 
        <br/>
        <br/>
        <h2 style={{width:"bold", fontSize:"25px"}}>Curso de profundización al Yoga</h2><br/>
        <p>El curso online de Profundización al Yoga es un recorrido hacia el descubrimiento de esta tradición milenaria. Aprenderás sobre su filosofía, asanas y sustentación del cuerpo localizando los músculos clave que ayudan a mantenerlas.</p>

<p>Las clases serán semanales, cada sesión contempla una clase de filosofía y una clase práctica- teórica de asanas y anatomía.</p>
<p>Son 11 sesiones online los días sábados y un retiro presencial.</p>
<p>Este taller de yoga online es una invitación a realizar un viaje consciente para alcanzar la sanación emocional. Te conectarás con las profundidades de tu ser para conocer el modo en que tus emociones te afectan a ti y a tu entorno.</p>

En este curso lograrás:

<p>Comprender el Yoga de forma integral, añadiendo a tu práctica su filosofía y los elementos esenciales a la hora de ejecutar un Asana.</p>

<p>Tener los conocimientos para aplicar las técnicas del yoga a la vida cotidiana, tales como meditación, relajación, concentración, respiración, entre otras.</p>

<p>Reflexionar sobre las bases teorías del Yoga, conociendo parte de su historia y su cultura. Comprender la esencia de esta tradición, de manera que puedas adaptarla con simpleza a tu experiencia cotidiana. </p>
          </div>
          
          {!!illustration && (
            <div className="relative -ml-6 -mr-6 py-10 lg:p-0">
              <img src="./assets/1098453.jpg"></img>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
