// import { actions } from 'astro:actions';
import { useState } from 'preact/hooks';

interface LikeButtonProps {
  postId: string;
  func: () => void;
}

export function LikeButton({ postId, func }: LikeButtonProps) {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <a href="/signin">Log in to like a post.</a>}
      <button onClick={() => func()}>Like</button>
    </>
  );
}
