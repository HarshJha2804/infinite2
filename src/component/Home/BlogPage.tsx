// import { useParams } from "react-router-dom"
// import { Icon } from "@iconify/react/dist/iconify.js"
import blogFirst from "../../assets/Homepage/Blogs/blog-first-thumbnail.png"
import { useParams } from "react-router-dom"
import blogSecond from "../../assets/Homepage/Blogs/blog-second-thumbnail.png"
import blogThird from "../../assets/Homepage/Blogs/blog-third.png"
const BlogPage = () => {
    interface Blogdata {
        id: number,
        img: string,
        title: string,
        intro: string,
        description: string
    }
    const { id } = useParams<{ id: string }>();
    // const name = "dfjkhsdfjkl"
    const Blogdata = [
        {
            id: 1,
            img: blogFirst,
            date: '8 August 2024',
            time: '10 min read',
            title: 'Successful SOP for Application',
            intro: "A statement of purpose is a written essay that showcases your academic background, research interests and career goals to the admissions committee. Its main objective is to demonstrate how your skills, experience and aspirations align with the specific program you're applying to, and how the program will help you achieve",
            description: `
    <div class="">
        <h2 class="p3" >What is a statement of purpose?</h2>
        <p>
            A statement of purpose is a written essay that showcases your academic background, research interests and career goals to the admissions committee. Its main objective is to demonstrate how your skills, experience and aspirations align with the specific program you're applying to, and how the program will help you achieve your academic and professional objectives. Essentially, it's your opportunity to tell the admissions committee why you're the right fit for their program and why their program is the right fit for you.
        </p>
    </div>

    <div class="section">
        <h2 class="p3">How to write a statement of purpose?</h2>
        <p>
            Before writing your statement of purpose, thoroughly research your desired programs and schools to:
        </p>
        <ul>
            <li>Understand their mission statements and align your values with theirs.</li>
            <li>Identify faculty members whose research interests match yours, and note their work.</li>
            <li>Show how your goals and values align with the program's, demonstrating a strong fit.</li>
            <li>Consider reaching out to potential faculty mentors for collaboration.</li>
            <li>Carefully follow each school's specific guidelines, prompts, and word counts.</li>
        </ul>
        <p>
            This will help you tailor your statement of purpose to each program, increasing your chances of a successful application.
        </p>
    </div>

    <div class="section">
        <h2 class="p3">How to structure a statement of purpose?</h2>
        <p>
            Before writing your statement of purpose, researching your desired programs and schools to understand their mission statements is essential. Your statement should cover:
        </p>
        <ul>
            <li><strong>WHAT:</strong> Your academic background, accomplishments, research questions and goals.</li>
            <li><strong>WHY:</strong> Your motivations, why this program and why these professors.</li>
            <li><strong>HOW:</strong> Your plan for finding answers, utilizing program resources and contributing to the field.</li>
        </ul>
        <p>
            While there's no one "correct" structure, most statements follow an intro-body-conclusion pattern. The intro should clearly state your intentions, while the body provides specific evidence of your qualifications, fit with the program and goals. Be specific, thorough and show that you've done your homework.
        </p>
        <p>In the main body:</p>
        <ul>
            <li>Address your academic and professional preparation.</li>
            <li>Show your fit with the program's mission and values.</li>
            <li>Discuss your strengths, weaknesses and career plans.</li>
            <li>Specify what you propose to study and with whom.</li>
        </ul>
        <p>
            For doctoral programs, demonstrate your ability to contribute original work to the field. Naming professors whose work aligns with yours is crucial and researching their work thoroughly will help you demonstrate your seriousness about the program.
        </p>
        <p>
            Keep your statement concise, focused and tailored to each program, using your transcript, resume and letters of recommendation to support your application.
        </p>
    </div>

    <div class="section">
        <h2 class="p3">Essential elements of a strong statement of purpose</h2>
        <ul>
            <li><strong>Clear Articulation of Goals and Interests:</strong> Specifically outline your objectives and what drives your passion for the field. Be precise and use examples to demonstrate your enthusiasm.</li>
            <li><strong>Evidence of Past Experience and Success:</strong> Showcase your qualifications by highlighting relevant undergraduate studies, professional experience and achievements. Use concrete examples to demonstrate your ability to succeed in graduate study.</li>
            <li><strong>Interest and Fit with the Program:</strong> Explain why you and the program are a good match. Identify specific professors, methodologies or curriculum aspects that align with your work and interests.</li>
            <li><strong>Strong Writing:</strong> Demonstrate effective communication skills by writing clearly, concisely and logically. Show that you can express your ideas in a descriptive yet succinct manner, within the recommended length.</li>
        </ul>
    </div>

    <div class="section">
        <h2 class="p3">Strategies to Write a Powerful Statement of Purpose</h2>
        <div style="padding-left:2rem; padding-top:0.5rem">
        <ol style="list-style:number">
            <li>Write stories. Not statements</li>
            <li>Quantify your stories</li>
            <li>Be Specific</li>
            <li>Customize your essay</li>
            <li>Use a formal but conversational tone</li>
            <li>Decide how you want to portray yourself and Learn How to Portray Indirectly.</li>
            <li>Don’t Create Stories. Be Yourself</li>
            <li>Address Your Problems</li>
            <li>Do Your Homework</li>
            <li>Proofread, Edit, and Re-edit. Ask Friends and Family To Grade Your Essay</li>
            <li>Take Advice From Professors.</li>
        </ol>
        </div>
    </div>

    <div class="section">
        <h2  class="p3">How Can Your Statement Of Purpose Stand Out From The Crowd?</h2>
        <p>
            Consider the key questions that admissions committees typically want answered. You should clearly explain what you want to study and why, demonstrating a strong motivation for pursuing a graduate degree in your chosen field. Show how your academic and professional background has prepared you for this program and highlight any relevant experience or skills you possess.
        </p>
        <p>
            Explain why you're interested in this specific program and university, and what you hope to achieve by studying there. Describe your career plans after graduation, and how this degree will help you attain your goals. If you're interested in working with a particular professor, explain why their research resonates with you.
        </p>
        <p>
            Showcase your unique strengths, skills and perspectives and demonstrate how you'll contribute to the university community. Share your personal qualities, hobbies and interests to give the committee a sense of who you are beyond your academic credentials. Finally, explain how you think you'll fit in with the university's culture and student community.
        </p>
    </div>

    <div class="section">
        <h2  class="p3">Conclusion</h2>
        <p>
            In conclusion, a statement of purpose is a crucial component of a graduate school application, serving as an opportunity to showcase your academic background, research interests and career goals to the admissions committee. To write a strong statement, research your desired programs and schools, understand their mission statements and identify faculty members whose research interests align with yours. Clearly articulate your goals and interests, provide evidence of past experience and success, demonstrate your fit with the program, and showcase strong writing skills.
        </p>
        <p>
            Ultimately, a well-crafted statement of purpose can increase your chances of a successful application by demonstrating your passion, qualifications and fit with the program. By following these guidelines and strategies, you can create a compelling statement that showcases your potential for success and helps you stand out from the crowd.
        </p>
    </div>`,
        },

        {
            id: 2,
            img: blogSecond,
            date: '8 August 2024',
            time: '10 min read',
            title: 'Good or Bad AI in Education',
            label: 'blog Description ',
            intro: "The future of education has arrived and artificial intelligence (AI) is at the forefront. As AI-powered EdTech tools become increasingly popular among teachers and students, the traditional classroom experience is undergoing a significant transformation. From streamlining lesson planning and grading to assisting students with projects and research papers, AI is revolutionizing the way we teach and learn. ",
            description: `
   <div class="section">
    <h2 class="p3">Good or Bad AI in Education</h2>
    <p>
        The future of education has arrived, and artificial intelligence (AI) is at the forefront. As AI-powered EdTech tools become increasingly popular among teachers and students, the traditional classroom experience is undergoing a significant transformation. From streamlining lesson planning and grading to assisting students with projects and research papers, AI is revolutionizing the way we teach and learn. But is this rapid integration of AI a blessing or a curse? As AI becomes as ubiquitous as email, its impact on education is sparking intense debate. A recent survey of 500 educators by <a style="color:blue; text-decoration:underline; font-weight:medium" href= "https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/#:~:text=In%20October%202023%2C%20Forbes%20Advisor,artificial%20intelligence%20is%20impacting%20education.">Forbes Advisor</a> offers a fascinating glimpse into the experiences of teachers navigating this brave new world. As we explore the role of AI in education, one question looms large: is AI a game-changer or a hindrance to effective learning? In this article, we'll delve into the benefits and drawbacks of AI in education, examining the evidence and expert opinions to shed light on this critical issue.
    </p>
</div>

<div class="section">
    <h2 class="p3">What is AI?</h2>
    <p>
        Artificial intelligence (AI) refers to the technology that enables machines to perform tasks that typically require human intelligence, such as decision-making, problem-solving, understanding and mimicking natural language, and learning from unstructured data. You may have already interacted with AI without realizing it - for instance, playing chess against a bot, using virtual assistants like Siri or Alexa, or scrolling through your social media feed, which uses AI algorithms to personalize your experience. The release of OpenAI's ChatGPT, a natural language processing chatbot, in 2022 brought AI into the spotlight. AI's capabilities make it an increasingly important tool in various applications, and its role in education is becoming increasingly significant.
    </p>
</div>

<div class="section">
    <h2 class="p3">Advantages of AI in Education</h2>
    <p>
        While concerns about AI's impact on education are valid, its benefits cannot be ignored. AI's integration into education has the potential to revolutionize the learning experience, making it more engaging, effective, and accessible:
    </p>
     <div style="padding-left:3rem; padding-top:0.5rem">
    <ol style="list-style:disc">
        <li>AI can enhance student engagement and motivation by providing personalized learning experiences, instant feedback, and interactive teaching approaches.</li>
        <li>AI-powered systems can improve student performance by offering targeted feedback, identifying areas of improvement, and monitoring progress.</li>
        <li>AI can increase cost-effectiveness in education by automating administrative tasks, reducing the need for resources, and streamlining operations.</li>
        <li>AI's continuous evaluation and improvement capabilities can provide valuable insights for teachers, enabling them to refine instructional strategies, predict student performance, and identify areas for intervention.</li>
    </ol>
    </div>
    <p>
        These benefits suggest that AI can be a powerful tool for enhancing education rather than a hindrance. However, it's crucial to acknowledge the potential risks and challenges associated with AI's integration into education, ensuring that its implementation is thoughtful, equitable, and student-centered.
    </p>
</div>

<div class="section">
    <h2 class="p3">Disadvantages of AI in Education</h2>
    <p>
        While AI has the potential to enhance education, there are also concerns that it may have negative consequences. Some of the drawbacks of AI in education include:
    </p>
      <div style="padding-left:3rem; padding-top:0.5rem">
    <ol style="list-style:disc">
        <li><b>Limited contextual understanding:</b> AI may struggle to understand the context and subtleties of human communication, leading to misunderstandings and misinterpretations.</li>
        <li><b>Lack of emotional intelligence:</b> AI systems lack empathy and emotional intelligence, making it challenging to provide personalized support and guidance to students.</li>
        <li><b>Risk of a dehumanized learning experience:</b> AI algorithms may fail to provide the nuanced and inclusive approach that human teachers offer, potentially perpetuating biases and lacking diversity.</li>
        <li><b>High implementation costs: </b>The expense of implementing AI tools and technologies may be prohibitively expensive for some schools, creating a barrier to adoption and unequal access.</li>
        <li><b>Over-reliance on technology:</b> Excessive dependence on AI may lead to the neglect of traditional teaching methods and the erosion of critical thinking and problem-solving skills, potentially harming students' overall educational experience.</li>
    </ol>
    </div>
    <p>
        These concerns highlight the potential downsides of AI in education, which emphasizes the need for careful consideration and balanced implementation to ensure that AI enhances, rather than hinders, the learning experience.
    </p>
</div>

<div class="section">
    <h2 class="p3">Conclusion</h2>
    <p>
        The integration of Artificial Intelligence (AI) in education has sparked intense debate, with proponents hailing it as a game-changer and critics warning of its potential drawbacks. While AI offers numerous benefits, including enhanced student engagement, improved performance, increased cost-effectiveness, and continuous evaluation and improvement, it also poses significant risks. To ensure AI enhances education rather than hindering it, its implementation must be thoughtful, equitable, and student-centered. By acknowledging both the benefits and drawbacks of AI in education, we can harness its potential to revolutionize learning while minimizing its negative consequences. Ultimately, whether AI is good or bad for education depends on how we choose to utilize it.
    </p>
</div>`,
        },

        {
            id: 3,
            img: blogThird,
            date: '21 August 2024',
            time: '10 min read',
            title: 'Cybersecurity - Protecting your school',
            intro: "  Cybersecurity is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. <br/> As technology becomes increasingly integral to education in India, cybersecurity has become a vital concern for schools. Protecting students, staff, and sensitive data from cyber threats is crucial, but many schools face challenges in implementing effective cybersecurity measures due to limited resources and expertise. The academic sector is experiencing a surge in cyber threats, with a 44% increase in attacks in the first half of 2022 compared to the previous year, according to Check Point Research's Cyber Attack Trends report. As a result, robust cybersecurity measures have become crucial for the education industry to protect against both external and internal malicious actors.",
            description: `<div class="section">
   
    <p>
        Cybersecurity is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security.  <br/>  <br/>
        As technology becomes increasingly integral to education in India, cybersecurity has become a vital concern for schools. Protecting students, staff, and sensitive data from cyber threats is crucial, but many schools face challenges in implementing effective cybersecurity measures due to limited resources and expertise. The academic sector is experiencing a surge in cyber threats, with a 44% increase in attacks in the first half of 2022 compared to the previous year, according to Check Point Research's Cyber Attack Trends report. As a result, robust cybersecurity measures have become crucial for the education industry to protect against both external and internal malicious actors.
    </p>
</div>

<div class="section">
    <h2 class="p3">Cybersecurity Challenges and Vulnerabilities</h2>
    <p>
        The Indian education sector faces significant cybersecurity challenges in protecting data and ensuring student safety. Key obstacles include:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ul style="list-style:disc">
            <li><b>Overwhelming data volume:</b> Managing and securing the vast amount of data, devices, and applications in educational institutions is a daunting task, straining resources.</li>
            <li><b>Unsecured devices:</b> Bring-your-own-device policies have introduced a multitude of vulnerable devices to school networks, exacerbating security risks.</li>
            <li><b>Limited resources:</b> Many schools and districts struggle to allocate sufficient personnel and budget to address security threats effectively.</li>
            <li><b>Inadequate cloud protection:</b> Despite widespread cloud adoption, most schools neglect to allocate cybersecurity funds to cloud protection, leaving them blind to potential threats and safety risks in their Google Workspace and Microsoft 365 domains.</li>
        </ul>
    </div>
    <p>
        These challenges make it difficult for educational institutions to ensure the security and safety of their data and students.
    </p>
</div>

<div class="section">
    <h2 class="p3">Why the Recent Increase in Security Breaches?</h2>
    <p>
        The shift to hybrid and remote learning has led to increased security breaches due to:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ul style="list-style:disc">
            <li>Unsecured home networks and devices</li>
            <li>Unmanaged devices on school networks</li>
            <li>Insufficient time for IT to secure devices and networks</li>
            <li>Devices brought back on campus posing an inside attack risk</li>
            <li>Hackers targeting educators with fake free software offers</li>
        </ul>
    </div>
    <p>
    <br/>
    <b>  To counter this, schools need a robust security plan, including: </b>
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ol style="list-style:disc">
            <li>Securing email gateways and servers</li>
            <li>Regular patching and IT security services</li>
            <li>Endpoint protection and virus protection</li>
            <li>Penetration testing</li>
            <li>Advanced security services with 24/7 support</li>
        </ol>
    </div>
    <p>
        By implementing these measures, schools can protect their data, devices, and users from cyber threats and maintain good cyber hygiene.
    </p>
</div>

<div class="section">
    <h2 class="p3">How to Increase Safety</h2>
    <p>
     <b> 1. Good Security Hygiene: </b> Teach students to:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ul style="list-style:disc">
            <li>Avoid suspicious links/emails</li>
            <li>Not use public Wi-Fi for sensitive activities</li>
            <li>Keep software/apps up-to-date</li>
            <li>Use strong, unique passwords</li>
            <li>Be cautious with downloads</li>
        </ul>
    </div>
    <p>
   
           <b> 2. Hardware-Based Security:</b> Leverage built-in device features like:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ul style="list-style:disc">
            <li>Intel's Active Management Technology (AMT)</li>
            <li>Intel's Threat Detection Technology</li>
            <li>Intel's Hardware Shield</li>
        </ul>
    </div>
    <p>
          <b>3. Device as a Service (DaaS):</b> Outsource device management to a third-party provider for:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ul style="list-style:disc">
            <li>Devices with advanced security features</li>
            <li>Remote management and monitoring</li>
            <li>Technical support and troubleshooting</li>
            <li>Regular software updates and maintenance</li>
        </ul>
    </div>
    <p>
        By implementing these measures, you can reduce the risk of cyber-attacks and protect students from online threats.
    </p>
</div>

<div class="section">
    <h2 class="p3">Why Is Cybersecurity Important in Education?</h2>
    <p>
        Cybersecurity is crucial in the Indian education system due to the increasing reliance on technology and digital resources:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ol style="list-style:number">
            <li>Protection of sensitive data: Indian Educational institutions handle sensitive information, including student personal data, academic records, and financial information. Cybersecurity measures ensure this data remains confidential and secure.</li>
            <li>Prevention of cyberbullying: Cyberbullying is a growing concern in Indian schools. Cybersecurity awareness and measures can help prevent and mitigate cyberbullying incidents.</li>
            <li>Safeguarding digital assets: Educational institutions invest heavily in digital infrastructure, including hardware, software, and networks. Cybersecurity protects these assets from damage, theft, or unauthorized access.</li>
            <li>Ensuring continuity of learning: Cyberattacks can disrupt online learning platforms, causing significant downtime and impacting student learning outcomes. Cybersecurity measures ensure continuity of learning and minimize disruptions.</li>
            <li>Compliance with regulations: Indian educational institutions must comply with regulations like the Personal Data Protection Bill (2019) and the Information Technology Act (2000). Cybersecurity measures help ensure compliance and avoid legal repercussions.</li>
            <li>Building a secure digital future: As India embraces digital transformation, cybersecurity awareness and education are essential to build a secure digital future for students, educators, and the nation.</li>
        </ol>
    </div>
    <p>
        By prioritizing cybersecurity, Indian educational institutions can create a safe, secure, and conducive learning environment, ultimately contributing to the country's digital growth and development.
    </p>
</div>

<div class="section">
    <h2 class="p3">Why School Districts Need Cybersecurity?</h2>
    <p>
        Indian schools are prime targets for cyber-attacks due to their increased reliance on technology. According to the Ministry of Electronics and Information Technology (MeitY), educational institutions are vulnerable to cyber threats. The surge in online activity among students has caught the attention of cybercriminals, resulting in:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ul style="list-style:disc">
            <li>Increased cyber incidents and data breaches</li>
            <li>Growing risks of cyberbullying, online harassment, and inappropriate content</li>
        </ul>
    </div>
    <br/>
    <p>
        To address these challenges, Indian schools need a robust security plan, including:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ol style="list-style:number">
            <li>Securing email gateways and servers</li>
            <li>Regular patching and IT security services</li>
            <li>Endpoint protection and virus protection</li>
            <li>Penetration testing to identify security shortfalls</li>
            <li>Advanced security services with 24/7 support</li>
            <li>Conducting regular webinars/sessions for students to spread awareness about cybersecurity</li>
        </ol>
    </div>
</div>

<div class="section">
    <h2 class="p3">Cyber Safety and Cybersecurity Are Interconnected</h2>
    <p>
        Cyber safety and cybersecurity are interconnected and essential for protecting students from physical and emotional harm. Administrators must break down silos and collaborate to address the growing risks of:
    </p>
    <div style="padding-left:3rem; padding-top:0.5rem">
        <ul style="list-style:disc">
            <li>Cyberbullying and online harassment</li>
            <li>Self-harm and suicide</li>
            <li>Inappropriate content and child pornography</li>
            <li>School violence</li>
        </ul>
    </div>
    <p>
        By implementing effective cybersecurity measures and ensuring cyber safety, schools can protect students and staff from a wide range of threats.
    </p>
</div>


<div class="section">
    <h2 class="p3">Conclusion</h2>
    <p>
       In conclusion, Cybersecurity is a critical concern for schools, as they face growing threats 
from Cyber attacks, data breaches and online harassment. The shift to hybrid and remote 
learning has increased vulnerabilities and limited resources and expertise make it challenging 
for schools to implement effective cybersecurity measures. To address these challenges, 
schools must prioritize cybersecurity training, safeguard student privacy and implement 
robust data protection measures. Additionally, physical security measures such as access 
control, visitor management and emergency response plans are crucial to ensuring student 
safety. By implementing these measures, schools can protect their students, staff and data 
from cyber threats and ensure a safe learning environment. It's essential for administrators to 
break down silos and collaborate to address the interconnected risks of cyber safety and 
cybersecurity. By taking proactive steps, schools can stay ahead of security threats and 
provide a secure and supportive environment for their students to thrive
    </p>
   
</div>
`
        }
    ]
    // console.log(name);

    // console.log(Blogdata, id, "sdfjkhkjasd")
    const blog = id ? Blogdata.find(blog => blog.id === parseInt(id, 10)) : undefined;
    // console.log(Blogdata, id, "sdfjkhkjasd")
    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <>

            <div className="pt-[5rem] md:pt-[6rem] bg-white">
                {/* {Blogdata.map((data) => ( */}
                <div className="flex flex-col gap-16 container p-8 mx-auto">
                    <div className="flex flex-col gap-8">
                        <p className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.5rem] md:leading-normal text-black">{blog.title}</p>
                        <p className="text-[1.2rem]  text-textColor">
                            {blog.intro.substring(0, 300)}...
                            {/* {data.description.length > maxLength ? `${data.description.substring(0, maxLength)}` :} */}
                        </p>
                        <hr />
                    </div>
                    {/* <div className="h-[80vh] rounded-xl overflow-hidden"
                    // style={{backgroundImage: `url(${blog.img})`, backgroundSize: 'cover',backgroundPosition: 'center',}}
                    > */}
                    <img src={blog.img} alt="" className="rounded-xl" />
                    {/* </div> */}
                    <div className="">
                        <div className="flex flex-col gap-[2rem]" dangerouslySetInnerHTML={{ __html: blog.description }} />
                        {/* <p className="text-[1.2rem] text-textColor font-light">{blog.description}</p> */}
                    </div>
                </div>


            </div>
        </>
    )
}

export default BlogPage