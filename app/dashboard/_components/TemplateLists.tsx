import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'
import { useEffect, useState } from 'react'

export interface TEMPLATE {
  name: string,
  description: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: FORM[],
}

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean
}


const TemplateLists = ({ userSearchInput }: any) => {

  const [templatesList, setTemplatesList] = useState(Templates)

  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter(template =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      )
      setTemplatesList(filterData)
    } else {
      setTemplatesList(Templates)
    }

  }, [userSearchInput])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 bg-gray-500'>
      {templatesList.map((template: TEMPLATE, index: number) => (
        <div key={index}>
          <TemplateCard {...template} />
        </div>
      ))}
    </div>
  )
}

export default TemplateLists