import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default function InfoPost({
    category,
    date,
    title,
    sortDescription,
    authorAvatar,
    authorName,
    authorJob
}) {
    return (
        <>
        <PostMetaTitle 
            category={category} 
            date={date}
            title={title} 
        />
            <p className="text-white/60 text-base mt-4 w-8/12">{sortDescription}</p>
            <PostAuthor 
                authorAvatar={authorAvatar}
                authorName={authorName}
                authorJob={authorJob}
            />
        </>
    );
}