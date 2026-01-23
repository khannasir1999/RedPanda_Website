import axios from 'axios';
import { useState, useEffect } from 'react';
import type { WPPost, Blog } from '../types/blog';

const API_KEY = '32e6018ff6f98904786f30c4df0fb1fb2cf5b4c6280e91273c848e5684087b26';
const BASE_URL = 'https://insights.redpanda.network/wp-json/secure/v1';

export const useGetBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get<WPPost[]>(`${BASE_URL}/posts?per_page=10&api_key=${API_KEY}`);
                const mappedBlogs = data.map((post) => ({
                    id: post.id,
                    title: post.title.rendered,
                    category: post.categories.length > 0 ? post.categories[0].name : 'Uncategorized',
                    badges: post.tags.map(tag => tag.name),
                    image: post.featured_image.source_url,
                    content: post.content.rendered,
                    date: post.date,
                }));
                setBlogs(mappedBlogs);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError('Failed to fetch blogs');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return { blogs, loading, error };
};

export const useGetBlogById = (id: number | undefined) => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        const fetchBlog = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get<WPPost>(`${BASE_URL}/posts/${id}?api_key=${API_KEY}`);
                const mappedBlog = {
                    id: data.id,
                    title: data.title.rendered,
                    category: data.categories.length > 0 ? data.categories[0].name : 'Uncategorized',
                    badges: data.tags.map(tag => tag.name),
                    image: data.featured_image.source_url,
                    content: data.content.rendered,
                    date: data.date,
                };
                setBlog(mappedBlog);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError('Failed to fetch blog');
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    return { blog, loading, error };
};

export const useGetTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string; slug: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/tags?api_key=${API_KEY}`);
                const mappedTags = data.map((tag: any) => ({
                    id: tag.term_id,
                    name: tag.name,
                    slug: tag.slug,
                }));
                setTags([{ id: 0, name: 'All', slug: 'all' }, ...mappedTags]);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching tags:", err);
                setError('Failed to fetch tags');
                setLoading(false);
            }
        };

        fetchTags();
    }, []);

    return { tags, loading, error };
};
