import Link from "next/link";
import { socialData } from "@/app/assets/socialMediaList"; // Sesuaikan path-nya
import SocialMediaList from "@/app/components/common/SocialMediaList";

export default function RecommendedArticles({ relatedArticles }: any) {
  return (
    <div className="w-full bg-linear-to-b from-gray-500 to-black p-8 md:p-12 font-sans">
      <div className="mb-10">
        <span className="text-sm font-medium text-gray-300 block mb-4">
          Share this:
        </span>

        <ul className="flex items-center gap-4">
          {socialData.map((item) => (
            <SocialMediaList key={item.id} href={item.href} Icon={item.icon} />
          ))}
        </ul>
      </div>

      {/* 2. Recommended Section */}
      <div>
        <h3 className="text-lg font-semibold mb-6 text-gray-200">Related</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {relatedArticles.map((article: any) => (
            <Link
              href={`/article/read/${article.id}`}
              key={article.id}
              className="flex flex-col gap-2 group cursor-pointer"
            >
              <h4 className="text-md text-white font-bold leading-snug group-hover:underline transition-colors">
                {article.title}
              </h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p>{article.date}</p>
                <p>In Article "{article.category}"</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
