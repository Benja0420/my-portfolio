import { Element } from 'react-scroll';

const About = () => {
    return (
      <Element name="about" className="bg-base min-h-[100vh] py-20 px-4">
        <h2 className="text-pink-400 font-semibold text-4xl text-center">
          About me
        </h2>
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6">
              <h3 className="text-pink-400 text-2xl font-semibold mb-4">
                Who am I?
              </h3>
              <p className="text-pink-50 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi facere recusandae totam nihil molestias aliquid id
                praesentium nostrum minima, ducimus placeat? Similique adipisci
                cum delectus! Quisquam, quidem. Quisquam, quidem.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-pink-400 text-2xl font-semibold mb-4">
                What am I doing?
              </h3>
              <p className="text-pink-50 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi facere recusandae totam nihil molestias aliquid id
                praesentium nostrum minima, ducimus placeat? Similique adipisci
                cum delectus! Quisquam, quidem. Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
      </Element>
    );
};

export default About;