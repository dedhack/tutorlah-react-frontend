import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";

import useAuth from "../hooks/useAuth";
import { getSubjectPosts } from "../api/subjectApi";
import { useParams } from "react-router-dom";

const Subject = () => {
  const [posts, setPosts] = useState([]);
  const { subject } = useParams();

  const fetchPosts = async () => {
    const [data, error] = await getSubjectPosts(subject);
    console.log("data: ", data);
    if (data) setPosts(data.content);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  let content = null;
  if (Array.isArray(posts) && posts.length > 0) {
    content = posts.map((post) => {
      console.log("post: ", post);
      return (
        <div className="py-4">
          <QuestionCard post={post} subject={subject} />
        </div>
      );
    });
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">{subject.toUpperCase()}</h1>
      {content}
    </div>
  );
};

export default Subject;
