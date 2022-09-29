import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { MainLayout } from '../components/ui/layout';
export default function Home() {
    return (
        <div>
            <div>Home Page</div>
            <Link href="/blog">
                <a>
                    <button>Go to Blog Page</button>
                </a>
            </Link>
        </div>
    );
}
Home.Layout = MainLayout;
