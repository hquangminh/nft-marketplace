import Link from 'next/link';

const Empty = ({ children }) => {
    return (
        <div>
            {children}
            <Link href="/home">
                <a>
                    <button>Go to Home Page</button>
                </a>
            </Link>
        </div>
    );
};
export default Empty;
