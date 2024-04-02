import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
// import { Postcard } from "../component/index";
import Container from "../component/Container/Container";
import Postcard from "../component/Postcard";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap"></div>
        {posts.map((post) => (
          <div className="p-2 w-1/4" key={post.$id}>
            <Postcard {...post} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default AllPosts;
