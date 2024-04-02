import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Container, PostForm } from "../component/index";
import Container from "../component/Container/Container";
import PostForm from "../component/post-form/PostForm";
import appwriteService from "../appwrite/config";
function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then(post => {
        if (post) {
          console.log(post)
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
