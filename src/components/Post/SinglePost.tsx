import React from 'react'
import Popular from "@/components/Home/Popular/Popular";
import Comments from "@/components/Header/Comments";
import Image from "next/image";
import { postInterface } from '@/utils/client/propsTypes';
interface SinglePostTypes{
    post:postInterface|undefined
}
const SinglePost = ({post}:SinglePostTypes) => {
  return (
    <div className="w-1/2 mx-auto my-10  p-5">
    <div className="text-4xl font-bold  text-center">{post?.title}</div>
    <div className="my-5 flex justify-center">
    <button className="border rounded-3xl px-3 py-1 bg-pink-500 text-white">Fashion</button>
    </div>
    <div className="flex items-end justify-between my-5">
       <div className="flex items-center w-1/2 mt-5">
        <div className="w-1/6">
          <Image
            className="rounded-full aspect-square object-cover"
            src="/blog.png"
            alt="Not available..."
            width={40}
            height={40}
          />
        </div>

        <div className="w-5/6 text-sm">
          <div className="font-bold">Falgun Mahajan</div>
          <div className="text-gray-500">Mon Nov 20 2023</div>
        </div>
      </div>
      <span className="text-base font-bold text-gray-500">49 views</span>
      
      </div>
    <Image className="w-full"
        src="/blog.png"
        alt="Not available..."
        width={600}
        height={600}
      />
   
      {/* <hr className="my-4 bg-gray-200 border-2 "/> */}
      <div className="mt-12">
      {post?.body} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quod excepturi id in repudiandae cum ipsa repellendus asperiores quidem temporibus aspernatur est, aut perferendis? Officiis eaque deleniti consequatur autem dolores alias iusto, ex fugiat adipisci harum ut animi molestias architecto nemo, ullam similique possimus sequi porro natus? Alias itaque sapiente veritatis nihil quis perferendis asperiores, odit rem, quam facere, culpa blanditiis beatae doloribus. Aperiam neque necessitatibus modi suscipit accusamus perspiciatis, esse iure qui, cum eos reiciendis et nisi blanditiis cupiditate quam sunt ex? Accusantium quaerat, deserunt veritatis esse debitis autem minima perferendis, cupiditate illum voluptate, sed aspernatur. Laborum nihil necessitatibus odio voluptate quam optio veniam eos, eligendi atque modi eius deserunt explicabo rem quia quos officiis doloribus magnam similique! Quia corporis cupiditate non repudiandae tenetur natus doloremque vero debitis quaerat amet vitae, quod ab, id, rerum nostrum quas alias delectus dolor asperiores illo? Similique, eaque illo dolore aliquid alias vel sequi saepe magni, est, nobis dolorem quae. Nostrum tenetur unde labore eos dicta facere necessitatibus, consectetur obcaecati consequatur quod dolorum, quidem nobis, voluptatibus adipisci possimus? At architecto obcaecati corrupti sit laboriosam? Hic ipsum et at beatae libero ipsam tenetur atque, dolorum perferendis eum, iste necessitatibus fugit optio eligendi tempore. Pariatur quaerat consequatur corporis repudiandae corrupti fugiat eveniet rem illo praesentium est minima ipsam sunt at amet officia natus eum quas consequuntur laboriosam excepturi, unde laborum accusamus voluptatum quibusdam! A itaque odio recusandae, ipsam beatae adipisci, animi voluptatum temporibus assumenda, repudiandae fugiat in molestias. In quod dicta aut enim aperiam ducimus soluta autem voluptas consequatur sapiente reprehenderit dignissimos cumque quia voluptates laboriosam dolore similique provident a quidem vel veritatis, ipsum atque quam? Voluptates, quaerat! Non voluptatem aliquam rem nam blanditiis eius, voluptas tenetur voluptate, sapiente natus eos illum dolore omnis tempore autem quisquam, obcaecati dicta laboriosam totam iure officia saepe explicabo sed corrupti. Consequatur esse totam nisi doloribus iure soluta dolores rem magnam beatae corporis cum modi ducimus, repellat ipsam eaque velit earum ipsum! Omnis atque obcaecati facere libero voluptas neque dicta earum tenetur animi mollitia nemo soluta quaerat excepturi, cupiditate, minima sint quisquam? Libero possimus sed voluptas commodi deserunt laborum eum ullam voluptate eveniet nulla veritatis ab tenetur modi consequuntur natus asperiores, necessitatibus molestias a neque deleniti, ratione explicabo eos at vitae! Nemo atque nam ipsum velit voluptas, quibusdam odit impedit ex beatae blanditiis, neque illo aperiam quia sit est quam animi quas provident tempore. Voluptatum quisquam doloremque corrupti ratione doloribus magnam, nesciunt ad sapiente voluptate non asperiores consequatur placeat quas voluptas eum cumque veniam! Ipsa explicabo sunt ea! Est quo nisi quod similique sequi hic, consectetur rem maiores voluptatum porro, quae corrupti? Veritatis ipsum, asperiores tempora consequuntur ipsam, commodi vero cupiditate rem voluptates cumque soluta tenetur quod! Odio laboriosam, minima vero dolorum error ipsa eaque natus numquam temporibus, labore, autem at ipsum eligendi eius? Harum officiis earum quidem cupiditate neque ipsum necessitatibus, modi, similique saepe voluptatem hic impedit vero nulla numquam aperiam assumenda reiciendis dolorum consectetur suscipit delectus veritatis facilis nemo amet dignissimos. Nesciunt doloribus nemo sed consequuntur animi.
      </div>
      <Comments/>
  {/* <div className="w-4/5 mx-auto flex justify-around items-center p-10 mt-10  ">
    <div className="w-1/2 ">
      <div className="text-4xl font-bold mb-5 ">{post?.title}</div>
      <div className="w-1/2 flex justify-between">
        <span className="text-base text-red-600 font-bold">Fashion</span>
        <span className="text-base text-red-600 font-bold">49 views</span>
      </div>
      <div className="flex items-center w-1/2 mt-5">
        <div className="w-1/6">
          <Image
            className="rounded-full aspect-square object-cover"
            src="/blog.png"
            alt="Not available..."
            width={40}
            height={40}
          />
        </div>

        <div className="w-5/6 text-sm">
          <div className="font-bold">Falgun Mahajan</div>
          <div className="text-gray-500">Mon Nov 20 2023</div>
        </div>
      </div>
    </div>
    <div className="w-1/2 flex justify-center">
      <Image
        src="/blog.png"
        alt="Not available..."
        width={600}
        height={600}
      />
    </div>
  </div>
      <div className="w-4/5 mx-auto flex  p-5 mb-10  ">
      <div>
      {post?.body} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quod excepturi id in repudiandae cum ipsa repellendus asperiores quidem temporibus aspernatur est, aut perferendis? Officiis eaque deleniti consequatur autem dolores alias iusto, ex fugiat adipisci harum ut animi molestias architecto nemo, ullam similique possimus sequi porro natus? Alias itaque sapiente veritatis nihil quis perferendis asperiores, odit rem, quam facere, culpa blanditiis beatae doloribus. Aperiam neque necessitatibus modi suscipit accusamus perspiciatis, esse iure qui, cum eos reiciendis et nisi blanditiis cupiditate quam sunt ex? Accusantium quaerat, deserunt veritatis esse debitis autem minima perferendis, cupiditate illum voluptate, sed aspernatur. Laborum nihil necessitatibus odio voluptate quam optio veniam eos, eligendi atque modi eius deserunt explicabo rem quia quos officiis doloribus magnam similique! Quia corporis cupiditate non repudiandae tenetur natus doloremque vero debitis quaerat amet vitae, quod ab, id, rerum nostrum quas alias delectus dolor asperiores illo? Similique, eaque illo dolore aliquid alias vel sequi saepe magni, est, nobis dolorem quae. Nostrum tenetur unde labore eos dicta facere necessitatibus, consectetur obcaecati consequatur quod dolorum, quidem nobis, voluptatibus adipisci possimus? At architecto obcaecati corrupti sit laboriosam? Hic ipsum et at beatae libero ipsam tenetur atque, dolorum perferendis eum, iste necessitatibus fugit optio eligendi tempore. Pariatur quaerat consequatur corporis repudiandae corrupti fugiat eveniet rem illo praesentium est minima ipsam sunt at amet officia natus eum quas consequuntur laboriosam excepturi, unde laborum accusamus voluptatum quibusdam! A itaque odio recusandae, ipsam beatae adipisci, animi voluptatum temporibus assumenda, repudiandae fugiat in molestias. In quod dicta aut enim aperiam ducimus soluta autem voluptas consequatur sapiente reprehenderit dignissimos cumque quia voluptates laboriosam dolore similique provident a quidem vel veritatis, ipsum atque quam? Voluptates, quaerat! Non voluptatem aliquam rem nam blanditiis eius, voluptas tenetur voluptate, sapiente natus eos illum dolore omnis tempore autem quisquam, obcaecati dicta laboriosam totam iure officia saepe explicabo sed corrupti. Consequatur esse totam nisi doloribus iure soluta dolores rem magnam beatae corporis cum modi ducimus, repellat ipsam eaque velit earum ipsum! Omnis atque obcaecati facere libero voluptas neque dicta earum tenetur animi mollitia nemo soluta quaerat excepturi, cupiditate, minima sint quisquam? Libero possimus sed voluptas commodi deserunt laborum eum ullam voluptate eveniet nulla veritatis ab tenetur modi consequuntur natus asperiores, necessitatibus molestias a neque deleniti, ratione explicabo eos at vitae! Nemo atque nam ipsum velit voluptas, quibusdam odit impedit ex beatae blanditiis, neque illo aperiam quia sit est quam animi quas provident tempore. Voluptatum quisquam doloremque corrupti ratione doloribus magnam, nesciunt ad sapiente voluptate non asperiores consequatur placeat quas voluptas eum cumque veniam! Ipsa explicabo sunt ea! Est quo nisi quod similique sequi hic, consectetur rem maiores voluptatum porro, quae corrupti? Veritatis ipsum, asperiores tempora consequuntur ipsam, commodi vero cupiditate rem voluptates cumque soluta tenetur quod! Odio laboriosam, minima vero dolorum error ipsa eaque natus numquam temporibus, labore, autem at ipsum eligendi eius? Harum officiis earum quidem cupiditate neque ipsum necessitatibus, modi, similique saepe voluptatem hic impedit vero nulla numquam aperiam assumenda reiciendis dolorum consectetur suscipit delectus veritatis facilis nemo amet dignissimos. Nesciunt doloribus nemo sed consequuntur animi.
      <Comments/>
      </div>
     
          {/* <Popular/> 
      
      </div> */}

      </div>
  )
}

export default SinglePost
