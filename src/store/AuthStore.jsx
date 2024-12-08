import { useState } from "react";
import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
export const useAuthStore=create((set,get)=>({
    // INICIO DE SESIÓN
    signInWithEmail: async (p)=>{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.correo,
            password: p.pass,
            })
            if(error){
                return null;
            }
            return data.user;
    },
    // CIERRE DE SESIÓN
    signOut: async ()=> {
        const { error } = await supabase.auth.signOut()
        if(error)
        throw new Error("A ocurrido un error durante el cierre de sesión"
        +error)
    }
}))