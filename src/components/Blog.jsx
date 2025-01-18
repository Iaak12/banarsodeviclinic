import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/blog1.jpg";
import img2 from "../assets/blog2.jpg";
import img3 from "../assets/blog3.jpg";
import img4 from "../assets/blog4.jpg";
import img5 from "../assets/blog5.jpg";
import img6 from "../assets/blog6.jpg";

const Blogs = () => {
  return (
    <div id="blog" className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Explore our latest insights and expert advice on spine health, mental well-being, and more.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard 
            img={img1} 
            headlines="Preventing Spine Injuries in Daily Life"
            description="Learn effective techniques to protect your spine during daily activities like sitting, lifting, and exercising."
          />
          <BlogCard 
            img={img2} 
            headlines="The Link Between Posture and Chronic Pain"
            description="Discover how poor posture can lead to chronic neck and back pain, and how to correct it."
          />
          <BlogCard 
            img={img3} 
            headlines="Pediatric Spine Health: Tips for Parents"
            description="Understand the importance of spine care for children and the role of backpacks, posture, and physical activity."
          />
          <BlogCard 
            img={img4} 
            headlines="Managing Stress to Prevent Spine Problems"
            description="Explore the connection between stress and spine health, and simple relaxation techniques to improve your posture."
          />
          <BlogCard 
            img={img5} 
            headlines="Early Signs of Spine Disorders"
            description="Know the red flags of potential spine disorders and when to consult a specialist for early intervention."
          />
          <BlogCard 
            img={img6} 
            headlines="The Role of Exercise in Spine Health"
            description="Find out how specific exercises can strengthen your back and reduce the risk of spine-related issues."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
