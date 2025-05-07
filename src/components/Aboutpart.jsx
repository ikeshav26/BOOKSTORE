import React from "react";

const Aboutpart = () => {
  return (
    <div>
      <div className=" mt-20 bg-base-100 max-w-screen mx-auto md:px-20 px-4 py-10">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-pink-500">About Us</h1>
          <p className="text-lg text-gray-500">
            Welcome to <span className="font-bold">BOOKSTORE</span>, your
            one-stop destination for books and educational resources. We are
            passionate about empowering learners of all ages with the tools they
            need to grow and succeed.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {/* Mission Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold w-1/2 md:w-1/3 lg:w-1/5  text-gray-500 border-b-2 border-pink-500">
              Our Mission
            </h2>
            <p className="text-gray-500">
              At <span className="font-bold">BOOKSTORE</span>, our mission is to
              make learning accessible and enjoyable for everyone. We believe
              that knowledge is the key to unlocking potential, and we strive to
              provide high-quality books and courses that cater to diverse
              interests and learning styles.
            </p>
          </div>

          {/* Team Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-500  w-1/2 md:w-1/3  lg:w-1/5 border-b-2 border-pink-500">
              Meet Our Team
            </h2>
            <p className="text-gray-500">
              Our team is made up of passionate educators, book enthusiasts, and
              tech experts who are dedicated to creating a seamless and
              enriching experience for our users. Together, we work tirelessly
              to curate the best resources and ensure that your journey with us
              is nothing short of exceptional.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-500  w-1/2 md:w-1/3 lg:w-1/5 border-b-2 border-pink-500">
              Our Vision
            </h2>
            <p className="text-gray-500">
              We envision a world where learning knows no boundaries. Whether
              you're a student, a professional, or a lifelong learner,
              <span className="font-bold"> BOOKSTORE</span> is here to support
              your growth and help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpart;
