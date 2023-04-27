import React, { useEffect, useState } from "react";
import { getPostById } from "../api/subjectApi";
import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";

const IndivPost = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  const fetchPost = async () => {
    const [data, error] = await getPostById(postId);
    console.log("data: ", data);
    if (data) {
      setPost(data);
      setComments(data.comments);
    }
  };

  useEffect(() => {
    fetchPost();
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
      Question:
      {post ? <QuestionCard post={post} subject={post.subject} /> : null}
      <div className="">
        Answers
        {content}
      </div>
    </div>
  );
};

export default IndivPost;
