"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from './page.module.scss';
// import BlogList from "@/app/components/BlogList/BlogList";


export default function PostPage() {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!id) return; // No ID, no Data

    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]); // ID változásakor újratölt

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div >Post not found</div>;

  return (
    <div className={styles.container} >
      <article>
        <h1>{post.title}</h1>
        <div className={styles.content}>
          <div className={styles.tags}>
          <div className={styles.tag}>{post.id%2 == 0 ? 'Design' :'Technology'}</div>
          </div>
        </div>
      
        <Image
          src={`https://picsum.photos/seed/${id}/800/400`}
          width={800}
          height={400}
          alt={`Cover for ${post.title}`}
          priority
        />
        <p>{post.body}</p>
     
      </article>
      <div>
        <div className={styles.backButtonContainer}>
      <Link href={'/#Home'} className={styles.backButton}>Back</Link>
          
        </div>

      </div>
    </div>
  );
}
