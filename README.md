<!-- how all integrations work -->
as we firts setup the clerk authentication and the clerk billing and via clerk billing setup , we than second setup the superbase for the integration of the clerk and clerk billing into the superbase


how the steps work

1 - in the dashboard of the clerk there is an option in the config section (Integration ) to add a new integration

2 - click on the provider like clerk and all and than filll the info and a key is generated and than naviagte to the superpage via clerk

3 - in super base at AUTHENTICATION there is an option as SIGNIn/PROVIDERS add provider and paste the key that is genrated via clerk

4 - after the complete setup we can connect the whole superbase setup inside the project using the connect feature of the superbase

5 - creating a file as superbase.ts and connecting the env.local with the env extracted from the superbase 

<!-- example code -->
import { auth } from "@clerk/nextjs/server"
import { createClient } from "@supabase/supabase-js"

export const createSuperbaseClient = ()=>{
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{
            async accessToken(){
                return ((await auth()).getToken())
            }
        }
    )
}
<!-- an example code for the setup for the superbase into the superbase.ts -->