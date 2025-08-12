"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { subjects } from "../../constants"
import { createCompanion } from "@/lib/actions/companion.actions"
import { redirect } from "next/navigation"
// import { subjects } from "../../constants"
const formSchema = z.object({
  name: z.string().min(1,{message:"Companion is required"}),
  subject: z.string().min(1,{message:"Companion is required"}),
  topic: z.string().min(1,{message:"Companion is required"}),
  voice: z.string().min(1,{message:"Companion is required"}),
  style: z.string().min(1,{message:"Companion is required"}),
  duration: z.coerce.number().min(1, { message: 'Duration is required.'}),
})
enum Subject {
  maths = "maths",
  language = "language",
  science = "science",
  history = "history",
  coding = "coding",
  geography = "geography",
  economics = "economics",
  finance = "finance",
  business = "business",
}
const CompanionForm = ({maths, language, science,history,coding,geography,economics,finance,business}:Subject) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subject: '',
      topic: '',
      voice: '',
      style: '',
      duration: 15,
    },
  });

const onSubmit=async (values: z.infer<typeof formSchema>)=>{
  const companion  = await createCompanion(values)

  if(companion){
    redirect(`/companions/${companion.id}`)
  }else {
    console.log('failed to create an companion')
    redirect('/')
  }
}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField 
            control={form.control}
            name="name"
            render={({field})=>(
              <FormItem>
                <FormLabel>Companion Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the Companion name" {...field} className="input"></Input>
                </FormControl>
                <FormDescription>
                  This is your display name
                </FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}>
            
          </FormField>
          <FormField 
            control={form.control}
            name="subject"
            render={({field})=>(
              <FormItem>
                <FormLabel>Select Subject</FormLabel>
                <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}>
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the subject" />
  </SelectTrigger>
   <SelectContent>
      {Object.values(Subject).map((subjectValue) => (
        <SelectItem
          value={subjectValue}
          key={subjectValue}
          className="capitalize"
        >
          {subjectValue}
        </SelectItem>
      ))}
    </SelectContent>
</Select>
                <FormDescription>
                  This is your display name
                </FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}>
            
          </FormField>
          <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should the companion help with?</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ex. Derivates & Integrals"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

          <FormField 
            control={form.control}
            name="voice"
            render={({field})=>(
              <FormItem>
                <FormLabel>Voice</FormLabel>
                <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}>
  <SelectTrigger className="input ">
    <SelectValue placeholder="Select the Voice" />
  </SelectTrigger>
   <SelectContent>
      <SelectItem
      value="male">
        Male
      </SelectItem>
      <SelectItem
      value="female">
        Female
      </SelectItem>
    </SelectContent>
</Select>
                <FormDescription>
                  This is your display name
                </FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}>
            
          </FormField>
          
          <FormField 
            control={form.control}
            name="style"
            render={({field})=>(
              <FormItem>
                <FormLabel>Style</FormLabel>
                <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}>
  <SelectTrigger className="input ">
    <SelectValue placeholder="Select the Style" />
  </SelectTrigger>
   <SelectContent>
      <SelectItem
      value="formal">
        Formal
      </SelectItem>
      <SelectItem
      value="casual">
        Casual
      </SelectItem>
    </SelectContent>
</Select>
                <FormDescription>
                  This is your display name
                </FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}>
            
          </FormField>
          
          <FormField 
            control={form.control}
            name="duration"
            render={({field})=>(
              <FormItem>
                <FormLabel>Estimated session duration in minutes</FormLabel>
                <FormControl>
                  <Input placeholder="15" {...field} className="input"></Input>
                </FormControl>
                <FormDescription>
                  This is your display name
                </FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}>
            
          </FormField>
          <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
      </form>
    </Form>
  )
}

export default CompanionForm