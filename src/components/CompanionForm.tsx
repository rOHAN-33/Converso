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
import { subjects } from "../../constants"
// import { subjects } from "../../constants"
const formSchema = z.object({
  name: z.string().min(1,{message:"Companion is required"}),
  subject: z.string().min(1,{message:"Companion is required"}),
  topic: z.string().min(1,{message:"Companion is required"}),
  voice: z.string().min(1,{message:"Companion is required"}),
  style: z.string().min(1,{message:"Companion is required"}),
  duration: z.coerce.number().min(1, { message: 'Duration is required.'}),
})
const CompanionForm = () => {
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

  function onSubmit(values: z.infer<typeof formSchema>)
{

console.log(values)
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
                <FormLabel>Companion Name</FormLabel>
                <Select onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}>
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the Subject" />
  </SelectTrigger>
  <SelectContent>
    {subjects.map((subject)=>(
        <SelectItem key={subject} value={subject}></SelectItem>
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
          <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CompanionForm