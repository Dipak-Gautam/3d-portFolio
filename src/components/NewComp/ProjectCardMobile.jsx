import { github } from "../../assets";

const ProjectCardMobile = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  navLink,
}) => {
  return (
    <div>
      <a href={`${navLink}`} target="_blank">
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] sm:h-[500px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full  rounded-2xl"
            />
            {source_code_link != null && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[13px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};
export { ProjectCardMobile };
