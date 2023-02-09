import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Dancing is like Dreaming Your feet. (c) Blog"
        content="¿Cuáles Son las Posturas de Yoga que Debes Conocer?"
        illustration={<HeroIllustration />}
      />
      
      
      
      
    </Layout>
  )
}
