import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";

import useAuth from "../hooks/useAuth";
import { getSubjectPosts } from "../api/subjectApi";
import { useParams } from "react-router-dom";

import CreateEntry from "../components/CreateEntry";
import Btn1 from "../components/Btn1";

const Subject = () => {
  const { auth } = useAuth();
  const { subject } = useParams();
  const [posts, setPosts] = useState([]);

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
          <QuestionCard post={post} subject={subject} fetch={fetchPosts} />
        </div>
      );
    });
  }

  return (
    <div className="container mx-auto">
      <div className="mt-10 flex justify-between max-w-full">
        <h1 className="text-3xl">{subject.toUpperCase()}</h1>
        {auth ? <CreateEntry btnText="Create Post" fetch={fetchPosts} /> : ""}
      </div>
      {content}
    </div>
  );
};

export default Subject;
