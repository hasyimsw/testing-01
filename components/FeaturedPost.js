import InfoPost from "./InfoPost";
import Link from 'next/link';

export default function FeaturedPost() {
    return(
        <article>
            <div className="flex -mx-4 lg:items-center items-start justify-center flex-wrap mt-10">
                <div className="px-4 lg:w-8/12 md:w-7/12 w-full mb-5 md:mb-0">
                    <Link href="/detail">
                        <a>
                            <img src="/featured-thumbnail.png" className="rounded-md w-full" />
                        </a>
                    </Link>
                </div>
                <div className="lg:w-4/12 md:w-5/12 w-full px-4">
                   <InfoPost 
                        category="UI DESIGN"
                        date="July 2, 2021"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        sortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                        authorAvatar="/author-1.png"
                        authorName="Leslie Alexander"
                        authorJob="UI Designer"
                   /> 
                </div>
            </div>
            <hr className="border-white/20 mt-10 md:hidden" />
        </article>
    );
}