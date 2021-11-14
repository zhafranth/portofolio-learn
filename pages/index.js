// Components
import {Header, Hero, Skills} from '../components'

export default function Home() {
  return (
    <main>
      <div className={`min-h-[100vh] bg-white`}>
        <Header/>
        <Hero/>
        <Skills/>
      </div>
    </main>
  )
}
