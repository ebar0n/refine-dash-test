import { NavigateToResource } from "@refinedev/nextjs-router";

export const runtime = 'edge';

export default function Home() {
  return <NavigateToResource resource="blog_posts" />;
}

Home.noLayout = true;
