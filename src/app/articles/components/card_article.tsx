interface CardArticleProps {
  img: string;
  title: string;
  desc: string;
  author: string;
}

export default function CardArticle({ img, title, desc, author }: CardArticleProps) {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-blue-100 border border-blue-300 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-blue-200"
    >
      <img
        className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={img}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{desc}</p>
        <small className="text-blue-700 font-semibold">By: {author}</small>
      </div>
    </a>
  );
}
