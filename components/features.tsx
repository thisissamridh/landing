export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Elevate Your YouTube Presence</h2>
            <p className="text-xl text-gray-400">Crowncast equips YouTubers with tools to enhance viewer engagement and community growth through innovative campaigns.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG icon remains the same for visual consistency */}
              <h4 className="h4 mb-2">Interactive Campaigns</h4>
              <p className="text-lg text-gray-400 text-center">Launch captivating campaigns for views or giveaways, and watch your community engagement soar.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG icon remains the same for visual consistency */}
              <h4 className="h4 mb-2">Referral Rewards</h4>
              <p className="text-lg text-gray-400 text-center">Empower your viewers to share your content and earn rewards, fostering a vibrant community around your channel.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG icon remains the same for visual consistency */}
              <h4 className="h4 mb-2">Community Insights</h4>
              <p className="text-lg text-gray-400 text-center">Gain deep insights into your audience's preferences and behaviors to tailor your content and campaigns effectively.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG icon remains the same for visual consistency */}
              <h4 className="h4 mb-2">Seamless Integration</h4>
              <p className="text-lg text-gray-400 text-center">Connect Crowncast to your YouTube channel effortlessly, maintaining the highest security for your content.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG icon remains the same for visual consistency */}
              <h4 className="h4 mb-2">Direct Engagement</h4>
              <p className="text-lg text-gray-400 text-center">Strengthen your connection with your audience through personalized, direct interactions, building a loyal fanbase.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG icon remains the same for visual consistency */}
              <h4 className="h4 mb-2">Custom Rewards</h4>
              <p className="text-lg text-gray-400 text-center">You have the freedom to choose how to reward your viewers, from exclusive content to unique shoutouts and more.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
