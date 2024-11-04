import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { fadeIn } from "../../utils/motion";

const MobileCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 rounded-2xl sm:w-[370px] w-full sm:flex space-x-4"
      >
        <div className="h-full w-[100%]  ">
          <div className="relative w-[140px] mx-auto    ">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="   ">
          <div className="mt-2  flex-1">
            <h3 className="text-white font-bold text-[22px]">{name}</h3>
            <p className="mt-2 text-secondary text-[13px] ">{description}</p>
          </div>
          <div className=" mt-4 flex flex-wrap gap-2 ">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[10px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
        {source_code_link != null && (
          <div className="absolute inset-0 right-3  flex justify-end m-3 card-img_hover">
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
      </Tilt>
    </motion.div>
  );
};

const MobileCardMobile = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div>
      <div className="bg-tertiary p-4 rounded-2xl sm:w-[370px] w-full sm:flex space-x-4">
        <div className="h-full w-[100%] relative ">
          <div className=" w-[140px] mx-auto    ">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          {source_code_link != null && (
            <div className="absolute inset-0 right-3  flex justify-end m-3 card-img_hover">
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
        <div className="   ">
          <div className="mt-2  flex-1">
            <h3 className="text-white font-bold text-[22px]">{name}</h3>
            <p className="mt-2 text-secondary text-[13px] ">{description}</p>
          </div>
          <div className=" mt-4 flex flex-wrap gap-2 ">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[10px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export { MobileCardMobile };
export default MobileCard;
