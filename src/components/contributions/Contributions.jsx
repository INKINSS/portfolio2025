import { FaCodeCommit } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";

import { GoBookmarkFill } from "react-icons/go";

const Contributions = () => {
  return (
    <div className="mt-5 flex flex-col gap-2 items-center md:items-start">
        <div className="flex items-center gap-2">
            <FaCodeCommit className="fill-yellow-500 size-5" />
            <p className="text-grayLight text-[1.2rem]">+480 commits en 2025</p>
        </div>
        <div className="flex items-center gap-2">
            <figure className="flex items-center gap-2">
                <GoBookmarkFill className="size-5 fill-yellow-500" />
            </figure>
            <p className="text-grayLight text-[1.2rem] leading-4">31 contribuciones</p>
        </div>
        <div className="flex items-end gap-2">
            <IoIosGitCompare className="size-5 fill-yellow-500" />
            <p className="text-grayLight text-[1.2rem] leading-4">15 PRs</p>
        </div>
    </div>
  )
}

export default Contributions