import React from "react";
import blogImage1 from "../assets/images/BlogImg1.jpg";
import blogImage2 from "../assets/images/BlogImg2.jpg";
import blogImage3 from "../assets/images/BlogImg3.png";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blogImage1,
      title: "Sustainability Practices in Bioenergy Production",
      excerpt:
        "We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients",
    },
    {
      id: 2,
      image: blogImage2,
      title: "Natural Solutions for Health and Wellness",
      excerpt:
        "We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients",
    },
    {
      id: 3,
      image: blogImage3,
      title: "Modern Technology for Optimal Health",
      excerpt:
        "We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients",
    },
  ];

  return (
    <section className="p-10">
      <span className="text-sm My_font text-[#A17339]">News and Blogs</span>
      <h2 className="max-w-sm text-3xl font-semibold  ">
        Powering a Sustainable Future for India
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
