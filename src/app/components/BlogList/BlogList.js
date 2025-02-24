'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './BlogList.module.scss';
import Image from 'next/image';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const transformedPosts = data.map(post => ({
          ...post,
          tags: [post.id % 2 === 0 ? 'Design' : 'Technology'],
          views: Math.floor(Math.random() * 1000),
          date: new Date(
            Math.floor(Math.random() * (2024 - 2020 + 1)) + 2020,
            Math.floor(Math.random() * 12),
            Math.floor(Math.random() * 28)
          ).toLocaleDateString(),
          readingTime: calculateReadingTime(post.body)
        }));

        setPosts(transformedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
  
      
      <div className={styles.grid}>
        {(showAll ? posts : posts.slice(0, 10)).map((post) => (
          <article key={post.id} className={styles.card}>
            <Image
              src={`https://picsum.photos/seed/${post.id}/400/250`}
              width={400}
              height={250}
              alt={`Cover for ${post.title}`}
              className={styles.image}
              priority={true}
            />
            <div className={styles.content}>
              <div className={styles.tags}>
                {post.tags?.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.description}>
                {post.body.slice(0, 150)}...
              </p>
              <div className={styles.metadata}>
                <span>{post.readingTime} min read</span>
                <span>{post.views} views</span>
                <span>{post.date}</span>
              </div>             
            </div>      
            <Link href={`/posts/${post.id}`} className={styles.button}>
              Read more
            </Link>
          </article>
        ))}
      </div>

      <button className={styles.showAllButton} onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Show All Posts'}
      </button>
    </div>
  );
}
