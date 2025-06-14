
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CoursesPreview from '../components/CoursesPreview';
import PlaygroundPreview from '../components/PlaygroundPreview';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CoursesPreview />
      <PlaygroundPreview />
      <Footer />
    </div>
  );
};

export default Index;
