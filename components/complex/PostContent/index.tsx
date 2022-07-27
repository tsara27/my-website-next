import Link from "next/link";
import markdownStyles from "./styles.module.scss";

type Props = {
  content: string;
};

function PostContent({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default PostContent;
