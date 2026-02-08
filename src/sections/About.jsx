const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT — ABOUT */}
        <div className="glass-glow rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-gray-700 leading-relaxed">
            I am a <span className="font-semibold">React Developer fresher</span> from
            Pune with a strong foundation in Computer Engineering. I enjoy
            building clean, responsive, and user-friendly web applications
            using React.js, JavaScript, and Tailwind CSS.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            I focus on creating reusable components, managing state efficiently,
            and enhancing user experience with modern UI patterns and smooth
            animations.
          </p>
        </div>

        {/* RIGHT — EDUCATION */}
        <div className="glass-glow rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Education
          </h2>

          <div className="space-y-6 relative before:absolute before:top-0 before:left-2 before:h-full before:w-[2px] before:bg-blue-200">
            
            <div className="pl-8 relative">
              <span className="absolute left-0 top-1 w-4 h-4 bg-blue-500 rounded-full"></span>
              <h3 className="text-lg font-semibold">
                B.E. Computer Engineering
              </h3>
              <p className="text-gray-600">
                Pune University · 2025
              </p>
              <p className="text-sm text-gray-500">
                Percentage: 72%
              </p>
            </div>

            <div className="pl-8 relative">
              <span className="absolute left-0 top-1 w-4 h-4 bg-blue-500 rounded-full"></span>
              <h3 className="text-lg font-semibold">
                Diploma – Computer Engineering
              </h3>
              <p className="text-gray-600">
                AISSMS Polytechnic, Pune
              </p>
              <p className="text-sm text-gray-500">
                Percentage: 84.23%
              </p>
            </div>

            <div className="pl-8 relative">
              <span className="absolute left-0 top-1 w-4 h-4 bg-blue-500 rounded-full"></span>
              <h3 className="text-lg font-semibold">
                SSC
              </h3>
              <p className="text-gray-600">
                Modern High School, Pune
              </p>
              <p className="text-sm text-gray-500">
                Percentage: 79.40%
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
