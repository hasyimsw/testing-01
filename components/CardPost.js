 import InfoPost from "./InfoPost";
 import Link from 'next/link';

 export default function CardPost({ thumbnail, ...infoPost }) {
    return (
        <article>
            <Link href="/detail">
                <a>
                    <img src={thumbnail} className="rounded-md mb-5" />
                </a>
            </Link>
            <InfoPost 
                {...infoPost}
            />
        </article>
    );
}