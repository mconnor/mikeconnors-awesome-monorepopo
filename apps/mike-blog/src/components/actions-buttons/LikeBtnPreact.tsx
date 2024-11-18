import { actions } from 'astro:actions';
import { useState } from 'preact/hooks';
// import type { JSX } from 'preact/jsx-runtime';

const LikeBtnPreact = ({ postId }: { postId: string }) => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <a href="/signin">Log in to like a post.</a>}
      <button
        onClick={async () => {
          const { data, error } = await actions.likePost({ postId });
          if (error?.code === 'UNAUTHORIZED') setShowLogin(true);
          // Early return for unexpected errors
          else if (error) return data;
          // update likes
        }}
      >
        Like
      </button>
    </>
  );
};

export default LikeBtnPreact;
