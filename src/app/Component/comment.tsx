"use client";
import React, { useState, useEffect } from "react";

const CommentSeaction = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const CommentSave = localStorage.getItem("comments");
    if (CommentSave) {
      setComments(JSON.parse(CommentSave));
    }
  }, []);

  const addComments = () => {
    if (comment.trim() !== "") {
      const UpdateComments = [...comments, comment];
      setComments(UpdateComments);
      setComment("");
      localStorage.setItem("comments", JSON.stringify(UpdateComments));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-4 text-amber-900">CommentSection</h1>
      <input
        type="text"
        placeholder="write your comment"
        className=" mt-3 w-80 p-2 border-black border-2"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />{" "}
      <br />
      <button
        onClick={addComments}
        className="bg-amber-900 text-white p-2 mt-3 rounded hover:bg-amber-700"
      >
        Add Comment
      </button>
      <div className="mt-2">
        <h1 className="text-2xl font-bold  text-amber-900">All Comment:</h1>
        {comments.length === 0 ? (
          <p>No Comments</p>
        ) : (
          <ul>
            {comments.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSeaction;
