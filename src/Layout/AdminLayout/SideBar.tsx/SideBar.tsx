import { BiLogOut } from "react-icons/bi";
import {
  BsClipboardData,
  BsFillPersonLinesFill,
  BsFillPersonVcardFill,
  BsPieChartFill,
  BsQuestionCircle,
  BsTrophyFill
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const location = useLocation()
  return (
    <div className="w-[320px] bg-green h-full fixed flex flex-col justify-between">
      <div>
        {fieldManagementList.map(({ title, href, icon }) => {
          return (
          <Link to={href}>
            <div className={`pl-5 py-5 flex ${location.pathname.includes(href) ? "bg-vani text-green font-semibold" : "text-vani hover:bg-vani hover:text-green hover:duration-300 hover:font-semibold"}`}>
              <div className="text-2xl mr-3">{icon}</div>
              {title}
            </div>
          </Link>
        )})}
      </div>
      <div>
        <Link to={"/"}>
          <div className="pl-5 text-vani hover:bg-vani hover:text-green hover:duration-300 hover:font-semibold py-5 flex">
            <div className="text-2xl mr-3">
              <AiFillHome />
            </div>
            Homapage
          </div>
        </Link>
        <Link to={"/login"}>
          <div className="pl-5 text-vani hover:bg-vani hover:text-green hover:duration-300 hover:font-semibold py-5 flex">
            <div className="text-2xl mr-3">
              <BiLogOut />
            </div>
            Log out
          </div>
        </Link>
      </div>
    </div>
  );
}

type FieldManagementList = {
  href: string;
  icon: any;
  title: string;
};

const fieldManagementList: FieldManagementList[] = [
  {
    href: "/admin/account-management",
    icon: <BsFillPersonLinesFill />,
    title: "Account management",
  },
  {
    href: "/admin/survey-management",
    icon: <BsClipboardData />,
    title: "Survey management",
  },
  {
    href: "/admin/response-management",
    icon: <BsPieChartFill />,
    title: "Response management",
  },
  {
    href: "/admin/competition-management",
    icon: <BsTrophyFill />,
    title: "Competition management",
  },
  {
    href: "/admin/support-information-management",
    icon: <BsFillPersonVcardFill />,
    title: "Support information management",
  },
  {
    href: "/admin/faqs-management",
    icon: <BsQuestionCircle />,
    title: "FAQs management",
  },
];
