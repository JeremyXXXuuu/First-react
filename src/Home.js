
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    //data: blogs ----get data but rename to blogs.s
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>....loading</div>}
            {/*这里添加 blogs && 的作用是，只有当左边判断为真了才会执行右边的语句，避免了误以为传入null的情况。*/}
            {blogs && < BlogList blogs={blogs} title="all blogs!"  />} 
           
        </div>



    );
}
 
export default Home;