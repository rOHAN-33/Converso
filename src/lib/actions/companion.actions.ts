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