import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import Popular from "@/components/Home/Popular/Popular";
import Posts from "@/components/Home/Posts";


export default function Home() {
  return (
    <main>
   <Banner/>
   <Categories/>
   <div className="w-3/4 mx-auto flex justify-between" >

   <Posts/>
   <Popular/>
   </div>
    </main>
  );
}
