import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
