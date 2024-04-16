import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";

import PostsWithPopular from "@/components/Home/PostsWithPopular";


export default function Home() {
  return (
    
    <main>
   <Banner/>
   <h1 className='text-2xl font-bold mb-5  w-3/4 mx-auto '>Popular Categories</h1>
   <Categories/>
   <PostsWithPopular/>
    </main>
  );
}
