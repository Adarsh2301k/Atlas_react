import { FaArrowRight } from "react-icons/fa6";
export const Herosection=()=>{
    return (
        <main className="hero-section main">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <h1 className="heading-xl">
                                Explore the world ,One country at a time
        
                            </h1>
                            <p className="paragraph">
                                Discover the history, culture, and beauty of each destination. From the bustling streets of major cities to the serene landscapes of the countryside, every country has a unique story to tell and countless experiences to offer.
                            </p>
                            <button className="btn btn-darker btn-inline bg-white-box   ">
                                Start Exploring <FaArrowRight />
                            </button>
        
                        </div>
                        <div className="hero-image">
                            <img src="/images/world.png" alt="world beauty !!" className="banner-image"/>
                        </div>
                    </div>
                </main>
    )
}