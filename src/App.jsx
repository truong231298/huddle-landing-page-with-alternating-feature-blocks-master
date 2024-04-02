import logo from "/images/logo.svg"
import bgHeader from "/images/illustration-mockups.svg"
import img1 from "/images/illustration-grow-together.svg"
import img2 from "/images/illustration-flowing-conversation.svg"
import img3 from "/images/illustration-your-users.svg"
import iconemail from "/images/icon-email.svg"
import iconlocation from "/images/icon-location.svg"
import iconphone from "/images/icon-phone.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function App() {
  // make data boxs

  const dataBoxs = [
    { name: "Grow Together", content: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ", img: img1 },
    { name: "Flowing Conversations", content: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.", img: img2 },
    { name: "Your Users", content: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.", img: img3 },
  ]
  // footer
  const informationItems = [
    { icon: iconlocation, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { icon: iconphone, content: "+1-543-123-4567" },
    { icon: iconemail, content: "example@huddle.com" }
  ];

  return (
    <main className="min-h-screen">
      <section className="flex flex-col gap-8">
        {/* header */}
        <article className="flex flex-col gap-4 bg-VeryPaleCyan sm:bg-bg-desktop bg-bg-mobile p-10">
          {/* part 1 */}
          <div className="flex justify-between items-center">
            <img src={logo} alt="" className="w-32" />
            <button className="px-4 py-2 bg-white rounded-full text-VeryDarkCyan font-semibold">Try it Free</button>
          </div>
          {/* part 2 */}
          <div className="flex flex-col items-center sm:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Build The Community Your Fans Will Love</h1>
              <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                Create connections with your users as you engage in genuine discussion. </p>
              <button className="text-white bg-Pink px-4 py-2 rounded-full sm:w-48">Get Started For Free</button>
            </div>
            <div className="">
              <img src={bgHeader} alt="" />
            </div>
          </div>
        </article>

        {/* body */}
        <article>
          {/* 3 box same */}
          <div className="flex flex-col gap-4 p-10">
            {dataBoxs.map((data, index) => (
              <div key={index} className={`flex flex-col-reverse  ${index === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} gap-6 text-center sm:text-start items-center px-4 border-2 rounded-lg shadow-lg`}>
                <span className="p-10">
                  <h1 className="text-xl font-medium">{data.name}</h1>
                  <p className="mt-2">{data.content}</p>
                </span>
                <img src={data.img} alt="" className="w-1/2 my-4" />
              </div>
            ))}

          </div>

          {/* box absolute */}
          <div className="absolute sm:left-1/3 left-1/4 bg-white flex justify-center items-center">
            <div className="relative  w-96 flex flex-col gap-4 items-center border-2 rounded-lg p-4">
              <h1>Ready To Build Your Community?</h1>
              <button className="text-white bg-Pink px-4 py-2 rounded-full sm:w-48">Get Started For Free</button>
            </div>

          </div>
        </article>

        {/* footer */}
        <article className="bg-VeryDarkCyan flex flex-col gap-4 text-white p-8">
          <img src={logo} alt="" className="w-32 mt-16 logo"/>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="sm:w-72">
              {informationItems.map((info, index) => (
                <span key={index} className="flex flex-row gap-2 text-white p-2">
                  <img src={info.icon} alt="" className="w-4 h-4"/>
      
                  <p>{info.content}</p>
                </span>
              ))}
            </div>
            <ul>
              <li>About Us</li>
              <li> What We Do</li>
              <li>FAQ</li>
            </ul>
            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>

            <div className="flex flex-row gap-2 justify-center mt-10 sm:mt-0">
              {[faFacebook, faTwitter, faInstagram].map((icon, index) => (
                <span key={index}>
                  <FontAwesomeIcon icon={icon} className="border-2 rounded-full p-1"/>
                </span>
              ))}
            </div>

          </div>
          <div className="text-center sm:text-right">
            <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
          </div>
        </article>

      </section>
    </main>
  )
}