import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";

import useAuth from "../hooks/useAuth";
import { getSubjectPosts } from "../api/subjectApi";
import { useParams } from "react-router-dom";

import CreateEntry from "../components/CreateEntry";

const Subject = () => {
  const { auth } = useAuth();
  const { subject } = useParams();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const [data, error] = await getSubjectPosts(subject);
    console.log("data: ", data);
    if (data) setPosts(data.content);
  };

  const handleCreatePost = () => {
    console.log("clicked submit");
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
      <div className="mt-10 flex justify-between max-w-full">
        <h1 className="text-3xl">{subject.toUpperCase()}</h1>
        {auth ? (
          <button
            type=""
            onClick={handleCreatePost}
            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
          >
            Create Post
          </button>
        ) : (
          ""
        )}
        <CreateEntry btnText="Create Post" />
      </div>
      {content}
    </div>
  );
};

export default Subject;
