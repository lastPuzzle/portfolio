import PageTemplete from 'components/base/PageTemplete';
import Main from 'components/Main';
import About from 'components/About';
import Skills from 'components/Skills';
import Works from 'components/Works';

const HomePage = () => {
  return (
    <PageTemplete>
      <Main />
      <About />
      <Skills />
      <Works />
    </PageTemplete>
  );
};

export default HomePage;
