'use server'
// import { da } from "zod/locales";
import { createSuperbaseClient } from "../superbase";
import { auth } from "@clerk/nextjs/server";
export const createCompanion = async (formData: CreateCompanion) =>{
    const{userId: author} = await auth();
    const superbase = createSuperbaseClient()

    const {data, error} = await superbase
    .from( "companions") 
    .insert({...formData, author})
    .select()

    if(error || !data) throw new Error("Failed to create companion");

    return data[0]
}

export const getAllCompanions =  async({limit = 10, page = 1, subject, topic}:getAllCompanions)=>{
        const superbase = createSuperbaseClient()

        let query = superbase.from('companions').select()

          if(subject && topic) {
        query = query.ilike('subject', `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if(subject) {
        query = query.ilike('subject', `%${subject}%`)
    } else if(topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }
     query = query.range((page - 1) * limit, page * limit - 1);

     const { data: companions, error } = await query;

     if(error) throw new Error(error.message);

     return companions;
}