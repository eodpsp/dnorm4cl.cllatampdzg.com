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

<div ><p ><span >??Cu??les Son las Posturas de Yoga que Debes Conocer?</span></p><p ><span >2023.02.08 17:24</span></p><p ><span ></span></p><p ><span >Compra 2100 asanas; todas las posturas del yoga de URANO en Falabella.com. Descubre sus caracter??sticas principales y adquiere la mejor opci??n para ti.</span></p><p></p><p ><span><a href="p9.html" target="_self" >Read More</a></span></p></div>
<br/><h1 style={{fontSize:"35px", color:"rgb(5, 163, 187)", width:"bold"}}>BLOG</h1>
<br/>
<h2 style={{width:"bold", fontSize:"25px"}}>1. Posturas de yoga: 12 asanas de pie - Luc??a Liencres</h2>
<p style={{width:"bold", fontSize:"15px"}}>Pranayama es una de las ocho ramas del yoga que son mencionadas en los Yoga Sutras de Patanjali, y es el pr??ximo paso luego de la pr??ctica de ??sanas posturas ...</p>
<button style={{width:"bold", fontSize:"10px"}}>More info...</button>
<br/><br/>
<h2 style={{width:"bold", fontSize:"25px"}}>2. beneficios archivos ??? Vinyasa Yoga Chile</h2>
<p style={{width:"bold", fontSize:"15px"}}>Consiste en una secuencia de 26 asanas (posturas) que vienen del Hatha yoga y trabajan el cuerpo en su totalidad, e incorpora adem??s dos ejercicios de ... </p>
<button style={{width:"bold", fontSize:"10px"}}>More info...</button>
<br/><br/>
<h2 style={{width:"bold", fontSize:"25px"}}>3. Blog EIY - Cuando las Posturas se Convierten en Asanas</h2>
<p style={{width:"bold", fontSize:"15px"}}>Las asanas de pie son un tipo de posturas de yoga fundamentales en la pr??ctica, aportan fuerza, equilibrio y conciencia corporal. Suelen ser de las.</p>
<button style={{width:"bold", fontSize:"10px"}}>More info...</button>
<br/><br/>
<h2 style={{width:"bold", fontSize:"25px"}}>4. 9 posturas de yoga que te ayudar??n a dormir mejor - La Tercera</h2>
<p style={{width:"bold", fontSize:"15px"}}>2.100 asanas es la colecci??n m??s completa de asanas de yoga que se ha fotografiado hasta la fecha, y la primera en clasificar unas asombrosas 2.100 posturas .</p>
<button style={{width:"bold", fontSize:"10px"}}>More info...</button>
<br/><br/>
<h1  style={{width:"bold", fontSize:"40px"}}>??Cu??les Son las Posturas de Yoga que Debes Conocer?</h1>
<h2 style={{width:"bold", fontSize:"25px"}}>Compra 2100 asanas; todas las posturas del yoga de URANO en Falabella.com. Descubre sus caracter??sticas principales y adquiere la mejor opci??n para ti.</h2>
<button style={{width:"bold", fontSize:"30px", backgroundColor:"ActiveBorder", color:"blue"}} color="primary">READ MORE...</button>
<details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            2100 ASANAS TODAS LAS POSTURAS DEL YOGA
            </summary>
            <p>
            Con ello trabajar??s, adem??s, la seguridad y la confianza. Practica estas asanas con respiraci??n consciente y entr??gate con devoci??n a la pr??ctica. Excelente fin ...
            </p>
           
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            beneficios archivos ??? Vinyasa Yoga Chile
            </summary>
            <p>
            Consiste en una secuencia de 26 asanas (posturas) que vienen del Hatha yoga y trabajan el cuerpo en su totalidad, e incorpora adem??s dos ejercicios de ...
            
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            Posturas de yoga: 12 asanas de pie - Luc??a Liencres
            </summary>
            <p>
            Pranayama es una de las ocho ramas del yoga que son mencionadas en los Yoga Sutras de Patanjali, y es el pr??ximo paso luego de la pr??ctica de ??sanas (posturas ...
            
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            9 posturas de yoga que te ayudar??n a dormir mejor - La Tercera
            </summary>
            <p>
            2.100 asanas es la colecci??n m??s completa de asanas de yoga que se ha fotografiado hasta la fecha, y la primera en clasificar unas asombrosas 2.100 posturas ...
            
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
        <h2 style={{width:"bold", fontSize:"25px"}}>Curso de profundizaci??n al Yoga</h2><br/>
        <p>El curso online de Profundizaci??n al Yoga es un recorrido hacia el descubrimiento de esta tradici??n milenaria. Aprender??s sobre su filosof??a, asanas y sustentaci??n del cuerpo localizando los m??sculos clave que ayudan a mantenerlas.</p>

<p>Las clases ser??n semanales, cada sesi??n contempla una clase de filosof??a y una clase pr??ctica- te??rica de asanas y anatom??a.</p>
<p>Son 11 sesiones online los d??as s??bados y un retiro presencial.</p>
<p>Este taller de yoga online es una invitaci??n a realizar un viaje consciente para alcanzar la sanaci??n emocional. Te conectar??s con las profundidades de tu ser para conocer el modo en que tus emociones te afectan a ti y a tu entorno.</p>

En este curso lograr??s:

<p>Comprender el Yoga de forma integral, a??adiendo a tu pr??ctica su filosof??a y los elementos esenciales a la hora de ejecutar un Asana.</p>

<p>Tener los conocimientos para aplicar las t??cnicas del yoga a la vida cotidiana, tales como meditaci??n, relajaci??n, concentraci??n, respiraci??n, entre otras.</p>

<p>Reflexionar sobre las bases teor??as del Yoga, conociendo parte de su historia y su cultura. Comprender la esencia de esta tradici??n, de manera que puedas adaptarla con simpleza a tu experiencia cotidiana. </p>
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
