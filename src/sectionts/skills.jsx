'use client'
import SkillCard from "@/components/skillCard"
import { useState } from "react"
import Option from "./option"
import { skills } from "@/datas"

export default function Skills() {
    const [option, setOption] = useState('coding')
    return(
        <div className="pt-3">
            <p className="text-3xl font-bold font-serif text-amber-100 flex justify-center">Skills</p>
            <Option option={(val) => setOption(val)}/>
            <SkillCard skills={option === "coding" ? skills.filter(data => data.jenis === "coding") : skills.filter(data => data.jenis === "networking")}/>
        </div>
    )
}