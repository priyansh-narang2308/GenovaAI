"use client"

import Image from "next/image"
import { TEMPLATE } from "../../_components/TemplateLists"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { LoaderIcon } from "react-hot-toast"

// this checks that the template from the page is passed here thru prop
interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput:any;
    loading:boolean
}


const FormSection = ({ selectedTemplate, userFormInput,loading }: PROPS) => {

    const [formData, setFormData] = useState<any>("")
    const onSubmit = (e: any) => {
        e.preventDefault()

        userFormInput(formData)
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="p-5 shadow-xl border rounded-lg">
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
            <h2 className="font-bold text-3xl mb-2 text-primary"> {selectedTemplate?.name}  </h2>
            <p className="text-gray-500 text-lg">{selectedTemplate?.description}  </p>

            <form className="mt-6" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className="my-2 flex flex-col gap-2 mb-7" key={index}>
                        <label className="font-bold text-xl">
                            {item.label}
                        </label>
                        {item.field == "input" ? <Input name={item.name} required={item?.required} onChange={handleInputChange} /> : item.field == "textarea" ? <Textarea name={item.name} required={item?.required} onChange={handleInputChange} /> : null}
                    </div>
                ))}
                <Button type="submit" className="w-full py-6 cursor-pointer" disabled={loading}>

                    {loading&&<LoaderIcon className="animate-spin"/>}
                    Generate Content
                    
        
                    </Button>
            </form>

        </div>
    )
}

export default FormSection