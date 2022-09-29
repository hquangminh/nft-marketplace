import Link from 'next/link';
import { MainLayout } from '../../components/ui/layout';
export default function BlogPage() {
    return (
        <>
            <div>Blog Page</div>
            <Link href="/">
                <a>
                    <button>Go to Home Page</button>
                </a>
            </Link>
        </>
    );
}
BlogPage.Layout = MainLayout;
