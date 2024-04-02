import React from "react";
// import { Container, PostForm } from "../component/index";
import Container from "../component/Container/Container";
import PostForm from "../component/post-form/PostForm";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
