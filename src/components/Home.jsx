// import Button from "../layouts/Button"

const Home = () => {


  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/home.png')] bg-no-repeat bg-cover opacity-90">
        <div className="w-full lg:w-4/5 space-y-5 mt-10 ">
            <h1 className="text-5xl font-bold leading-tight">Empowering Health Choices for a Vibrant Life Your Trusted..</h1>
            <p>Discover personalized care tailored to your needs. From chiropractic adjustments to advanced techniques like dry needling and cupping, we’re here to help you regain strength, reduce pain, and enhance your well-being. Let us guide you on your journey to a healthier, more vibrant life.
            </p>

            {/* <Button title="See Services"/> */}
        </div>
    </div>
  )
}

export default Home