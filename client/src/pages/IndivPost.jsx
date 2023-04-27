import React, { useEffect, useState } from "react";
import { getPostById } from "../api/subjectApi";
import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";

import CreateEntry from "../components/CreateEntry";
import useAuth from "../hooks/useAuth";

const IndivPost = () => {
  const { auth } = useAuth();

  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState([]);
  const { postId, subject } = useParams();

  const fetchPosts = async () => {
    const [data, error] = await getPostById(postId);
    console.log("post with comments: ", data);
    if (data) {
      setPosts(data);
      setComments(data.comments);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // comment.email
  // comment.content
  // comment.createDateTime
  // comment.id

  let content = null;
  if (Array.isArray(comments) && comments.length > 0) {
    content = comments.map((comment) => {
      console.log("comment: ", comment);
      return (
        <div className="py-4">
          <AnswerCard post={comment} />
        </div>
      );
    });
  }

  return (
    <div className="container mx-auto">
      <div className="mt-10 flex justify-between max-w-full">
        <h1 className="text-3xl">{subject.toUpperCase()}</h1>
        {auth ? (
          <CreateEntry
            btnText="Create Comment"
            posts={posts}
            fetch={fetchPosts}
          />
        ) : (
          ""
        )}
      </div>
      Question:
      {posts ? <QuestionCard post={posts} subject={posts.subject} /> : null}
      <div className="">
        Answers
        {content}
      </div>
    </div>
  );
};

export default IndivPost;
