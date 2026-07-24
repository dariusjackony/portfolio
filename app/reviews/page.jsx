"use client"

export default function Reviews(){
    const reviews = [
        {
            name: "Sarah Kansiime.",
            location: "Kampala, Uganda",
            rating: 5,
            message:
            "Darius built a restaurant website for my business and did an amazing job. The design was clean, easy to use, and helped showcase our services better."
        },
        {
            name: "Michael T.",
            location: "Nairobi, Kenya",
            rating: 5,
            message:
            "Great developer to work with. He understood my ideas and turned them into a smooth and responsive website."
        },
        {
            name: "Daniel Mwavbini.",
            location: "",
            rating: 5,
            message:
            "Very professional, reliable, and delivers quality work."
        }
        ];
    return(
        <section className="px-4 mt-2  gap-5 max-w-4xl mx-auto ">
           <h2 className="font-medium text-2xl tracking-wide text-center">
             Client Reviews
            </h2>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6">
                {reviews.map((review, index) => (
                    <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-3  border border-gray-200 dark:border-gray-700"
                    >
                    <div className="flex justify-between items-start mb-4">
                        <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {review.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {review.location}
                        </p>
                        </div>
                        <div className="text-yellow-500">
                        {"★".repeat(review.rating)}
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {review.message}
                    </p>
                    </div>
                ))}
                </div>
           <div>
            <div className="mt-6">
                <h2 className="font-medium mx-auto text-2xl tracking-wide">Share Your Experience</h2>
                <form action=""
                 className="mt-4"
                >
                    <div className="md:flex md:gap-6">
                    <div className="flex-1">
                        <label>
                        Name
                        </label>

                        <input
                        className="mt-3 p-3 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        type="text"
                        placeholder="Your name"
                        />
                    </div>

                    <div className="flex-1">
                        <label>
                        Email
                        </label>

                        <input
                        className="mt-3 p-3 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        type="email"
                        placeholder="Your email"
                        />
                    </div>
                    </div>
                    <div>
                        <label>
                        Location / Optional
                        </label>
                        <input 
                        className="p-3 w-full border border-gray-300 mt-3 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        type="text"
                        placeholder="Where you're"
                        />
                    </div>
                    
                    <div>
                        <label>
                            Your Review
                        </label>
                        <textarea
                        placeholder="Write your review. . ."
                        className="p-3 mt-3 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        id=""
                        >
                        </textarea>
                    </div>
                    {/* <div>
                        {[1,2,3,4,5].map((star) => (
                            <button
                            type="button"
                            key={star}
                            >
                    
                            </button>
                        ))}
                    </div> */}
                    <button className="p-2 px-5 py-4 bg-blue-600 text-white mt-5 rounded">
                        Submit Review
                    </button>
                </form>
            </div>
            
           </div>
        </section>
    )
}