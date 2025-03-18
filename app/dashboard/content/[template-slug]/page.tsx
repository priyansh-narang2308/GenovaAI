"use client"

import { use, useState } from "react"
import Templates from "@/app/(data)/Templates"
import { TEMPLATE } from "../../_components/TemplateLists"
import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSection"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { chatSession } from "@/utils/AIModel"
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema"
import { useUser } from "@clerk/nextjs"
import moment from "moment"

interface PROPS {
  params: Promise<{ "template-slug": string }>
}

const CreateNewContent = (props: PROPS) => {
  const params = use(props.params)


  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>("")
  // to identlyf the users from clerk
  const { user } = useUser()

  //to find selected template
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((template) => template.slug === params["template-slug"])

  const GenerateAIContent = async (formData: any) => {
    setLoading(true)
    // todo to integrate the ai logic here
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    // to add it to the ai logic we do this
    const FinalAiPrompt = JSON.stringify(formData) + "," + SelectedPrompt

    const result = await chatSession.sendMessage(FinalAiPrompt)
    setAiOutput(result.response.text())
    await saveInDb(JSON.stringify(formData), selectedTemplate?.slug, result.response.text())
    setLoading(false)
  }

  const saveInDb = async (formData: any, slug: any, aiOutput: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiOutput,
      createdBy: user?.primaryEmailAddress?.emailAddress || "",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    })

    console.log(result)
  }

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button className="cursor-pointer"> <ArrowLeft /> Back  </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5 py-10">
        {/* Form section */} 
        <FormSection loading={loading} selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} />

        {/* Output section */} 
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
