const testimonials = [
    {
      name: "Aditya Nema",
      role: "Local Guide",
      content:
        "Very good organization and well trained certified staff to guide you with all necessary assets. You will get quality service, products and specially honest & affordable quote for your requirement with Navy Blue Energy. Really Kudos for this organization. Keep it up.",
      image: "https://nbsense.com/assets/img/testimonials/user1.webp",
    },
    {
      name: "Grabodo Digital",
      role: "Services",
      content:
        "I recently had the pleasure of working with Navy Blue Energy for an energy auditing project, and I couldn't be more pleased with their outstanding service. From the moment I contacted them, their team demonstrated a high level of professionalism and expertise. They were incredibly thorough in their assessment and provided innovative solutions that not only improved energy efficiency but also contributed to sustainability. Navy Blue Energy's commitment to delivering top-notch service and their dedication to long-term goals truly set them apart. I highly recommend Navy Blue Energy for anyone seeking exceptional energy auditing services. Five stars all the way!",
        image: "https://nbsense.com/assets/img/testimonials/user2.webp",
    },
    {
      name: "Mangesh Gserenewables",
      role: "Services",
      content:
        "Very knowledgeable team and experts of energy audit and energy monitoring system. Good experience working with them.",
        image: "https://nbsense.com/assets/img/testimonials/user3.webp",
    },
    {
      name: "Vaibhav Matle",
      role: "Creative Director",
      content:
        "Start up india vision of new India looks promising when you come across startups like NBE labs. Good to see non-IIT and non-IIMs entrepreneurs rising like anything. Good solutions provided by Navy blue for smart devices to reduce carbon footprint and marking step towards sustainability. All the best to team for future...",
        image: "https://nbsense.com/assets/img/testimonials/user4.webp",
    },
    {
      name: "Mahesh Tanpure",
      role: "Local Guide",
      content:
        "Best Services Provider In Navi Mumbai & Mumbai !!!",
        image: "https://nbsense.com/assets/img/testimonials/user5.webp",
    },
    {
      name: "Hrushikesh",
      role: "Client",
      content:
        "My personal experience was great.Loved the products and the service too.The founders and the people working at the office are full of enthusiasm and spirit.",
        image: "https://nbsense.com/assets/img/testimonials/user6.webp",
    },
  ];
  
  const createTestimonialCard = (testimonial) => {
    return `
          <div class="cardT">
              <div class="profile">
                <img src="${testimonial.image}" alt="${testimonial.name}" />
                <div>
                  <div class="name">${testimonial.name}</div>
                  <div class="role">${testimonial.role}</div>
                </div>
              </div>
  
              <div class="contentT">
                ${testimonial.content}
              </div>
            </div>
      `;
  };
  
  const populateColumn = (testId) => {
    const test = document.getElementById(testId);
  
    [...testimonials, ...testimonials].forEach((testimonial) => {
      test.innerHTML += createTestimonialCard(testimonial);
    });
  };
  
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("test1");
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("test2");
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("test3");