import Image from "next/image";
import { TEMPLATE } from "./TemplateLists";
import Link from "next/link";

const TemplateCard = (template: TEMPLATE) => {
    return (

        <Link href={"/dashboard/content/"+template?.slug}>



        <div className="p-5 shadow-lg rounded-lg border border-blue-600 bg-gray-200 text-white flex flex-col gap-3 cursor-pointer transition-transform duration-300 hover:scale-105">
            <Image src={template.icon} alt="icon" width={50} height={50} />
            <h2 className="font-bold text-xl text-black">{template.name}</h2>
            <p className="text-gray-900 line-clamp-3 text-lg">{template.description}</p>
        </div>
        </Link>
    );
};


export default TemplateCard;
