import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact">
          <h1 style={{width:"800", fontSize:"20px"}}>Address:</h1><p>Manuel Antonio Matta 1345, San Javier de Loncomilla, San Javier, Maule</p>
          <h1 style={{width:"800", fontSize:"20px"}}>Phone:</h1><p>+56582581829</p>
          <h1 style={{width:"800", fontSize:"20px"}}>E-mail:</h1><p>chilieyogacentercom@gmail.com</p>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src="https://picsum.photos/420/640?grayscale"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
