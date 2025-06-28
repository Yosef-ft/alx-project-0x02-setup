import React, { useState } from "react";
import { CardProps, PostPageProps, APIResponse } from "@/interfaces";
import PostModal from "@/components/common/PostModal";

const Posts: React.FC<PostPageProps> = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>(post);

  const handleAddPost = (newPost: CardProps) => {
    const postWithId = {
      ...newPost,
      userId: (posts.length + 1)
    };
    setPosts([postWithId, ...posts]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-700 text-white px-4 py-2 rounded-full"
        >
          Add Post
        </button>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg border">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const post: CardProps[] = data.map((item: APIResponse) => ({
  userId: item.userId,
  title: item.title,
  content: item.body,
  }));

  return {
    props: {
      post,
    },
  };
}

export default Posts;
