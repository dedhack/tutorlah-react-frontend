import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";

import useAuth from "../hooks/useAuth";
import { getSubjectPosts } from "../api/subjectApi";

const English = () => {
  const fetchPosts = async () => {
    const [data, error] = await getSubjectPosts();
    console.log("data: ", data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto">
      <QuestionCard />
    </div>
  );
};

export default English;
