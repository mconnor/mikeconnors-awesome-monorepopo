import Container from "#app/_components/container.tsx";
import { HeroPost } from "#app/_components/hero-post.tsx";
import { Intro } from "#app/_components/intro.tsx";
import { MoreStories } from "#app/_components/more-stories.tsx";
import { getAllPosts } from "#lib/api.ts";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
